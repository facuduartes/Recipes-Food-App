import styled from 'styled-components';

export const Styled = styled.div`

margin-top:100px;

.recipesList{
    color:white;
    display: grid;
    justify-content: space-between;
   
    margin:100px 100px 100px 100px;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 15px;
    max-width: 100px
    flex-wrap:wrap;
}
.img{
    width:150px;
    height:100px;
    border-radius:150px;
   
    justify-content: center;
    object-fit: cover;
}
.link{


    text-decoration: none;
                    color: inherit;
                    color: white;
                    text-shadow: 1px 1px 1px black;
}

.pagination {
    display: flex;
    
    margin-top: 10%;
    padding: 10px;

    margin-left:84%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
  }
  .div_back {
    width: 100px;
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
}
`;