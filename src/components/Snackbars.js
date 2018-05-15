import React, { Component } from 'react';
import Snackbar from 'material-ui/Snackbar';
import { connect } from 'react-redux'

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
      />

    );
  }
}


export default connect(
  state => ({
    length: state.basket
  })
)(SimpleSnackbar);