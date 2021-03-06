import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import SchoolRegister from './pages/Register/SchoolRegister';
import CompanyRegister from './pages/Register/CompanyRegister';
import StudentProfile from './pages/Student/StudentProfile';
import StdProfileConfig from './pages/Student/StdProfileConfig';
import Courses from './pages/Courses/Courses';
import Jobs from './pages/Jobs/Jobs';
import SchoolProfile from './pages/School/SchoolProfile';
import CheckStudents from './pages/School/CheckStudents';
import Company from './pages/Company/Company';
import NewJob from './pages/Company/NewJob';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Landing } />
                <Route path="/login" component={ Login } />
                <Route path="/register" component={ Register } />
                <Route path="/schoolregister" component={ SchoolRegister } />
                <Route path="/companyregister" component={ CompanyRegister } />
                <Route path="/studentprofile" component={ StudentProfile } />
                <Route path="/stdprofconfig" component={ StdProfileConfig } />
                <Route path="/courses" component={ Courses } />
                <Route path="/jobs" component={ Jobs } />
                <Route path="/scprofile" component={ SchoolProfile } />
                <Route path="/chkstd" component={ CheckStudents } />
                <Route path="/company" component={ Company } />
                <Route path="/newjob" component={ NewJob } />
                

            </Switch>
        </BrowserRouter>
    );
}