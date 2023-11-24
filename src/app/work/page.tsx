import React from "react";
import CardGrid from "@/components/CardGrid";
import CardData from "../interface/CardData"; // Asegúrate de proporcionar la ruta correcta

const cardData: CardData[] = [
    {
        title: "Clima",
        imageUrl: "clima.jpg",
        technologies: ["react", "css"],
        github: "https://github.com/reddodragon/clima-react",
        link: "https://clima-react-seven.vercel.app/",
    },
    {
        title: "Todo App",
        imageUrl: "todo.jpg",
        technologies: ["react", "tailwind"],
        github: "https://github.com/reddodragon/tailwind-react",
        link: "https://tailwind-react-7h1d.vercel.app/",
    },
    {
        title: "Buscador de bebidas",
        imageUrl: "bebidas.jpg",
        technologies: ["react", "boostrap"],
        github: "https://github.com/reddodragon/bebidas-react",
        link: "https://bebidas-react-murex.vercel.app/",
    },
    {
        title: "Presupuesto App",
        imageUrl: "presupuesto.jpg",
        technologies: ["react", "css"],
        github: "https://github.com/reddodragon/control-gasto",
        link: "https://control-gasto.vercel.app/",
    },
    {
        title: "cripto",
        imageUrl: "cripto.jpg",
        technologies: ["react", "StyledComponents"],
        github: "https://github.com/reddodragon/cripto-app",
        link: "https://cripto-app-eight.vercel.app/",
    },
    {
        title: "urlShort App",
        imageUrl: "urlShort.jpg",
        technologies: ["react", "tailwind", "firebase"],
        github: "https://github.com/reddodragon/react-firebase",
        link: "https://react-firebase-blue.vercel.app/",
    },

];

const App: React.FC = () => {
    return (
        <div 
            
            style={{
                backgroundImage: 'url("/img/space1.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
                margin: 0, 
                padding: 0, 
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
