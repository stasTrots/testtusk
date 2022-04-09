import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Header } from './components/header';
import { Main } from './components/main/Index';
import { getUser, getPosition, getToken } from './redux/Users/action.js'

function App(props) {

  // Action 
  const { getUser, getPosition, getToken } = props
  // State
  const { url } = props.user.users
  
  useEffect(() => {
    getUser({ url, condition: false })
    getPosition()
    getToken()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default connect(({user}) => ({user}), {getUser, getPosition, getToken})(App)
