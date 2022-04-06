import Head from 'next/head';
import { useContext, useEffect, useState } from 'react';
import FloatingButton from '../../components/floatingButton/floatingButton';
import { useRouter } from 'next/router';
import { BackgCircle } from '../../components/backgCircle/backgCircle';
import { useLazyQuery } from '@apollo/client';
import { GET_POKEMON_DETAIL } from '../../graphql/queries';
import ImageLogo from '../../components/imageLogo/imageLogo';
import Footer from '../../components/footer/footer';
import { HeaderDetail } from '../../components/headerDetail/headerDetail';
import { BtnCatch } from '../../components/btnCatch/btnCatch';
import { AboutSection } from '../../components/aboutSection/aboutSection';
import { StatsSection } from '../../components/statsSection/statsSection';
import { MovesSection } from '../../components/movesSection/movesSection';
import { ModalCatch } from '../../components/modalCatch/modalCatch';
import { ModalLoading } from '../../components/modalLoading/modalLoading';
import { Context } from '../../context';
import { UPDATE_MYPOKEMON } from '../../context/types';

function PokemonDetail() {
	const { state, dispatch } = useContext(Context);
	const [dataPokemon, setDataPokemon] = useState();
	const [active, setActive] = useState('about');
	const [imagePokemon, setImagePokemon] = useState();
	const [loading, setLoading] = useState(true);
	const [loadingCatch, setLoadingCatch] = useState(false);
	const [isShowModalCatch, setIsShowModalCatch] = useState(false);
	const [txtLoading, setTxtLoading] = useState('Process Catch Pokemon...');
	const router = useRouter();
	const { name } = router.query;
	const [getPokemon, { data }] = useLazyQuery(GET_POKEMON_DETAIL);

	useEffect(() => {
		if (name) {
			getPokemon({ variables: { name } });
			if (data) {
				const dataUsed = data.pokemon;
				setDataPokemon(dataUsed);
				setImagePokemon(
					`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${dataUsed.id}.svg`
				);
				// console.log(dataPokemon)
				setLoading(false);
			}
		}
	}, [data, name]);

	const checkOwned = (id) => {
		let count = 0;
		state.MyPokemon.forEach((element) => {
			if (element?.id === id) {
				count++;
			}
		});
		return count;
	};

	const simulateProbability = (n) => {
		return Math.random() < n;
	};

	const processCatch = () => {
		// console.log('heyhere',simulateProbability(0.5))
		setTxtLoading('Process Catch Pokemon...');
		setLoadingCatch(true);
		setTimeout(() => {
			if (simulateProbability(0.5)) {
				// Code to run if success
				setLoadingCatch(false);
				setIsShowModalCatch(true);
			} else {
				setTxtLoading('Oops Pokemon Run...');
				setTimeout(() => {
					setLoadingCatch(false);
				}, 1000);
			}
		}, 2000);
	};

	const handleCatch = (nickname) => {
		const nicknameUsed = nickname.trim().toLowerCase();
		const isFound = state.MyPokemon.find(
			(item) => item.nickname === nicknameUsed
		);
		if (nicknameUsed && !isFound) {
			let newList = [
				...state.MyPokemon,
				{
					...dataPokemon,
					nickname: nicknameUsed,
				},
			];
			dispatch({
				type: UPDATE_MYPOKEMON,
				payload: newList,
			});
			setIsShowModalCatch(false);
		} else {
			setIsShowModalCatch(false);
			setTxtLoading('Nickname not valid or duplicated...');
			setLoadingCatch(true);
			setTimeout(() => {
				setLoadingCatch(false);
				setIsShowModalCatch(true);
			}, 2000);
		}
	};

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
			<BackgCircle imageData={imagePokemon}></BackgCircle>
			<nav
				className='px-8 pt-8  lg:w-full md:w-full sm:w-full s:w-full'
				style={{ maxWidth: `1080px`, margin: 'auto' }}
			>
				<div className='container mx-auto flex flex-wrap items-center'>
					<ImageLogo />
				</div>
			</nav>
			{loadingCatch ? <ModalLoading text={txtLoading} /> : <></>}
			{isShowModalCatch ? (
				<ModalCatch
					handleClose={() => setIsShowModalCatch(false)}
					handleCatch={(nickname) => handleCatch(nickname)}
				/>
			) : (
				<></>
			)}
			<main>
				{loading || !dataPokemon ? (
					<></>
				) : (
					<div
						className='px-8 pt-4  lg:w-full md:w-full sm:w-full s:w-full'
						style={{ maxWidth: `1080px`, margin: 'auto' }}
					>
						<div className='container mx-auto flex flex-wrap items-center'>
							<div className='w-full py-2 lg:w-full md:w-full sm:w-full s:w-full'>
								<HeaderDetail
									item={dataPokemon}
									owned={checkOwned(dataPokemon?.id) ?? 0}
								/>
							</div>
						</div>
					</div>
				)}
				<BtnCatch handleClick={processCatch} />
				<div className='inset-x-0 mt-4 flex justify-center z-50 '>
					<div
						className={
							(active === 'about' ? 'bg-orange' : 'bg-white') +
							' w-20 text-center m-3 drop-shadow-md px-4 py-2 rounded-full cursor-pointer'
						}
						onClick={() => setActive('about')}
					>
						About
					</div>
					<div
						className={
							(active === 'stats' ? 'bg-orange' : 'bg-white') +
							' w-20 text-center m-3 drop-shadow-md px-4 py-2 rounded-full cursor-pointer'
						}
						onClick={() => setActive('stats')}
					>
						Stats
					</div>
					<div
						className={
							(active === 'moves' ? 'bg-orange' : 'bg-white') +
							' w-20 text-center m-3 drop-shadow-md px-4 py-2 rounded-full cursor-pointer'
						}
						onClick={() => setActive('moves')}
					>
						Moves
					</div>
				</div>
				<div className='mb-4'>
					{loading || !dataPokemon ? (
						<></>
					) : active === 'about' ? (
						<AboutSection dataPokemon={dataPokemon} />
					) : active === 'stats' ? (
						<StatsSection dataPokemon={dataPokemon} />
					) : (
						<MovesSection dataPokemon={dataPokemon} />
					)}
				</div>
			</main>
			<FloatingButton own={state.MyPokemon.length ?? 0} />
			<div className='mb-20'>
				<Footer />
			</div>
		</div>
	);
}

export default PokemonDetail;
