import React from 'react'
import { withStyles } from 'material-ui/styles';
import { Button, Tooltip } from 'material-ui/'
import classNames from 'classnames';
import { ArrowUpward } from '@material-ui/icons';

const styles = {


  btnTop: {
    position: 'fixed',
    bottom: 20,
    transition: 'all 0.5s ease-in-out',
    transitionProperty: 'opacity, right',
    right: 20,
    zIndex: 1000
  },
  opacity: {
    opacity: 0,
    right: -70
  },
};


class BtnScrollToTop extends React.Component {

  state = {
    show: false
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.show !== this.state.show;
  }

  componentDidMount() {


    this.HandleScroll(); // initialize state

    // Add all listeners which can start scroll
    window.addEventListener('scroll', this.HandleScroll);
  }

  componentWillUnmount() {
    // Remove all listeners which was registered
    window.removeEventListener('scroll', this.HandleScroll);

  }

  vverh = () => {
    window.scrollBy(0, -40); // чем меньше значение (цифра -10), тем выше скорость перемещения
    if (window.pageYOffset > 0) {
      requestAnimationFrame(this.vverh);
    }
  }

  HandleScroll = () => {

    window.pageYOffset > 200 ?
      this.setState({ show: true })
      :
      this.setState({ show: false });
  }


  render() {

    const { classes } = this.props
    return <Tooltip id="Scroll-to-top" title="Scroll to top" placement="top">
      <Button variant="fab"
        color='primary'
        onClick={() => this.vverh()}
        className={classNames({
          [classes.opacity]: !this.state.show,
          [classes.btnTop]: true,


        })}
      >
        <ArrowUpward />
      </Button>
    </Tooltip>
  }

}

export default withStyles(styles)(BtnScrollToTop)