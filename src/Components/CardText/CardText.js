import React from 'react'

function CardText({text}) {
   
    return (
        <div className='cardText'>
            <h1>{text.headText}</h1>
            <h3>{text.pragraph}</h3>
        </div>
    )
}

export default CardText
