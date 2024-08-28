import React from 'react'
import WebPage from './pages/WebPage'
import WebProvider from './context/WebContext'

const App = () => {
  return (
    <div>
    <WebProvider>
        <WebPage/>
    </WebProvider>
     
    </div>
  )
}

export default App
