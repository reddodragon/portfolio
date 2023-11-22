import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="sm:h-screen bg-[#000814]">
            <div className="flex flex-col items-center pt-5">
                <h1 className="text-3xl font-semibold">Federico Ameratte</h1>
                <h2 className="text-xl font-light ">Front-end deveeloper</h2>
            </div>

            <div className="flex flex-col sm:flex-row sm:w-4/5 gap-10 mx-auto mt-5 h-full sm:h-2/3 p-5 sm:p-10 ">
                <div className="relative sm:w-1/2 shadow-f bg-gradient-to-r from-blue-500 to-indigo-900 rounded-2xl">
                    <div className="shadow-img absolute left-[-125px] top-1/2 transform -translate-y-1/2 w-[250px] h-[250px] overflow-hidden rounded-full">
                        <Image
                            width={200}
                            height={200}
                            alt="Fede-Foto"
                            src="/img/foto.jpeg"
                            className=" object-cover w-full h-full"
                        />
                    </div>
                    <div className="flex flex-col h-full justify-center pl-36 p-10">
                        <p className="text-white">
                            ¡Hola! Soy Federico, un desarrollador web
                            apasionado. Transformo ideas en sitios web
                            funcionales y atractivos.
                        </p>
                    </div>
                </div>

                <div className="sm:w-1/2 flex flex-col gap-5 sm:gap-0 justify-between">
                    <div className="flex justify-between gap-5 sm:gap-10 sm:h-2/5">
                        <Link href="/work" className="shadow-f bg-gradient-to-r from-teal-400 to-indigo-900  w-1/2 rounded-2xl p-7 sm:p-5">
                            <p className=" font-semibold text-xl text-[#1d1d1d]">Work</p>
                        </Link>
                        <Link href="/about" className="shadow-f bg-gradient-to-r from-yellow-200 to-yellow-600  w-1/2 rounded-2xl p-7 sm:p-5">
                            <p className=" font-semibold text-xl text-[#1d1d1d]">Sobre mi</p>
                        </Link>
                    </div>
                    <Link href={"/contact"} className="shadow-f bg-gradient-to-r from-indigo-300 to-indigo-100  sm:h-2/5 rounded-2xl p-7 sm:p-5">
                        <p className=" font-semibold text-xl text-[#1d1d1d]">Contactame</p>
                    </Link>
                </div>
            </div>
        </main>
    );
}
