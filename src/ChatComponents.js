import styled,{css} from 'styled-components'

const ChatMain = styled.div`
width:100%;
height:100vh;
overflow:hidden;
`

const ChatBody = styled.div`
background-color:var(--gray);
height:calc(100vh - 125px);
display: flex;
	width: 100%;
	flex-direction:column;
	overflow:scroll ;
	justify-content:flex-start;
`

const Chats = styled.div`
background-color:var(--gray);
display: flex;
	width: 100%;
	flex-direction:column;
	justify-content:flex-start;
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
	display:flex;
	border-radius:200vmax ;
	flex-direction: row;
	background-color: #fff;
	overflow: hidden;
	justify-content:flex-start;

&>div{
width:55px;
}
	& svg{
	fill:#666;
	}
	& > input{
	width:calc(100% - 60px);
	font-size: 1.05rem;
	outline: none;
	border: none;
	padding-right: 20px;
	color:#000;
	}
	&>input::placeholder{
	color:#666;
	}
`
const Input = styled.input`
    ${props =>   props.type === 'text' && `
        width: 100%;
        height: 55px;
        background-color: rgba(104, 105, 102, 0.1);
        border: 1px solid #354545;
        margin-top: 20px;
        outline: none;
        padding-left: 40px;
        color: white;
        font-size: 22px;
    `}
`;
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
const MsgDiv = styled.div`
	display: inline-block;
	min-width: 100px;
	max-width: 70%;
	padding: 5px 10px;
	background-color:var(--light-lime);
	height: auto;
	margin-top: 10px;
	border-radius:6px;
	margin:auto;
	margin:${props=>props.right ? `4px 5px auto auto` :`4px auto auto 5px`};

	&>.time {
	height: 16px;
	font-size:0.7rem;
	width: 100%;
	text-align: right;
	margin-top: 4px;
	color:#666;
	font-weight:500;
}


`
const Msg = styled.div`
	font-size: 1rem;
	color: #000;
	word-wrap: break-word;
	overflow: hidden;


`
export {
	InputMain,
	ChatBody,
	Chats,
	ChatMain,
	InputDiv,
	Input,
	MsgDiv,
	Msg,
	Send
}
