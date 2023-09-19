import styled from 'styled-components'

export const Div = styled.div`
  width: 100%;
    display: flex;
    align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  `;

export const Form = styled.form`
 display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
   box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Button = styled.button`
display: inline-block;
  width: 68px;
  height: 48px;
  border: 0;
  svg{
    width: 32px;
    height: 32px;
      };
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {  
  opacity: 1;
}
`;

export const Input = styled.input`
display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  justify-content:center;
  padding-left: 10px;
  padding-right: 4px;
  &::placeholder {
  font: inherit;
  font-size: 18px;
}
`;