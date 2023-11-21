export default function About() {
    return (
        <main className="h-screen">
            <div className="flex flex-col items-center pt-5">
                <h1 className="text-3xl font-semibold">Federico Ameratte</h1>
                <h2 className="text-xl font-light">Front-end Developer</h2>
            </div>

            <div className="flex flex-col items-center mt-5">
                <div className="flex flex-col items-center w-1/2 bg-gradient-to-r from-purple-500 to-purple-900 rounded-2xl p-10">
                    <h3 className="text-2xl font-semibold">Sobre mí</h3>
                    <p className="mt-3">
                        Soy un desarrollador front-end apasionado residente de
                        Argentina. Tengo 23 años y llevo un par de años
                        trabajando en el campo del desarrollo web. Me encanta
                        crear interfaces de usuario atractivas y funcionales que
                        proporcionen una experiencia de usuario excepcional.
                        Estoy constantemente aprendiendo nuevas tecnologías y
                        mejorando mis habilidades para brindar soluciones
                        innovadoras y de alta calidad a mis clientes.
                    </p>
                </div>

                <div className="mt-10 flex items-center flex-col">
                    <h3 className="text-2xl font-semibold">Tecnologías</h3>
                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <div className="flex shadow-f flex-col items-center rounded-lg bg-gradient-to-r from-blue-500 to-indigo-900 p-4">
                            <span className="text-white font-bold">React</span>
                        </div>
                        <div className="flex shadow-f flex-col items-center rounded-lg bg-gradient-to-br from-yellow-500 via-yellow-400 to-yellow-600 p-4">
                            <span className="text-white font-bold">
                                JavaScript
                            </span>
                        </div>
                        <div className="flex shadow-f flex-col items-center rounded-lg bg-gradient-to-r from-green-500 to-green-900 p-4">
                            <span className="text-white font-bold">
                                Node.js
                            </span>
                        </div>
                        <div className="flex shadow-f flex-col items-center rounded-lg bg-gradient-to-r from-black to-gray-700 p-4">
                            <span className="text-white font-bold">
                                Next.js
                            </span>
                        </div>
                        <div className="flex shadow-f flex-col items-center rounded-lg bg-gradient-to-br from-blue-500 via-teal-300 to-teal-500 p-4">
                            <span className="text-white font-bold">
                                Tailwind 
                            </span>
                        </div>
                        <div className="flex shadow-f flex-col items-center rounded-lg bg-gradient-to-r from-yellow-500 to-red-500 p-4">
                            <span className="text-white font-bold">
                                Firebase
                            </span>
                        </div>
                        <div className="flex shadow-f flex-col items-center rounded-lg bg-gradient-to-r from-purple-700 to-indigo-600 p-4">
                            <span className="text-white font-bold">
                                Boostrap
                            </span>
                        </div>
                        <div className="flex shadow-f flex-col items-center rounded-lg bg-gradient-to-r from-blue-500 to-indigo-900 p-4">
                            <span className="text-white font-bold">
                                CSS
                            </span>
                        </div>

                        


                    </div>
                </div>
            </div>
        </main>
    );
}
