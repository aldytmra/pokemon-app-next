import Head from 'next/head';
import { useContext, useEffect, useState } from 'react';
import Color from 'color-thief-react';
import { SkeletonCardList } from '../components/cardList/skeletonCardList';
import FloatingButton from '../components/floatingButton/floatingButton';
import Navbar from '../components/navbar/navbar';
import Link from 'next/link';
import Footer from '../components/footer/footer';
import CardList from '../components/cardList/cardList';
import { UPDATE_MYPOKEMON } from '../context/types';
import { Context } from '../context';

function MyPokemon() {
	const { state, dispatch } = useContext(Context);
	const [dataFiltered, setDataFiltered] = useState();

	const pad = (num, size) => {
		num = num.toString();
		while (num.length < size) num = '0' + num;
		return num;
	};

	const handleSearch = (str) => {
		if (str) {
			const dataUsed = allData.filter(
				(item) =>
					item.name.includes(str) || pad(item.id.toString(), 4).includes(str)
			);
			setDataFiltered(dataUsed);
		} else {
			setDataFiltered(allData);
		}
	};

	const handleRelease = (data) => {
		let newList = [...state.MyPokemon];
		newList = newList.filter((item) => item.nickname != data);

		setDataFiltered(newList);
		dispatch({
			type: UPDATE_MYPOKEMON,
			payload: newList,
		});
	};

	useEffect(() => {
		setDataFiltered(state.MyPokemon);
	}, [state.MyPokemon]);

	return (
		<div
			id='scrollableDiv'
			className='relative h-screen overflow-auto'
			style={{ maxWidth: '1080px', margin: 'auto' }}
		>
			<Head>
				<title>Pokemon App</title>
				<meta name='description' content='Pokemon App' />
				<link rel='icon' href='/mylogo.ico' />
				<link rel='preconnect' href='https://raw.githubusercontent.com' />
			</Head>
			<Navbar handleSearch={(e) => handleSearch(e)} />
			<main>
				<div>
					{dataFiltered ? (
						dataFiltered.length > 0 ? (
							dataFiltered.map((item, index) => (
								<Color
									key={index}
									src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item.id}.svg`}
									crossOrigin='anonymous'
									format='hex'
									colorCount={4}
								>
									{({ data, loading }) => {
										return (
											<div className='flex items-center justify-center w-full px-8 py-2 lg:w-full md:w-full sm:w-full s:w-full'>
												<div
													className='p-4 rounded-2xl bg-mygray overflow-hidden shadow-lg items-stretch h-full w-full'
													style={{ background: data }}
												>
													{loading ? (
														<SkeletonCardList />
													) : (
														<CardList
															item={item}
															data={data}
															isMyPokemonPage={true}
															handleRelease={(data) => handleRelease(data)}
														/>
													)}
												</div>
											</div>
										);
									}}
								</Color>
							))
						) : (
							<div className='grid flex justify-items-center'>
								<p className='text-center p-8'>Your pocket is empty.</p>
								<Link href='/' passHref>
									<div className=' rounded-full bg-orange w-fit text-black px-4 py-2 mb-8'>
										Catch a Pokemon
									</div>
								</Link>
							</div>
						)
					) : (
						<div className='grid grid-cols-1 gap-4 flex items-center justify-center w-full px-8 py-2 lg:w-full md:w-full sm:w-full s:w-full'>
							{[...Array(5)].map((e, i) => (
								<div
									key={i}
									className='p-4 rounded-2xl bg-white overflow-hidden shadow-lg items-stretch h-full w-full'
								>
									<SkeletonCardList />
								</div>
							))}
						</div>
					)}
				</div>
			</main>
			<FloatingButton own={state.MyPokemon.length ?? 0} />
			<Footer />
		</div>
	);
}

export default MyPokemon;
