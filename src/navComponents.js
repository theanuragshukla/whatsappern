import styled from 'styled-components'
const NavMain = styled.div`
height:var(--nav-height);
width:100vw;
background-color:var(--green);
display: flex;
	justify-content:space-between;
	position: sticky;
	top:0 ;
`
const Icon = styled.div`
	width: var(--icon-size);
	height: var(--icon-size);
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;


	&>svg{
	height:50%;
	width:50%;
	fill:#fff;
	}
	
`
const Icons = styled.div`
		display: flex;
	height: 100%;
	justify-content: center;
	align-items:center;
&>div{
	margin-right: 5px;
	}
	}
`
const AddNew=styled.div`
	position: fixed;
	bottom: 20px;
	right: 20px;
	width: 60px;
	height: 60px;
	border-radius: 50%;
	background-color:#128c7e;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 2.5rem;

`
const Main = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
background-color:#fff;
color:#000;
min-height: calc(100vh - var(--nav-height));
width:100vw;
overflow:scroll;
`
const List = styled.div`
width:100%;
padding-bottom:50px;
`
const ListItem = styled.div`
width:100%;
height:70px;
display:flex;
justify-content:flex-start;
align-items:center;
margin-top:10px;
padding:5px;
`
const DpDiv = styled.div`
height:50px;
width:50px;
&>div{
height:100%;
width:100%;
border-radius:50%;
background-image:url(https://source.unsplash.com/random);
background-position: center center;
background-size:cover;
}
`
const MidInfo=styled.div`
width:calc(100% - 60px);
padding:5px;
padding-left:10px;
height:100%;

&>.name {
display: flex;
justify-content: space-between;
height: 50%;
align-items:center ;
font-weight: 500;
font-size: 1.05rem;
&>span.time{
font-size:0.7rem;
padding-right:5px;
}
}
& > .desc {
height: 50%;
font-size:0.85rem ;
display: flex;
flex-direction: column;
justify-content:center ;
font-weight: 500;
&>span{
color:#666;
}
}
`
const Brand = styled.div`
	height: 100%;
	width:auto;
	display: flex;
	justify-content: center;
	align-items: center;

	& > span{
	padding-left: 10px;
	padding-right:20px ;
	font-size: 1.2rem;
	color: #fff;
	font-weight: 500;
	}
	& .backIcon{
	padding:0;
	margin:0;
	width:45px;
	height:45px;
	} 
	& svg{
	height:100%;
	width:500%;
	}
`
export {
	NavMain,
	Brand,
	Icons,
	Icon,
	AddNew,
	Main,
	List,
	ListItem,
	DpDiv,
	MidInfo
}
