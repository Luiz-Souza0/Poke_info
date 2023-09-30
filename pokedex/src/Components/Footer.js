import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <Container>
        <p>&copy; 2023 Grife Fashion. Todos os direitos reservados.</p>
      </Container>
<div>

<Button as={Link} to="./Contact"> Venha nos Conhecer </Button>


</div>
    </footer>
  );
}

export default Footer;