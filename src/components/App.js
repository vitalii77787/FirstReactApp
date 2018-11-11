import React from 'react';
import ArticleList from './ArticleList/index';
import articles from '..//fixtures';
import { Router, Route } from 'react-router';
import { Link } from 'react-router-dom';
import history from './history';

function App() {
    return (
        <div className="container">
            <Router history={history}>
                <div>
                    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                        <Link lassName="navbar-brand" to="/">ReactApp</Link>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/List">List</Link>
                            </li>
                        </ul>
                        <div className="nav-link" style={{marginLeft:'auto',color:'white'}} >
                        <button className="btn btn-primary btn-md">
                            Login
                        </button>
                        </div>
                        <div className="nav-link">
                        <button className="btn btn-primary btn-md">
                            Register
                        </button>
                        </div>
                    </nav>
                    <Route path="/List"
                        render={(props) => <ArticleList articles={articles} />}
                    />
                </div>
            </Router>
        </div>
    )
}
export default App