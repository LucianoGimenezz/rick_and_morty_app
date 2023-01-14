import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
`;

export const FormStyle = styled.form`
  width: 30%;
  max-width: 500px;
  margin: 0 auto;
  height: 400px;
  display: flex;
  flex-direction: column;
  background-color: #3c3e44;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const Label = styled.label`
  position: absolute;
  color: #fff;
  top: 8px;
  left: 8px;
  font-weight: 500;
  pointer-events: none;
  transition: all 0.5s;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #fff;
  border-radius: 10px;
  background-color: #3c3e44;
  color: #fff;
  &:focus, &:valid {
    outline: 1px solid #09f;
    border: 1px solid transparent;
    & ~ label {
      color: #09f;
      transform: translateX(20px) translateY(-24px);
      background-color: #3c3e44;
      transition: all 0.5s;
    }
  }
`;

export const ButtonLogin = styled.button`
  width: 55%;
  height: 40px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  color: #fff;
  font-weight: 600;
  background-color: #09f;
  font-size: 1.1rem;
  &:hover {
    opacity: .5;
  }
`;

export const DivStyle = styled.div`
  position: relative;
  width: 70%;
  max-width: 334px;
  display: flex;
  justify-Content:center;
`

export const Side = styled.section`
  width: 50%;
  height: 1290px;
  background-color: #3c3e44;
  display: flex;
  align-items: center;
  justify-content: center;
`;