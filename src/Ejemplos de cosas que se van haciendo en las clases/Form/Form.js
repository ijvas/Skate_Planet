import React, { useState } from 'react'

export const Form = () => {

    const [values, setValues] = useState( {
        nombre: '',
        apellido: '',
        email: ''
    })

    const handleInputChange = (e) => {

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
        
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(values)
    }


    return(
        <div className="container my-5">
            <form onSubmit={handleSubmit}>
                <h2>Formulario</h2>
                <input
                    className="form-control my-2"
                    type="text"
                    placeholder="Nombre"
                    name="nombre"
                    value={values.nombre}
                    onChange={handleInputChange}
                ></input>
               <input
                    className="form-control my-2"
                    type="text"
                    placeholder="Apellido"
                    name="apellido"
                    value={values.apellido}
                    onChange={handleInputChange}
                ></input>
                <input
                    className="form-control my-2"
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={values.email}
                    onChange={handleInputChange}
                ></input>
                <button 
                    className="btn btn-primary"
                    type="submit"
                >Enviar</button>
            </form>
        </div>
    )
}