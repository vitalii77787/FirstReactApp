import React from 'react';
function Article(props)
{
    const {arcticle} = props;
    console.log(props);
    const body=<section>{arcticle.text}</section>
    return (
        <div>
            <h2>{arcticle.title}</h2>
            {body}
            <h3>creation date: {(new Date(arcticle.date)).toDateString()}</h3>
        </div>
    )
}

export default Article