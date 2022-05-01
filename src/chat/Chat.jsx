
import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './ChatFeed';
import '../app/App.css';

const projectID = '274dfa5c-cf58-4f99-a95b-f8f53aadaf51';



const Chat = () => {
  return (
    <ChatEngine 
      height="100vh"
      projectID={projectID}
      userName="Bido"
      userSecret="12345678"
      // userName={localStorage.getItem('username')}
      // userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    
    />  
    )
}

export default Chat;


























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
