import React from 'react';
import { compose } from 'redux'
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { Tabs, Tab, Typography, Grid, Paper, Button } from '@material-ui/core';
import LocalizedText from './../translate/localized-text'
import { withRouter } from 'react-router-dom'

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ textAlign: 'center', padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}


const styles = theme => {
  console.log(theme.palette);
  
  return ({
    grand: {
      background: theme.palette.background.default,
      position: 'fixed',
      bottom: 0,
    },
    headFooter: {
      background: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    },
  })
};

class Footer extends React.Component {
  state = {
    value: 0,
  };



  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };



  render() {
    const { theme, classes } = this.props;

    return (
      <Grid container component='footer' justify='center' className={classes.grand} >
        <Grid item xs={12} >
          <Paper  className={classes.headFooter}>
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              centered
            >
              <Tab label="Github" />
              <Tab label="Twitter" />
              <Tab label="Telegram" />
            </Tabs>
          </Paper>
        </Grid>
        <Grid item md={8} xs={12} >

          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={this.state.value}
            onChangeIndex={this.handleChangeIndex}
          >
            <TabContainer dir={theme.direction}>
              <Button color='default' component='a' target='_blank' href='https://twitter.com/Dvillill' >
              <LocalizedText>look source</LocalizedText>
              </Button>
            </TabContainer>

            <TabContainer dir={theme.direction}>
              <Button color='default' component='a' target='_blank' href='https://github.com/illdv/Example-Phone-Shop' >
              <LocalizedText>tweet me</LocalizedText>
              </Button>
            </TabContainer>

            <TabContainer dir={theme.direction}>
              <Button color='default' component='a' target='_blank' href='https://t.me/KirillDvoynikov' >
              <LocalizedText>write in telegram</LocalizedText>
              </Button>
            </TabContainer>

          </SwipeableViews>
        </Grid>
      </Grid>
    );
  }
}



export default compose(
  withRouter,
  withStyles(styles, { withTheme: true })
)(Footer)
