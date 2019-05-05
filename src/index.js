import './styles/custom.scss';

import React from 'react';
import ReactDOM from 'react-dom';


import { ToDos } from './js/components/ToDos/ToDos'
import { Tasks } from './js/components/Tasks/Tasks';

class App extends React.Component {
    render() {
        return (<div className="wrapper">
            <div className="container">
                <div className="card mt-3">
                    <div className="card-header">
                        ToDos
                    </div>
                    <ToDos/>
                </div>
                <div className="card mt-3">
                    <div className="card-header">
                        Daily Tasks
                    </div>
                    <Tasks/>    
                </div>
            </div>
        </div>)
    }
}

// ========================================

ReactDOM.render(<App/>, document.getElementById('root'));
