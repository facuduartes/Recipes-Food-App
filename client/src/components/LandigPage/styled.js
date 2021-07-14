import styled from 'styled-components';
import './style.css';
import image from '../../Assets/cubiertos.jpg'
export const Style =styled.div`
position: fixed;
	width: 100%;
	height: 100%;
	margin: 0px 0px 0px 0px;
background-image:url(${image});
background-position: center center;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-size: cover;
.landing{
 
    text-align:center;
    position: relative;
    left: 500px;
    bottom: -300px;
    height: 00px;
    width: 600px;
    color: white;
}



.btnp{
    padding: 5px 20px 5px ;
    margin-left: 220px;
    font-size:  20px;
    color: rgb(22, 24, 36);
    border-radius: 50px;
    transition: all 500ms ease;
    border: 2px solid black;
  
  }
  
  .btnp:hover {
  background: rgb(246, 246, 246);
  color: rgba(0, 89, 255, 0.822);
  border: 2px solid rgba(8, 156, 214, 0.856);
  }


`;