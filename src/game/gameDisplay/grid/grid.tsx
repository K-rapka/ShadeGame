import { Circle } from "./circle/circle";
import { useState } from "react";
import { createGrid } from "../../services/services";

export function Grid(){
    const [level,setLevel] = useState(3)

    let grid:number[][] = createGrid(level)
    const testGrid:JSX.Element[]= grid.map((item,key)=>{
        const row = item.map((item,key) =>{
            return <Circle key={key} imposter = {item}/>
        })
        return <div className="row" key={key}>{row}</div>
    })

    return(
        <div className="grid">{testGrid}</div>
    )
}