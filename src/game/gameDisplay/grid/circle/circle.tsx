import { ScreenContext } from "../../../providers/screen-provider"
import { ICircle } from "../../../types/circle.interface" 
import {useContext} from 'react'

export function Circle({imposter,step,setStep}:ICircle):JSX.Element{
    const {setScreen} = useContext(ScreenContext)
    //Click func
    const handleClick = ()=>{
        //Restart game
        if( imposter == 0){
            setScreen(0)
        }
        //Continue game
        else{
            setStep(step+1)
        }
    }
    //Add imposter circle
    if(imposter == 1){
        return(<div className="circle imposter" onClick={handleClick}></div>)
    }
    //Simple circle
    return(<div className="circle"  onClick={handleClick}></div>)
}