import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import SearchFilter from './components/SearchFilter';
import FoodList from './components/FoodList';
import MyRecipesInfo from './components/MyRecipesInfo';


function App() {
  return (
    <Container>
      <h1>Recipe App</h1>
      <Row>
        <Col md={12} xl={6}>
          <div>
            <SearchFilter></SearchFilter>
            <FoodList></FoodList>
          </div>
        </Col>
        <Col md={12} xl={6}>
          <MyRecipesInfo></MyRecipesInfo>
          <FoodList></FoodList>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
