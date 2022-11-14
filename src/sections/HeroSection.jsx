import React from "react";
import Banner from "../assets/images/bannerImg.png";
import Brand1 from "../assets/images/mbTokenLogo.png";
import Brand2 from "../assets/images/metaMaskLogo.png";
import Brand3 from "../assets/images/openSeaLogo.png";

const HeroSection = () => {
	return (
		<>
			<div className='pt-10 px-4 lg:px-8 py-4 lg:py-[3rem] max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between w-full'>
				<div className='md:w-[70%] lg:w-[45%] text-center lg:text-left mx-auto'>
					<h1 className='text-[2rem] lg:text-[2.5rem] mb-8'>
						Rent a{" "}
						<span className='capitalize text-[#A02279] font-bold'>place</span>{" "}
						away from{" "}
						<span className='capitalize text-[#A02279] font-bold'>home</span> in
						the{" "}
						<span className='capitalize text-[#A02279] font-bold'>
							metaverse
						</span>
					</h1>
					<p className='lg:w-[85%] mb-8 text-sm'>
						we provide you access to luxury and affordable houses in the
						metaverse, get a chance to turn your imagination to reality at your
						comfort zone
					</p>
					<div>
						<form className='flex'>
							<input
								type='text'
								placeholder='Search for location'
								className='p-3 lg:p-4 w-[60%] outline-none border rounded-tl-[10px] rounded-bl-[10px] border-[#A3A3A3] text-xs'
							/>
							<button className='px-6 lg:py-3 w-[40%] rounded-tr-[10px] rounded-br-[10px] bg-[#A02279] text-white font-normal text-xs lg:text-sm'>
								Search
							</button>
						</form>
					</div>
				</div>
				<div className='lg:w-[45%] mt-10 lg:mt-0'>
					<img src={Banner} alt='Banner' />
				</div>
			</div>
			<div className='flex bg-[#A02279] my-2 p-2'>
				<div className="lg:w-[80%] w-full mx-auto flex justify-between items-center max-w-[1200px]">
					<img src={Brand1} alt='Brand' className="h-[12px] md:h-[20px] lg:h-[30px]" />
					<img src={Brand2} alt='Brand' className="h-[12px] md:h-[20px] lg:h-[30px]" />
					<img src={Brand3} alt='Brand' className="h-[12px] md:h-[20px] lg:h-[30px]" />
				</div>
			</div>
		</>
	);
};

export default HeroSection;
