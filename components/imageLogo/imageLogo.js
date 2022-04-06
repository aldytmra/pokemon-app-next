import Logo from '../../public/pokemon-logo.webp';
import Link from 'next/link';
import { DivLogo } from './style';
import Image from 'next/image';

const ImageLogo = () => {
	const keyStr =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

	const triplet = (e1, e2, e3) =>
		keyStr.charAt(e1 >> 2) +
		keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
		keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
		keyStr.charAt(e3 & 63);

	const rgbDataURL = (r, g, b) =>
		`data:image/gif;base64,R0lGODlhAQABAPAA${
			triplet(0, r, g) + triplet(b, 255, 255)
		}/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;
	return (
		<div className='flex w-fit md:w-fit md:justify-start text-white font-extrabold'>
			<Link href='/' passHref>
				<DivLogo>
					<Image
						className='cursor-pointer z-50'
						alt='Logo Pokomen App'
						src={Logo}
						placeholder='blur'
						layout='responsive'
						sizes='50vw'
						priority={true}
						blurDataURL={rgbDataURL(237, 181, 6)}
					/>
				</DivLogo>
			</Link>
		</div>
	);
};

export default ImageLogo;
