import React from 'react';
import Article from './Article';
import arcticles from '..//fixtures';

function App() {
    return (
        <div>
            <h1>Hello world!</h1>
            <Article arcticle={arcticles[0]}  vova="hello"/>
        </div>
    )
}
export default App