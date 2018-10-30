import React from 'react';
import ReactDOM from 'react-dom';
import "./app.css";
import { Icon } from 'react-icons-kit';
import { home } from 'react-icons-kit/icomoon/home';
import {loading} from 'react-icons-kit/ikons/loading'

const App = () => (
    <div className="body">
        <div className="title animated" style={{marginTop:150}}>
            <Icon size={128} icon={loading} />
        </div>

        <div className="title">
            Hello world!
        </div>
    </div>
)

ReactDOM.render(
    <App />,
    document.getElementById('root')
)