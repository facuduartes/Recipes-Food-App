import styled from 'styled-components';

export const Styled = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 50px;
	overflow: hidden;
	// #0EC495
	background-color: #C6AA2D   ;
	position: fixed;
	top: 0px;
	left: 0px;
	box-shadow: 0px 3px 3px 1px rgba(0, 0, 0, 0.3);

	.div_logo {
		display: flex;
		justify-content: flex-end;
		width: 400px;
		height: fit-content;
		margin-left: 20px;
		align-items: center;
		.logo {
			text-decoration: none;
			color: white;
			text-shadow: 1px 2px 2px black;
		}
	}

	.div_menu {
		width: 100%;
		display: flex;
		justify-content: flex-end;
		margin-right: 100px;
		.div_link {
			display: flex;
			align-items: center;
			height: 50px;
			border: solid #dee2e6;
			border-width: 0px 1px 0px 1px;
			padding: 0px 3px 0px 3px;
			margin-right: 10px;
			background-color: rgba(31, 4, 6, 0.3);
			.link {
				text-decoration: none;
				color: inherit;
				color: white;
				text-shadow: 1px 1px 1px black;

				&:active {
					outline: 0;
					transform: translateY(3px);
				}
			}
		}
	}
`;
