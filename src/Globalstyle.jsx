import {createGlobalStyle} from 'styled-components'


const Globalstyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

:root{
    --Very-dark :hsl(238, 29%, 16%);
    --soft-red: hsl(14, 88%, 65%);

    --background-Soft-violet:hsl(273, 75%, 66%);
    --background-Soft-blue:hsl(240, 73%, 65%);

    --Very-dark-grayish-blue:hsl(237, 12%, 33%);
    --Dark-grayish-blue: hsl(240, 6%, 50%);
    --Light-grayish-blue: hsl(240, 5%, 91%);

    --transition:500ms;
}
body{
    height: 100vh;
    background: linear-gradient(to top,hsl(240, 73%, 65%),hsl(273, 75%, 66%));
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Kumbh Sans', sans-serif;
}

`
export default Globalstyle