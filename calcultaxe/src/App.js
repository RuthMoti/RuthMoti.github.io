import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ciel from './images/Ciel';
import TaxeQC from './components/TaxeQC';

function App() {
  return (
    <div className="App-header">
    <Container></Container>
    <Row>
     <Col><Ciel/></Col>
      <Col></Col>
      <Col></Col>
    </Row>
    <Row>
     <Col></Col>
      <Col><h3>Calcul des taxes</h3></Col>
      <Col></Col>
    </Row>
    <Row>
      <Col></Col>
      <Col><TaxeQC/></Col>
      <Col></Col>
    </Row>
    <p>@ cégep limoilou - 2020</p>
    </div>
  );
}

export default App;
