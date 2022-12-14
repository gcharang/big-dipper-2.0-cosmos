import { useState } from 'react';

export const useConnectWalletList = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConnectKeplr = () => {
    setOpen(true); // TO DO
  };

  const handleConnectButter = () => {
    setOpen(true); // TO DO
  };

  const handleConnectWalletConnect = () => {
    setOpen(true); // TO DO
  };

  const handleConnectWallet = () => {
    setOpen(false);
  };

  return {
    open,
    handleOpen,
    handleConnectKeplr,
    handleConnectButter,
    handleConnectWalletConnect,
    handleClose,
    handleCancel,
    handleConnectWallet,
  };
};
