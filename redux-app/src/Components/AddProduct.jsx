import generateUniqueId from "generate-unique-id";
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addProduct } from "../Services/actions/productAction";
import { useNavigate } from "react-router";

const AddProduct = () => {
  const intialState = {
    id: "",
    title: "",
    desc: "",
    price: "",
    image: "",
    category: "",
  };
  const [inputForm, setInputForm] = useState(intialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm({
      ...inputForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let id = generateUniqueId({ length: 6, useLetters: false });
    inputForm.id = id;
    dispatch(addProduct(inputForm))
    setInputForm(intialState);
    navigate("/")
  };
  return (
    <>
      <h1>Add Product Page</h1>
      <Form className="mt-4" onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="3">
            Title
          </Form.Label>
          <Col sm="9">
            <Form.Control
              type="text"
              name="title"
              value={inputForm.title}
              onChange={handleChanged}
              placeholder="Enter Product Title"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="3">
            Description
          </Form.Label>
          <Col sm="9">
            <Form.Control
              type="text"
              name="desc"
              value={inputForm.desc}
              onChange={handleChanged}
              placeholder="Enter Product Description"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="3">
            Price
          </Form.Label>
          <Col sm="9">
            <Form.Control
              type="number"
              name="price"
              value={inputForm.price}
              onChange={handleChanged}
              placeholder="Enter Product Price"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="3">
            Category
          </Form.Label>
          <Col sm="9">
            <Form.Select name="category" onChange={handleChanged}>
              <option>Select Category</option>
              <option value="Electronics">Electronics</option>
              <option value="Fashion">Fashion</option>
              <option value="Mobiles">Mobiles</option>
              <option value="Home Appliances">Home Appliances</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="3">
            Image
          </Form.Label>
          <Col sm="9">
            <Form.Control
              type="text"
              name="image"
              value={inputForm.image}
              onChange={handleChanged}
              placeholder="Enter Product Image URL"
            />
          </Col>
        </Form.Group>

        <Button type="submit">Add Product</Button>
      </Form>
    </>
  );
};

export default AddProduct;
