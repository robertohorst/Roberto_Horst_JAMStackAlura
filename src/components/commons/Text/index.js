import styled from 'styled-components';
import get from 'lodash/get';

const TextBase = styled.span`
  //${({ variant }) => TextStyleVariantsMap[variant]}
  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
  /* ${propToStyle('textAlign')}; */
`;

export default function Text({
    tag, variant, children, ...props
  }) {
    return (
      <TextBase
        as={tag}
        variant={variant}
        {...props}
      >
        {children}
      </TextBase>
  
    );
  }