import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';




const SectionWipes2Styled = styled.div`
overflow: hidden;
#pinContainer {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
#pinContainer .panel {
  height: 100vh;
  width: 100vw;
  text-align: center;
}

.panel span {
  position: relative;
  display: block;
  top: 50%;
  font-size: 80px;
}

.panel.turqoise {
  background-color: #38ced7;
}
 
`

const SectionWipes2 = () => (
  <SectionWipes2Styled>
    <Controller>
      <Scene triggerHook="onLeave" duration="500%" pin >

        <Timeline wrapper={<div id="pinContainer" />}>

          <Tween from={{ x: '-100%' }} to={{ x: '100%' }}>
            <section className="panel turqoise">
              <span>ES EL PRIMER DIA DE LA TEVA NOVA VIDA</span>
            </section>
          </Tween>

        </Timeline>
      </Scene>
    </Controller>
  </SectionWipes2Styled>
);

export default SectionWipes2;