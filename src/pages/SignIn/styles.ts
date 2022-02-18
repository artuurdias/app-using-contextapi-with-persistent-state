import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  button {
    margin-top: 20px;
    padding: 12px 24px;

    border: 1px solid #ddd;
    border-radius: 4px;
    background: transparent;
    color: #ddd;

    &:hover {
      cursor: pointer;
    }
  }

  input {
    margin: 3px 0;
    border: 1px solid #ddd;

    padding: 6px 12px;
    background: transparent;

    color: #ddd;

    &::-webkit-input-placeholder {
      font-size: 14px;
      color: #777;
    }
  }
`;