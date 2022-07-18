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
const Brand = styled.div`
	height: 100%;
	width:auto;
	display: flex;
	justify-content: center;
	align-items: center;

	& > span{
	padding-left: 20px;
	padding-right:20px ;
	font-size: 1.2rem;
	color: #fff;
	font-weight: 500;

	}
}
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

export {
	NavMain,
	Brand,
	Icons,
	Icon,
	AddNew,
	Main,
	List

}
