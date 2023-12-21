import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import MyNav from './components/MyNav';
import Welcome from './components/Welcome';
import MyFooter from './components/MyFooter';
import { Container } from 'react-bootstrap';
import BookList from './components/BookList';

import fantasy from './data/fantasy.json'

function App() {
  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        <BookList books={fantasy} />
      </Container>
      <MyFooter />
    </>
  )
}

export default App
