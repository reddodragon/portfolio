"use client";
import GithubIcon from "@/components/icons/Github";
import InstagramIcon from "@/components/icons/Instagram";
import LinkedinIcon from "@/components/icons/Linkedin";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
    name: string;
    email: string;
    message: string;
}

export default function Contact() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });

    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrorMessage("");
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        setLoading(true);

        // Validate the form data
        if (!formData.name || !formData.email || !formData.message) {
            setErrorMessage("Todos los campos son obligatorios");
            setTimeout(() => {
                setErrorMessage("");
            }, 3000);
            setLoading(false);
            return;
        }

        if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            setErrorMessage(
                "Ingrese una dirección de correo electrónico válida"
            );
            setTimeout(() => {
                setErrorMessage("");
            }, 3000);
            setLoading(false);
            return;
        }

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.message === "ok") {
                // Display the success message
                setSuccessMessage("Email enviado correctamente");

                // Clear the error message
                setErrorMessage("");

                // Reset the form fields
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });

                // Clear the success message after 3 seconds
                setTimeout(() => {
                    setSuccessMessage("");
                }, 3000);
            } else {
                setErrorMessage(data.error);
            }

            setLoading(false);
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
            setLoading(false);
        }
    };
    return (
        <main
            style={{
                backgroundImage: 'url("https://i.ibb.co/5sPgc3d/space3.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh", // Establecer la altura al 100% de la altura de la pantalla
                margin: 0, // Eliminar márgenes para asegurar que ocupe toda la pantalla
                padding: 0, // Eliminar relleno también si es necesario
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "20px",
            }}
        >
            <div className="flex flex-col items-center pt-1">
                <h2 className="text-3xl font-semibold text-white">
                    Contáctame
                </h2>
            </div>

            {errorMessage && (
                <p className="text-red-500 font-bold text-center">
                    {errorMessage}
                </p>
            )}

            {successMessage && (
                <p className="text-green-500 font-bold text-center">
                    {successMessage}
                </p>
            )}

            <div className="flex sm:w-1/2  justify-center mt-5">
                <div className="w-full p-5 sm:p-0">
                    <div className="w-full glass shadow-xl  rounded-xl p-5">
                        <form onSubmit={handleSubmit} className="grid gap-6">
                            <div>
                                <label htmlFor="name" className="text-white">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    onChange={handleChange}
                                    className="mt-1 p-2 h-12 w-full bg-transparent opacity-1 border-solid border-b-2 border-gray-400  focus:outline-none "
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="text-white">
                                    Correo electrónico
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    onChange={handleChange}
                                    className="mt-1 p-2 h-12 w-full bg-transparent opacity-1 border-solid border-b-2 border-gray-400  focus:outline-none "
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="text-white">
                                    Mensaje
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    onChange={handleChange}
                                    className="mt-1 p-2 h-12 w-full bg-transparent opacity-1 border-solid border-b-2 border-gray-400  focus:outline-none"
                                ></textarea>
                            </div>
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="fancy shadow-2xl text-white p-2 w-full sm:w-2/5 sm:px-5 font-semibold text-xl rounded-md hover:bg-blue-700"
                                >
                                    <span className="top-key"></span>
                                    <span className="text">{loading ? "Enviando..." : "Enviar"}</span>
                                    <span className="bottom-key-1"></span>
                                    <span className="bottom-key-2"></span>
                                    
                                </button>
                            </div>
                        </form>
                        <div className="mt-8 flex justify-between">
                            <a
                                href="https://www.linkedin.com/in/federico-ameratte-7879b11ab/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" transition ease-in-out delay-300 hover:shadow-xl rounded-full hover:bg-opacity-20 hover:bg-gray-400 p-2"
                            >
                                <LinkedinIcon />
                            </a>
                            <a
                                href="https://github.com/reddodragon"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition ease-in-out delay-300 hover:shadow-xl rounded-full hover:bg-opacity-20 hover:bg-gray-400 p-2"
                            >
                                <GithubIcon />
                            </a>
                            <a
                                href="https://www.instagram.com/fedefe._/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-all ease-in-out delay-300 hover:shadow-xl rounded-full hover:bg-opacity-20 hover:bg-gray-400 p-2"
                            >
                                <InstagramIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
