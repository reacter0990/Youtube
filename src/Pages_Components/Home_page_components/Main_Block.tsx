import { Box } from "@mui/material";
import Block from "./Block";

interface BlockItem {
  id: number;
  name: string;
}

const Main_Block: React.FC = () => {
  const blocksList: BlockItem[] = [
    {
      id: 1,
      image:
        "https://i.ytimg.com/vi/DmhcnFQ_HLA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYJhKvp604k8ScGubri34ODUgtjg",
      logo: "https://yt3.ggpht.com/lBQD595O2fNvP7E4xKCtHLeOOvkUJ-GYkZdYftrQPxox46jZnLarn4rKl7hvLrRmc2tsGU6J=s68-c-k-c0x00ffffff-no-rj",
      title: "D3 Mercedes S-класс Продажный тест.",
      chanel_name: "",
      description: "3,1 млн просмотров 3 года назад",
    },
  ]
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        columnGap: "5px",
        rowGap: "6px",
      }}
    >
      {blocksList.map((item, index) => {
        return (
          <Block 
            key={item.id}
            // index={index}
            image={item.image}
            title={item.title}
            logo={item.logo}
            chanel_name={item.chanel_name}
            description={item.description}
          />
        )
      })}
    </Box>
  );
};

export default Main_Block;
