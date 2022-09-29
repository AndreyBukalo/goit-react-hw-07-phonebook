import styled from '@emotion/styled';
export const FormStyle = styled.form`
  display:flex;
  flex-direction: column;
  height:280px;
  width:480px;
  margin-left:60px;
  margin-top:60px;
  border-radius: 10px;
  background: rgba(248, 243, 243, 0.5);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(20, 17, 17, 0.25);
  padding: 30px;
`;
export const Label = styled.label`
  font-size: 16px;
  font-weight:500;
  color: #333030;
`;
export const Input = styled.input`
 width:100%;
  padding: 4px;
  margin-top:6px;
  font-size: 17px;
  border-width: 1px;
  border-color: #cccccc;
  background-color: #ffffff;
  color: #000000;
  border-style: solid;
  border-radius: 47px;
  box-shadow: 0px 0px 5px rgba(66, 66, 66, 0.75);
  text-shadow: 0px 0px 5px rgba(66, 66, 66, 0.75);
`;
export const Btn = styled.button`
  margin-top: 40px;
  width: 280px;
  background: linear-gradient(to right, #196bca, #6433e0);
  background-color: #196bca;
  color: #fff;
  font-family: Trebuchet MS;
  font-size: 18px;
  font-weight: 800;
  font-style: normal;
  text-decoration: none;
  padding: 14px 15px;
  border: 0px solid #000;
  border-radius: 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background: linear-gradient(to right, #5482d0, #7d5ee3);
    background-color: #5482d0;
  }
`;

