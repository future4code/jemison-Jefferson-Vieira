import React, {useState, useEffect} from 'react';
import './App.css';
import ChatListItem from './components/ChatListItem';

import avatarPerfil from './img/img_avatar.png';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

    function App() {

        const [chatList,setChatList] =useState([{},{},{},{}])
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
                    />
                 ))
                }
                </div>

            </div>
            <div className="contentArea">
             ........
            </div>
        
        </div>
    );
    }

export default App;
