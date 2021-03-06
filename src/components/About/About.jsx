import "./About.css";
import Award from '../../img/award.png'

import React from "react";

const About = () => {
    return (
        <div className="about">
            <div className="about__left">
                <div className="left__card bg"></div>
                <div className="left__card">
                    <img
                        src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt="photographer"
                        className="card__image"
                    />
                </div>
            </div>
            <div className="about__right">
                <h1 className="about__title">About Me</h1>
                <p className="about__sub">
                   <q style={{color: "grey"}}> The public is more familiar with bad design than good
                    design. It is, in effect, conditioned to prefer bad design,
                    because that is what it lives with. The new becomes
                    threatening, the old reassuring.</q> -Paul Rand
                </p>
                <div className="about__desc" style={{fontSize: "20px"}}>
                    <h2>Skills</h2>
                    <ul>
                        <li>React Js</li>
                        <li>Node Js</li>
                        <li>Express Js</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>SASS</li>
                    </ul>
                </div>
                {/* <div className="about__award">
                    <img
                        src={Award}
                        alt="award"
                        className="about__award__img"
                    />
                    <div className="about__award__texts">
                        <h4 className="a__award__title">
                            International Design Awards 2021
                        </h4>
                        <p className="a__award__desc">
                            Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur autodit and fugit.
                        </p>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default About;
