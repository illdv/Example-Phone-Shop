import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

  snackbarContent: {
    flexGrow: 0,
    minWidth: 0
  }
});

class SimpleSnackbar extends Component {

  state = {
    open: false,
    length: this.props.length
  };


  static getDerivedStateFromProps(nextProps, prevState) {

    if (prevState.length < nextProps.length) {
      return {
        open: true,
        length: nextProps.length
      }
    }
    else if (prevState.length >= nextProps.length) {
      return {
        open: false,
        length: nextProps.length
      }
    }

  }


  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {


    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={this.state.open}
        autoHideDuration={2000}
        onClose={this.handleClose}
        message={<span id="message-id">Phone  added to  cart</span>}
        ContentProps={{

          className: this.props.classes.snackbarContent,
        }}
      />

    );
  }
}


export default compose(
  withStyles(styles),
  connect(
    state => ({
      length: state.basket
    })
  ))(SimpleSnackbar);