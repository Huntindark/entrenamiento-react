import styled from "styled-components";

export const Card = styled.div`
  box-shadow: 0 8px 16px 0 grey;
  background: ${(props) => props.theme.secondary};
  width: 17vw;
  height: 20vh;
  margin: 30px;
`;
