import React from 'react'

const FormGrp = ({ idName, fieldname, type, value, func }) => {
    return (
        <div className="formGrp">
            <label htmlFor={idName}>{fieldname}</label>
            <input type={type} name={idName} id={idName} placeholder={`Enter ${fieldname}`} value={value} onChange={(e) => func(e.target.value)} />
        </div>
    )
}

export default FormGrp