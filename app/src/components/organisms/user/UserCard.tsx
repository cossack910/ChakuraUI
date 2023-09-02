import { FC, memo } from "react";
import { Wrap, WrapItem, Box, Stack, Image, Text } from "@chakra-ui/react";

type Props = {
  imageUrl: string;
  userName: React.ReactNode;
  fullName: React.ReactNode;
};

export const UserCard: FC<Props> = memo((props) => {
  const { userName, fullName, imageUrl } = props;
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      <WrapItem>
        <Box
          w="260"
          h="260"
          bg="white"
          borderRadius="10px"
          shadow="md"
          p={4}
          _hover={{ cursor: "pointer", opacity: 0.8 }}
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
      </WrapItem>
    </Wrap>
  );
});

export default UserCard;
