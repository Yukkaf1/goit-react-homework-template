import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: nowrap;
  justify-content: center;

  width: 400px;
  border: 1px solid ${p => p.theme.colors.black};
  padding: 8px;
  border-radius: 4px;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;

  :hover {
    border-color: tomato
`;
