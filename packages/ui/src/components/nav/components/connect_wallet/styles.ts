import { makeStyles } from 'tss-react/mui';

const styles = makeStyles()(theme => ({
  icon: {
    marginLeft: '20px',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
    },
    '&:hover': {
      cursor: 'pointer',
    },
    '& svg': {
      fill: 'none',
      stroke: theme.palette.custom.general.icon,
      strokeWidth: '1.6',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
  },
  connectWalletButton: {
    padding: '0px 15px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    [theme.breakpoints.down('sm')]: {
      padding: '0px 12px',
      whiteSpace: 'normal',
    },
    [theme.breakpoints.up('md')]: {
      padding: '0px 70px',
    },
  },
  connectKeplrButton: {
    padding: '0px 20px',
    [theme.breakpoints.down('sm')]: {
      padding: '0px 12px',
    },
    [theme.breakpoints.up('md')]: {
      padding: '0px 70px',
    },
  },
  connectButterButton: {
    padding: '0px 15px',
    [theme.breakpoints.down('sm')]: {
      padding: '0px 12px',
    },
    [theme.breakpoints.up('md')]: {
      padding: '0px 30px',
    },
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(2.8),
    top: theme.spacing(1.8),
    color: theme.palette.grey[500],
    [theme.breakpoints.down('xs')]: {
      left: '250px',
    },
  },
  walletButton: {
    border: 'solid 1px #D9D9D9',
    borderRadius: '24px',
    width: '70px',
    height: '70px',
    fontSize: '14px',
    justifyContent: 'left',
    overflow: 'visible',
    background: theme.palette.custom.wallet.surfaceTwo,
    '&:hover': {
      background: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
    },
    '&:focus': {
      background: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
    },
    [theme.breakpoints.up('md')]: {
      borderRadius: '24px',
      width: '100px',
      height: '100px',
    },
    color: theme.palette.custom.wallet.surfaceTwo,
  },
  header: {
    alignItems: 'center',
    padding: '72px 32px 32px 19px',
    [theme.breakpoints.up('md')]: {
      padding: '72px 32px 32px 37px',
    },
  },
  title: {
    display: 'flex',
    alignItems: 'center',
  },
  dialog: {
    '& .MuiDialog-paper': {
      width: '330px',
      backgroundColor: theme.palette.custom.wallet.backgroundTwo,
      [theme.breakpoints.up('md')]: {
        width: '600px',
        height: '541px',
      },
    },
  },
  dialogContent: {
    display: 'inline-flex',
    paddingBottom: theme.spacing(3),
    overflow: 'visible',
  },
  label: {
    fontSize: '16px',
    marginTop: theme.spacing(20),
    marginLeft: '-10px',
    textAlign: 'left',
    lineHeight: 'normal',
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(20),
    },
  },
  walletConnectLabel: {
    fontSize: '16px',
    marginTop: '182px',
    marginLeft: '-10px',
    textAlign: 'left',
    lineHeight: 'normal',
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(20),
    },
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    padding: '115px 16px 16px 16px',
  },
  actionsButton: {
    display: 'flex',
    flexDirection: 'row',
    padding: '6px 16px',
    width: '103px',
    height: '40px',
    background: theme.palette.custom.wallet.surfaceTwo,
    borderRadius: '8px',
    color: theme.palette.custom.wallet.textPrimary,
    '&:hover': {
      background: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
    },
    [theme.breakpoints.up('md')]: {
      width: '114px',
      height: '44px',
    },
    [theme.breakpoints.down('xs')]: {
      left: '54px',
    },
  },
  walletDetailsButton: {
    opacity: 0,
    visibility: 'hidden',
    transition: '0.2s ease-in-out',
    position: 'fixed',
    right: 60,
    '&.open': {
      opacity: 1,
      visibility: 'visible',
      background: theme.palette.custom.wallet.background,
      borderRadius: theme.spacing(1),
    },
  },
  avatar: {
    margin: '0px 20px 0px 5px',
    borderRadius: '100px',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
    },
    '&:hover': {
      cursor: 'pointer',
    },
    '& svg': {
      fill: 'none',
    },
  },
  msgHeader: {
    fontWeight: 700,
    lineHeight: '160%',
    letterSpacing: '0.15px',
    paddingTop: '47px',
  },
  warningMsg: {
    alignItems: 'center',
    padding: '72px 32px 0px 19px',
    [theme.breakpoints.up('md')]: {
      padding: '72px 32px 0px 37px',
    },
  },
  warningMsgDetails: {
    display: 'flex',
    position: 'absolute',
    top: '185px',
    padding: '0px 32px 0px 19px',
    [theme.breakpoints.up('md')]: {
      padding: '0px 32px 0px 37px',
    },
  },
  msgContent: {
    display: 'flex',
    position: 'absolute',
    top: '185px',
    left: '172px',
  },
  loginSuccessMsgContent: {
    display: 'flex',
    position: 'absolute',
    top: '185px',
    left: '100px',
  },
  loginSuccessIcon: {
    position: 'relative',
    top: '55px',
    left: '250px',
  },
  loading: {
    position: 'relative',
    top: '50px',
    '& .MuiCircularProgress-colorPrimary': {
      color: '#D9D9D9',
    },
  },
  walletConnectHeader: {
    fontWeight: 700,
    letterSpacing: '0.15px',
    display: 'flex',
    position: 'absolute',
    left: '60px',
    marginTop: '5px',
  },
  walletConnectContent: {
    display: 'inline-flex',
    padding: '22px 0px',
  },
  walletConnectMsg: {
    display: 'flex',
    position: 'absolute',
    left: '60px',
    paddingTop: '5px',
  },
  grayDot: {
    height: theme.spacing(3.5),
    width: theme.spacing(3.5),
    backgroundColor: theme.palette.custom.wallet.surfaceTwo,
    borderRadius: 50,
    display: 'flex',
    position: 'absolute',
  },
  tabs: {
    paddingTop: '35px',
  },
  tabButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '4px 16px',
    gap: '8px',
    height: '40px',
    background: '#757575',
    borderRadius: '8px',

    '&:hover': {
      cursor: 'pointer',
    },
    '&:focus': {
      background: '#D9D9D9',
    },
    '&:active': {
      background: '#D9D9D9',
    },
    '& .MuiTab-wrapper': {
      color: '#000000',
      fontWeight: 500,
      fontSize: '20px',
      lineHeight: '160%',
      textAlign: 'center',
      letterSpacing: '0.15px',
    },
  },
  qrCode: {
    position: 'absolute',
    left: '176px',
    top: '147px',
  },
  qrCodeLoading: {
    position: 'absolute',
    left: '280px',
    top: '235px',
    '& .MuiCircularProgress-colorPrimary': {
      color: '#D9D9D9',
    },
  },
}));

export const useStyles = () => styles();
