import { Box, Link } from "@chakra-ui/react";

import banner from "@/assets/slider/banner.png"

// import { slide_imgs } from "@/base";
import "./Styles.css";

export const Slider: React.FC = () => {
  return (
    <Box className="slider-frame" borderRadius="2xl">
      <Link href="">
        {/* <ul> */}
          {/* {slide_imgs.map((img)=>(<li > */}
            <img style={{height:"200px"}} src={banner} alt="image" />
          {/* </li>)) */}
          {/* } */}
          
        {/* </ul> */}
      </Link>
    </Box>
  );
};

