import ReactDOM from 'react-dom/client'
import { Game } from './game/game'
import ScreenProvider from './game/providers/screen-provider'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ScreenProvider>
      <Game />
  </ScreenProvider>
)
