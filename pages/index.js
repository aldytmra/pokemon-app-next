import Head from 'next/head';
import { useQuery } from '@apollo/client';
import { GET_POKEMONS } from '../graphql/queries';
import { useContext, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Color from 'color-thief-react';
import { SkeletonCardList } from '../components/cardList/skeletonCardList';
import Link from 'next/link';
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/navbar';
import FloatingButton from '../components/floatingButton/floatingButton';
import CardList from '../components/cardList/cardList';
import { Context } from '../context';

function Index() {
	const { state } = useContext(Context);
	const [totalData, setTotalData] = useState(0);
	const [offset, setOffset] = useState(0);
	const [limit, setLimit] = useState(5);
	const [allData, setAllData] = useState();
	const [dataFiltered, setDataFiltered] = useState();
	const [loadingData, setLoadingData] = useState(false);
	const [hasNextPage, setHasNextPage] = useState(false);
	const { loading, data, fetchMore } = useQuery(GET_POKEMONS, {
		variables: {
			limit: limit,
			offset: offset,
		},
	});

	const loadMore = async () => {
		try {
			if (hasNextPage) {
				const response = await fetchMore({
					variables: {
						limit: limit,
						offset: offset + 5,
					},
				});
				const dataPokemon = response?.data?.pokemons;

				setOffset(offset + 5);
				setLimit(limit);
				if (allData.length) {
					setAllData([...allData, ...dataPokemon.results]);
					setDataFiltered([...dataFiltered, ...dataPokemon.results]);
				} else {
					setAllData([...dataPokemon.results]);
					setDataFiltered([...dataPokemon.results]);
				}
				setHasNextPage(dataPokemon.next ? true : false);
			}
			setLoadingData(false);
		} catch (error) {
			// console.log(error)
			setLoadingData(false);
		}
	};

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

	const checkOwned = (id) => {
		let count = 0;
		state.MyPokemon.forEach((element) => {
			if (element?.id === id) {
				count++;
			}
		});
		return count;
	};

	useEffect(() => {
		if (loading) {
			setLoadingData(true);
		} else {
			setAllData([...data?.pokemons?.results]);
			setDataFiltered([...data?.pokemons?.results]);
			setHasNextPage(data?.pokemons?.next ? true : false);
			setTotalData(data?.pokemons?.count);
			setLoadingData(false);
		}
	}, [loading]);

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
				{!loadingData && dataFiltered ? (
					<InfiniteScroll
						dataLength={totalData}
						next={loadMore}
						hasMore={false}
						loader={<h4>Loading...</h4>}
						onScroll={loadMore}
						scrollableTarget='scrollableDiv'
						className='mt-2 grid gap-2 md:gap-2 grid-cols-1 sm:grid-rows-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3'
					>
						{dataFiltered.map((item, index) => (
							<Color
								key={index}
								src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item.id}.svg`}
								crossOrigin='anonymous'
								format='hex'
								colorCount={4}
							>
								{({ data, loading }) => {
									return (
										<div className='flex  w-full px-8 py-2 lg:w-full md:w-full sm:w-full s:w-full'>
											<Link
												href={`/pokemon/${item.name.toLowerCase()}`}
												passHref
											>
												<div
													className='p-4 rounded-2xl bg-mygray overflow-hidden shadow-lg items-stretch h-full w-full cursor-pointer'
													style={{ background: data }}
												>
													{loading ? (
														<SkeletonCardList />
													) : (
														<CardList
															item={item}
															owned={checkOwned(item?.id) ?? 0}
														/>
													)}
												</div>
											</Link>
										</div>
									);
								}}
							</Color>
						))}
					</InfiniteScroll>
				) : (
					<div className='grid grid-cols-1 gap-4 flex items-center justify-center w-full px-8 py-2 lg:w-full md:w-full sm:w-full s:w-full'>
						{[...Array(limit)].map((e, i) => (
							<div
								key={i}
								className='p-4 rounded-2xl bg-white overflow-hidden shadow-lg items-stretch h-full w-full'
							>
								<SkeletonCardList />
							</div>
						))}
					</div>
				)}
			</main>
			<FloatingButton own={state.MyPokemon.length ?? 0} />
			<div className='mb-20'>
				<Footer />
			</div>
		</div>
	);
}

export default Index;
