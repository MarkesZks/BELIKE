import React from "react"
import "./style.css"

import { Link } from 'react-router-dom';

import homeSvgfrom from "../../assets/img/home.svg"
import heartSvgfrom from "../../assets/img/fi_heart.svg"
import searchSvgfrom from "../../assets/img/fi_search.svg"
import useSvgfrom from "../../assets/img/fi_user.svg"

export default function Header() {
  return (
    <header class="wrapper">
      <div class="flex header">
        <div class="flex">
          <img id="logo" src={homeSvgfrom} alt="" />
          <h2 id="title-logo">BELIKE</h2>
        </div>
        <nav class="flex">
          <Link to="/">Inicio</Link>
          <Link to="/galeria">Galeria</Link>
          <Link to="/contato">Contato</Link>

          <div id="icons" class="flex">
            <img src={heartSvgfrom} alt="" />
            <img src={searchSvgfrom} alt="" />
            <img src={useSvgfrom} alt="" />
          </div>
        </nav>
      </div>
    </header>
  )
}

