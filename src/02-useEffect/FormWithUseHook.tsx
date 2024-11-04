import { useForm } from '../hooks/useForm'


export const FormWithUseHook = () => {
  
    const {handleChange, formState, onResetForm }= useForm();

    return (
        <div className="p-5">
            <h1>Form with custom hook</h1>
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
                    type="email"
                    className="p-2 bg-slate-200 rounded-md"
                    placeholder="Ingrese su email"
                    name="email"
                    value={formState.email}
                    onChange={(e) => handleChange(e)}
                />

                <input
                    type="password"
                    className="p-2 bg-slate-200 rounded-md"
                    placeholder="Ingrese el password"
                    name="password"
                    value={formState.password}
                    onChange={(e) => handleChange(e)}
                />
            </div>

            <button onClick={onResetForm} className='p-3 bg-blue-500'>Reset</button>
        </div>
    )
}
