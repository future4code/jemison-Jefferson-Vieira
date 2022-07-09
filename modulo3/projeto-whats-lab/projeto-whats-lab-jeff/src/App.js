import React, {useState, useEffect} from 'react';
import './App.css';
import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';

import avatarPerfil from './img/img_avatar.png';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import imagemWhats from './img/imgTelefoneConectado.png';

    function App() {

        const [chatList,setChatList] =useState([
          {chatId:1, title:'Fulano de Tal', image:{imagemWhats}},
          {chatId:1, title:'Fulano de Tal', image:{imagemWhats}},
          {chatId:1, title:'Fulano de Tal', image:{imagemWhats}},
          {chatId:1, title:'Fulano de Tal', image:{imagemWhats}},
        ])
        const [activeChat,setActiveChat]=useState ({});
    return (
        <div className="app-window">
            <div className="sideBar">
                <header>
                    <img className="headerAvatar" src={avatarPerfil} alt="avatar do Perfil"/>
                    <div className="headerButtons">
                        <div className="headerBtn">
                          <DonutLargeIcon style={{color:'#919191'}} />  
                        </div>
                        <div className="headerBtn">
                          <ChatIcon style={{color:'#919191'}} />  
                        </div>
                        <div className="headerBtn">
                          <MoreVertIcon style={{color:'#919191'}} />  
                        </div>
                    </div>
                </header>
                <div className="search">
                 <div className="searchInput">
                   <SearchIcon font-size="Small" style={{color:'#919191'}}/>
                   <input type="search" placeholder="Procurar ou começar uma nova conversa"/>
                 </div>
                </div>
                <div className="chatList">
                 {chatList.map((item,key)=>(
                    <ChatListItem
                    key={key}
                    DATA={item}
                    active={activeChat.chatId === chatList[key].chatId}
                    onClick={()=>setActiveChat(chatList[key])}
                    />
                 ))
                }
                </div>

            </div>
            <div className="contentArea">
              {activeChat.chatId !== undefined && 
              <ChatWindow />
              }
              {activeChat.chatId === undefined && 
             <ChatIntro/>
              }
            </div>
        
        </div>
    );
    }

export default App;
