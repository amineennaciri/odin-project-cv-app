import React from 'react'

function DataDisplayed({phone, email, fullName, setPhone, setEmail, setFullName}){
    const emailInput = email;
    const phoneInput = phone;
    const fullNameInput = fullName;
    setFullName('');
    setEmail('');
    setPhone('');
    return (
        <>
            <h1>Data Displayed:{' '}{emailInput}{' '}{phoneInput}{' '}{fullNameInput}</h1>
        </>
    )
}

export default DataDisplayed