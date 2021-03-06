import styled from "styled-components";

const Button = styled.button`
  background-color: #83ddfa;
  color: #000;
  padding: 10px 15px;
  border: solid 2px #000;
  border-radius: 4px;

  &:hover {
    box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`;

export default Button;
