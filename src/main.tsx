import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { HookApp } from './HookApp'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithUseHook } from './02-useEffect/FormWithUseHook'
import { MultipleCustomHook } from './03-examples/MultipleCustomHook'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HookApp />
    <CounterApp />
    <CounterWithCustomHook />
    <SimpleForm /> */}

    {/* <FormWithUseHook /> */}

    <MultipleCustomHook />
  </StrictMode>,
)
