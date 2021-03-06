import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  text-decoration: none; /* no underline */
  color: ${(props) => props.theme.primary};
  padding: 8px;
  border: 2px solid ${(props) => props.theme.secondary};
  margin: 3px;
  /* box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2) inset; */

  &:hover {
    border: 2px solid black;
  }
`;
