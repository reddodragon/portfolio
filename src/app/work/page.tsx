import React from "react";
import CardGrid from "@/components/CardGrid";
import CardData from "../interface/CardData"; // Asegúrate de proporcionar la ruta correcta

const cardData: CardData[] = [
    {
        title: "Clima",
        imageUrl: "https://i.ibb.co/7vZXz9P/clima.png",
        technologies: ["react", "css"],
        github: "https://github.com/reddodragon/clima-react",
        link: "https://clima-react-seven.vercel.app/",
    },
    {
        title: "Todo App",
        imageUrl: "https://i.ibb.co/pr4FyGH/todo.png",
        technologies: ["react", "tailwind"],
        github: "https://github.com/reddodragon/tailwind-react",
        link: "https://tailwind-react-7h1d.vercel.app/",
    },
    {
        title: "Buscador de bebidas",
        imageUrl: "https://i.ibb.co/590Svyd/bebidas.png",
        technologies: ["react", "boostrap"],
        github: "https://github.com/reddodragon/bebidas-react",
        link: "https://bebidas-react-murex.vercel.app/",
    },
    {
        title: "Presupuesto App",
        imageUrl: "https://i.ibb.co/CW52qFQ/presupuesto.png",
        technologies: ["react", "css"],
        github: "https://github.com/reddodragon/control-gasto",
        link: "https://control-gasto.vercel.app/",
    },
    {
        title: "Cripto",
        imageUrl: "https://i.ibb.co/ftW1QQ2/cripto.png",
        technologies: ["react", "StyledComponents"],
        github: "https://github.com/reddodragon/cripto-app",
        link: "https://cripto-app-eight.vercel.app/",
    },
    {
        title: "urlShort App",
        imageUrl: "https://i.ibb.co/dJhfP6K/urlShort.png",
        technologies: ["react", "tailwind", "firebase"],
        github: "https://github.com/reddodragon/react-firebase",
        link: "https://react-firebase-blue.vercel.app/",
    },
    // Agrega más datos de tarjetas según sea necesario
];

const App: React.FC = () => {
    return (
        <div 
            
            style={{
                backgroundImage: 'url("https://i.ibb.co/r2JL968/space1.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh", // Establecer la altura al 100% de la altura de la pantalla
                margin: 0, // Eliminar márgenes para asegurar que ocupe toda la pantalla
                padding: 0, // Eliminar relleno también si es necesario
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "20px"
            }}
        >
            <h1 className="text-3xl font-bold mb-4">My Projects</h1>
            <CardGrid data={cardData} />
        </div>
    );
};

export default App;
