import styled from 'styled-components';

export const Styled = styled.div`

margin-top:70px;


.recipesList{
    margin-top:80px;
    
    display:flex;
    justify-content: space-between;
   
     margin:100px 100px 100px 100px;
    //  grid-template-columns: repeat(5, 1fr);
    // grid-gap: 15px;
    //  max-width: 100px
     flex-wrap:wrap;
}

.card{
 
  

    position:relative;
    background:#DBD0D0;
    max-width:250px;
    height:100px;
    // width:260px;
    
    
    margin:50px 30px;
    padding:20px 15px;
    box-shadow:0 5px 202px rgba(0,0,0,0.5);
    transition:0.3s ease-in-out;
border-radius:50px;
    .text{
        color:black;
    }

    :hover{
        height:280px;
        .content{
            visibility:visible;
            opacity:1;
            margin-top:-40px;
            transition-delay:0.3s;
        }
    }
}
   .link{
    position:relative;
    width:260px;
    top:-50px;
    left:35px;
// box-shadow:0 5px 20px rgba(0,0,0,0.2);
}
.img{
    max-width:70%;
    
    border-radius:30px;
   
    
  
}

.content{
    position: relative;
    // margin-top:-180 px;
    padding:0px 15px;
    text-align:center;
    color:#111;
    visibility:hidden;
    opacity:0;
    transition: 0.3s ease-in-out;
}

.pagination {
  margin-top:5%;
}


.notfound{
    display:flex;
   margin-left:40%;

	
}


`;