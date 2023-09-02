import { memo, FC } from "react";
import { UserCard } from "../organisms/user/UserCard";
export const UserManagement: FC = memo(() => {
  return (
    <UserCard
      userName="神田まさし"
      fullName="kanda masashi"
      imageUrl="https://source.unsplash.com/random"
    />
  );
});
