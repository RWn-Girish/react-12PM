import { Button, Container, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { logOutAsync } from "../Services/actions/userAction";

const Header = () => {
  const { user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOutAsync());
  }
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">MBH Store</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Link to={"/add-product"}>Add New Product</Link>
            </Navbar.Text>
          </Navbar.Collapse>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {!user ? <Link to={"/signIn"}>SignIn</Link> 
          : 
          <div>
            <span>{user.email}</span> &nbsp;&nbsp;
            <Button onClick={handleLogOut}>Logout</Button>
            </div>}
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
