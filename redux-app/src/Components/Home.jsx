import { useEffect } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  deleteProduct,
  getAllProducts,
} from "../Services/actions/productAction";

const Home = () => {
  const { products } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/edit-product/${id}`);
  };
  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <>
      <h1>Home Page</h1>
      <Container className="d-flex">
        {products.length == 0 ? (
          <h1>No Products Found...</h1>
        ) : (
          products.map((product) => (
            <Card key={product.id} style={{ width: "18rem", margin: "10px" }}>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.desc}</Card.Text>
                <Button
                  onClick={() => handleEdit(product.id)}
                  variant="warning"
                >
                  Edit
                </Button>{" "}
                &nbsp;&nbsp;
                <Button
                  onClick={() => handleDelete(product.id)}
                  variant="danger"
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          ))
        )}
      </Container>
    </>
  );
};

export default Home;
