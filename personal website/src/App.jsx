import WebPage from './pages/WebPage'
import WebProvider from './context/WebContext'
import { myFunction } from './utils';

const App = () => {
    window.onscroll = function () { myFunction() };
  
  return (
    <div>
    <WebProvider>
        <WebPage/>
    </WebProvider>
     
    </div>
  )
}

export default App
