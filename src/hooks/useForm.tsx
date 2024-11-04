import { ChangeEvent, useState } from 'react'

interface Values {
    username: string;
    email: string;
    password: string;
}

const initialValues: Values = {
    username: '',
    email: '',
    password: ''
}

export const useForm = () => {
    const [formState, setFormState] = useState<Values>(initialValues)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormState({
            ...formState,
            [name]: value,
        })
    }

    const onResetForm = () => {
        setFormState(initialValues)
    }

    return {

        ...formState,
        formState,
        handleChange,
        onResetForm

    }
}
