import Image from 'next/image';
import styles from '../../styles/Home.module.css';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className='grid flex justify-center'>
				<a
					href='https://aldytamara.com'
					target='_blank'
					rel='noopener noreferrer'
					className='mb-2'
				>
					Created By &nbsp;<span className='italic'>Aldy Tamara</span>,
				</a>

				<a
					href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'
				>
					Powered by
					<span className={styles.logo}>
						<Image
							src='/vercel.svg'
							alt='Vercel Logo'
							placeholder='blur'
							blurDataURL={'/vercel.svg'}
							layout='fill'
							priority={true}
							sizes='50vw'
						/>
					</span>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
