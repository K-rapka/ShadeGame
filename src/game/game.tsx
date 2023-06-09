import { GameDisplay } from "./gameDisplay/game-display"
import { ScreenContext } from "./providers/screen-provider"
import { StartMenu } from "./startMenu/start-menu"
import {useState,useContext} from 'react'

export function Game():JSX.Element | null{
    const {screen} = useContext(ScreenContext)

    

    if(screen == 0){
        return <StartMenu/>
    }

    else if(screen == 1){
        return <GameDisplay/>
    }
    else if(screen == 2){
        return <div></div>
    }
    return null
}