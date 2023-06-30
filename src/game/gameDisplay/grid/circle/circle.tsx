import { ScreenContext } from "../../../providers/screen-provider"
import { ICircle } from "../../../types/circle.interface" 
import {useContext} from 'react'
export function Circle({imposter,step,setStep,colors}:ICircle):JSX.Element{
    const {setScreen} = useContext(ScreenContext)
    //Click func
    const handleClick = ()=>{
        //Restart game
        if( imposter === 0){
            setScreen(0)
        }
        //Continue game
        else{
            setStep(step+1)
        }
    }
    //Add imposter circle
    if(imposter === 1){
        return(<div className="circle" style={{backgroundColor:colors[0]}} onClick={handleClick}></div>)
    }
    //Simple circle
    return(<div className="circle" style={{backgroundColor:colors[1]}}  onClick={handleClick}></div>)
}