import { Circle } from "./circle/circle";
import { useState,useEffect } from "react";
import { createGrid } from "../../services/services";
import { IGrid } from "../../types/grid.interface";

export function Grid({score,setScore}:IGrid):JSX.Element{
    const [level, setLevel] = useState(2)
    const [step, setStep] = useState(0)
    //Update level
    if(step > 4){
        setStep(0)
        setLevel(level + 1)
    }
    
    //Create grid
    const grid = createGrid(level)
    const testGrid:JSX.Element[]= grid.map((item,key)=>{
        const row = item.map((item,key) =>{
            return <Circle key={key} imposter = {item}step={step}  setStep={setStep} setLevel={setLevel}/>
        })
        return <div className="row" key={key}>{row}</div>
    }) 

    //Update score
    useEffect(()=>{setScore(score+1)},[step])

    return(
        <div className="grid">{testGrid}</div>
    )
}