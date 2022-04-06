import Color from 'color-thief-react';
import { BackgCircleDiv } from './style';

export const BackgCircle = ({ imageData }) => {
	return (
		<Color src={imageData} crossOrigin='anonymous' format='hex' colorCount={4}>
			{({ data, loading }) => {
				return (
					<div>
						{loading ? (
							<BackgCircleDiv
								style={{ background: '#E9F2F4' }}
							></BackgCircleDiv>
						) : (
							<BackgCircleDiv
								style={{ background: data ?? '#E9F2F4' }}
							></BackgCircleDiv>
						)}
					</div>
				);
			}}
		</Color>
	);
};
