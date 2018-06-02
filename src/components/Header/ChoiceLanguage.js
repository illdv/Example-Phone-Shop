import React from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { languageChange } from '../../AC'
import { withStyles } from '@material-ui/core/styles';
import { MenuItem, Menu, Typography, Hidden,  Button, withWidth, Tooltip } from '@material-ui/core'
import { Language } from '@material-ui/icons'
import LocalizedText from '../../translate/localized-text'
import classnames from 'classnames'

const styles = theme => ({
  circled: {
    minWidth: 48,
    height: 48,
    borderRadius: '50%'
  },
  paper: {
    left: 1630.47,
  },
  selected: {
    backgroundColor: theme.palette.primary.light
  }
});

const options = [
  'Russian',
  'English',
];

class Choicelanguage extends React.Component {

  state = {
    anchorEl: null,
    selectedIndex:  localStorage.language ? +localStorage.language : 1,
  };

  componentDidMount() {
    this.handlelanguage()
   }

  componentDidUpdate() {
    this.handlelanguage()
  }

  handlelanguage = () => {
    localStorage.language = this.state.selectedIndex  
    if(localStorage.language) {
     this.props.languageChange(options[+localStorage.language])
    }    else {
     this.props.languageChange(options[+localStorage.language]);
    }
  }
  render() {
    const { classes, width } = this.props
    const { anchorEl, selectedIndex } = this.state;
    const languageWord = () => options[selectedIndex].toUpperCase().substring(0, 3)


    return (
      
      <div>
        <Tooltip title={<LocalizedText>change language</LocalizedText>}>
          <Button
            size="small"
            className={classnames({
              [classes.circled]: width === 'sm' || width === 'xs'
            })}
            color='inherit'
            onClick={event =>
              this.setState({ anchorEl: event.currentTarget })
            }
          >
            <Hidden smDown>
              <Typography variant="body2" component='span' style={{
                 paddingRight: 10
              }} color='inherit'>
                {languageWord()}
              </Typography>
            </Hidden>
            <Language />
          </Button>
          </Tooltip>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => {
            this.setState({ anchorEl: null });
          }}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              selected={index === selectedIndex}
              classes={{
                selected: classes.selected
              }}
              onClick={event => this.setState({
                selectedIndex: index,
                anchorEl: null
              })}
            >
            <LocalizedText>{option}</LocalizedText>
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}



export default compose(
  withStyles(styles),
  withWidth(),
  connect(
    null,
    { languageChange }
  )
)(Choicelanguage);