import {css} from "styled-components";

export const tablet = (props) => {
    return css`
    @media screen and (max-width: 1100px){
        ${props}
    }
    `;
}

export const mobile = (props) => {
    return css`
    @media only screen and (max-width: 414px){
        ${props}
    }
    `;
}