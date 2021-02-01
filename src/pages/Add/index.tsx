import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Card, CardActions, CardContent, Fab, InputAdornment, Radio, RadioGroup } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    minWidth: 275,
    marginTop: 10,
  },
  title: {
    fontSize: 14,
  },
  margin: {
    margin: theme.spacing(1),
  },
  type: {
    float: 'right',
  }
}));

export default function Count() {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = React.useState('a');
  const handleChange = (event: { target: { value: any; }; }) => {
    setSelectedValue(event.target.value);
  };

  let history = useHistory()
  const submit = async () => {
    history.replace('/list')
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountBalanceWalletOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          账目类型
        </Typography>
        <form className={classes.form} noValidate>

          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
              </Typography>
              <Typography variant="h5" component="h2">
                <Radio
                  checked={selectedValue === 'a'}
                  onChange={handleChange}
                  value="a"
                  name="count-type"
                  inputProps={{ 'aria-label': 'A' }}
                />
                <Fab color="primary" aria-label="add" size="small" className={classes.margin}>
                  <MenuBookIcon />
                </Fab>
                <span className="type">学习</span>
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
              </Typography>
              <Typography variant="h5" component="h2">
                <Radio
                  checked={selectedValue === 'b'}
                  onChange={handleChange}
                  value="b"
                  name="count-type"
                  inputProps={{ 'aria-label': 'B' }}
                />
                <Fab color="primary" aria-label="add" size="small" className={classes.margin}>
                  <LocalTaxiIcon />
                </Fab>
                <span>交通</span>
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
              </Typography>
              <Typography variant="h5" component="h2">
                <Radio
                  checked={selectedValue === 'c'}
                  onChange={handleChange}
                  value="c"
                  name="count-type"
                  inputProps={{ 'aria-label': 'C' }}
                />
                <Fab color="primary" aria-label="add" size="small" className={classes.margin}>
                  <FastfoodIcon />
                </Fab>
                <span className="type">三餐</span>
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
              </Typography>
              <Typography variant="h5" component="h2">
                <Radio
                  checked={selectedValue === 'd'}
                  onChange={handleChange}
                  value="d"
                  color="default"
                  name="count-type"
                  inputProps={{ 'aria-label': 'D' }}
                />
                <Fab color="primary" aria-label="add" size="small" className={classes.margin}>
                  <SportsEsportsIcon />
                </Fab>
                <span className="type">娱乐</span>
              </Typography>
            </CardContent>
          </Card>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="count"
            label="金额"
            name="count"
            autoComplete="count"
            autoFocus
            InputProps={{
              startAdornment: <InputAdornment position="start">￥</InputAdornment>,
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submit}
          >
            确认 
          </Button>
        </form>
      </div>
    </Container>
  );
}
