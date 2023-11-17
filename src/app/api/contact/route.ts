import { EmailTemplate } from "@/components/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["federicoameratte@gmail.com"],
      subject: "Formulario de contacto",
      react: EmailTemplate({
        name: data.name,
        email: data.email,
        message: data.message,
      }),
      text: "",
    });

    return NextResponse.json({ message: "ok" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error });
  }
}