import { IconPokemon, InlineText } from './style';

export const BtnCatch = ({ handleClick = () => {} }) => {
	return (
		<div className='inset-x-0 mb-8 flex justify-center z-50 '>
			<div
				className='bg-orange  px-4 py-2 rounded-full cursor-pointer'
				onClick={() => handleClick()}
			>
				<IconPokemon size={'30px'}></IconPokemon>
				<span className='px-1'></span>
				<InlineText>Catch {'IOvysaur'}</InlineText>
				<span className='px-1'></span>
			</div>
		</div>
	);
};
