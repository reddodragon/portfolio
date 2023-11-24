import DiamondComplete from "./icons/DiamondComplete";
import DiamondVoid from "./icons/DiamondVoid";

interface DiamondProps {
    isHovered: boolean;
  }
  
  const Diamond: React.FC<DiamondProps> = ({ isHovered }) => {
    return isHovered ? <DiamondComplete /> : <DiamondVoid />;
  };
  
  export default Diamond;