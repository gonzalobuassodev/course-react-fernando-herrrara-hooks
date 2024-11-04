import { ChangeEvent, useState } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'gonzalobuasso',
        email: 'gonzalobuasso@gmail.com',
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

        const {name, value} = e.target
        setFormState({
            ...formState,
            [name]: value,
        })
    }

    return (
        <div className="p-5">
            <h1>Formulario Form</h1>
            <hr />

            <div className="flex flex-col gap-2">
                <input
                    type="text"
                    className="p-2 bg-slate-200 rounded-md"
                    placeholder="Ingrese su nombre"
                    name="username"
                    value={formState.username}
                    onChange={(e) => handleChange(e)}
                />

                <input
                    type="text"
                    className="p-2 bg-slate-200 rounded-md"
                    placeholder="Ingrese su email"
                    name="email"
                    value={formState.email}
                    onChange={(e) => handleChange(e)}
                />
            </div>

            {formState.username === 'gonzalobuasso' && <Message />}
        </div>
    )
}
