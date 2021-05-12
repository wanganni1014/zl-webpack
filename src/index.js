import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index.less';
import Girl from './imgs/girl.jpeg'

const MyComp = () => {
    return <div className="red less">
        <div>React & Webpack</div>
        <img src={Girl} />
    </div>
}

ReactDOM.render(
    <MyComp />, 
    document.getElementById('app')    
)