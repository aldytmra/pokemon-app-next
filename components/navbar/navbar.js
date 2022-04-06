import React, { useState } from 'react';
import ImageLogo from '../imageLogo/imageLogo';
import { IconSearch, InputSearch, SearchContainer } from './style';

const Navbar = (props) => {
	const { handleSearch } = props;
	const [input, setInput] = useState();
	const onEnter = (event) =>
		event.key === 'Enter' && handleSearch(event.target.value);

	return (
		<nav
			className='px-8 pt-8  lg:w-full md:w-full sm:w-full s:w-full'
			style={{ maxWidth: `1080px`, margin: 'auto' }}
		>
			<div className='container mx-auto flex flex-wrap items-center'>
				<ImageLogo />
				<p className='py-3 text-fontPurple '>
					Search for a pokemon by name or using its National Pokedex number.{' '}
				</p>
				<div className='flex w-full py-2 content-center justify-between '>
					<ul className='list-reset flex justify-between flex-1 md:flex-none items-center'>
						<li className='w-full'>
							<SearchContainer>
								<InputSearch
									type='text'
									onChange={(e) => setInput(e.target.value)}
									onKeyPress={(e) => onEnter(e)}
									placeholder='Name or number'
								></InputSearch>
								<div onClick={() => handleSearch(input)}>
									<IconSearch color='#fff' size='25px' />
								</div>
							</SearchContainer>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
