import styled from 'styled-components';


export const Styled = styled.div`

	
	height:74px;
    display:flex;
    justify-content: space-between;
	box-sizing:border-box;
	background: rgba(0,0,0,0.6);
	border-bottom:1px solid #fff;
    padding:20px 30px;


.search-box{

	

	
	
	background: #2f3640;
	height: 25px;
	border-radius:40px ;
	padding:9px 10px;
	
.title{
	border:none;
	background:none;
	outline:none;
	float:left;
	padding:0;
	color:white;
	transition:0.4s;
	line-height:30px;
	 width:200px;
}
.btn{
	background:none;
		border:none;
	margin-top: -2.5px;
	&:hover {
        transform: translateY(-2px);
        cursor: pointer;
    }
    &:active {
        outline: 0;
        transform: translateY(3px);
    }
}

}

.search-box:hover > .title{
	width:240px;
	padding: 0 6px;
}






.logo{
	

padding:0px 20px;
font-size:23px;
 font-weight:bold;
text-transform:uppercase;
color: #C6AA2D;
text-decoration: none;
}

.div_menu{
	
	list-style:none;
	padding: 10px 0px;

}

.link{
	
	padding: 0px 30px;
// font-weight:bold;
	font-size:14px;
	text-transform:uppercase;
	color: white;
    text-decoration: none;

		:hover{
			background:#A8A89F;
			border-radius:10px;
		}
	}


`;
