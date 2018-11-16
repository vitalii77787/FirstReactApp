import React from 'react';
import ArticleList from './ArticleList/index';
import articles from '..//fixtures';
import products from '..//products';
import { Router, Route } from 'react-router';
import { Link } from 'react-router-dom';
import history from './history';
import ProductList from './ProductList';

function App() {
    return (
        <div className="container">
            <Router history={history}>
                <div>
                    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                        <Link className="navbar-brand" to="/">ReactApp</Link>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/List">List</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/Products">Products</Link>
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
                     <Route path="/Products"
                        render={(props) => <ProductList products={products} />}
                    />
                </div>
            </Router>
        </div>
    )
}
export default App