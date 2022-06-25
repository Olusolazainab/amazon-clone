
import React, { useState, useEffect } from 'react';
import { Data } from './components/Data';
import './Home.css';
import Product from './Product';
import { ArrowForwardIosOutlined, ArrowBackIosOutlined } from '@mui/icons-material';


const Home = ({slides}) => {
	const [current, setCurrent] = useState(0)

const length = slides.length


	return (
		<section>
		<div className='home'>
			<div className='home-container'>
			
				<div>
{Data.map((slide, index) => {
	return(
		<div>
			{index === current &&  (
				<img className='home-image' src={slide.image} alt='home-pix'/>
			)}
		</div>
	)
})}

				</div>

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
					 <Product 
					id='1002'
					title='Headset Multisport Smartwatch - Military Durability, Sapphire Glass, Wrist-based Heart Rate, Long Battery Life, Navigation - Best for Outdoor Sports.'
					 price={499}
					 image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Karu/2021/June/Karu_Quad_Headset.jpg'
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
					<Product
					id='1005'
					title='X BOX with 3.5mm Headphone Plug - White'
					price={52}
					image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Karu/2021/June/Karu_LP_XBOX2.png'
					rating={4}
					/>
				</div>
				<div className='home-row'>
					<Product 
					id='1006'
					title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
					price={1094.98}
					rating={4}
					image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
				  
					/>
					<Product 
					id='1006'
					title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con"
					price={298.98}
					rating={4}
					image="https://m.media-amazon.com/images/I/61-PblYntsL._AC_UY218_.jpg"
				  
					/>
				</div>
			</div>
		</div>
		<div className='arrow-button'>
         <ArrowBackIosOutlined className='left-btn'  onClick={()=> setCurrent(current === length - 1 ? 0 : current +1 )} />
    <ArrowForwardIosOutlined className='right-btn'  onClick={()=> setCurrent(current === 0 ? length - 1 : current -1 )} />
   
  </div>
  </section>
	);
};

export default Home;
