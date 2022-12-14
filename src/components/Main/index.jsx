import React from "react"
import "./style.css"
import principalSvgfrom from "../../assets/img/principal.jfif"


export default function Main() {
  return (
    <main>
      <section class="sections flex wrapper">
        <div id="section1-txt">
          <h1>Ajudar você a encontrar
            o melhor conforto,
            é nossa prioridade.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sequi non maiores maxime impedit ut voluptate sint rerum delectus voluptatum iure </p>
          <div id="botoes-ini">
            <a id="btn1" href="">Entre em contato</a>
            <a id="btn2" href="">Mais sobre nós</a>
          </div>
        </div>
        <img id="img-principal" src={principalSvgfrom} />
      </section>
      <section>

      </section>
    </main>
  )
}
