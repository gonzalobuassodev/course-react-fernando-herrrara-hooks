import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
// import { Padre } from './07-tarea-memo/Padre'
// import { CallbackHook } from './06-memos/CallbackHook'
// import { MemoHook } from './06-memos/MemoHook'
// import { HookApp } from './HookApp'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithUseHook } from './02-useEffect/FormWithUseHook'
// import { MultipleCustomHook } from './03-examples/MultipleCustomHook'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Memorize } from './06-memos/Memorize'
// import './08-useReducer/intro-reducer'
// import { TodoApp } from './08-useReducer/TodoApp'
import { MainApp } from './09-useContext/MainApp'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        {/* <HookApp />
    <CounterApp />
    <CounterWithCustomHook />
    <SimpleForm /> */}

        {/* <FormWithUseHook /> */}
        {/* <MultipleCustomHook /> */}
        {/* <FocusScreen /> */}
        {/* <Memorize /> */}
        {/* <MemoHook /> */}
        {/* <CallbackHook /> */}
        {/* <Padre /> */}
        {/* <TodoApp /> */}
        <BrowserRouter>
            <MainApp />
        </BrowserRouter>
    </StrictMode>
)
