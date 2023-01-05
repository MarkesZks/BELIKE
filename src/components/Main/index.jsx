import React from "react"
import "./style.css"
//import "./glider.js"
import principalSvgfrom from "../../assets/img/principal.jfif"
import imgminimalista from "../../assets/img/minimalista.png"

export default function Main() {
  return (
    <main>
      <section id="firstsection">
        <div class="flex wrapper" >
          <div id="text-section">
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
        </div>
      </section>

      <section class="wrapper">
        <div class="flex" id="section2">
          <img id="img-minimalista" src={imgminimalista} />
          <div>
            <div id="back-minimalista" >
              <h3>Design Minimalista</h3>
              <p>Móveis apenas essenciais e com design moderno, além de revestimentos bonitos e em cores neutras para manter a casa sempre com um estilo clean e suave.</p>
            </div>
            <p id="text-minimalista">Quero saber mais sobre os designs</p>
          </div>
        </div>
      </section >


      <section class="wrapper">
        <h2>Galeria</h2>

        <p>Se você está entediado com a aparência da decoração de interiores da casa comuns,<br></br>trabalhamos com designs diferentes e inovadores.</p>

        <div class="glider-contain">
          <div class="glider">
            <div>your content here</div>
            <div>your content here</div>
            <div>your content here</div>
            <div>your content here</div>
          </div>

          <button aria-label="Previous" class="glider-prev">«</button>
          <button aria-label="Next" class="glider-next">»</button>
          <div role="tablist" class="dots"></div>
        </div>


      </section >


    </main>
  )
}
