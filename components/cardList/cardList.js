import Image from 'next/image';
import Link from 'next/link';
import {
	TextNumber,
	TextName,
	TextOwned,
	ContainerList,
	ContainerBackgImg,
	BackIimg,
	BtnRelease,
	TextNameAdded,
	DivImage,
} from './style';

const CardList = ({
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
		<div className='grid grid-cols-2 gap-4'>
			<ContainerList>
				<TextNumber>{pad(item.id, 4)}</TextNumber>
				<TextName>{capitalize(item.name)}</TextName>

				{isMyPokemonPage ? (
					<div>
						<TextNameAdded>{capitalize(item.nickname)}</TextNameAdded>
						<BtnRelease
							onClick={() => {
								handleRelease(item.nickname);
							}}
						>
							RELEASE
						</BtnRelease>
					</div>
				) : (
					<TextOwned>Owned : {owned}</TextOwned>
				)}
			</ContainerList>
			<div>
				<ContainerList>
					<ContainerBackgImg>
						<BackIimg color='#fff' size='200px'></BackIimg>
					</ContainerBackgImg>
					{isMyPokemonPage ? (
						<Link href={`/pokemon/${item.name.toLowerCase()}`} passHref>
							<DivImage className='m-4'>
								<Image
									alt={item.name}
									src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item.id}.svg`}
									placeholder='blur'
									blurDataURL={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item.id}.svg`}
									priority={true}
									layout='fill'
									sizes='50vw'
									className='cursor-pointer'
								/>
							</DivImage>
						</Link>
					) : (
						<DivImage className='m-4'>
							<Image
								alt={item.name}
								src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item.id}.svg`}
								placeholder='blur'
								priority={true}
								layout='fill'
								sizes='50vw'
								blurDataURL={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item.id}.svg`}
							/>
						</DivImage>
					)}
				</ContainerList>
			</div>
		</div>
	);
};

export default CardList;
