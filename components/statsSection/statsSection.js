export const StatsSection = ({ dataPokemon }) => {
	return (
		<div className='inset-x-0 flex justify-center z-50 '>
			<div className='w-full  m-3 bg-white drop-shadow-md p-8 rounded-xl'>
				<div className='p-2 text-xl text-center'>Pokedex Stats</div>
				<div>
					<div className='grid grid-cols-3 mb-2'>
						<div className='my-auto'>HP</div>
						<div className='col-span-2 my-auto flex justify-end'>
							<b>
								{dataPokemon.stats.find((item) => item.stat.name === 'hp')
									?.base_stat ?? ''}
							</b>
						</div>
					</div>
					<div className='grid grid-cols-1 mb-2'>
						<div className='col-span-2 my-auto'>
							<div className='w-full border border-fontPurple rounded-full h-2.5 dark:bg-white'>
								<div
									className='bg-fontPurple h-full rounded-full'
									style={{
										width: `${
											dataPokemon.stats.find((item) => item.stat.name === 'hp')
												?.base_stat ?? ''
										}%`,
									}}
								></div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className='grid grid-cols-3 mb-2'>
						<div className='my-auto'>Attack</div>
						<div className='col-span-2 my-auto flex justify-end'>
							<b>
								{dataPokemon.stats.find((item) => item.stat.name === 'attack')
									?.base_stat ?? ''}
							</b>
						</div>
					</div>
					<div className='grid grid-cols-1 mb-2'>
						<div className='col-span-2 my-auto'>
							<div className='w-full border border-fontPurple rounded-full h-2.5 dark:bg-white'>
								<div
									className='bg-fontPurple h-full rounded-full'
									style={{
										width: `${
											dataPokemon.stats.find(
												(item) => item.stat.name === 'attack'
											)?.base_stat ?? ''
										}%`,
									}}
								></div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className='grid grid-cols-3 mb-2'>
						<div className='my-auto'>Defense</div>
						<div className='col-span-2 my-auto flex justify-end'>
							<b>
								{dataPokemon.stats.find((item) => item.stat.name === 'defense')
									?.base_stat ?? ''}
							</b>
						</div>
					</div>
					<div className='grid grid-cols-1 mb-2'>
						<div className='col-span-2 my-auto'>
							<div className='w-full border border-fontPurple rounded-full h-2.5 dark:bg-white'>
								<div
									className='bg-fontPurple h-full rounded-full'
									style={{
										width: `${
											dataPokemon.stats.find(
												(item) => item.stat.name === 'defense'
											)?.base_stat ?? ''
										}%`,
									}}
								></div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className='grid grid-cols-3 mb-2'>
						<div className='my-auto'>Special-attack</div>
						<div className='col-span-2 my-auto flex justify-end'>
							<b>
								{dataPokemon.stats.find(
									(item) => item.stat.name === 'special-attack'
								)?.base_stat ?? ''}
							</b>
						</div>
					</div>
					<div className='grid grid-cols-1 mb-2'>
						<div className='col-span-2 my-auto'>
							<div className='w-full border border-fontPurple rounded-full h-2.5 dark:bg-white'>
								<div
									className='bg-fontPurple h-full rounded-full'
									style={{
										width: `${
											dataPokemon.stats.find(
												(item) => item.stat.name === 'special-attack'
											)?.base_stat ?? ''
										}%`,
									}}
								></div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className='grid grid-cols-3 mb-2'>
						<div className='my-auto'>Special-defence</div>
						<div className='col-span-2 my-auto flex justify-end'>
							<b>
								{dataPokemon.stats.find(
									(item) => item.stat.name === 'special-defense'
								)?.base_stat ?? ''}
							</b>
						</div>
					</div>
					<div className='grid grid-cols-1 mb-2'>
						<div className='col-span-2 my-auto'>
							<div className='w-full border border-fontPurple rounded-full h-2.5 dark:bg-white'>
								<div
									className='bg-fontPurple h-full rounded-full'
									style={{
										width: `${
											dataPokemon.stats.find(
												(item) => item.stat.name === 'special-defense'
											)?.base_stat ?? ''
										}%`,
									}}
								></div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className='grid grid-cols-3 mb-2'>
						<div className='my-auto'>Speed</div>
						<div className='col-span-2 my-auto flex justify-end'>
							<b>
								{dataPokemon.stats.find((item) => item.stat.name === 'speed')
									?.base_stat ?? ''}
							</b>
						</div>
					</div>
					<div className='grid grid-cols-1 mb-2'>
						<div className='col-span-2 my-auto'>
							<div className='w-full border border-fontPurple rounded-full h-2.5 dark:bg-white'>
								<div
									className='bg-fontPurple h-full rounded-full'
									style={{
										width: `${
											dataPokemon.stats.find(
												(item) => item.stat.name === 'speed'
											)?.base_stat ?? ''
										}%`,
									}}
								></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
