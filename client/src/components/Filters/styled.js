import styled from 'styled-components';

export const Styled = styled.div`



.filters{
     margin:0% 30% 0% 20%;
    display:flex;
    justify-content: space-between;
    
}

.filterName{

 margin:0% 0% 20% 0%;
 color:#B8B1AC  ;
}

.boton{
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
        
        background-color: rgba(255, 255, 255, 0.2);
      }
}

 

`;