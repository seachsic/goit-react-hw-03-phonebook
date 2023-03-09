import styled from "@emotion/styled";

export const ListItem = styled.li`
    
    width: 260px;
    display: flex;
    justify-content: space-between;
  button {
    border-radius: 4px;
    border: 1px dotted #000;
    cursor: pointer;
    &:hover { background: #cc0000;
      color: #fff;
    border-color: transparent; }
    }
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-style: italic;
`;
