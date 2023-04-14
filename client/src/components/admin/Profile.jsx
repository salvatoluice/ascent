import React, { useContext } from "react";
import styled from "styled-components";
import image from "../../assets/profile.jpeg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { cardStyles } from "./ReusableStyles";
import { UserContext } from "../../UserContext";
export default function Profile() {
  const {user} = useContext(UserContext);
  return (
    <Section>
      <h2 style={{color: '#F53850'}}>YOUR POFILE</h2>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="title">
        <h2>{user?.name}</h2>
        <h5>
          <HiOutlineLocationMarker /> Nairobi, Kenya
        </h5>
      </div>
      <div className="info">
        <div className="container">
          <h5>Days worked</h5>
          <h3>28</h3>
        </div>
        <div className="container">
          <h5>cars registered</h5>
          <h3>427</h3>
        </div>
        <div className="container">
          <h5>Hours worked</h5>
          <h3>76</h3>
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
  ${cardStyles};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  h2 {
    font-family: "Permanent Marker", cursive;
  }
  .image {
    max-height: 10rem;
    overflow: hidden;
    border-radius: 20rem;
    img {
      height: 10rem;
      width: 10rem;
      object-fit: cover;
      border-radius: 20rem;
      transition: 0.5s ease-in-out;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
  .title {
    text-align: center;
    h2,
    h5 {
      color: #F53850;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
    }
    h5 {
      letter-spacing: 0.2rem;
    }
  }
  .info {
    display: flex;
    gap: 1rem;
    .container {
      text-align: center;
    }
  }
`;
