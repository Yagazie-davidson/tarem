import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center px-3 mt-14">
			<div className="flex flex-col items-center justify-center space-y-5">
				<h1 className="text-dark howdybun font-normal text-[32px] sm:text-[64px] text-center uppercase w-full max-w-[366px] sm:max-w-full">
					<span className="text-light">Nurturing Bright Minds at</span> <br />{" "}
					tarem schools.
				</h1>
				<p className="font-normal text-base sm:text-[28px] sm:max-w-[900px] sm:leading-12 text-center text-dark">
					A safe, fun, and inspiring environment where children learn through
					play, creativity, and discovery.
				</p>
				<Link href={"/contact"}>
					<button className="bg-light text-base sm:text-[32px] text-white py-3 px-4 rounded-[64px]">
						Get in Touch
					</button>
				</Link>
			</div>
			<div className="grid grid-cols-2 xl:grid-cols-4 gap-5 mt-6">
				<div className="w-[160px] h-[160px] sm:w-[320px] sm:h-[320px] bg-[#FFD27F] rounded-t-4xl rounded-bl-4xl flex items-end overflow-hidden">
					<div className="relative h-[150px] sm:h-[300px] w-[150px] sm:w-[500px]">
						<Image
							alt=""
							src={"/bsjsjnwk32s.svg"}
							fill
							className="object-cover"
						/>
					</div>
				</div>
				<div className="w-[160px] h-[160px] sm:w-[320px] sm:h-[320px] bg-[#FFABB0] rounded-full flex items-end overflow-hidden">
					<div className="relative h-[187.5px] sm:h-[375px] w-[265.1515197753906px] sm:w-[530.3030395507812px]">
						<Image
							alt=""
							src={"/jhbedjheg.svg"}
							fill
							className="object-cover"
						/>
					</div>
				</div>
				<div className="w-[160px] h-[160px] sm:w-[320px] sm:h-[320px] bg-[#9BA9FF] rounded-t-4xl rounded-bl-4xl flex items-end justify-center overflow-hidden">
					<div className="relative h-[160px] sm:h-[300px] w-[160px] sm:w-[500px]">
						<Image
							alt=""
							src={"/lkbdss4efv.svg"}
							fill
							className="object-cover"
						/>
					</div>
				</div>
				<div className="w-[160px] h-[160px] sm:w-[320px] sm:h-[320px] bg-[#2CBCFF] rounded-full flex items-end justify-center overflow-hidden">
					<div className="relative h-[140px] sm:h-[250px] w-[140px] sm:w-[250px]">
						<Image
							alt=""
							src={"/hbaka34dda.svg"}
							fill
							className="object-cover"
						/>
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
				<div className="bg-light my-10 py-14 w-full">
					<div className="flex flex-col items-center justify-center space-y-5">
						<h1 className="text-dark howdybun font-normal text-[32px] sm:text-[64px] text-center uppercase w-full max-w-[366px] sm:max-w-full">
							<span className="text-white">Building Bright Futures,</span>{" "}
							<br /> tarem schools.
						</h1>
						<p className="font-normal text-base sm:text-[28px] sm:max-w-[900px] sm:leading-12 text-center text-white">
							At Tarem Schools, we create a joyful learning environment where
							every child feels valued, curious, and confident to explore the
							world around them.
						</p>
					</div>
					<div className="px-3 mt-8 flex items-center space-x-5 justify-center">
						<div className="bg-white w-full max-w-[840px] flex flex-col justify-center items-center px-3 py-5 rounded-[20px] space-y-3">
							<h2 className="text-[20px] sm:text-[32px] howdybun font-normal">
								Wholesome and Educational
							</h2>
							{/* <div className="relative w-[343px] h-[160px] rounded-[8px]">
								<Image
									src={"/nskbwken42.svg"}
									fill
									className="object-cover rounded-[8px]"
									alt=""
								/>
							</div> */}
							<div className="w-full md:w-1/2 relative aspect-[16/9]">
								<Image
									src="/nskbwken42.svg"
									alt="Laptop"
									fill
									className="object-cover rounded-xl"
									sizes="(max-width: 768px) 100vw,
           (max-width: 1200px) 50vw,
           33vw"
								/>
							</div>
							<p className="text-base sm:text-[32px]">
								From slides to storytelling, playtime helps our pupils learn
								teamwork, creativity, and joy.
							</p>
						</div>
					</div>
				</div>
				{/* <div className="relative h-[75px] bg-[url('/amp-bottom-m.svg')] sm:bg-[url('/amp-bottom.svg')]">
					<Image src={"/amp-bottom-m.svg"} alt="top" fill className="" />
				</div>
				<div className="relative h-[75px] w-full hidden sm:block">
					<Image src={"/amp-bottom.svg"} alt="t`op" fill className="" />
				</div> */}
			</div>
			<div className="flex flex-col items-center justify-center space-y-5 my-[65px]">
				<h1 className="text-dark howdybun font-normal text-[32px] sm:text-[64px] text-center uppercase w-full max-w-[366px] sm:max-w-full">
					<span className="text-light">Comprehensive Learning for</span> <br />{" "}
					Every Child
				</h1>
				<p className="font-normal text-base sm:text-[28px] sm:max-w-[900px] sm:leading-12 text-center text-dark">
					We offer a balanced curriculum that combines core subjects with
					creative learning. From literacy and numeracy to art, music, and moral
					instruction, our goal is to nurture every aspect of your child&apos;s
					development — academically, socially, and emotionally.
				</p>
				<Link href={"/contact"}>
					<button className="bg-light text-base sm:text-[32px] text-white py-3 px-4 rounded-[64px]">
						Get in Touch
					</button>
				</Link>
				{/* <div className="w-full overflow-x-auto">
					<div className="flex items-center justify-start sm:justify-center space-x-2 sm:space-x-10 px-4 sm:px-0 min-w-min">
						<div className="relative h-[300px] w-[259px] flex-shrink-0">
							<Image
								alt=""
								src={"/snksn32ewjndw.svg"}
								className="object-cover"
								fill
							/>
						</div>
						<div className="relative h-[300px] w-[259px] flex-shrink-0">
							<Image
								alt=""
								src={"/qabhbknk3.svg"}
								className="object-cover object-center"
								fill
							/>
						</div>
						<div className="relative h-[300px] w-[259px] flex-shrink-0">
							<Image
								alt=""
								src={"/ajlhbhjabhjb4.svg"}
								className="object-cover"
								fill
							/>
						</div>
					</div>
				</div> */}
			</div>
		</div>
	);
}
