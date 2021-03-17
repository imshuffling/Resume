import { createGlobalStyle } from 'styled-components'

const Typography = createGlobalStyle`
    h1 {
    font-size: 1.912em;
    line-height: calc(18px + 1.8vw); /* Responsive Vertical Rhythm */
    }

    h2 {
    font-size: 1.616em;
    line-height: calc(18px + 1.2vw); /* Responsive Vertical Rhythm */
    }

    h3 {
    font-size: 1.471em;
    line-height: calc(18px + 0.7vw); /* Responsive Vertical Rhythm */
    }

    h4 { font-size: 1.3em; }
    h5 { font-size: 1.243em; }
    h6 { font-size: 1.132em; }

    h4, h5, h6 {
    line-height: calc(18px + .2vw); /* Responsive Vertical Rhythm */
    }

    h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
    margin: calc(10px + 1.05vw) 0; /* Responsive margins */
    }

`

export default Typography
