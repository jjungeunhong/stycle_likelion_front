import OutlinedInput from '@mui/material/OutlinedInput';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { blue, green, lime, purple } from '@mui/material/colors';

const theme = createTheme({
    palette: {
      primary: {main: '#36454F'},
      secondary: purple,
    },
  });


export default function SearchBox() {
    return (
        <ThemeProvider theme={theme}>
            <div className='flex flex-row items-center' style={{display:"flex", flexDirection: "column"}}>
                <div style={{flex:1}}>
                    <OutlinedInput style={{width:"290px"}}></OutlinedInput>
                </div>
                <div className='flex items-center justify-center pt-1' style={{width: "10vw"}}>
                    <Button variant="contained" color='primary' >Search</Button>
                </div>
            </div>
        </ThemeProvider>
    )
}