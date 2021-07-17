import React from 'react';
import fotoperfil from '../../assets/foto-perfil.svg';

function CardMenor(){
  return(
    <div className = 'cardmenor'>
      <img className = 'foto-cardmenor' src = {fotoperfil}/>
      <p>Nome da pessoa</p>
      <button>Ver mais</button>
    </div>
  );
}

export default CardMenor;
