import styled from '@emotion/styled';
import { FaSearch } from 'react-icons/fa';

export const SearchContainer = styled('div')`
	width: 100%;
	position: relative;
	margin: auto;
	@media (min-width: 425px) {
		width: 95%;
	}
	@media (min-width: 600px) {
		margin-bottom: 35px;
		margin-top: 25px;
		width: 200%;
	}
`;

export const InputSearch = styled('input')`
	width: 100%;
	padding: 10px 15px;
	padding-left: 20px;
	box-sizing: border-box;
	background: #e9f2f4;
	border-radius: 10px;
	font-size: 18px;
	color: #5f6180;
	outline: none;
	&::placeholder {
		color: #5f6180;
	}
`;
export const IconSearch = styled(FaSearch)`
	fill: #5f6180;
	position: absolute;
	top: 25%;
	right: 5%;
`;
