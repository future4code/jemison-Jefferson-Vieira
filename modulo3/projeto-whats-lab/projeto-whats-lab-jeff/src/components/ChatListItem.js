import React from 'react';
import'./ChatListItem.css';
import avatarPerfil from '../img/img_avatar.png';


export default  ()=>{
    return(
        <div className="chatListitem">
            <img className="chatListitemAvatar" src={avatarPerfil} alt="avatar do Perfil"/>
            <div className="chatListitemLines">
                        <div className="chatListitemLine">
                        <div className="chatListitemName">Jeff</div> 
                            <div className="chatListItemDate">18:00</div>
                        </div>

                        <div className="chatListitemLine">
                            <div className="chatListItem--Last-Msg">
                                <p>Ola tudo bem ?</p>
                            </div>     
                        </div>
            </div>
      </div>
    )
}