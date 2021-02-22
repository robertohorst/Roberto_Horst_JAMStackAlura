import React from 'react';
import styled from 'styled-components';
import get from 'lodash/get';
import Logo from '../../../theme/Logo';

const Links = [
    {
        text: 'Sobre mim',
        url: '/sobre'
    },
    {
        text: 'Contato',
        url: '/contato'
    },
]

const CabecalhoWrapper = styled.div`
    background-color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
    border-top: 1px solid #E9C46A;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-left: 32px;
    padding-right: 32px;
    
`;

const Navbar = styled.nav`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    a {
    text-align: center;
    display: block;
    text-decoration: none;
    color: #88989E;
    transition: 200ms ease-in-out;
    /* ${breakpointsMedia({
    xs: css`
        ${TextStyleVariantsMap.smallestException}
    `,
    md: css`
      ${TextStyleVariantsMap.paragraph1}
    `,
  })} */
    &:hover,
    &:focus {
      font-weight: 500;
      color: #070C0E;
      
    }
  }
`;

export default function Cabecalho(){
    return (
        <CabecalhoWrapper
            variant = "background.main"
        >
            <Logo />
            <Navbar>
            { Links.map((link) => (
                <li key={link.text}>
                   <a href={link.url}>{link.text}</a>
                </li>
            ))}

            </Navbar>
        </CabecalhoWrapper>
    )
}