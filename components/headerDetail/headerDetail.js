import Image from 'next/image';
import {
	TextNumber,
	TextName,
	ContainerList,
	ContainerBackgImg,
	BackIimg,
} from './style';

export const HeaderDetail = ({
	item,
	owned,
	isMyPokemonPage = false,
	handleRelease = () => {},
}) => {
	const pad = (num, size) => {
		num = num.toString();
		while (num.length < size) num = '0' + num;
		return num;
	};
	const capitalize = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	return (
		<div>
			<ContainerList>
				<TextNumber>{pad(item.id ?? 0, 4)}</TextNumber>
				<TextName>{capitalize(item.name ?? '')}</TextName>
			</ContainerList>
			<div>
				<ContainerList>
					<ContainerBackgImg>
						<BackIimg color='#fff' size='600px'></BackIimg>
					</ContainerBackgImg>
					<div className='flex items-center justify-center'>
						<Image
							alt={item.name}
							src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item.id}.svg`}
							width={250}
							height={250}
							placeholder='blur'
							priority={true}
							blurDataURL={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item.id}.svg`}
						/>
					</div>
				</ContainerList>
			</div>
		</div>
	);
};
