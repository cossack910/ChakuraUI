import { memo, FC, useEffect } from "react";
import { Wrap, WrapItem, Spinner, Center } from "@chakra-ui/react";

import { UserCard } from "../organisms/user/UserCard";
import { UseAllUsers } from "../../hooks/useAllUsers";

export const UserManagement: FC = memo(() => {
  const { getUsers, users, loading } = UseAllUsers();

  useEffect(() => getUsers(), []);

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users?.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                userName={user.name}
                fullName={user.username}
                imageUrl="https://source.unsplash.com/random"
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  );
});
