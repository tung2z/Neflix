import styled from 'styled-components/macro'

export const Container = styled.div`
  display:flex;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  /* max-width: 450px; */
  width: 100%;
  border: 0;
  padding: 10px;
  height: 70px; 

  @media (min-width: 1000px) {
    width: 450px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 70px;
  background:#e50914;
  color: white;
  text-transform: uppercase;
  
  
  padding: 0px 32px;
  font-size: 16px;
  border: 0;
  cursor: pointer;

  &:hover {
    background: #f40612;
  }

  @media (max-width: 1000px) {
    height: 50px;
    font-size: 16px;
   
    font-weight: bold;
    width: 100%;
    text-align: center;
  }
`;

export const Text = styled.p`
  font-size: 19.2px;
  color: white;
  text-align: center;
  margin-top: 20px;

  @media (max-width: 800px) {
    font-size: 16px;
    line-height: 22px;
  }
`;