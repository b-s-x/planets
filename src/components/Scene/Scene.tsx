import React, { useEffect, useRef } from "react";
import Parallax from 'parallax-js'
import './scene.scss';

import EarthIMG from "../../images/earth.png"
import BackgroundIMG from "../../images/background.png"
import RockIMG from "../../images/rock.png"
import MidIMG from "../../images/mid.png"
import ForegroundIMG from "../../images/foreground.png"

export const Scene: React.FC = () => {
  const scene = useRef<HTMLInputElement>(null)

  useEffect(() => {
    new Parallax(scene.current)
  }, [])

  return (
    <div className="section">
      <div id="scene" ref={scene}>
        <div data-depth="0.1" className="background">
          <img className="background__img" src={BackgroundIMG} alt="background" />
        </div>
        <div data-depth="0.2" className="rock">
          <img className="rock__img" src={RockIMG} alt="rock" />
        </div>
        <div data-depth="1.2" className="earth">
          <img className="earth__img" src={EarthIMG} alt="earth" />
        </div>
        <div data-depth="0.1" className="text">
          <div className="text__title">PLANETS</div>
        </div>
        <div data-depth="0.4" className="middle">
          <img className="middle__img" src={MidIMG} alt="middle" />
        </div>
        <div data-depth="0.1" className="foreground">
          <img className="foreground__img" src={ForegroundIMG} alt="foreground" />
        </div>
      </div>
    </div>
  )
}