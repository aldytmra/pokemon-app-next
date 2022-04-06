export const AboutSection = ({ dataPokemon }) => {
	const capitalize = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	return (
		<div className='inset-x-0 flex justify-center z-50 '>
			<div className='w-full  m-3 bg-white drop-shadow-md p-8 rounded-xl'>
				<div className='p-2 text-xl text-center'>Pokedex Data</div>
				<div className='p-1 grid grid-cols-3'>
					<div>Types</div>
					<div className='col-span-2'>
						{dataPokemon?.types.map((item, index) => (
							<span key={index} className='px-2 m-2 border rounded-full'>
								{capitalize(item.type.name)}
							</span>
						))}
					</div>
					<div></div>
				</div>
				<div className='p-1 grid grid-cols-3'>
					<div>Abilities</div>
					<div className='col-span-2'>
						{dataPokemon?.abilities.map((item, index) => (
							<span key={index} className='px-2 m-2 border rounded-full'>
								{capitalize(item.ability.name)}
							</span>
						))}
					</div>
					<div></div>
				</div>
				<div className='p-1 grid grid-cols-3'>
					<div>Weight</div>
					<div className='col-span-2'>
						<span className='px-2 m-2'>{dataPokemon.weight}</span>
					</div>
					<div></div>
				</div>
				<div className='p-1 grid grid-cols-3'>
					<div>Height</div>
					<div className='col-span-2'>
						<span className='px-2 m-2'>{dataPokemon.height}</span>
					</div>
					<div></div>
				</div>
				<div className='p-1 grid grid-cols-3'>
					<div>Experience</div>
					<div className='col-span-2'>
						<span className='px-2 m-2'>{dataPokemon.base_experience}</span>
					</div>
					<div></div>
				</div>
			</div>
		</div>
	);
};
