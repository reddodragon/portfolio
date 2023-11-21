import React from "react";
import CardGrid from "@/components/CardGrid";
import CardData from "../../interface/CardData"; // Asegúrate de proporcionar la ruta correcta

const cardData: CardData[] = [
    {
        title: "Clima",
        imageUrl: "clima.png",
        technologies: ["react", "css"],
    },
    {
        title: "Todo App",
        imageUrl: "todo.png", 
        technologies: [ "react", "tailwind"],
    },
    {
        title: "Buscador de bebidas",
        imageUrl: "bebidas.png", 
        technologies: [ "react","boostrap"],
    },
    {
        title: "Presupuesto App",
        imageUrl: "presupuesto.png", 
        technologies: [ "react", "css"],
    },
    {
        title: "Cripto",
        imageUrl: "cripto.png", 
        technologies: ["react", "StyledComponents"],
    },
    {
        title: "urlShort App",
        imageUrl: "urlShort.png", 
        technologies: ["react", "tailwind", "firebase"],
    },
    // Agrega más datos de tarjetas según sea necesario
];

const App: React.FC = () => {
    return (
        <div className="container w-4/5 pt-10 h-screen mx-auto flex flex-col items-center ">
            <h1 className="text-3xl font-bold mb-4">My Projects</h1>
            <CardGrid data={cardData} />
        </div>
    );
};

export default App;
