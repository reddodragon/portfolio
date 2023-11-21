
import Card from '@/components/Card';
import CardData from '@/app/interface/CardData';  // Asegúrate de proporcionar la ruta correcta

interface CardGridProps {
  data: CardData[];
}

const CardGrid: React.FC<CardGridProps> = ({ data }) => {
  return (
<div
  className=" scroll grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-gradient-to-r from-blue-300 to-purple-300 p-5 rounded-3xl h-4/5 overflow-y-auto"
>
  {data.map((card, index) => (
    <Card key={index} {...card} />
  ))}
</div>
  );
};

export default CardGrid;