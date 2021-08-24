import React from 'react'

const Switcher = ({buttonHandler}) => {
    const smallUrl = 'http://www.filltext.com/?rows=15&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
    const bigUrl = 'http://www.filltext.com/?rows=100&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
    return(
        <div style={{display:'flex',justifyContent:'center', margin:'25px'}}>
            <button type='button' className='btn btn-danger'
            style={{marginRight:'15px'}} onClick={()=>{buttonHandler(smallUrl)}}>15 row</button>
            <button type='button' className='btn btn-warning'onClick={()=>{buttonHandler(bigUrl)}}>100 row</button>
        </div>
    )
}

export default Switcher