import styled from '@emotion/styled';
import { MdCatchingPokemon } from 'react-icons/md';

export const IconPokemon = styled(MdCatchingPokemon)`
	fill: #5d5f7d;
	display: inline;
`;

export const InlineText = styled('p')`
	display: inline;
	color: white;
	text-shadow: 3px 3px 0 #5d5f7d, -1px -1px 0 #5d5f7d, 1px -1px 0 #5d5f7d,
		-1px 1px 0 #5d5f7d, 1px 1px 0 #5d5f7d;
`;

export const InlineDiv = styled('div')`
	display: inline;
	background: #1c193b;
`;
