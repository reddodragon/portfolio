
import Card from '@/components/Card';
import CardData from '@/app/interface/CardData';  // Asegúrate de proporcionar la ruta correcta

interface CardGridProps {
  data: CardData[];
}

const CardGrid: React.FC<CardGridProps> = ({ data }) => {
  return (
<div
  className="sm:w-3/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5 rounded-md  "
>
  {data.map((card, index) => (
    <Card key={index} {...card} />
  ))}
</div>
  );
};

export default CardGrid;