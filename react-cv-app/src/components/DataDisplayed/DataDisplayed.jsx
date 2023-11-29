import React from 'react'

function DataDisplayed({dataset}){
    return (
        <>
            <h1>Data Displayed below:</h1>
            {dataset.map((el,index)=>(
                <h2 key={index}>{el}</h2>
            ))}
        </>
    )
}

export default DataDisplayed