import { useState, useEffect } from "react"
import axios from 'axios';

const useServerData = ({url, isButtonClick}) => {
    const [contactData, setcontactData] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const [isLoaded, setisLoaded] = useState(false)
    const getData = () => {

    }

    useEffect(() =>{ 
      if(!isButtonClick) return
        axios.get(url).then((res) => {
            setcontactData(res.data);
            setisLoading(false);
            setisLoaded(true);
          }
        )
      }, [url,isButtonClick])

    return [{contactData, isLoading, isLoaded, setcontactData, setisLoading}, getData]
}

export default useServerData