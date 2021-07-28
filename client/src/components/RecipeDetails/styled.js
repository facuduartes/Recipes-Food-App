import styled from "styled-components";



export const Styled = styled.div`

   display:flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    //  width: 60%;
   
    opacity: 0.8;
      margin: 0px 200px 50px 200px ;

    text-shadow: 0 8px 10px #231e23, 1px -2px 1px #231e23;
  
     font-size: 19px;
    -webkit-text-stroke: 1px rgba(0, 0, 0, 0.5);
    color: #FDFDFD; 
    border-radius: 5px;
    border:solid rgba(0, 0, 0, 0.2);
    box-shadow: 0px 14px 80px rgba(0, 0, 0, 0.5);
    // padding-bottom: 20px;

.image{
    display:flex;
    justify-content: center;
    .img{

 
        border-radius: 150px;
        
        }
}


.diets{
    margin:6% 0% -5% 48%;
    font-size:25px;
}


.div_type_container{
 
    display:flex;
    justify-content: space-between;
    margin: 5% 30% 0% 30%;
    color:#B1FB6B;
}

.div_details{

display:flex;
flex-direction:column;
.text{
    margin-top:3%;
}
}

.div_back{
     margin:50px 0px 0px 50px;
    text-decoration: none;
color: #C6AA2D;
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
}
.text{
    
    font-family: 'Poppins', sans-serif;
.label{
    font-size:22px;
    color:#FBEB6B;
}

.res{
    margin:15px 0px 0px 30px;
    font-size:19px;
}
}

`;