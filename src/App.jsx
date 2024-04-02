import { Container, Grid, Typography, Link } from '@mui/material'
import './App.css'
// import Image from './components/image'

function App() {

  return (
    <Container maxWidth="lg">
        <Grid item xs={12}>
        <Typography variant="h2">hippowifhat</Typography>
        <Typography variant="h6" margin={5}>It is time for the dogwifhat to bow heads for the hippowifhat!</Typography>
      </Grid>
      <img src='/hippowifhat.png' alt="hippowifhat"/>
      <Typography variant="h6" margin={2}>Telegram: <Link href="https://t.me/hippowifhat99">https://t.me/hippowifhat99</Link></Typography>
      <Typography variant="h6" margin={2}>Twitter: <Link href="https://twitter.com/hippowifhat99">https://twitter.com/hippowifhat99</Link></Typography>
  </Container>
  )
}

export default App
