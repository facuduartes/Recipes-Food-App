import styled from "styled-components";



export const Styled =styled.div`

.paged {
    display: flex;
    justify-content:center;
    
   
    text-align:center;
    border-radius: 10px;
  }
  

  .button {
    background-color: #dfdfdf;
    
    color: rgb(46, 46, 46);
    padding: 8px;
    width: 100px;
    border: none;
    font-size: 12px;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
    -webkit-appearance: button;
    appearance: button;
    outline: none;
    border-radius: 10px;
    margin: 2px;

		&:hover {
      transform: translateY(-3px);
      cursor: pointer;
      color: rgba(236, 236, 236, 0.795);
      background-color: rgba(255, 255, 255, 0.2);
    }
    &:active {
      outline: 0;
      transform: translateY(3px);
    }   
  }`