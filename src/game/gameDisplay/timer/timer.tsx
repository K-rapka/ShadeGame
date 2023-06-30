import { ITimer } from "../../types/timer.interface"

export function Timer({score}:ITimer):JSX.Element{
    return <div>Score: {score}</div>
}