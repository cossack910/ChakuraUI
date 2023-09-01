import { memo, FC } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  buttonLabel: string;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
};

export const PrimaryButton: FC<Props> = memo((props) => {
  const { buttonLabel, loading = false, disabled = false, onClick } = props;
  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      disabled={disabled}
      isLoading={loading}
      onClick={onClick}
    >
      {buttonLabel}
    </Button>
  );
});

export default PrimaryButton;
