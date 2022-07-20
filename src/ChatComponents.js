import styled from 'styled-components'

const ChatMain = styled.div`
width:100%;
height:100vh;
overflow:hidden;
`

const Chats = styled.div`
background-color:var(--gray);
height:calc(100vh - 125px);
`

const InputMain = styled.div`
	width: 100%;
	height: 65px;
	display: flex;
	padding:5px;
	position:absolute;
	background-color:var(--gray);
	display: flex;
	
`
const InputDiv = styled.div`
width: calc(100% - 55px);
	height: 55px;
	border-radius:200vmax ;
	flex-direction: row;
	background-color: #fff;
	overflow: hidden;
`
const Send = styled.div`
height:55px;
width:55px;
background-color:var(--green);
border-radius:50%;
&>Icons{
width:100%;
height:100%;
}
& svg{
	height: 50%;
	width: 50%;
	transform: rotate(45deg);

}
&>Icon{
	height: 55px;
	width: 55px;
	padding:0 5px 0 0px;
	border-radius: 50%;
	background-color: #128c7e;

}
`
export {
	InputMain,
	Chats,
	ChatMain,
	InputDiv,
	Send
}
