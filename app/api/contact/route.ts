import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

type Body = {
	firstname?: string;
	lastname?: string;
	email?: string;
	question?: string;
};

// const EMAIL_TO = process.env.CONTACT_EMAIL || "contact@taremschools.com";

export async function POST(req: Request) {
	try {
		const body: Body = await req.json();
		const { firstname, lastname, email, question } = body;

		if (!firstname || !lastname || !email || !question) {
			return NextResponse.json(
				{ error: "Missing required fields" },
				{ status: 400 }
			);
		}

		// Create transport from environment variables
		const host = process.env.SMTP_HOST;
		const port = process.env.SMTP_PORT
			? Number(process.env.SMTP_PORT)
			: undefined;
		const user = process.env.SMTP_USER;
		const pass = process.env.SMTP_PASS;

		if (!host || !port || !user || !pass) {
			console.warn(
				"SMTP credentials not configured; skipping actual send in dev."
			);
		}

		// const transporter = nodemailer.createTransport({
		// 	host,
		// 	port,
		// 	secure: port === 465,
		// 	auth: { user, pass },
		// });

		// const subject = `Website contact from ${firstname} ${lastname}`;
		// const text = `New message from ${firstname} ${lastname} (${email}):\n\n${question}`;

		// // attempt to send
		// await transporter.sendMail({
		// 	from: `${firstname} ${lastname} <${email}>`,
		// 	to: EMAIL_TO,
		// 	subject,
		// 	text,
		// });

		return NextResponse.json({ ok: true });
	} catch (err: unknown) {
		console.error(err);
		const message = err instanceof Error ? err.message : String(err);
		return NextResponse.json(
			{ error: message || "Failed to send" },
			{ status: 500 }
		);
	}
}
