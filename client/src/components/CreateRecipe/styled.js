import styled from 'styled-components';


export const Styled = styled.div`
display:flex;
flex-direction:column;
align-items:center;


.create{
    display:flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 60%;
    opacity: 0.8;
    margin: 100px 0px 50px 0px ;

    text-shadow: 0 8px 10px #231e23, 1px -2px 1px #231e23;
  
    font-size: 20px;
    -webkit-text-stroke: 1px rgba(0, 0, 0, 0.5);
    color: #FDFDFD; 
    border-radius: 5px;
    border:solid rgba(0, 0, 0, 0.2);
    box-shadow: 0px 14px 80px rgba(0, 0, 0, 0.5);
    padding-bottom: 20px;
    form{
        display:flex;
        flex-direction: column;
        width: 80%;
        padding-bottom: 10px;
    
        font-weight: bold;
        text-shadow: 0 8px 10px #214252, 1px -2px 1px #214252;
        color: #f6e5e9;
        text-decoration: none;
        font-size: 21px;
        }
      
    
}

.diets{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 5px 0px 2px 0px;
}
  
.btn_submit{

    margin:10% 0% 0% 40%;
    
  
    
    padding: 5px 20px 5px ;
   
    font-size:  20px;
    color: rgb(22, 24, 36);
    border-radius: 50px;
    transition: all 500ms ease;
    border: 2px solid black;
    :hover{
        background: rgb(246, 246, 246);
     
        border: 2px solid #C6AA2D;
    }
}


}
.back {
  text-decoration: none;
    color: white;
    text-shadow: 1px 2px 1px black;
    font-size: 20px;
    cursor: pointer;
    &:hover {
        transform: translateY(-3px);
        cursor: pointer;
    }
    &:active {
        outline: 0;
        transform: translateY(3px);
    }

`;
