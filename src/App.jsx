import { Routes, Route, NavLink } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Products from "./pages/Products/Products";

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

const App = () => {
  return (
    <div>
      <div>
        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/products">Products</StyledLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
