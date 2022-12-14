import React from "react"
export default function Header() {
  return (

<header class="wrapper">
  <div class="flex header">
    <div class="flex">
      <img id="logo" src="img/home.svg" alt=""/>
      <h2 id="title-logo">BELIKE</h2>
    </div>
    <nav class="flex">
      <a href="">Inicio</a>
      <a href="">Galeria</a>
      <a href="">Contato</a>
      <div id="icons" class="flex">
        <img src="img/fi_heart.svg" alt=""/>
        <img src="img/fi_search.svg" alt=""/>
        <img src="img/fi_user.svg" alt=""/>
          </div>
    </nav>
  </div>
</header>


  )
}

