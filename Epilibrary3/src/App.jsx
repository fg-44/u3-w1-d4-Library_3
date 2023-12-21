import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import MyFooter from './components/MyFooter';
import Welcome from './asset/components/Welcome';
import MyNav from './assets/components/MyNav';

// import AllTheBooks from './components/AllTheBooks'
import { Container } from 'react-bootstrap'
import BookList from './components/BookList'

import fantasy from './data/fantasy.json'

function App() {
  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        {/* <AllTheBooks /> */}
        <BookList books={fantasy} />
      </Container>
      <MyFooter />
    </>
  )
}

export default App
