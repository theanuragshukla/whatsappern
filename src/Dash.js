import {NavMain,Brand,Icons,Icon,AddNew,Main,List,ListItem,DpDiv,MidInfo} from './navComponents'
import {ProfileIcon,SearchIcon,OptionsIcon} from './icons/AllIcons'
import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
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

const Dash = () => {
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
		<List>
		<Link to='/chat'>
		<ListItem>
		<DpDiv>
		<div></div>
		</DpDiv>
		<MidInfo>
		<div className="name">
		<span class="nameSpan">Anurag Shukla</span>
		<span class="time">06:28pm</span>
		</div>
		<div className="desc">
		<span>
		Elit minus quidem quae quisquam debitis Sed minus aspernatur itaque omnis sapiente Beatae reiciendis labore qui odit blanditiis Quasi magni?
		</span>
		</div>
		</MidInfo>
		</ListItem>
		</Link>
		</List>
		</Main>
		<AddNew>+</AddNew>
		</>
	)
}

export default Dash
