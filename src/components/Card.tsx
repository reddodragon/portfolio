import Image from "next/image";
import GithubIcon from "./icons/Github"; // Asegúrate de proporcionar la ruta correcta
import LinkIcon from "./icons/LinkIcon"; // Asegúrate de proporcionar la ruta correcta

interface CardProps {
    title: string;
    imageUrl: string;
    technologies: string[];
    github: string;
    link: string;


}

const getTechnologyBackground = (technology: string): string => {
    // Mapeo de tecnologías a clases de fondo
    const backgroundMap: { [key: string]: string } = {
        react: "bg-gradient-to-r from-blue-500 to-indigo-900",
        javascript: "bg-gradient-to-br from-yellow-500 via-yellow-400 to-yellow-600",
        node: "bg-gradient-to-r from-green-500 to-green-900",
        next: "bg-gradient-to-r from-black to-gray-700",
        tailwind: "bg-gradient-to-br from-blue-500 via-teal-300 to-teal-500",
        firebase: "bg-gradient-to-r from-yellow-500 to-red-500",
        boostrap: "bg-gradient-to-r from-purple-700 to-indigo-600",
        css: "bg-gradient-to-r from-blue-500 to-indigo-900",
    };

    return (
        backgroundMap[technology.toLowerCase()] ||
        "bg-gradient-to-r from-gray-400 to-gray-600"
    );
};

const Card: React.FC<CardProps> = ({ title, imageUrl, technologies, github, link }) => {
    return (
        <div className="relative">
            <Image
                src={`/img/pages/${imageUrl}`}
                height={300}
                width={300}
                alt={title}
                className="w-full h-auto rounded-t-3xl"
            />
            <a href={github} className={`absolute top-0 left-0 m-4  bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 p-1 rounded-full   hover:bg-opacity-70 hover:shadow-xl`}>
                <GithubIcon height={30} width={30} />
            </a>
            <a href={link} className="absolute top-0 right-0 m-4  bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 p-1 rounded-full hover:bg-opacity-70 hover:shadow-md">
                <LinkIcon height={30} width={30}/>
            </a>
            <div className="flex flex-col text-black justify-center items-center w-full rounded-b-3xl bg-gradient-to-r from-blue-300 to-purple-300">
                <h2 className="text-xl font-semibold my-3">{title}</h2>
                <div className="flex flex-wrap">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className={`text-white px-2 py-1 rounded-full mr-2 mb-2 shadow-md ${getTechnologyBackground(
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