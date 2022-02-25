import * as ReactBootStrap from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import carrito from '../images/carrito.svg'
const Navbar = () => {
    return (
        <div className="App">
            <ReactBootStrap.Navbar bg="dark" variant="dark">
                <Container>
                    <ReactBootStrap.Navbar.Brand href="#home">
                        <img
                            src={carrito}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </ReactBootStrap.Navbar.Brand>
                </Container>
                <ReactBootStrap.Nav className="me-auto">
                    <ReactBootStrap.Nav.Link href="#home">Inicio</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="#features">Producto</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="#pricing">Contacto</ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>

            </ReactBootStrap.Navbar>
        </div>
    );
}

export default Navbar;