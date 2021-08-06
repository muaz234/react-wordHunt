import { TextField, ThemeProvider, createTheme, MenuItem } from '@material-ui/core';
import React from 'react'
import  './Header.css';
import categories from '../../data/category'
const Header = ({category, setCategory, word, setWord}) => {
    const darkTheme = createTheme({
        palette: {
            primary: { main: '#FFF' },
            type: 'dark',
        },
      });

      const handleChange = (language) => {
          setCategory(language);
          setWord("")
      }
    return (
        <div className="header">
            <span className="title">
               { word ? word : 'Word Hunt' } 
            </span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                         <TextField id="standard-basic" className="search"  label="Search a word" value={word} onChange={(e) => setWord(e.target.value)}/>
                         <TextField id="country" select label="Select" helperText="Please select your country" value={category} onChange={(e) => {handleChange(e.target.value)}}>
                             {categories.map((a, b) => (
                                <MenuItem key={a.label} value={a.label}>{a.label}</MenuItem>
                             ))}
                         </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header