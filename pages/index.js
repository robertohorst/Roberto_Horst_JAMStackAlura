import styled from 'styled-components'
import { Box } from '../src/components/commons/Box'
import Text from '../src/components/commons/Text'
import Capa from '../src/components/commons/Capa'
import Footer from '../src/components/commons/Footer'
import Cabecalho from '../src/components/commons/Cabecalho'
import WrapperProjetos from '../src/components/commons/WrapperProjetos'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
  <Box>
    <Capa>
      <Text
        as="h1"
      >
        Roberto Horst
      </Text>
      <Text
        as="h4"
      >
        Portfólio
      </Text>
    </Capa>
    <Cabecalho />
    <WrapperProjetos />
    <Footer />
  </Box>
  )
}
