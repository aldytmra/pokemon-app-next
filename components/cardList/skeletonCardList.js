import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import {
	ContainerList,
	ContainerBackgImg,
	BackIimg,
	SkeletonImage,
} from './style';

export const SkeletonCardList = () => {
	return (
		<div className='grid grid-cols-2 gap-4'>
			<ContainerList className='mt-2'>
				<div className='h-10'>
					<Skeleton height={20} width={'100%'} />
				</div>
				<div className='h-10'>
					<Skeleton height={20} width={'100%'} />
				</div>
				<div className='h-10'>
					<Skeleton height={20} width={'100%'} />
				</div>
			</ContainerList>
			<div>
				<ContainerList>
					<ContainerBackgImg>
						<BackIimg color='#fff' size='200px'></BackIimg>
					</ContainerBackgImg>
					<SkeletonImage></SkeletonImage>
				</ContainerList>
			</div>
		</div>
	);
};
