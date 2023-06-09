import { IScreen } from "../types/screen.interface"
import { Grid } from "./grid/grid"
import { Timer } from "./timer/timer"
import {useState} from 'react'
export function GameDisplay({setScreen}:IScreen):JSX.Element {
    const [score, setScore] = useState(-1)
    
    return (
        <>
            <Timer score={score}/>
            <Grid score={score} setScore={setScore} setScreen={setScreen}></Grid>
        </>
    )
}