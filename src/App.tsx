import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import { ThemeProvider } from 'styled-components'

import GlobalStyle, { Container } from './styles'
import colors from './theme/color'

function App() {
  return (
    <ThemeProvider theme={colors}>
      <GlobalStyle/>
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
