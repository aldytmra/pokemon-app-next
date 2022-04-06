import styled from '@emotion/styled';
import { MdCatchingPokemon } from 'react-icons/md';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const ContainerList = styled('div')`
	position: relative;
`;

export const TextNumber = styled('p')`
	color: white;
	font-size: 20px;
	text-shadow: 3px 3px 0 #5d5f7d, -1px -1px 0 #5d5f7d, 1px -1px 0 #5d5f7d,
		-1px 1px 0 #5d5f7d, 1px 1px 0 #5d5f7d;
`;

export const TextName = styled('p')`
	color: white;
	font-size: 24px;
	letter-spacing: 0.1rem;
	line-height: 2rem;
	text-shadow: 3px 3px 0 #5d5f7d, -1px -1px 0 #5d5f7d, 1px -1px 0 #5d5f7d,
		-1px 1px 0 #5d5f7d, 1px 1px 0 #5d5f7d;
`;

export const TextNameAdded = styled('p')`
	color: white;
	font-size: 20px;
	letter-spacing: 0.1rem;
	font-weight: bold !important;
	line-height: 1.5rem;
	font-style: italic;
	text-shadow: 3px 3px 0 #5d5f7d, -1px -1px 0 #5d5f7d, 1px -1px 0 #5d5f7d,
		-1px 1px 0 #5d5f7d, 1px 1px 0 #5d5f7d;
`;

export const TextOwned = styled('div')`
	position: absolute;
	bottom: 3px;
	color: white;
	align-self: end;
	vertical-align: bottom;
	background: #5f6180;
	padding: 5px 10px;
	font-size: 16px;
	border-radius: 30px;
	width: fit-content;
`;

export const BtnRelease = styled('div')`
	position: absolute;
	bottom: 3px;
	color: white;
	align-self: end;
	vertical-align: bottom;
	background: #f80314;
	padding: 5px 20px;
	font-size: 16px;
	border-radius: 30px;
	width: fit-content;
	cursor: pointer;
	z-index: 49;
`;

export const ContainerBackgImg = styled('div')`
	position: absolute;
	right: -10%;
	top: -10%;
`;

export const BackIimg = styled(MdCatchingPokemon)`
	fill: #fff;
	position: absolute;
	top: -20px;
	right: -40px;
	opacity: 0.1;
`;

export const SkeletonImage = styled(Skeleton)`
	width: 120px;
	height: 120px;
	right: -10px;
	border-radius: 50%;
`;

export const DivImage = styled('div')`
	width: 100px;
	height: 100px;
	position: relative;
`;
