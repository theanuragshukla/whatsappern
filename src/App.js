import './App.css'
import Dash from './Dash'
import Chat from './Chat'
import { Routes,Route } from 'react-router-dom'
const App = () => {
	return (
		<>
		<Routes>
		<Route path='/' element={<Dash/>}/>
		<Route path='/chat' element={<Chat/>}/>
		</Routes>
		</>
	)
}

export default App
