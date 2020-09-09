import React from 'react'

const Hello = () => {
    // return (
    //     <div id='hello' className='dummyClass'>
    //         <h1>Hello Samuel Barnes</h1>
    //     </div>
    // )
    
    return React.createElement(
        'div', 
        {id: 'hello', className: 'dummyClass'}, 
        React.createElement('h1', null, 'Hello Samuel Barnes'))
}

export default Hello