import { createContext, useEffect, useState } from "react";
import './WebContext.css';

export const WebContext = createContext();

const WebProvider = ({children}) => {

const [loading, setLoading] = useState(true);

useEffect(()=> {initialize();}, []);
    
      const initialize = async () => {
        setLoading(false);
      };

const contextData = {};

  return (
         <WebContext.Provider value={contextData}>
    {loading ? (     
        <div className="loading-page">
        <div className="loader-loading-page"></div>
        <div>this can be a component or wellcome text</div>
        </div>
    ) : (children) }
         </WebContext.Provider>


  )
}

export default WebProvider;
