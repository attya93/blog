import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import CreateProject from './components/projects/CreateProject';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/project/:id" exact component={ProjectDetails} />
        <Route path="/" exact component={Dashboard} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/create" exact component={CreateProject} />
      </Switch>
    </div>
  );
}

export default App;
