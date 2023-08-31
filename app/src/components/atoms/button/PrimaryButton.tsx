import { memo, FC } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  buttonLabel: string;
};

export const PrimaryButton: FC<Props> = memo((props) => {
  const { buttonLabel } = props;
  return (
    <Button bg="teal.400" color="white" _hover={{ opacity: 0.8 }}>
      {buttonLabel}
    </Button>
  );
});

export default PrimaryButton;
