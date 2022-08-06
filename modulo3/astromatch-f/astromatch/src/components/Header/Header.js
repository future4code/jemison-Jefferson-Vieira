import React from 'react';
// import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import Cabecalho from './Style';
import { IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';



function Header(props) {
    return(

        <Cabecalho>
        <IconButton>
            <PersonIcon onClick={()=>props.renderPage("matches")} className="icone" />
        </IconButton>
        <div className="TextoLogo">
        <h1 className='logoAstromatch'>ASTRO</h1>
        <h1 className='logoAstromatch2'>MATCH</h1>
        </div>
      
      <IconButton>
      <ForumIcon className="icone"/> 
      </IconButton>

    </Cabecalho>
  
   
    )
}

export default Header;