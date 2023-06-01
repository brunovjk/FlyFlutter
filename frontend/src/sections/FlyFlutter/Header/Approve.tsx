import { FC, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { CardBalanceButton } from "../../../components";
import { useAccount } from "wagmi";
import { useApproveBetting } from "../../../hooks";
import { ethers } from "ethers";

export interface FFApproveProps {
  balances: BalancesProps;
  fetchOnlyPlayerBalances: () => void;
  setIsOpenAlert: React.Dispatch<React.SetStateAction<AppAlertProps>>;
}

const Approve: FC<FFApproveProps> = ({
  balances,
  fetchOnlyPlayerBalances,
  setIsOpenAlert,
}) => {
  const { t } = useTranslation();
  const { address, isConnected } = useAccount();

  const [disabledApprove, setDisabledApprove] = useState<boolean>(true);
  const [isLoadingApprove, setIsLoadingApprove] = useState<boolean>(false);

  const handleDisabledApprove = async (
    address?: `0x${string}`,
    userAllowance?: number | ethers.BigNumber,
    userBalance?: number | ethers.BigNumber
  ) => {
    if (address != undefined) {
      if (
        userAllowance != undefined &&
        userBalance != undefined &&
        ethers.BigNumber.from(userBalance).gt(userAllowance)
      ) {
        setDisabledApprove(false);
      } else {
        setDisabledApprove(true);
      }
    }
  };

  async function handleApprove() {
    setIsLoadingApprove(true);
    if (
      isConnected &&
      address != undefined &&
      !disabledApprove &&
      balances.player != undefined
    ) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const approveTX = await useApproveBetting({
        player: address,
        amount: balances.player,
      });
      if (approveTX.success) {
        fetchOnlyPlayerBalances();
        setIsOpenAlert({
          severity: "success",
          message: `${t("ffcapprove.approveSuccess")}`,
          isOpen: true,
        });
        setIsLoadingApprove(false);
      } else {
        setIsOpenAlert({
          severity: "error",
          message: `${t("ffcapprove.approveFailure")} ${approveTX.message}`,
          isOpen: true,
        });
        setIsLoadingApprove(false);
      }
    }
  }

  useEffect(() => {
    if (address) {
      handleDisabledApprove(address, balances.allowance, balances.player);
    }
  }, [address, balances.allowance, balances.player]);

  return (
    <CardBalanceButton
      label={t("ffcapprove.allowanceLabel")}
      value={balances.allowance}
      buttonText={t("ffcapprove.approveButton")}
      tooltip={t("ffcapprove.approveTooltip")}
      buttonDisabled={disabledApprove}
      buttonLoading={isLoadingApprove}
      handleClick={handleApprove}
    />
  );
};

export default Approve;
