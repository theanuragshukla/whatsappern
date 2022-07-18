import './App.css'
import {NavMain,Brand,Icons,Icon,AddNew,Main,List} from './navComponents'
import {ProfileIcon,SearchIcon,OptionsIcon} from './icons/AllIcons'
import React,{useEffect} from 'react'
const login = async() => {
	const info = {
		user:"anurag",
		pass:"Asdf@123"
	}
	await fetch('https://unrealwhatsapp.herokuapp.com/let-me-in', {
		method: 'POST',
		headers: {
			'Accept': 'application/json, text/plain, */*',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(info)
	})
		.then(res=>res.json())
		.then(res=>alert(res.status))
	await fetch('https://unrealwhatsapp.herokuapp.com/checkAuth',{
		method:'get',
		headers: {
			'Accept': 'application/json, text/plain, */*',
			'Content-Type': 'application/json'
		},
		crossdomain: true,
		withCredentials:'include',


	})
}

const App = () => {
	/*	useEffect(()=>{
		login()
	},[])
	*/

	return (
		<>
		<NavMain>
		<Brand>
		<span>! whatsapp</span>
		</Brand> 
		<Icons>
		<Icon><SearchIcon/></Icon>
		<Icon><ProfileIcon/></Icon>
		<Icon><OptionsIcon/></Icon>
		</Icons>
		</NavMain>
		<Main>
		<List/>
		</Main>
		<AddNew>+</AddNew>
		</>
	)
}

export default App
