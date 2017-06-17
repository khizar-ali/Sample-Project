import React from 'react'

import VisibleItemList from '../containers/VisibleItemList'
import AddItem from '../containers/AddItem'
// import PropTypes from 'prop-types'

import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import injectTapEventPlugin from 'react-tap-event-plugin'



injectTapEventPlugin();

const App = () => {
  return (
    <Grid container style={{width: '100%'}}>
      <Grid item xs={12} style={{marginBottom:'100px'}}>
        <AppBar>
          <Toolbar>
            <Typography type="title" color="inherit">Movies</Typography>
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid container justify='center'>
        <Grid item xs={10}>
          <Paper elevation={6}>
            <AddItem />
            <VisibleItemList />
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default App
