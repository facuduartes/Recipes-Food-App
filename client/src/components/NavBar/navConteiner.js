import React from 'react';
import {Link} from 'react-router-dom';
import {Styled} from './styled';
import  Search  from '../Search/searchContainer';
export const NavBar = () => {
	return (
		<Styled>
			<div className='div_logo'>
				<Link to='/home' className='logo'>
					<h2>Henry Food App</h2>
				</Link>
			</div>
            <div>
				<Search/>
			</div>
			<div className='div_menu'>
				<div className='div_link'>
					<Link to='/home' className='link'>
						HOME
					</Link>
				</div>
				<div className='div_link'>
					<Link to='/create' className='link'>
						CREATE RECIPE
					</Link>
				</div>
			</div>
		</Styled>
	);
};

export default NavBar;