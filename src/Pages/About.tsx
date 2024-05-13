import React from "react";

function About(): React.ReactElement {

    return (
        <>
            <div className="main-about" >
                <div className="flex-about">
                    <div>
                        <span className="title-about">About Me</span>
                    </div>
                    <div>
                        <p><img src={process.env.PUBLIC_URL + '/getstuck-icon.ico'} alt="getstuck" style={{ width: '40px', height: '40px', borderRadius: '50%'}} /> I'm Dipa Ferdian, Let's Connect</p>
                    </div>
                    <section>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/dipa-ferdian-0aa878225/" target="_blank">
                                <img src={process.env.PUBLIC_URL + '/linkedin.png'} alt="LinkedIn"/>
                            </a>

                            <a href="https://twitter.com/thisisgetstuck" target="_blank">
                                <img src={process.env.PUBLIC_URL + '/x-social-media-logo-icon.png'} alt="X"/>
                            </a>

                            <a href="https://github.com/dipaferdian" target="_blank">
                                <img src={process.env.PUBLIC_URL + '/github.png'} alt="GitHub"/>
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default About