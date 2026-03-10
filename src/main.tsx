import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster, toast } from 'sonner'

// import { HooksApp } from './HooksApp'
import './index.css'
// import { TrafficLight } from './01-useState/TrafficLight'
import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook'
import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect'
import { PokemonPage } from './03-examples/PokemonPage'
import { FocusScreen } from './04-useRef/FocusScreen'
import { TasksApp } from './05-useReducer/TaskApp'
import { ScrambleWords } from './05-useReducer/ScrambleWords'
import { MemoHook } from './06-memos/MemoHook'
import { MemoCounter } from './06-memos/MemoCounter'
import { InstagromApp } from './07-useOptimistic/InstagromAPP'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster/>

    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    {/* <ScrambleWords /> */}
    {/* <MemoHook /> */}
     <InstagromApp/>

  </StrictMode >,
)
