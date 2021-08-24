import React, {useState, useEffect} from "react";
import useServerData from "./hooks/useServerData"
import Switcher from "./component/switcher/swither";
import TableBody from "./component/tableBody/tableBody"
import Paginator from "./component/paginator/paginator";
// https://www.youtube.com/watch?v=giBg24MMsrk
// 6:02 - разбиваем данные на порции(по 50)
//token = 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
function App() {  
  //const URL = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
  
  const [isButtonClick, setButtonClick] = useState(false)
  const [directionSort, setdirectionSort] = useState(true)
  const [rowItem, setrowItem] = useState('')
  const [url, setUrl] = useState('')
  const [totalCountRow, settotalCountRow] = useState(0)
  const [totalCountPage, settotalCountPage] = useState(0)
  const [currentPageNumber, setcurrentPageNumber] = useState(1)
  const [rowIsClick, setrowIsClick] = useState(false)
  const [{contactData, isLoading, setcontactData, isLoaded}, ] = useServerData({url, isButtonClick});
  const limitCountPage = 5;
  const [buttonDisabledPrev, setbuttonDisabledPrev] = useState('')
  const [buttonDisabledNext, setbuttonDisabledNext] = useState('')
  const [currentPageActive, setcurrentPageActive] = useState('')


  const buttonHandler = (url) => {  
    setUrl(url)
    setButtonClick(true)
  }

  console.log(currentPageNumber)
  const lastBlockRow = currentPageNumber * limitCountPage
  const firtsBlockRow = lastBlockRow - limitCountPage + 1
  const currentBlockRows = contactData.slice(firtsBlockRow,lastBlockRow)

  const currentPage = (pg) =>{
    setcurrentPageNumber(pg)
    setbuttonDisabledPrev('')
    setbuttonDisabledNext('')
    setcurrentPageActive('active')
    console.log(currentPageNumber)
  }

  useEffect(()=>{
    if(!isLoaded) return
      settotalCountRow(contactData.length)
      const getTotalCountPage = totalCountRow/limitCountPage;
      settotalCountPage(getTotalCountPage)
      
      currentPage(currentPageNumber)
  },[isLoaded, settotalCountRow, contactData.length, totalCountRow]) 

  let pages = [];
  for (let i=1; i<=totalCountPage; i++) {
    pages.push(i) 
  }

  const sortData = (field) => {
    const copyData = contactData.concat();

    let sortData;
    if(directionSort)
    sortData = copyData.sort(
      (a,b) => {return a[field] > b[field] ? 1 : -1}
    );
    else
    sortData = copyData.reverse(
      (a,b) => {return a[field] > b[field] ? 1 : -1}
    );

    setcontactData(sortData);
    setdirectionSort(!directionSort);
  }

  const detailRow = (row) => {
    setrowItem(row)
    setrowIsClick(true)
  }

  

  const onNextClick = () => {
    if(currentPageNumber > totalCountPage - 1) {
      setbuttonDisabledNext('disabled')
      return;
    }
    setbuttonDisabledPrev('')
    setcurrentPageNumber(currentPageNumber + 1)
  }

  const onPrevious = () => {
    if(currentPageNumber === 1) {
      setbuttonDisabledPrev('disabled')
      return;
    }
    setbuttonDisabledNext('')
    setcurrentPageNumber(currentPageNumber - 1)
  }
  

    return (
      <div className="container">
    {!isButtonClick
        ?
          <Switcher buttonHandler={buttonHandler}/>
        :
        <TableBody
        contactData={currentBlockRows}
        sortData={sortData}
        directionSort={directionSort}
        rowItem={rowItem}
        detailRow={detailRow}
        isLoading={isLoading}  
        rowIsClick={rowIsClick}      
        />
    }
    {
      isButtonClick && (totalCountRow > limitCountPage) &&
      <Paginator 
      pages={pages} 
      currentPage={currentPage} 
      onNextClick={onNextClick}
      onPrevious={onPrevious}
      buttonDisabledPrev={buttonDisabledPrev}
      buttonDisabledNext={buttonDisabledNext}
      currentPageActive={currentPageActive}
      currentPageNumber={currentPageNumber}
    />
    }
    
      </div>
    );
}

export default App;
