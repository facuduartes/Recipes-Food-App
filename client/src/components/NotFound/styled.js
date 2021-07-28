import styled from 'styled-components';

export const StyledDiv = styled.div`

	margin: 60px 90px 0px 0px;

	.div_title {
		.title {
			 padding: 0px;
			 margin: 0px;
			color: white;
			text-shadow: 2px 2px 2px black;
		}
	}
	
	.div_back{
		margin:50px 0px 80px 50px;
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
`;
