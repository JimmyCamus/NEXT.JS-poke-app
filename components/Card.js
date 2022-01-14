import styled from "styled-components";

const Card = styled.section`
  background-color: #eee;
  margin: 15px;
  padding: 20px 25px;
  width: 250px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
  text-align: center;

  &:hover {
    box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }

  & > p {
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
  }
`;

export default Card;
