import React from 'react'

const Themetoggle = () => {
  const[theme , setTheme] = React.useState("light");
  const toggleTheme =() => {
   setTheme((theme) => {
     if (theme==='light')
     { return 'dark'}
     else
     { return 'light'}
   })
  }
  return (
    <>
    <h1 style={{ backgroundColor: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>{theme} Theme</h1>
    <button onClick={toggleTheme}>Change Theme</button>
    </>
  )
}

export default Themetoggle