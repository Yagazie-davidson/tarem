import React from "react";
import Link from "next/link";
import Image from "next/image";

const page = () => {
	return (
		<div className="flex flex-col items-center justify-center  mt-14">
			<div className="flex flex-col items-center justify-center space-y-5 px-3">
				<h1 className="text-dark howdybun font-normal text-[32px] sm:text-[64px] text-center uppercase w-full max-w-[366px] sm:max-w-full">
					<span className="text-light">welcome to</span> <br /> tarem schools.
				</h1>
				<p className="font-normal text-base sm:text-[28px] sm:max-w-[900px] sm:leading-12 text-center text-dark">
					At Tarem Schools, we provide a nurturing and stimulating environment
					where children grow in confidence, curiosity, and character. Our
					balanced approach to learning encourages creativity, teamwork, and a
					lifelong love for discovery.
				</p>
				<Link href={"/contact"}>
					<button className="bg-light text-base sm:text-[32px] text-white py-3 px-4 rounded-[64px]">
						Get in Touch
					</button>
				</Link>
				<div className="flex items-center justify-center space-x-6">
					<div className="h-[160px] w-[160px] sm:w-[320px] sm:h-[320px] bg-[#FFD8B5] rounded-tl-[100px] sm:rounded-tl-[200px] rounded-br-[100px] sm:rounded-br-[200px] flex items-end overflow-hidden">
						<div className="relative h-[150px] sm:h-[300px] w-[150px] sm:w-[500px]">
							<Image
								alt=""
								src={"/little-girl-with-backpack-studio 1.svg"}
								fill
								className="object-cover"
							/>
						</div>
					</div>
					<div className="h-[160px] w-[160px] sm:w-[320px] sm:h-[320px] bg-[#FFF5BA] rounded-bl-[100px] rounded-tr-[100px] sm:rounded-bl-[200px] sm:rounded-tr-[200px] flex items-end overflow-hidden">
						<div className="relative h-[150px] sm:h-[300px] w-[150px] sm:w-[500px]">
							<Image
								alt=""
								src={"/little-boy-with-notebooks 1.svg"}
								fill
								className="object-cover"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full">
				{/* <div className="relative h-[75px] sm:hidden block">
                <Image src={"/amp-top-m.svg"} alt="top" fill className="" />
              </div>
              <div className="relative h-[75px] w-full hidden sm:block">
                <Image src={"/amp-top.svg"} alt="top" fill className="" />
              </div> */}
				<div className="bg-light my-10 py-14 w-full px-3 flex flex-col space-y-4">
					<div className="flex flex-col items-center justify-center space-y-5">
						<h1 className="text-dark howdybun font-normal text-[32px] sm:text-[64px] text-center uppercase w-full max-w-[366px] sm:max-w-full">
							<span className="text-white">VISION AND MISSION</span> <br />{" "}
							STATEMENTS.
						</h1>
						<p className="font-normal text-base sm:text-[28px] sm:max-w-[900px] sm:leading-12 text-center text-white">
							Our vision and mission shape the heart of Tarem Schools. They
							remind us of our purpose: to nurture confident learners, inspire
							creativity, and prepare each child to thrive both in school and
							beyond.
						</p>
					</div>
					<div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
						<div className="bg-dark text-white rounded-[20px] flex flex-col space-y-4 justify-center items-center px-3.5 text-center py-5">
							<div className="bg-light h-10 w-10 rounded-full flex justify-center items-center">
								<Image src={"/star.svg"} alt="" width={20} height={20} />
							</div>
							<h4 className="howdybun text-base sm:text-[40px]">Our Vision</h4>
							<p className="text-sm sm:text-2xl">
								To inspire young minds to learn, grow, and lead with confidence,
								creativity, and character nurturing a generation of curious
								thinkers and kind leaders.
							</p>
						</div>
						<div className="bg-dark text-white rounded-[20px] flex flex-col space-y-4 justify-center items-center px-3.5 text-center py-5">
							<div className="bg-light h-10 w-10 rounded-full flex justify-center items-center">
								<Image src={"/target.svg"} alt="" width={20} height={20} />
							</div>
							<h4 className="howdybun text-base sm:text-[40px]">Our Mission</h4>
							<p className="text-sm sm:text-2xl">
								To provide a caring and engaging learning environment where
								every child discovers their potential, builds strong values, and
								achieves academic excellence.
							</p>
						</div>
					</div>
					{/* content */}
				</div>
				{/* <div className="relative h-[75px] bg-[url('/amp-bottom-m.svg')] sm:bg-[url('/amp-bottom.svg')]">
                <Image src={"/amp-bottom-m.svg"} alt="top" fill className="" />
              </div>
              <div className="relative h-[75px] w-full hidden sm:block">
                <Image src={"/amp-bottom.svg"} alt="t`op" fill className="" />
              </div> */}
			</div>
			<div className="flex flex-col items-center justify-center space-y-5 px-3 pb-40">
				<h1 className="text-dark howdybun font-normal text-[32px] sm:text-[64px] text-center uppercase w-full max-w-[366px] sm:max-w-full">
					<span className="text-light">Our Teaching Philosophy</span>
				</h1>
				<p className="font-normal text-base sm:text-[28px] sm:max-w-[900px] sm:leading-12 text-center text-dark">
					At Tarem Schools, we believe that every child learns best in a joyful
					and supportive environment. Our teaching approach combines creativity,
					curiosity, and care — helping each learner grow at their own pace
					while developing strong values, critical thinking, and a lifelong love
					for learning.
				</p>
				{/* <div className="h-40 w-40">
					<Image
						alt=""
						fill
						src="/teacher.svg"
						sizes="(max-width: 768px) 10vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</div> */}
			</div>
		</div>
	);
};

export default page;
