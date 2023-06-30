import { ScreenContext } from "../providers/screen-provider";
import { IScreen } from "../types/screen.interface";
import {useContext} from 'react'
export function StartMenu({}:IScreen):JSX.Element{

    const {setScreen,globalScore} = useContext(ScreenContext)
    
    function handleClick(){
        setScreen(1)
    }
    return <>
    <div className="startButton" onClick={handleClick}>Start</div>
    Score:{globalScore}
    </>

}