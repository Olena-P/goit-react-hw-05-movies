import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
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
        <Suspense
          fallback={
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
            />
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default AppLayout;
