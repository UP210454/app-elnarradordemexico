import { Provider } from 'react-redux';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React, {Fragment} from 'react';
import NotFoundPage from './components/routing/NotFoundPage'
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

//import store from './store';

import './App.css'

function App() {

  return (
    //<Provider store={store}>
			<BrowserRouter>
				<Fragment>
					<Navbar></Navbar>
					<Routes>
						<Route path='/' element={<Main/>}></Route>
            			<Route path='/*' element={<NotFoundPage/>}></Route>
					</Routes>
				</Fragment>
				<Footer></Footer>
			</BrowserRouter>
		//</Provider>
  )
}

export default App
