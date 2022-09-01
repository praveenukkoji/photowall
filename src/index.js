import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import './styles/stylesheet.css'
import { BrowserRouter } from 'react-router-dom';
import { legacy_createStore } from 'redux'
import rootReducer from './redux/reducer'
import { Provider } from 'react-redux';

const store = legacy_createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<React.StrictMode>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</React.StrictMode>
	</Provider>
);
