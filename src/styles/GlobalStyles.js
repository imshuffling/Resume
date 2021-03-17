import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root {
        font-family: 'Karla', Arial, sans-serif;
        --text: #393531;
        --grey: #e5e5e5;
        --primary-colour: #f40088;
        --blue: #008CFF;
    }

    body {
        color: var(--text);
        font-size: calc(12px + 0.35vw); /* Responsive base font size */
        line-height: calc(12px + 1.05vw); /* Responsive Vertical Rhythm */
        margin: 0;
        padding: 0;
    }

    .wrapper {
        max-width: 1200px;
        width: calc(100% - 40px);
        margin: 0 auto;
        padding: 30px 20px;
        @media (min-width: 1100px) {
            padding: 60px 20px;
        }
    }


    a {
        color: rgb(56, 67, 71);
        text-decoration: none;
        border-bottom: 1px solid var(--grey);
    }

    a:hover {
        opacity: .8;
    }

    p {
        margin: 0 0 calc(12px + .25vw) 0;
    }

    ul {
        margin: 0 0 calc(12px + 1.05vw) calc(12px + 1.05vw);
        padding-left: 0;
    }

    ul li p {
        margin-bottom: 0;
    }

    blockquote {
        margin: 0;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    .where {
        color: var(--blue);
        font-weight: bold;
        margin: 0;
    }

    .date {
        display: flex;
        margin: calc(12px + 0.05vw) 0;
    }

    .dotted-line {
        border-bottom: 1px dashed var(--grey);
    }

    .job {
        font-size: calc(12px + 0.15vw);
        line-height: calc(12px + 0.7vw);
        padding: 15px 0 0 0;
    }

    .job ul {
        margin-bottom: 0;
    }

    .job h3 {
        margin: 0;
    }

    .mainContent section:first-of-type {
        padding-top: 0;
    }

    .mainContent section:nth-last-child(2) {
        border-bottom: 0 none;
    }

    .certification__item {
        border-bottom: 1px dashed var(--grey);
        padding: 15px 0;
        display: flex;
    }

    .certification__item:last-child {
        border-bottom: 0 none;
        padding-bottom: 0;
    }

    .certification__item a {
        text-decoration: none;
        border-bottom: 0 none;
    }

    .certification__year {
        color: #384347;
        font-size: calc(12px + 0.18vw);
        line-height: calc(12px + .8vw);
    }


    .skills {
        overflow: hidden;
    }


    .skills ul {
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        text-align: center;
        margin-left: -10px;
        margin-right: -10px;
    }

    .skills ul li {
        flex: 0 1 auto;
        margin: 8px;
        padding: 0 3px;
        border-bottom: 1px solid var(--grey);
    }

    .education {
        padding: 15px 0 0 0;
    }

    .education h2 {
        margin-bottom: 0;
    }

    .education .date {
        font-size: calc(12px + 0.15vw);
        line-height: calc(12px + 0.7vw);
    }

    .date_location {
        margin-left: 20px;
    }

    .date_location svg {
        margin-right: 4px;
    }

    .certification__icon {
        flex-basis: 20px !important;
        width: 20px;
        max-width: 20px !important;
        height: 20px;
        margin-right: 10px;
        margin-top: 3px;
    }

    .certification__copy {
        flex: 1 !important;
    }

    .certification__item > div {
        flex: 0 1 auto;
    }

    .date__item {
        display: flex;
        align-items: center;
    }

    .date__item svg {
        margin-right: 4px;
    }
`

export default GlobalStyles
