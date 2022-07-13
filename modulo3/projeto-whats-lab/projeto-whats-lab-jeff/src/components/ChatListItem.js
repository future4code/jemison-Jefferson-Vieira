import React from 'react';
import'./ChatListItem.css';
import avatarPerfil from '../img/img_avatar.png';


export default  ({onClick,active,data})=>{
    return(
        <div className={ `chatlistItem ${active?'active' :''}`}  
        onClick={onClick}>
        
            <img className="chatListitemAvatar" src={avatarPerfil} alt="avatar do Perfil"/>
            <div className="chatListitemLines">
                        <div className="chatListitemLine">
                        <div className="chatListitemName">Contato</div> 
                            <div className="chatListItemDate">18:00</div>
                        </div>

                        <div className="chatListitemLine">
                            <div className="chatListItem--Last-Msg">
                                <p>Ola tudo bem ? Essa mensgem mamsma fhinbasm adkjbdaas aoshdlaksbdaksjdb sdal sdnib</p>
                            </div>     
                        </div>
            </div>
      </div>
    )
}