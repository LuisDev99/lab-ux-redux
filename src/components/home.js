import {
    withStyles,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    IconButton,
    Grid,
    TextField,
    Button,
    FormControl
  } from "@material-ui/core";
  

import React, {Component} from 'react';
import ACTIONS from "../modules/action";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'

const styles = theme => ({
    root: {
      flexGrow: 1,
      maxWidth: 752
    },
    demo: {
      backgroundColor: theme.palette.background.paper
    },
    title: {
      margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`
    }
  });


const mapStateToProps = state => ({
    titles: state.title
});

const mapDispatchToProps = dispatch => ({
    changeTitle: title => dispatch(ACTIONS.homeTitle(title))
});



class Home extends Component{

    constructor(){
        super();

        this.state = {
            title: 'Hola'
        }

    }

    titleChange = (event) => {
        console.log(this.props);
        this.props.changeTitle(this.state.title);
        
    }

    render(){
        return(
            <div>
                <h1>{this.props.titles}</h1>
                <Button onClick={this.titleChange}>BOOM</Button>
            </div>
        );
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(Home));