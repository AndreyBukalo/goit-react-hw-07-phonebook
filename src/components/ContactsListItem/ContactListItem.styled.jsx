import styled from '@emotion/styled';


  

export const ListItem = styled.li`
  display: flex;
  margin: 0;
  margin-bottom: 8px;
`;
export const ListItemText = styled.p`
display:flex;
  margin: 0;
`;


export const ItemName=styled.span`
  
`
export const ItemNumber = styled.span`

margin-right:5px;`;

export const Btn = styled.button`
  height: 25px;
  background: linear-gradient(to right, #196bca, #6433e0);
  background-color: #196bca;
  color: #fff;
 
  font-size: 18px;
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

export const Avatar = styled.img`
  width: 60px;
  border: 1px solid gray;
  border-radius: 25% 25% 25% 25% / 25% 25% 25% 25%;
`;