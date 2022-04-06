import { useState } from 'react';

export const ModalCatch = ({
	handleClose = () => {},
	handleCatch = () => {},
}) => {
	const [nickname, setNickname] = useState('');
	return (
		<div
			tabIndex='-1'
			className='overflow-y-auto overflow-x-hidden fixed top-1/4 right-0 left-0 z-50  h-modal md:h-full'
		>
			<div className='relative p-4 w-full max-w-md h-full md:h-auto'>
				<div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
					<div className='flex justify-end p-2'>
						<button
							type='button'
							onClick={() => handleClose()}
							className='cursor-pointer text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white'
							data-modal-toggle='popup-modal'
						>
							<svg
								className='w-5 h-5'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
									clipRule='evenodd'
								></path>
							</svg>
						</button>
					</div>
					<div className='p-6 pt-0 text-center'>
						<h3 className='mb-2 text-lg font-normal text-fontPurple dark:text-gray-400'>
							Success! Let&lsquo;s give him a nickname
						</h3>
						<div className='mb-4'>
							<label
								htmlFor='email'
								className='block mb-2 text-md font-medium text-gray-900 dark:text-gray-300'
							>
								Pokemon Nickname :{' '}
							</label>
							<input
								onChange={(e) => setNickname(e.target.value)}
								className='bg-white border border-orange text-fontPurple text-sm rounded-lg focus:ring-fontPurple focus:border-fontPurple block w-full p-2.5 dark:bg-gray-600 dark:border-fontPurple dark:placeholder-fontPurple dark:text-fontPurple'
								placeholder='Nickname'
								required
							></input>
						</div>
						<div className='grid grid-cols-2 gap-4'>
							<div
								onClick={() => handleCatch(nickname)}
								className='cursor-pointer flex justify-center text-white bg-orange hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg inline-flex text-sm items-center px-5 py-2.5 text-center mr-2'
							>
								Collect
							</div>
							<div
								onClick={() => handleClose()}
								className='cursor-pointer flex justify-center text-fontPurple bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 inline-flex py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-fontPurple dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600'
							>
								Release
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
