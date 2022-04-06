import { IconPokemon, InlineDiv, InlineText } from './style';
import Link from 'next/link';

const FloatingButton = ({ own = 0 }) => {
	return (
		<Link href='/my-pokemon' passHref>
			<div className='fixed inset-x-0 bottom-4 flex justify-center z-50 '>
				<div className='border border-fontPurple bg-white px-4 py-4 rounded-full cursor-pointer'>
					<IconPokemon size={'30px'}></IconPokemon>
					<span className='px-1'></span>
					<InlineText>My Pokemon</InlineText>
					<span className='px-1'></span>
					<InlineDiv className='bg-fontPurple text-white rounded-full px-4 py-2'>
						{own}
					</InlineDiv>
				</div>
			</div>
		</Link>
	);
};

export default FloatingButton;
