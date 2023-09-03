import { FC, memo } from "react";
import { Box, Stack, Image, Text } from "@chakra-ui/react";

type Props = {
  id: number;
  imageUrl: string;
  userName: React.ReactNode;
  fullName: React.ReactNode;
  onClickUser: (id: number) => void;
};

export const UserCard: FC<Props> = memo((props) => {
  const { userName, fullName, imageUrl, onClickUser, id } = props;
  return (
    <Box
      w="260"
      h="260"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      onClick={() => onClickUser(id)}
    >
      <Stack textAlign="center">
        <Image
          boxSize="160"
          borderRadius="full"
          src={imageUrl}
          alt="プロフィール画像"
          m="auto"
        ></Image>
        <Text fontSize="lg" fontWeight="bold">
          {userName}
        </Text>
        <Text fontSize="sm" color="glay">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});

export default UserCard;
