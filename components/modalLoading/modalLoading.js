import { ImageLoading } from './style';

export const ModalLoading = ({ text }) => {
	return (
		<div
			tabIndex='-1'
			className='overflow-y-auto overflow-x-hidden fixed top-1/4 right-0 left-0 z-50  h-modal md:h-full'
		>
			<div className='relative p-4 w-full max-w-md h-full md:h-auto'>
				<div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
					<div className='flex justify-end p-2'></div>
					<div className='p-6 pt-0 text-center'>
						<div className='flex justify-center motion-safe:animate-spin-slow'>
							<ImageLoading color='#fff' size='200px' />
						</div>
						<h3 className='mb-2 text-lg font-normal text-gray-500 text-fontPurple'>
							{text}
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
};
