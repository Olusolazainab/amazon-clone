import React from 'react';
import './Home.css';
import Product from './Product';

const Home = () => {
	return (
		<div className='home'>
			<div className='home-container'>
				<img
					className='home-image'
					src='https://m.media-amazon.com/images/I/61-8rBAD68L._SX3000_.jpg'
					alt='pix'
				/>
				<div className='home-row'>
					<Product
						id='1001'
						title='Apple iPhone 12 Pro Max, 256GB, Pacific Blue - Unlocked'
						price={29.99}
						image='https://m.media-amazon.com/images/I/61l3+VGfj2L._AC_SY175_.jpg'
						rating={5}
					/>
					<Product 
					id='1002'
					title='Polar Grit X Pro - GPS Multisport Smartwatch - Military Durability, Sapphire Glass, Wrist-based Heart Rate, Long Battery Life, Navigation - Best for Outdoor Sports.'
					 price={499}
					 image='https://m.media-amazon.com/images/I/71QhaEXJE9L._AC_UY218_.jpg'
					 rating={4} />
				</div>
				<div className='home-row'>
					<Product 
					id='1003'
					title='Foam Game Plus Pluck Tray Storage Case (4 Inch)'
					price={14}
					image='https://m.media-amazon.com/images/I/61xmuUgJRML._AC_SY175_.jpg'
					rating={5}
					/>
					<Product 
					id='1004'
					title='DualShock 4 Wireless Controller for PlayStation 4 - Jet Black'
					price={59}
					image='https://m.media-amazon.com/images/I/61IG46p-yHL._AC_UL320_.jpg'
					rating={5}
					/>
					<Product
					id='1005'
					title='Apple EarPods with 3.5mm Headphone Plug - White'
					price={52}
					image='https://m.media-amazon.com/images/I/410eivKV4DL._AC_UL320_.jpg'
					rating={4}
					/>
				</div>
				<div className='home-row'>
					<Product 
					id='1006'
					title='Acer Chromebook 314, Intel Celeron N4000, 14" Full HD Display, 4GB LPDDR4, 64GB eMMC, Gigabit WiFi, Google Chrome, CB314-1H-C884'
					price={260}
					image='https://m.media-amazon.com/images/I/71Erq-PlhhL._AC_SL1500_.jpg'
					rating={4}
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
