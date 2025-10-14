import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navigation = () => {
	return (
		<div className="bg-dark text-white py-8 px-2 sm:px-14">
			<div className="flex items-center space-x-10 sm:space-x-20">
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
				<ul className="flex space-x-5 sm:space-x-10 [&>li]:font-medium [&>li]:text-base sm:[&>li]:text-2xl">
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
			</div>
		</div>
	);
};

export default Navigation;
