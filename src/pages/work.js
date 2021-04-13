import React from "react";
import "./style/work.scss";

import Navbar from './components/navbar';
import Footer from './components/footer/footer';
import { StaticImage } from "gatsby-plugin-image";

const Work = () => {
    return (
        <div className="sitebody">
            <Navbar />
            <section className="works">
                <div className="site-container">
                    <article>

                        <div className="row">

                            <div className="col-half">
                                <div className="content">
                                    <div className="main-content">
                                        <h3 className="project-name"><span>A</span>BC Emporio</h3>
                                        <a href="#" target="_blank" className="project-link">
                                            <span>Visit Site</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-half">
                                <div className="image">
                                    <StaticImage src="../images/abc.png" alt="ABC Emporio" />
                                </div>
                            </div>

                        </div>

                    </article>
                </div>
            </section>

            <div className="other-work">
                <div className="container-2">
                    <article>

                        <div className="project">
                            <figure>
                                <StaticImage src="../images/dtale.png" alt="Dtale Decor" />
                                <figcaption>
                                    <span className="project-name">Dtale Decor</span>
                                    <a href="#" target="_blank" className="project-link">
                                        <span>Visit Site</span>
                                    </a>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="project">
                            <figure>
                                <StaticImage src="../images/dtale.png" alt="Dtale Decor" />
                                <figcaption>
                                    <span className="project-name">Dtale Decor</span>
                                    <a href="#" target="_blank" className="project-link">
                                        <span>Visit Site</span>
                                    </a>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="project">
                            <figure>
                                <StaticImage src="../images/dtale.png" alt="Dtale Decor" />
                                <figcaption>
                                    <span className="project-name">Dtale Decor</span>
                                    <a href="#" target="_blank" className="project-link">
                                        <span>Visit Site</span>
                                    </a>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="project">
                            <figure>
                                <StaticImage src="../images/dtale.png" alt="Dtale Decor" />
                                <figcaption>
                                    <span className="project-name">Dtale Decor</span>
                                    <a href="#" target="_blank" className="project-link">
                                        <span>Visit Site</span>
                                    </a>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="project">
                            <figure>
                                <StaticImage src="../images/dtale.png" alt="Dtale Decor" />
                                <figcaption>
                                    <span className="project-name">Dtale Decor</span>
                                    <a href="#" target="_blank" className="project-link">
                                        <span>Visit Site</span>
                                    </a>
                                </figcaption>
                            </figure>
                        </div>

                    </article>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Work