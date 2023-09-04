import React, { useEffect, useState } from 'react'
import QRCode from 'react-qr-code'
import { data } from '../../Data/data'

function QrCard({ qr }) {
    const [qrvalue, setValue] = useState('') 
    useEffect(() => {
        data.qr.value.push(qrvalue)
    }, [qrvalue])
    return (
        <div className='qrCard'>
            <span className='group qrcode '>
               {
                 <QRCode
                 size={qr.size}
                 value={qr.value.toString()}
                 fgColor={qr.fgColor}
                 bgColor={qr.bgColor}
                 style={qr.style}
             />
               }
                <span className='group-hover:scale-110 qrinput'>
                    <input type='text' onChange={e => setValue(e.target.value)} />
                </span>
            </span>
        </div>
    )
}

export default QrCard
