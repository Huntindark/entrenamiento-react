import styled from "styled-components";

const StyledContent = styled.div`
  /* flex-grow: 1; */
  width: auto;
  height: 85vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default StyledContent;
