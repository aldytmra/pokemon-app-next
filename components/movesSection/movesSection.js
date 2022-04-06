export const MovesSection = ({ dataPokemon }) => {
	const capitalize = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	return (
		<div className='inset-x-0 flex justify-center z-50 '>
			<div className='w-full  m-3 bg-white drop-shadow-md p-8 rounded-xl'>
				<div className='p-2 text-xl text-center'>Pokedex Moves</div>
				<div className='grid grid-cols-2'>
					{dataPokemon?.moves.map((item, index) => (
						<span
							key={index}
							className='px-2 m-2 border rounded-full text-center'
						>
							{capitalize(item.move.name)}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};
