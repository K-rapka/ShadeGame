interface IImposter{
    imposter:number
}

export function Circle({imposter}:IImposter):JSX.Element{
    
    if(imposter == 1){
        return(<div className="circle imposter"></div>)
    }
    return(<div className="circle"></div>)
}