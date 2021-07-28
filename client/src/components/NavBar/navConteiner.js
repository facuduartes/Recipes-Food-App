import React from 'react';
import {Link} from 'react-router-dom';
import {Styled} from './styled';
import  Search  from '../Search/searchContainer';
import FilterConteiner from '../Filters/filterConteiner';
import dish from '../../Assets/dish.png'





export const NavBar = () => {
	

	return (
		<Styled>
			
			<div className='div_search' >
				<Link to='/home' className='logo'>
				HR food App 
					
				</Link>
				
			</div>
				
			<div className='search' >
			
			<Search/>
		
		</div>
			<div className='div_menu'>
				
					<Link to='/home' className='link'>
						HOME 
					</Link>
				
				
					<Link to='/create' className='link'>
						CREATE RECIPE
					</Link>
				
			</div>
			
		</Styled>
	);
};

export default NavBar;