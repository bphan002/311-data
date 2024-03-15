import makeStyles from '@mui/styles/makeStyles';
import fonts from '@theme/fonts';

const useStyles = makeStyles(theme => ({
  label: {
    marginBottom: 5,
    display: 'inline-block',
    fontFamily: 'Roboto',
  },
  boldWord: {
    fontWeight: fonts.weight.bold,
  },
  selector: {
    fontFamily: 'Roboto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& > div': {
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,
    },
    marginLeft: -10,
  },
  separator: {
    marginLeft: theme.gaps.md,
    borderRight: `1.5px solid ${theme.palette.text.secondaryLight}`,
    height: '1.2rem',
  },
  option: {
    cursor: 'pointer',
    padding: 6,
    margin: '2px 0',
    fontFamily: 'Roboto',
    width: '100%',
    backgroundColor: theme.palette.primary.dark,
    border: 'none',
    textAlign: 'left',
    color: theme.palette.text.secondaryLight,
    '&:hover': {
      backgroundColor: theme.palette.selected.primary,
    },
  },
  selected: {
    backgroundColor: `${theme.palette.selected.primary} !important`,
  },
  tooltip: {
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '2px',
    padding: '5px 10px',
    margin: '-5px -10px 2px -5px',
    position: 'relative',
    fontSize: '12px',
  },
  tooltipSentMargin: {
    margin: '0px 0px',
    padding: '0px',
  },
  trirightbtmleft: {
    '&::after': {
    content: "''",
    position: 'absolute',
    left: '0px',
    top: '50px',
    border: '22px solid',
    borderColor: 'transparent transparent transparent white',
    zIndex: -1,
    }
  },
}));

export default useStyles;
