import React from "react";
import ContactForm from "../../components/ContactForm";

const page = () => {
	return (
		<div className="flex flex-col items-center justify-center px-3 mt-14">
			<div className="flex flex-col items-center justify-center space-y-5">
				<h1 className="text-dark howdybun font-normal text-[32px] sm:text-[64px] text-center uppercase w-full max-w-[366px] sm:max-w-full">
					<span className="text-light">We’d Love to Hear From</span> <br /> You!
				</h1>
				<p className="font-normal text-base sm:text-[28px] sm:max-w-[900px] sm:leading-12 text-center text-dark">
					Visit Us at{" "}
					<strong>47, Mobegelu Street, Italapo, Ijebu Ode, Ogun State</strong>{" "}
					<br />
					or Call Us on <strong>0815 050 2317</strong> or{" "}
					<strong>0916 729 5651</strong>. <br /> Have a question? Fill the form
					below.
				</p>
			</div>

			<div className="w-full flex items-center justify-center my-10 sm:px-10 sm:py-16 sm:bg-dark sm:mx-[64px]">
				<ContactForm />
			</div>
		</div>
	);
};

export default page;
