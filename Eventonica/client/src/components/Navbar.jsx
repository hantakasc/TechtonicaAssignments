import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/BlueTechtonicaWord.png';


function MyNavBar({ searchQuery, setSearchQuery }) {

  return (
    <>
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/">
        <img
              src={Logo}
              height="30"
              className="d-lg-inline-block"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Form className="d-flex ms-auto">
          <FormControl
            type="search"
            placeholder="Search events"
            className="search-form"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update the search query state
          />
        </Form>
      </Container>
    </Navbar>
    </>
  );
};

export default MyNavBar;