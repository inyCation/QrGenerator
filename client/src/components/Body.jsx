import React, { useState } from 'react'
import QRCode from 'qrcode'
import "./style.scss"


const Body = () => {

    const [url, setUrl] = useState("")
    const [QR, setQR] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setQR(await QRCode.toDataURL(url))
            setUrl("")
        } catch (err) {
            console.error(err)
        }
    }


    return (
        <div className='form'>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="" id="" placeholder='Enter URL' value={url} onChange={(e) => setUrl(e.target.value)} />
                <button type="submit" >Generate Qr</button>
                {
                    QR && (
                        <div className='qrContainer'>
                            <img src={QR} alt="QR" />
                            <a href={QR} download={"MyQr"} className='downloadBtn'>Download Qr</a>
                        </div>
                        
                    )
                }
                
            </form>

        </div>
    )
}

export default Body