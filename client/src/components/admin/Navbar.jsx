import React, { useContext } from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { UserContext } from "../../UserContext";
export default function Navbar() {
  const {user} = useContext(UserContext);
  return (
    <Nav>
      <div className="title">
        <h4>Hello {user?.name},</h4>
        <h1>
          Welcome to <span>ascent admin dashboard</span>
        </h1>
      </div>
      <div className="search">
        <BiSearch />
        <input type="text" placeholder="looking for?" />
      </div>
    </Nav>
  );
}
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: white;
  .title {
    h1 {
      span {
        margin-left: 0.5rem;
        color: #F53850;
        font-family: "Permanent Marker", cursive;
        letter-spacing: 0.2rem;
      }
    }
  }
  .search {
    background-color: #212121;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 8rem 1rem 1rem;
    border-radius: 1rem;
    svg {
      color: #F53850;
    }
    input {
      background-color: transparent;
      border: none;
      color: #F53850;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: #F53850;
        font-family: "Permanent Marker", cursive;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    .title {
      h1 {
        span {
          display: block;

          margin: 1rem 0;
          /* letter-spacing: 0; */
        }
      }
    }
  }
`;
