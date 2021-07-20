import styled from 'styled-components';
import './style.css';
import image from '../../Assets/cubiertos.jpg';
export const Style = styled.div`

position: fixed;
	width: 100%;
	height: 100%;
	margin: 0px 0px 0px 0px;
 background-image:linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${image});
 background-position: center center ;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-size: cover;


.landing{
 display:flex;
 flex-direction:column;

 
    align-items:center;
    position: relative;
    left: 280px;
    bottom: -300px;
   
    height: 00px;
    width: 600px;
    color: white;
}
.slogan{
  color:#AD9733;
  margin-bottom:50px;
  font-size:20px;
  font-family: 'https://fonts.google.com/share?selection.family=Dancing%20Script' ;
}


.btnp{
   margin-top:10px;
    padding: 5px 20px 5px ;
   
    font-size:  20px;
    color: rgb(22, 24, 36);
    border-radius: 50px;
    transition: all 500ms ease;
    border: 2px solid black;
  animation: pulse 1.5s infinite;

  @keyframes pulse{
    0%{
transform: scale(.99);

box-shadow: 0 0 0 0 rgba(256, 256 , 256, .1);

    }
    70%{
      transform: scale(1);

      box-shadow: 0 0 0 25px rgba(256, 256 , 256, 0);
      
          }
          100%{
            transform: scale(.99);
            box-shadow: 0 0 0 0 rgba(256, 256 , 256, 0);
            
                }
  }

  }
  
  .btnp:hover {
  background: rgb(246, 246, 246);
  color:#C6AA2D;
  border: 2px solid #C6AA2D;
  }

  

`;