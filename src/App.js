import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from './component/Menu';
import Welcome from './component/Welcome'
import TableTS from './CSV/NewTableTS';
import TableTI from './CSV/NewTableTI';
import TableS from './CSV/NewTableS';
import './CSV/CSV.css';
import DcmViewer from './component/viewer';
import Dicom from './component/Dicom';
import About from './component/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <section style={{display:'flex'}}>
          <Menu />
          <Switch>
            <Route path="/" exact component={Welcome} />
            <Route path="/undefined" component={Dicom} />
            <Route path="/dicom" component={Dicom} />
            <Route path="/about" component={About} />
            <Route path="/projectdata1/csv/sample_submission.csv" component={TableS} /> 
            <Route path="/projectdata1/csv/train_image_level.csv" component={TableTI} />
            <Route path="/projectdata1/csv/train_study_level.csv" component={TableTS} />
            <Route path="/projectdata1/*" exact> <DcmViewer /> </Route>
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
