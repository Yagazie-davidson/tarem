import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<div>
			<div className="bg-dark text-white flex flex-col justify-center items-center w-full pt-16">
				<h3 className="font-normal howdybun text-2xl text-center">
					We’d Love to Hear From You!
				</h3>
				<p className="font-normal text-base mt-6 mb-14 text-center px-3">
					Have a question about admissions, programs, or visits? Our team is
					always happy to help. Send us an email and we’ll get back to you as
					soon as possible!
				</p>
				<div className="bg-white  py-14 mx-3 rounded-[349px] flex flex-col space-y-6 justify-center items-center w-full">
					<p className="text-[#909090] font-normal text-base sm:text-[32px]">
						What is your Question?
					</p>
					<Link href={"/contact"}>
						<button className="bg-light text-base sm:text-[32px] text-white py-3 px-4 rounded-[64px]">
							Get in Touch
						</button>
					</Link>
				</div>
				<div className="relative h-[100px] w-full">
					<Image
						src={"/amp-top-m.svg"}
						alt="top"
						fill
						className="object-cover"
					/>
				</div>
			</div>
			<div className="bg-white text-dark pb-16">
				{/* <div className="relative -mt-1 h-[80px] w-full">
					<Image src={"/amp-bottom-m.svg"} alt="top" fill className="" />
				</div> */}
				<div className="flex flex-col pt-20 items-center justify-center space-y-11 px-6">
					<Link href={"/"} className="flex items-center space-x-4">
						<Image
							alt="Tarem Schools logo"
							src={"/logo.svg"}
							width={60}
							height={48}
						/>
						<h2 className="font-normal text-[20px] sm:text-[40px] leading-6 sm:leading-12">
							Tarem <br /> Schools
						</h2>
					</Link>
					<ul className="flex space-x-10 [&>li]:font-medium [&>li]:text-base">
						<li>
							<Link href={"/"}>Home</Link>
						</li>
						<li>
							<Link href={"/about"}>About</Link>
						</li>
						<li>
							<Link href={"/contact"}>Contact Us</Link>
						</li>
					</ul>
					<div className="border-b w-full border-[#C8C8C8]"></div>
					<p>Copyright © 2025 Tarem Schools</p>
				</div>
			</div>
			{/* <div className="block sm:hidden">
				<div className="relative h-[75px]">
					<Image src={"/amp-top-m.svg"} alt="top" fill className="" />
				</div>
				<div className="relative h-[75px]">
					<Image src={"/amp-bottom-m.svg"} alt="top" fill className="" />
				</div>
			</div>
			<div className="hidden sm:block">
				<div className="relative h-[75px]">
					<Image src={"/amp-top.svg"} alt="top" fill className="" />
				</div>
				<div className="relative h-[75px]">
					<Image src={"/amp-bottom.svg"} alt="top" fill className="" />
				</div>
			</div> */}
		</div>
	);
};

export default Footer;
