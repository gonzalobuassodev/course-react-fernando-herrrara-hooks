import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MemoHook } from './06-memos/MemoHook'
// import { HookApp } from './HookApp'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithUseHook } from './02-useEffect/FormWithUseHook'
// import { MultipleCustomHook } from './03-examples/MultipleCustomHook'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Memorize } from './06-memos/Memorize'

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
        <MemoHook />
    </StrictMode>
)
