import styled from "@emotion/styled"

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const InputThumb = styled.div`
  font-weight: 700;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Input = styled.input`
  font-size: 20px;
`;

export const ButtonThumb = styled.div`
  text-align: center;

  button {
    font-size: 16px;
    padding: 4px 8px;
    border: 1px solid #000;
    cursor: pointer;
    &:hover { background: #51abcb;
      color: #fff;
    border-color: transparent; }
  }
`;