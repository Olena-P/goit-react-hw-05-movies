import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
import styled from "styled-components";

const CustomLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  margin-right: 20px;
  font-size: 16px;

  &.active {
    color: orange;
    font-weight: bold;
  }
`;

const AppLayout = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: " #333",
        }}
      >
        <nav
          style={{
            padding: "20px 50px",
            margin: "0 auto",
            maxWidth: "1280px",
          }}
        >
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/movies">Movies</CustomLink>
        </nav>
      </div>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default AppLayout;
