export interface IScreenContextValue {
    screen: number;
    setScreen: React.Dispatch<React.SetStateAction<number>>;
    globalScore: number;
    setGlobalScore: React.Dispatch<React.SetStateAction<number>>;
  }

export interface IChildren{
    children:JSX.Element
}