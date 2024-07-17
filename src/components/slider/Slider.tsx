import { Box, Link } from "@chakra-ui/react";

import image1 from "@/assets/slider/1.png";
import image2 from "@/assets/slider/2.png";
import image3 from "@/assets/slider/3.png";

import "./Styles.css";

export const Slider: React.FC = () => {
  return (
    <Box className="slider-frame" borderRadius="2xl">
      <Link href="https://www.fonselp.org/">
        <ul>
          <li>
            <img src={image1} alt="empresa1" />
          </li>
          <li>
            <img src={image2} alt="empresa2" />
          </li>
          <li>
            <img src={image3} alt="empresa3" />
          </li>
        </ul>
      </Link>
    </Box>
  );
};
