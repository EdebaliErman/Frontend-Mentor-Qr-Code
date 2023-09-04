import React from 'react'
import QrCard from '../QrCard/QrCard'
import CardText from '../CardText/CardText'
import { data } from '../../Data/data'

function Card() {

    return (
        <div className='Card'>
            <QrCard qr={data.qr}/>
            <CardText text={data.text} />
        </div>
    )
}

export default Card
