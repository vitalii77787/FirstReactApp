import React, { Component } from 'react';

class Article extends Component {

    state = {
        isOpen: true
    }
    render() {
        const { arcticle } = this.props;
        console.log(this.props);
        const body = this.state.isOpen && <section>{arcticle.text}</section>
        return (
            <div>
                <h2>
                    {arcticle.title}
                    <button onClick={this.handlerClick}>
                        {this.state.isOpen ? "close":"open"}
                    </button>
                </h2>
                {body}
                <h3>creation date: {(new Date(arcticle.date)).toDateString()}</h3>
            </div>
        )
    }

    handlerClick=() => {
        console.log('------','clicked');
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}

export default Article