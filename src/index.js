import React from 'react';
import ReactDOM from 'react-dom';

function Article()
{
    const body=<section>body</section>
    return (
        <div>
            <h2>title</h2>
            {body}
        </div>
    )
}

function App() {
    return (
        <div>
            <h1>Hello world!</h1>
            <Article />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));
