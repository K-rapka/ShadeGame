import { Circle } from "./circle/circle";
import { useState,useEffect, useContext } from "react";
import { createGrid, getColor } from "../../services/services";
import { IGrid } from "../../types/grid.interface";
import { ScreenContext } from "../../providers/screen-provider";

export function Grid({score,setScore}:IGrid):JSX.Element{
    const [level, setLevel] = useState(2)
    const [step, setStep] = useState(0)
    //get colors

    const colors:Array<string> = getColor()

    const {globalScore, setGlobalScore} = useContext(ScreenContext)

    //Update level
    if(step > 4){
        setStep(0)
        setLevel(level + 1)
    }
    
    //Create grid
    const grid = createGrid(level)
    const testGrid:JSX.Element[]= grid.map((item,key)=>{
        const row = item.map((item,key) =>{
            return <Circle key={key} imposter = {item}step={step} setStep={setStep} colors={colors}/>
        })
        return <div className="row" key={key}>{row}</div>
    }) 

    //Update score
    useEffect(()=>{setScore(score+1)},[step])
    if(score > globalScore){
        setGlobalScore(score)
    }
    return(
        <div className="grid">{testGrid}</div>
    )
}