import { Box, Typography } from "@mui/material";
import {
  ArrayOne,
  ArrayTwo,
  ArrayThree,
  ArrayFour,
  ArrayFive,
  ArraySix,
} from "../TS/Arrays";
import React from "react";

const Menu = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <Box
      width={250}
      sx={{
        position: "fixed",
        zIndex: "99",
        height: "672.4px",
        overflowY: isHovered ? "auto" : "hidden",
        overflowX: "hidden",
        top: 56,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      minWidth={250}>
      <Box minWidth={240}>
        {ArrayOne}
        <Typography
          component={"div"}
          variant="h6"
          color="white"
          pl={4}
          fontSize={17}>
          Вы
        </Typography>
        {ArrayTwo}
        <Typography
          component={"div"}
          variant="h6"
          color="white"
          pl={4}
          fontSize={17}>
          Подписки
        </Typography>
        {ArrayThree}
        <Typography
          component={"div"}
          variant="h6"
          color="white"
          pl={4}
          fontSize={17}>
          Навигатор
        </Typography>
        {ArrayFour}
        <Typography
          component={"div"}
          variant="h6"
          color="white"
          pl={4}
          fontSize={17}>
          Другие возможности
        </Typography>
        {ArrayFive}
        {ArraySix}
        <Typography
          component={"div"}
          variant="subtitle2"
          pt={"12px"}
          pl={"24px"}
          pr={"24px"}
          fontSize={13}
          lineHeight={"18px"}
          color={"rgb(170,170,170)"}>
          О сервисе Прессе Авторские права Связаться с нами Авторам
          Рекламодателям Разработчикам
        </Typography>
        <Typography
          component={"div"}
          variant="subtitle2"
          pt={"12px"}
          pl={"24px"}
          pr={"24px"}
          fontSize={13}
          lineHeight={"18px"}
          color={"rgb(170,170,170)"}>
          Условия использования Конфиденциальность Правила и безопасность Как
          работает YouTube Тестирование новых функций
        </Typography>
        <Typography
          component={"div"}
          variant="subtitle2"
          pt={"12px"}
          pl={"24px"}
          pr={"24px"}
          pb={"12px"}
          fontSize={13}
          lineHeight={"18px"}
          color={"rgb(170,170,170)"}>
          © 2024 Google LLC
        </Typography>
      </Box>
    </Box>
  );
};

export default Menu;

