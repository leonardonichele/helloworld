import * as React from 'react';
import heroImg from '../images/hero.jpg';
import linkedinImg from '../images/linkedin.png';
import referenceImg from '../images/star.png';
import '../styles/landing.css';

function Landing() {
    return (
        <div className="content">
            <header>
                <div className="topnav">
                    <p><b>Leonardo</b> Nichele</p>
                </div>
            </header>
            <main>
                <div className="hero">
                    <img src={heroImg} alt="helloworld"/>
                    <br/>
                </div>
                <div className="about">
                    <h1>um pouco sobre<br></br>quem é Leonardo da Silva Nichele.</h1>
                    <br/>
                    <p>Cientista de dados em formação, desenvolvedor de software e amante por computação.</p>
                    <p>- Nada é impossível, basta querer e conquistar.</p>
                    <p>- A capacidade analítica e os dados movem o mundo.</p>
                    <br/>
                    <a href="https://www.linkedin.com/in/leonardonichele/"><img src={linkedinImg} alt="linkedin"/></a>
                    <a href="https://www.linkedin.com/in/leonardonichele/"><img src={referenceImg} alt="reference"/></a>
                </div>
                <hr/>
                <div className="contact">
                    <h1>Contate-me</h1>
                    <p>Espero que sua leitura tenha sido agradável, caso tenha interesse sinta-se a vontade em estabelecer contato comigo!</p>
                    <br/>
                    <br/>
                    <a href="mailto:leonardonichelework@outlook.com">Enviar mensagem</a>
                </div>
            </main>
            <footer>
                <div className="flowslabs">
                    <h3>Criado originalmente por Leonardo Nichele com ❤️ - 2022</h3>
                </div>
            </footer>
        </div>
    );
}

export default Landing;