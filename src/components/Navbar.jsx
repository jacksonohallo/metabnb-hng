import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavbarData } from "../data/NavbarData";
import Logo from "../assets/images/Logo.png";
import { BiMenu } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { ModalContextUse } from "../context/ModalContext";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const { setShowModal } = ModalContextUse();

	const handleNav = () => {
		setNav(!nav);
	};
	
	const checkModal = () =>{
		setNav(!nav);
		setShowModal(true)

	}

	return (
		<div className='relative' id="top">
			<div className='px-4 lg:px-8 py-4 flex justify-between items-center max-w-[1200px] mx-auto'>
				<div className='flex items-center'>
					<Link to='/'>
						<img
							src={Logo}
							alt='Logo'
							className='h-[15px] md:h-[20px] lg:h-[30px]'
						/>
					</Link>
				</div>
				<span className='text-[1.3rem] md:hidden' onClick={handleNav}>
					<BiMenu />
				</span>
				<div className='w-[40%] justify-between hidden md:flex text-sm'>
					{NavbarData.map((item, id) => (
						<Link to={item.link} key={id}>
							{item.name}
						</Link>
					))}
				</div>
				<button
					onClick={() => setShowModal(true)}
					className='px-6 py-3 rounded-[10px] bg-[#A02279] text-white font-normal text-xs lg:text-sm hidden md:flex'>
					Connect Wallet
				</button>
			</div>
			<div
				className={`p-4 text-white bg-[#A02279] fixed top-0 ${
					nav ? "left-0" : "left-[100%]"
				} duration-300 h-screen w-full overflow-hidden text-white`}>
				<div className='flex justify-end mb-[2rem]'>
					<span className='text-[1.3rem]' onClick={handleNav}>
						<FaTimes />
					</span>
				</div>
				<div className='flex flex-col items-center'>
					{NavbarData.map((item, id) => (
						<Link
							onClick={handleNav}
							to={item.link}
							key={id}
							className='py-4 text-[1.3rem] font-light'>
							{item.name}
						</Link>
					))}
					<button
						onClick={checkModal}
						className='mt-4 py-4 px-8 text-[1.1rem] font-light bg-white text-[#a02279] rounded-[10px]'>
						Connect Wallet
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;