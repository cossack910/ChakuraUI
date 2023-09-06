import { ChangeEvent, FC, memo, useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Stack,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
} from "@chakra-ui/react";

import { User } from "../../../types/api/user";
import PrimaryButton from "../../atoms/button/PrimaryButton";

type Props = {
  user: User | null;
  isOpen: boolean;
  isAdmin?: boolean;
  onClose: () => void;
};

export const UserDetailModal: FC<Props> = memo((props) => {
  const { user, isOpen, isAdmin, onClose } = props;

  const [username, setUserName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setUserName(user?.username ?? "");
    setName(user?.name ?? "");
    setEmail(user?.email ?? "");
    setPhone(user?.phone ?? "");
  }, [user]);

  const OnChangeUserName = (e: ChangeEvent<HTMLInputElement>) =>
    setUserName(e.target.value);
  const OnChangeName = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const OnChangePhone = (e: ChangeEvent<HTMLInputElement>) =>
    setPhone(e.target.value);
  const OnChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const onClickUpdate = () => {
    alert;
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}>
      <ModalOverlay></ModalOverlay>
      <ModalContent pb={6}>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>name</FormLabel>
              <Input
                value={username}
                onChange={OnChangeUserName}
                isReadOnly={!isAdmin}
              />
              <FormLabel>full name</FormLabel>
              <Input
                value={name}
                onChange={OnChangeName}
                isReadOnly={!isAdmin}
              />
              <FormLabel>email</FormLabel>
              <Input
                value={email}
                onChange={OnChangePhone}
                isReadOnly={!isAdmin}
              />
              <FormLabel>TEL</FormLabel>
              <Input
                value={phone}
                onChange={OnChangeEmail}
                isReadOnly={!isAdmin}
              />
            </FormControl>
          </Stack>
        </ModalBody>
        {isAdmin && (
          <ModalFooter>
            <PrimaryButton buttonLabel="更新" onClick={onClickUpdate} />
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
});
