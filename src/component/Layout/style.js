import styled from "styled-components";

const StyledLayout = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.background};
  height: 100vh;
  justify-content: space-between;
  flex-direction: column;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default StyledLayout;
