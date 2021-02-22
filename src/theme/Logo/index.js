import React from 'react';
import styled from 'styled-components';
import get from 'lodash/get';

const LogoWrapper = styled.span`
    padding: 12px;
    background-color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
`;

export default function Logo(){
    return (
        <LogoWrapper
            variant = "background.dark"
        >
            {'<RH />'}
        </LogoWrapper>
    )
}