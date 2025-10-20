import React,{useState,useEffect , createContext,useContext } from 'react'

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {                                                            

    const [theme, setTheme] = useState('light');
    const [count, setCount] = useState(0);

      useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) setTheme(storedTheme);
  }, []);
    
  function increment() {
    setCount(count + 1);
  }
    const toggleTheme = () => {
        const next  = theme  === 'light' ? 'dark' : 'light';
        setTheme(next);
        localStorage.setItem("theme", next)
        console.log(`Theme changed to ${next}`);
        
    }; 
    

  return (
    <>
       <ThemeContext.Provider    value={ {theme, toggleTheme, count , increment }} > 
<div className="theme">{children}</div>

       </ThemeContext.Provider>
    </>
  )
}



export function useTheme() {
  return useContext(ThemeContext);
}