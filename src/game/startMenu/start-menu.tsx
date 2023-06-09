import { IScreen } from "../types/screen.interface";


export function StartMenu({setScreen}:IScreen):JSX.Element{
    function handleClick(){
        setScreen(1)
    }
    return <div className="startButton" onClick={handleClick}>Start</div>

}