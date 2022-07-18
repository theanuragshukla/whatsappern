import {NavMain ,DpDiv,Brand , Icons, Icon} from './navComponents'
import {VoiceCall,VideoCall,OptionsIcon,BackIcon} from './icons/AllIcons'
const Chat = () => {
	return (
		<>
		<NavMain>
		<Brand>
		<Icons className="backIcon">
		<Icon className="backIcon">
		<BackIcon className="backIcon"></BackIcon>
		</Icon>
		</Icons>
		<DpDiv>
		<div></div>
		</DpDiv>
		<span>Anurag Shukla</span>
		</Brand>
		<Icons>
		<Icon><VoiceCall/></Icon>
		<Icon><VideoCall/></Icon>
		<Icon><OptionsIcon/></Icon>
		</Icons>
		
	</NavMain>
		</>
	)
}
export default Chat
