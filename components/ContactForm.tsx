"use client";

import React, { useState } from "react";

type FormState = {
	firstname: string;
	lastname: string;
	email: string;
	question: string;
};

const initialState: FormState = {
	firstname: "",
	lastname: "",
	email: "",
	question: "",
};

export default function ContactForm() {
	const [form, setForm] = useState<FormState>(initialState);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState<string | null>(null);

	function onChange(
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) {
		setForm(s => ({ ...s, [e.target.name]: e.target.value }));
	}

	function validate() {
		if (!form.firstname.trim() || !form.lastname.trim()) {
			return "Please provide your first and last name.";
		}
		if (!form.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
			return "Please provide a valid email address.";
		}
		if (!form.question.trim()) return "Please enter your question.";
		return null;
	}

	async function onSubmit(e: React.FormEvent) {
		e.preventDefault();
		setError(null);
		setSuccess(null);

		const v = validate();
		if (v) {
			setError(v);
			return;
		}

		try {
			setLoading(true);
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(form),
			});

			const data = await res.json();
			if (!res.ok) throw new Error(data?.error || "Failed to send message");
			setSuccess("Message sent — we'll get back to you soon.");
			setForm(initialState);
		} catch (err: unknown) {
			const message = err instanceof Error ? err.message : String(err);
			setError(message || "An unexpected error occurred.");
		} finally {
			setLoading(false);
		}
	}

	return (
		<form onSubmit={onSubmit} className="w-full bg-white p-6">
			<div className="flex flex-col md:flex-row md:space-x-4">
				<label className="w-full mb-4 md:mb-0">
					<span className="block text-black mb-2 text-base md:text-2xl">
						First name
					</span>
					<input
						name="firstname"
						value={form.firstname}
						onChange={onChange}
						className="w-full rounded-md border border-transparent px-4 py-3 bg-[#F8F8F8] text-sm outline-none"
						placeholder="First name"
					/>
				</label>

				<label className="w-full">
					<span className="block text-black mb-2 text-base md:text-2xl">
						Last name
					</span>
					<input
						name="lastname"
						value={form.lastname}
						onChange={onChange}
						className="w-full rounded-md border border-transparent px-4 py-3 bg-[#F8F8F8] text-sm outline-none"
						placeholder="Last name"
					/>
				</label>
			</div>

			<div className="mt-4">
				<label className="w-full">
					<span className="block text-black mb-2 text-base md:text-2xl">
						Email
					</span>
					<input
						name="email"
						type="email"
						value={form.email}
						onChange={onChange}
						className="w-full rounded-md border border-transparent px-4 py-3 bg-[#F8F8F8] text-sm outline-none"
						placeholder="you@example.com"
					/>
				</label>
			</div>

			<div className="mt-4">
				<label className="w-full">
					<span className="block text-black text-base md:text-2xl mb-2">
						Question
					</span>
					<textarea
						name="question"
						value={form.question}
						onChange={onChange}
						rows={5}
						className="w-full rounded-md border border-transparent px-4 py-3 bg-[#F8F8F8] text-sm outline-none resize-none"
						placeholder="Write your question or message here"
					/>
				</label>
			</div>

			{error && <p className="text-sm text-red-600 mt-3">{error}</p>}
			{success && <p className="text-sm text-green-600 mt-3">{success}</p>}

			<div className="mt-6">
				<button
					type="submit"
					disabled={loading}
					className="bg-light text-base sm:text-[24px] text-white py-3 px-4 rounded-[64px]"
				>
					{loading ? "Sending..." : "Send message"}
				</button>
			</div>
		</form>
	);
}
