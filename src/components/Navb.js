import { Navbar, Nav, Container } from "react-bootstrap";
const Navb = () => {
    return (
      <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Pehchan</Navbar.Brand>
        <Nav className="me-auto" style={{position: 'absolute', right: '2rem'}}>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="/edit">Edit</Nav.Link>
          <Nav.Link href="#features">Connect via Blockchain</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    );
}

export default Navb;