import React from 'react';
import ReactDOM from 'react-dom'
/* detect url in a message and add a link tag */
function detectURL(message) {
	var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
	return message.replace(urlRegex, function(urlMatch) {
		return '<a href="' + urlMatch + '">' + urlMatch + '</a>';
	})
}

/* ========== */
/* Title component */
class Title extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<div className={"chatApp__convTitle"}>{this.props.owner}</div>
		);
	}
}
/* end Title component */
/* ========== */

/* ========== */
/* InputMessage component - used to type the message */
class InputMessage extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.handleSendMessage = this.handleSendMessage.bind(this);
		this.handleTyping = this.handleTyping.bind(this);
	}
	handleSendMessage(event) {
		event.preventDefault();
		/* Disable sendMessage if the message is empty */
		if( this.messageInput.value.length > 0 ) {
			this.props.sendMessageLoading(this.ownerInput.value, this.ownerAvatarInput.value, this.messageInput.value);
			/* Reset input after send*/
			this.messageInput.value = '';
		}
	}
	handleTyping(event) {
		/* Tell users when another user has at least started to write */
		if( this.messageInput.value.length > 0 ) {
			this.props.typing(this.ownerInput.value);
		}
		else {
			/* When there is no more character, the user no longer writes */
			this.props.resetTyping(this.ownerInput.value);
		}
	}
	render() {
		/* If the chatbox state is loading, loading class for display */
		var loadingClass = this.props.isLoading ? 'chatApp__convButton--loading' : '';
		let sendButtonIcon = <i className={"material-icons"}>send</i>;
		return (
			<form onSubmit={this.handleSendMessage}>
				<input
					type="hidden"
					ref={owner => (this.ownerInput = owner)}
					value={this.props.owner}
				/>
				<input
					type="hidden"
					ref={ownerAvatar => (this.ownerAvatarInput = ownerAvatar)}
					value={this.props.ownerAvatar}
				/>
				<input
					type="text"
					ref={message => (this.messageInput = message)}
					className={"chatApp__convInput"}
					placeholder="Text message"
					onKeyDown={this.handleTyping}
					onKeyUp={this.handleTyping}
					tabIndex="0"
				/>
				<div className={'chatApp__convButton ' + loadingClass} onClick={this.handleSendMessage}>
				{sendButtonIcon}
				</div>
			</form>
		);
	}
}
/* end InputMessage component */
/* ========== */

/* ========== */
/* TypingIndicator component */
class TypingIndicator extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		let typersDisplay = '';
		let countTypers = 0;
		/* for each user writing messages in chatroom */
		for ( var key in this.props.isTyping ) {
			/* retrieve the name if it isn't the owner of the chatbox */
			if( key != this.props.owner && this.props.isTyping[key] ) {
				typersDisplay += ', ' + key;
				countTypers++;
			}
		}
		/* formatting text */
		typersDisplay = typersDisplay.substr(1);
		typersDisplay += (( countTypers > 1 ) ? ' are ' : ' is ');
		/* if at least one other person writes */
		if ( countTypers > 0 ) {
			return (
				<div className={"chatApp__convTyping"}>{typersDisplay} writing
				<span className={"chatApp__convTypingDot"}></span>
				</div>
			);
		}
		return (
			<div className={"chatApp__convTyping"}></div>
		);
	}
}
/* end TypingIndicator component */
/* ========== */

/* ========== */
/* MessageList component - contains all messages */
class MessageList extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		return (
			<div className={"chatApp__convTimeline"}>
			{this.props.messages.slice(0).reverse().map(
				messageItem => (
					<MessageItem
						key={messageItem.id}
						owner={this.props.owner}
						sender={messageItem.sender}
						senderAvatar={messageItem.senderAvatar}
						message={messageItem.message}
					/>
				)
			)}
			</div>
		);
	}
}
/* end MessageList component */
/* ========== */

/* ========== */
/* MessageItem component - composed of a message and the sender's avatar */
class MessageItem extends React.Component {
	render() {
		/* message position formatting - right if I'm the author */
		let messagePosition = (( this.props.owner == this.props.sender ) ? 'chaterApp__convMessageItem--right' : 'chaterApp__convMessageItem--left');
		return (
			<div className={"chaterApp__convMessageItem " + messagePosition + " clearfix"}>
				<img src={this.props.senderAvatar} alt={this.props.sender} className="chatApp__convMessageAvatar" />
				<div className="chaterApp__convMessageValue" dangerouslySetInnerHTML={{__html: this.props.message}}></div>
			</div>
		);
	}
}
/* end MessageItem component */
/* ========== */

/* ========== */
/* ChatBox component - composed of Title, MessageList, TypingIndicator, InputMessage */
class ChatBox extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			isLoading: false
		};
		this.sendMessageLoading = this.sendMessageLoading.bind(this);
		var timeout = null;
	}
	/* catch the sendMessage signal and update the loading state then continues the sending instruction */
	sendMessageLoading(sender, senderAvatar, message) {
		this.setState({ isLoading: true });
		this.props.sendMessage(sender, senderAvatar, message);
		setTimeout(() => {
			this.setState({ isLoading: false });
		}, 400);
	}
	render() {
		return (
			<div className={"chatApp__conv"}>
				<Title
					owner={this.props.owner}
				/>
				<MessageList
					owner={this.props.owner}
					messages={this.props.messages}
				/>
				<div className={"chaterApp__convSendMessage clearfix"}>
					<TypingIndicator
						owner={this.props.owner}
						isTyping={this.props.isTyping}
					/>
					<InputMessage
						isLoading={this.state.isLoading}
						owner={this.props.owner}
						ownerAvatar={this.props.ownerAvatar}
						sendMessage={this.props.sendMessage}
						sendMessageLoading={this.sendMessageLoading}
						typing={this.props.typing}
						resetTyping={this.props.resetTyping}
					/>
				</div>
			</div>
		);
	}
}
/* end ChatBox component */
/* ========== */

/* ========== */
/* ChatRoom component - composed of multiple ChatBoxes */
class ChaterRoom extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			messages: [{
				id: 1,
				sender: 'Shun',
				senderAvatar: 'https://i.pravatar.cc/150?img=32',
				message: 'Hello 👋'
			},
			{
				id: 2,
				sender: 'Gabe',
				senderAvatar: 'https://i.pravatar.cc/150?img=56',
				message: 'Hey!'
			},
			{
				id: 3,
				sender: 'Gabe',
				senderAvatar: 'https://i.pravatar.cc/150?img=56',
				message: 'How are you?'
			},
			{
				id: 4,
				sender: 'Shun',
				senderAvatar: 'https://i.pravatar.cc/150?img=32',
				message: 'Great! It\'s been a while... 🙃'
			},
			{
				id: 5,
				sender: 'Gabe',
				senderAvatar: 'https://i.pravatar.cc/150?img=56',
				message: 'Indeed.... We\'re gonna have to fix that. 🌮🍻'
			}
			],
			isTyping: [],
		};
		this.sendMessage = this.sendMessage.bind(this);
		this.typing = this.typing.bind(this);
		this.resetTyping = this.resetTyping.bind(this);
	}
	/* adds a new message to the chatroom */
	sendMessage(sender, senderAvatar, message) {
		setTimeout(() => {
			let messageFormat = detectURL(message);
			let newMessageItem = {
				id: this.state.messages.length + 1,
				sender: sender,
				senderAvatar: senderAvatar,
				message: messageFormat
			};
			this.setState({ messages: [...this.state.messages, newMessageItem] });
			this.resetTyping(sender);
		}, 400);
	}
	/* updates the writing indicator if not already displayed */
	typing(writer) {
		if( !this.state.isTyping[writer] ) {
			let stateTyping = this.state.isTyping;
			stateTyping[writer] = true;
			this.setState({ isTyping: stateTyping });
		}
	}
	/* hide the writing indicator */
	resetTyping(writer) {
		let stateTyping = this.state.isTyping;
		stateTyping[writer] = false;
		this.setState({ isTyping: stateTyping });
	}
	render() {
		let users = {};
		let chatBoxes = [];
		let messages = this.state.messages;
		let isTyping = this.state.isTyping;
		let sendMessage = this.sendMessage;
		let typing = this.typing;
		let resetTyping = this.resetTyping;

		/* user details - can add as many users as desired */
		users[0] = { name: 'Shun', avatar: 'https://i.pravatar.cc/150?img=32' };
      // users[1] = { name: 'Gabe', avatar: 'https://i.pravatar.cc/150?img=56' };
		// users[2] = { name: 'Kate', avatar: 'https://i.pravatar.cc/150?img=47' };
		// users[3] = { name: 'Patrick', avatar: 'https://i.pravatar.cc/150?img=14' };

		/* creation of a chatbox for each user present in the chatroom */
		Object.keys(users).map(function(key) {
			var user = users[key];
			chatBoxes.push(
				<ChatBox
					key={key}
					owner={user.name}
					ownerAvatar={user.avatar}
					sendMessage={sendMessage}
					typing={typing}
					resetTyping={resetTyping}
					messages={messages}
					isTyping={isTyping}
				/>
			);
		});
		return (
			<div className={"chatApp__room"}>
				{chatBoxes}
			</div>
		);
	}
}
/* end ChatRoom component */
/* ========== */

/* render the chatroom */
// setTimeout(() => {
// 	document.getElementById("chaterApp"));	ReactDOM.render(<ChaterRoom />, document.getElementById("chaterApp"));
// }, 400);

export default ChaterRoom;

























// import React, { useEffect, useState } from "react"
// import { StreamChat } from "stream-chat"
// import {
//   Chat,
//   Channel,
//   ChannelHeader,
//   ChannelList,
//   LoadingIndicator,
//   MessageInput,
//   MessageList,
//   Thread,
//   Window,
//   useChannelStateContext,
// } from "stream-chat-react"

// import "stream-chat-react/dist/css/index.css"

// const userToken =
//   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoibGl0dGxlLXdvb2QtOSJ9.CqE75Jdcw_Gv2CySKWsgkGd2ECVe7dR3_Knxap5mlZg"

// const filters = { type: "messaging", members: { $in: ["little-wood-9"] } }
// // TS tweak No1
// const sort = { last_message_at: -1 }

// const CustomChatAdded = () => {
//   // TS tweak No2
//   const [chatClient, setChatClient] = useState(null)

//   useEffect(() => {
//     const initChat = async () => {
//       const client = StreamChat.getInstance("t442dfkucxcj")

//       await client.connectUser(
//         {
//           id: "little-wood-9",
//           name: "little-wood-9",
//           image: "https://getstream.io/random_png/?id=little-wood-9&name=little-wood-9",
//         },
//         userToken
//       )

//       setChatClient(client)
//     }

//     initChat()
//   }, [])

//   if (!chatClient) {
//     return <LoadingIndicator />
//   }

//   return (
//     <Chat client={chatClient} theme="messaging light">
//       <ChannelList filters={filters} sort={sort} />
//       <Channel>
//         <Window>
//           <ChannelHeader />
//           <MessageList />
//           <MessageInput />
//         </Window>
//         <Thread />
//       </Channel>
//     </Chat>
//   )
// }

// export default CustomChatAdded;

