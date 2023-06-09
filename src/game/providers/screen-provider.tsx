import { createContext, useState } from "react";
import { IChildren, IScreenContextValue } from "../types/providers.interface";

export const ScreenContext = createContext<IScreenContextValue>({} as IScreenContextValue);


const ScreenProvider  = ({children}:IChildren)=>{
    const [screen, setScreen] = useState(0)

    return <ScreenContext.Provider value={{screen, setScreen}}>{children}</ScreenContext.Provider>
}
export default ScreenProvider