import Image from "next/image";

interface CardProps {
    title: string;
    imageUrl: string;
    technologies: string[];
}

const getTechnologyBackground = (technology: string): string => {
    // Mapeo de tecnologías a clases de fondo
    const backgroundMap: { [key: string]: string } = {
        react: "bg-gradient-to-r from-blue-500 to-indigo-900",
        javascript:"bg-gradient-to-br from-yellow-500 via-yellow-400 to-yellow-600",
        node: "bg-gradient-to-r from-green-500 to-green-900",
        next: "bg-gradient-to-r from-black to-gray-700",
        tailwind: "bg-gradient-to-br from-blue-500 via-teal-300 to-teal-500",
        firebase: "bg-gradient-to-r from-yellow-500 to-red-500",
        boostrap: "bg-gradient-to-r from-purple-700 to-indigo-600",
        css: "bg-gradient-to-r from-blue-500 to-indigo-900",
        // Agrega más mapeos según sea necesario
    };

    // Devuelve la clase de fondo correspondiente o una clase predeterminada
    return (
        backgroundMap[technology.toLowerCase()] ||
        "bg-gradient-to-r from-gray-400 to-gray-600"
    );
};

const Card: React.FC<CardProps> = ({ title, imageUrl, technologies }) => {
    return (
        <div className="flex flex-col items-center">
            <Image
                src={`/img/pages/${imageUrl}`}
                height={300}
                width={300}
                alt={title}
                className="w-full h-auto rounded-t-3xl"
            />
            <div className="flex flex-col justify-center items-center w-full rounded-b-3xl bg-gray-500 bg-clip-padding   bg-opacity-30">
                <h2 className="text-xl my-3">{title}</h2>
                <div className="flex flex-wrap">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className={`text-white px-2 py-1 rounded-full mr-2 mb-2 ${getTechnologyBackground(
                                tech
                            )}`}
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;
