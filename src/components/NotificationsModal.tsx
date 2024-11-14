import { Avatar, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export interface ModalProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function NotificationsModal(props: ModalProps, { isOpen }) {
  const list = [
    {
      logo: "https://yt3.ggpht.com/FVJpJyrV85TDL2nyiFbnaBuZzuYX1thQywPXCvilPAuw7DmPjFoXphPgkCqekYNIfqFtqGrvCg=s88-c-k-c0x00ffffff-no-rj",
      text: 'На канале "Brawl Stars" появилось новое видео: "💀 GO CLAIM YOUR 10 DEAD BOXES!!! 💀". Советуем его посмотреть.',
      description: "11 дней назад",
      image: "https://i.ytimg.com/vi/N3rZ_t3i1PE/hqdefault.jpg",
    },
    {
      logo: "https://yt3.ggpht.com/FVJpJyrV85TDL2nyiFbnaBuZzuYX1thQywPXCvilPAuw7DmPjFoXphPgkCqekYNIfqFtqGrvCg=s88-c-k-c0x00ffffff-no-rj",
      text: 'На канале "Brawl Stars" появилось новое видео: "💀 GO CLAIM YOUR 10 DEAD BOXES!!! 💀". Советуем его посмотреть.',
      description: "11 дней назад",
      image: "https://i.ytimg.com/vi/N3rZ_t3i1PE/hqdefault.jpg",
    },
    {
      logo: "https://yt3.ggpht.com/FVJpJyrV85TDL2nyiFbnaBuZzuYX1thQywPXCvilPAuw7DmPjFoXphPgkCqekYNIfqFtqGrvCg=s88-c-k-c0x00ffffff-no-rj",
      text: 'На канале "Brawl Stars" появилось новое видео: "💀 GO CLAIM YOUR 10 DEAD BOXES!!! 💀". Советуем его посмотреть.',
      description: "11 дней назад",
      image: "https://i.ytimg.com/vi/N3rZ_t3i1PE/hqdefault.jpg",
    },
    {
      logo: "https://yt3.ggpht.com/FVJpJyrV85TDL2nyiFbnaBuZzuYX1thQywPXCvilPAuw7DmPjFoXphPgkCqekYNIfqFtqGrvCg=s88-c-k-c0x00ffffff-no-rj",
      text: 'На канале "Brawl Stars" появилось новое видео: "💀 GO CLAIM YOUR 10 DEAD BOXES!!! 💀". Советуем его посмотреть.',
      description: "11 дней назад",
      image: "https://i.ytimg.com/vi/N3rZ_t3i1PE/hqdefault.jpg",
    },
  ];
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };
  return (
    <>
      {!isOpen ? (
        <Box></Box>
      ) : (
        <Box
          maxWidth={320}
          position={"fixed"}
          top={10}
          width={"100%"}
          bgcolor={"#212121"}
        >
          {list.map((block, index) => {
            return (
              <Array
                key={index}
                index={index}
                logo={block.logo}
                text={block.text}
                description={block.description}
                image={block.image}
              />
            );
          })}
        </Box>
      )}
    </>
  );
}

export default NotificationsModal;

const Array = ({ index, logo, text, description, image }) => {
  return (
    <Link to={`/content/${index}`}>
      <Box sx={{ height: 40, bgcolor: "#323232", width: "100%" }}>
        <Avatar
          alt={"Brawl Start"}
          src={logo}
          sx={{ height: "50px", width: "50px" }}
        />
        <Box display={"grid"} gridTemplateColumns={"auto"} rowGap={"2px"}>
          <Typography
            component={"div"}
            variant={"h5"}
            color={"#fff"}
            fontSize={14}
          >
            {text}
          </Typography>
          <Typography component={"div"} variant={"h6"} color={"#aaa"}>
            {description}
          </Typography>
        </Box>
        <img
          style={{ width: "120px", height: "auto", borderRadius: 2 }}
          src={image}
          alt=""
        />
      </Box>
    </Link>
  );
};

export { Array };
