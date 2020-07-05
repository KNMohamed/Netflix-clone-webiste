import React from 'react'
import Button from './Button';
import styled from 'styled-components';
import imgTv from '../assets/images/tab-tv.png';
import imgTab from '../assets/images/tab-tablet.png';
import imgMac from '../assets/images/tab-macbook.png';
import { generateMedia } from 'styled-media-query';

export default function TabContentTwo() {
  return (
    <TabContainer>
      <div className="tab-content">
        <div className="tab-top-content">
          <span style={{ fontSize: '1.5rem' }}>Watch TV shows and movies anytime, anywhere - personalized for you.</span>
          <Button className="btn">Try it now</Button>
        </div>
        {/* Tab Bottom Content */}
        <div className="tab-bottom-content">
          {/* TV Image Container */}
          <div><img src={imgTv} alt="Tv" style={{width: "18.75rem"}}/>
            <h3>Watch on your TV</h3>
            <p>Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
          </div>
          {/* Tablet Image Container */}
          <div><img src={imgTab} alt="Tablet and Phones" style={{width: "18.75rem", paddingTop: "0.625rem"}} />
            <h3>Watch on your Tablet</h3>
            <p>Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
          </div>
          {/* Macbook Image Container */}
          <div><img src={imgMac} alt="Macbook, Laptops" style={{width: "18.75rem", paddingTop: "0.625rem", paddingBottom: "0.625rem" }} />
            <h3>Watch on your Tablet</h3>
            <p>Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
          </div>
        </div>
      </div>
    </TabContainer>
  )
}

/* Media Query*/
const customMedia = generateMedia({
  smDesktop: '1440px',
  tablet: '960px'
});

const TabContainer = styled.div`
  background: var(--main-deep-dark);

  .tab-content {
    margin: 0 15%;
  }

  /* Tab Top Content */
  .tab-top-content {
    display: grid;
    grid-template-columns: repeat(12,1fr);
    justify-content: center;
    align-items: center;
    padding: 2.5rem 0;

    span {
      grid-column: 1/8;
    }

    .btn {
      margin: 0 1.25rem 0 1.25rem;
      grid-column: 10/12;
    }
    ${customMedia.lessThan('smDesktop')`
      grid-template-columns: repeat(2,1fr);
    `}


    ${customMedia.lessThan('tablet')`
      grid-template-columns: 1fr;
      text-align: center;
      gap: 1.5rem;
      span {
        grid-column: 1 / -1;
        font-size: 1.5rem;
      }

      .btn {
        grid-column: 1/-1;
        margin-left: 30%;
        margin-right: 30%;
      }
    `}
  }

  img {
    width: 100%;
  }

  .tab-bottom-content {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 2rem;
    text-align: center;
    margin-top: 2rem;
    ${customMedia.lessThan('tablet')`
      grid-template-columns: 1fr;
    `}

  }

  h3 {
    margin: 0.5rem 0;
  }

  p {
    color: var(--main-grey);
  }
`;