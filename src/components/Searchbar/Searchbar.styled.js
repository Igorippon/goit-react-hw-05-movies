import styled from 'styled-components'

export const Div = styled.div`
  width: 100%;
    display: flex;
    align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  /* padding-top: 12px; */
  padding-bottom: 12px;
  color: #fff;
  
  `;

export const Form = styled.form`
 display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;
  /* background-color: #fff; */
  padding: 8px 0px;
  background-color: rgba(46, 47, 66, 0.05);
  border-radius: 0px 0px 8px 8px;
  overflow: hidden;
   box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
&:focus{
  background-color: #fff;
}
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
border-radius: 8px;
  outline: 2px solid #FEBF00;
  border: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #e2e2e2;
  outline-offset: 3px;
  padding: 10px 1rem;
  transition: 0.25s;
&:focus {
  outline-offset: 5px;
  background-color: #fff
}
/* display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  justify-content:center;
  padding-left: 10px;
  padding-right: 4px;
  background-color: rgba(46, 47, 66, 0.05);
    &::placeholder {
  font: inherit;
  font-size: 18px;
}
&:focus{
  background-color: #fff;
} */
`;