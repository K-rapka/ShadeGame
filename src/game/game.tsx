import { GameDisplay } from "./gameDisplay/game-display"
import { StartMenu } from "./startMenu/start-menu"
import {useState} from 'react'

export function Game():JSX.Element | null{
    const [screen, setScreen] = useState(0)

    if(screen == 0){
        return <StartMenu setScreen={setScreen}/>
    }

    else if(screen == 1){
        return <GameDisplay setScreen={setScreen}/>
    }
    else if(screen == 2){
        return <div></div>
    }
    return null
}