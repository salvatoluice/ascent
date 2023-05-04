import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiFillCar } from "react-icons/ai"
import { IoStatsChart } from "react-icons/io5";
import { BiGroup } from "react-icons/bi";
import { FiActivity } from "react-icons/fi";
import { cardStyles } from "./ReusableStyles";
import axios from "axios";
export default function Analytics() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    axios.get('/cars')
    .then(response => {
      setCars(response.data);
    });
  }, []);
  return (
    <Section>
      <div className="analytic ">
        <div className="content">
          <h5>Total Cars Available:</h5>
          <h2 className="font-bold">{cars?.length}</h2>
        </div>
        <div className="logo">
          <AiFillCar />
        </div>
      </div>
      <div className="analytic">
        <div className="logo">
          <IoStatsChart />
        </div>
        <div className="content">
          <h5>Earnings</h5>
          <h2>Ksh. 350, 000</h2>
        </div>
      </div>
      <div className="analytic">
        <div className="logo">
          <BiGroup />
        </div>
        <div className="content">
          <h5>New clients</h5>
          <h2>321</h2>
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
          <h5>Activity</h5>
          <h2>Ksh. 540, 000</h2>
        </div>
        <div className="logo">
          <FiActivity />
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  .analytic {
    ${cardStyles};
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #F53850;
      color: black;
      svg {
        color: white;
      }
    }
    .logo {
      background-color: black;
      border-radius: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;
      svg {
        font-size: 1.5rem;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    .analytic {
      &:nth-of-type(3),
      &:nth-of-type(4) {
        flex-direction: row-reverse;
      }
    }
  }
`;
