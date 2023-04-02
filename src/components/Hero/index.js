import React from 'react';
import { Animated } from 'react-animated-css';
import { I18NConsumer } from '../i18ncontext';
import News from '../News';
import Stripe from './Stripe';
import ToogleImgFormat from '../ToogleImgFormat';
import newLogo from '../../images/new-logo.svg';
import './style.sass';

import images from '../../images';

const {
  logo: [
    back,
    barbell,
    circle,
    laurel,
    kettlebell,
    backWebP,
    barbellWebP,
    circleWebP,
    laurelWebP,
    kettlebellWebP,
  ],
} = images;

const Header = () => {
  return (
    <>
      <section className="hero" id="hero">
        <I18NConsumer>
          {({ text, lang }) => (
            <>
              <h1 className="h1-title">
                <span className="brand1">{text.navBar.brand1}</span>
                <span className="brand2">{text.navBar.brand2}</span>
              </h1>
              <div className="link-container small crossfit-open">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://photos.app.goo.gl/4Xxn6FQ2qYday5GM7"
                >
                  The Open 2021
                </a>
              </div>

              <div className="hero-wrapper">
                <div className="quote-wrapper">
                  <Animated
                    animationIn="bounceInLeft"
                    animationInDelay={1400}
                    isVisible={true}
                  >
                    {text[`${lang}`].header}
                  </Animated>
                </div>
                <div className="animation-wrapper">
                  <div className="animwrappwrapp">
                    <Animated
                      animationIn="bounceIn"
                      animationInDelay={1200}
                      isVisible={true}
                      className="animation"
                    >
                      <img
                        className="hero-img"
                        src={newLogo}
                        alt="new crosstraining emporda logo"
                      />
                    </Animated>
                    {/* <Animated
                                        animationIn="bounceIn"
                                        animationInDelay={1200}
                                        isVisible={true}
                                        className="animation">
                                        <ToogleImgFormat
                                            webPImg={backWebP}
                                            fallBackImg={back}
                                            format={"png"}
                                            className={"hero-img"}
                                            altMssg={'cte-logo'} />
                                    </Animated>
                                    <Animated
                                        animationIn="bounceInLeft"
                                        animationInDelay={900}
                                        isVisible={true}
                                        className="animation">
                                        <ToogleImgFormat
                                            webPImg={circleWebP}
                                            fallBackImg={circle}
                                            format={"png"}
                                            className={"hero-img"}
                                            altMssg={'cte-logo'} />
                                    </Animated>
                                    <Animated
                                        animationIn="bounceInRight"
                                        animationInDelay={600}
                                        isVisible={true}
                                        className="animation">
                                        <ToogleImgFormat
                                            webPImg={laurelWebP}
                                            fallBackImg={laurel}
                                            format={"png"}
                                            className={"hero-img"}
                                            altMssg={'cte-logo'} />
                                    </Animated>
                                    <Animated
                                        animationIn="bounceInUp"
                                        animationInDelay={300}
                                        isVisible={true}
                                        className="animation">
                                        <ToogleImgFormat
                                            webPImg={barbellWebP}
                                            fallBackImg={barbell}
                                            format={"png"}
                                            className={"hero-img"}
                                            altMssg={'cte-logo'} />
                                    </Animated>
                                    <Animated
                                        animationIn="bounceInDown"
                                        isVisible={true}
                                        className="animation">
                                        <ToogleImgFormat
                                            webPImg={kettlebellWebP}
                                            fallBackImg={kettlebell}
                                            format={"png"}
                                            className={"hero-img"}
                                            altMssg={'cte-logo'} />
                                    </Animated> */}
                  </div>
                </div>
              </div>
            </>
          )}
        </I18NConsumer>
      </section>

      <Stripe />
      {/* <News /> */}
    </>
  );
};

export default Header;
