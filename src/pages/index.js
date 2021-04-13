import * as React from "react";
import "./style/home.scss";
import Link from "gatsby-link";

import Navbar from './components/navbar';
import Footer from './components/footer/footer';
import { StaticImage } from "gatsby-plugin-image";


// markup
const IndexPage = () => {
  return (
    <div className="sitebody">
      <Navbar />
      <div class="home row">


        <div class="img">
          <StaticImage src="../images/banner.jpg" alt="ayyoobcastro" />
        </div>



        <div class="content">

          <div class="me">
            <div class="site-container">
              <article>
                <h1>Ayyoob Castro</h1>
                <h2>Front End Developer</h2>
                <a class="learn-more scroll-down" data-target=".bio">Read more</a>
              </article>
            </div>
          </div>

          <div class="more-me">
            <div class="site-container">
              <article>
                <div class="bio">
                  <h1><span>Hello,</span></h1>
                  <br />
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi magni natus voluptas dolore sit?
                    Mollitia tempora iure dolorum reiciendis? Dolorum molestiae, neque voluptatibus mollitia eligendi
                    fugiat
                    ab sed id hic.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere fugiat aperiam nulla, debitis a
                    aspernatur nesciunt nihil similique, inventore omnis nemo cupiditate. Fuga asperiores culpa sapiente
                    quia aspernatur rem deleniti.
                </p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi magni natus voluptas dolore sit?
                    Mollitia tempora iure dolorum reiciendis? Dolorum molestiae, neque voluptatibus mollitia eligendi
                    fugiat
                    ab sed id hic.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere fugiat aperiam nulla, debitis a
                    aspernatur nesciunt nihil similique, inventore omnis nemo cupiditate. Fuga asperiores culpa sapiente
                    quia aspernatur rem deleniti.
                </p>
                </div>
              </article>
            </div>
          </div>

        </div>


      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
