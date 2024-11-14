import { Box } from "@mui/material";
import Block from "./Block";

interface BlockItem {
  id: number;
  img: picture,
  logo: picture,
  title: string,
  chanel_name: string;
  description: string;
  videoUrl: string;
}

const Main_Block: React.FC = ({ isOpen }) => {
  const blocksList: BlockItem[] = [
    {
      id: 1,
      img: "https://i.ytimg.com/vi/DmhcnFQ_HLA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYJhKvp604k8ScGubri34ODUgtjg",
      logo: "https://yt3.ggpht.com/lBQD595O2fNvP7E4xKCtHLeOOvkUJ-GYkZdYftrQPxox46jZnLarn4rKl7hvLrRmc2tsGU6J=s68-c-k-c0x00ffffff-no-rj",
      title: "D3 Mercedes S-класс Продажный тест.",
      chanel_name: "Davidch Top",
      description: "3,1 млн просмотров 3 года назад",
      videoUrl: "https://www.youtube.com/watch?v=DmhcnFQ_HLA&t=859s"
    },
    {
      id: 2,
      img: "https://i.ytimg.com/vi/DmhcnFQ_HLA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYJhKvp604k8ScGubri34ODUgtjg",
      logo: "https://yt3.ggpht.com/lBQD595O2fNvP7E4xKCtHLeOOvkUJ-GYkZdYftrQPxox46jZnLarn4rKl7hvLrRmc2tsGU6J=s68-c-k-c0x00ffffff-no-rj",
      title: "D3 Mercedes S-класс Продажный тест.",
      chanel_name: "Davidch Top",
      description: "3,1 млн просмотров 3 года назад",
      videoUrl: "https://www.youtube.com/watch?v=DmhcnFQ_HLA&t=859s"
    },
    {
      id: 3,
      img: "https://i.ytimg.com/vi/DmhcnFQ_HLA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYJhKvp604k8ScGubri34ODUgtjg",
      logo: "https://yt3.ggpht.com/lBQD595O2fNvP7E4xKCtHLeOOvkUJ-GYkZdYftrQPxox46jZnLarn4rKl7hvLrRmc2tsGU6J=s68-c-k-c0x00ffffff-no-rj",
      title: "D3 Mercedes S-класс Продажный тест.",
      chanel_name: "Davidch Top",
      description: "3,1 млн просмотров 3 года назад",
      videoUrl: "https://www.youtube.com/watch?v=DmhcnFQ_HLA&t=859s"
    },
    {
      id: 4,
      img: "https://i.ytimg.com/vi/DmhcnFQ_HLA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYJhKvp604k8ScGubri34ODUgtjg",
      logo: "https://yt3.ggpht.com/lBQD595O2fNvP7E4xKCtHLeOOvkUJ-GYkZdYftrQPxox46jZnLarn4rKl7hvLrRmc2tsGU6J=s68-c-k-c0x00ffffff-no-rj",
      title: "D3 Mercedes S-класс Продажный тест.",
      chanel_name: "Davidch Top",
      description: "3,1 млн просмотров 3 года назад",
      videoUrl: "https://www.youtube.com/watch?v=DmhcnFQ_HLA&t=859s"
    },
    {
      id: 1,
      img: "https://i.ytimg.com/vi/DmhcnFQ_HLA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYJhKvp604k8ScGubri34ODUgtjg",
      logo: "https://yt3.ggpht.com/lBQD595O2fNvP7E4xKCtHLeOOvkUJ-GYkZdYftrQPxox46jZnLarn4rKl7hvLrRmc2tsGU6J=s68-c-k-c0x00ffffff-no-rj",
      title: "D3 Mercedes S-класс Продажный тест.",
      chanel_name: "Davidch Top",
      description: "3,1 млн просмотров 3 года назад",
      videoUrl: "https://www.youtube.com/watch?v=DmhcnFQ_HLA&t=859s"
    },
    {
      id: 2,
      img: "https://i.ytimg.com/vi/DmhcnFQ_HLA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYJhKvp604k8ScGubri34ODUgtjg",
      logo: "https://yt3.ggpht.com/lBQD595O2fNvP7E4xKCtHLeOOvkUJ-GYkZdYftrQPxox46jZnLarn4rKl7hvLrRmc2tsGU6J=s68-c-k-c0x00ffffff-no-rj",
      title: "D3 Mercedes S-класс Продажный тест.",
      chanel_name: "Davidch Top",
      description: "3,1 млн просмотров 3 года назад",
      videoUrl: "https://www.youtube.com/watch?v=DmhcnFQ_HLA&t=859s"
    },
    {
      id: 3,
      img: "https://i.ytimg.com/vi/DmhcnFQ_HLA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYJhKvp604k8ScGubri34ODUgtjg",
      logo: "https://yt3.ggpht.com/lBQD595O2fNvP7E4xKCtHLeOOvkUJ-GYkZdYftrQPxox46jZnLarn4rKl7hvLrRmc2tsGU6J=s68-c-k-c0x00ffffff-no-rj",
      title: "D3 Mercedes S-класс Продажный тест.",
      chanel_name: "Davidch Top",
      description: "3,1 млн просмотров 3 года назад",
      videoUrl: "https://www.youtube.com/watch?v=DmhcnFQ_HLA&t=859s"
    },
    {
      id: 4,
      img: "https://i.ytimg.com/vi/DmhcnFQ_HLA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYJhKvp604k8ScGubri34ODUgtjg",
      logo: "https://yt3.ggpht.com/lBQD595O2fNvP7E4xKCtHLeOOvkUJ-GYkZdYftrQPxox46jZnLarn4rKl7hvLrRmc2tsGU6J=s68-c-k-c0x00ffffff-no-rj",
      title: "D3 Mercedes S-класс Продажный тест.",
      chanel_name: "Davidch Top",
      description: "3,1 млн просмотров 3 года назад",
      videoUrl: "https://www.youtube.com/watch?v=DmhcnFQ_HLA&t=859s"
    },
    {
      id: 1,
      img: "https://i.ytimg.com/vi/DmhcnFQ_HLA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYJhKvp604k8ScGubri34ODUgtjg",
      logo: "https://yt3.ggpht.com/lBQD595O2fNvP7E4xKCtHLeOOvkUJ-GYkZdYftrQPxox46jZnLarn4rKl7hvLrRmc2tsGU6J=s68-c-k-c0x00ffffff-no-rj",
      title: "D3 Mercedes S-класс Продажный тест.",
      chanel_name: "Davidch Top",
      description: "3,1 млн просмотров 3 года назад",
      videoUrl: "https://www.youtube.com/watch?v=DmhcnFQ_HLA&t=859s"
    },
    {
      id: 2,
      img: "https://i.ytimg.com/vi/DmhcnFQ_HLA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYJhKvp604k8ScGubri34ODUgtjg",
      logo: "https://yt3.ggpht.com/lBQD595O2fNvP7E4xKCtHLeOOvkUJ-GYkZdYftrQPxox46jZnLarn4rKl7hvLrRmc2tsGU6J=s68-c-k-c0x00ffffff-no-rj",
      title: "D3 Mercedes S-класс Продажный тест.",
      chanel_name: "Davidch Top",
      description: "3,1 млн просмотров 3 года назад",
      videoUrl: "https://www.youtube.com/watch?v=DmhcnFQ_HLA&t=859s"
    },
    {
      id: 3,
      img: "https://i.ytimg.com/vi/DmhcnFQ_HLA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYJhKvp604k8ScGubri34ODUgtjg",
      logo: "https://yt3.ggpht.com/lBQD595O2fNvP7E4xKCtHLeOOvkUJ-GYkZdYftrQPxox46jZnLarn4rKl7hvLrRmc2tsGU6J=s68-c-k-c0x00ffffff-no-rj",
      title: "D3 Mercedes S-класс Продажный тест.",
      chanel_name: "Davidch Top",
      description: "3,1 млн просмотров 3 года назад",
      videoUrl: "https://www.youtube.com/watch?v=DmhcnFQ_HLA&t=859s"
    },
    {
      id: 4,
      img: "https://i.ytimg.com/vi/DmhcnFQ_HLA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYJhKvp604k8ScGubri34ODUgtjg",
      logo: "https://yt3.ggpht.com/lBQD595O2fNvP7E4xKCtHLeOOvkUJ-GYkZdYftrQPxox46jZnLarn4rKl7hvLrRmc2tsGU6J=s68-c-k-c0x00ffffff-no-rj",
      title: "D3 Mercedes S-класс Продажный тест.",
      chanel_name: "Davidch Top",
      description: "3,1 млн просмотров 3 года назад",
      videoUrl: "https://www.youtube.com/watch?v=DmhcnFQ_HLA&t=859s"
    },
  ];
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        columnGap: isOpen ? "5px" : "5px",
        rowGap: isOpen ? "17px" : "12px",
        paddingLeft: isOpen ? "275px" : "118px",
        paddingTop: "140px",
      }}
    >
      {blocksList.map((item, index) => {
        return (
          <Block
            isOpen={isOpen}
            key={item.id}
            index={index}
            img={item.img}
            title={item.title}
            logo={item.logo}
            chanel_name={item.chanel_name}
            description={item.description}
          />
        );
      })}
    </Box>
  );
};

export default Main_Block;
