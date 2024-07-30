import { Box, Link } from "@chakra-ui/react";

import { slide_imgs } from "@/base";

import "./Styles.css";

export const Slider: React.FC = () => {
  return (
    <Box className="slider-frame" borderRadius="2xl">
      <Link href="">
        <ul>
          {slide_imgs.map((img)=>(<li >
            <img style={{height:"300px"}} src={img} alt="image" />
          </li>))
          }
          
        </ul>
      </Link>
    </Box>
  );
};
