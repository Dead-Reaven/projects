import { useEffect, useState } from 'react'
import SlidersData from './content'

import {
  CarouselDiv,
  StyledPrevArrow,
  StyledNextArrow,
  StyledBullets,
  Bullet,
  StyledSlider,
  WrapperSliders,
  TextContainer,
  StyledNextArrowContainer,
  StyledPrevArrowContainer,
} from '../../Components/MainSlider/MainSlider.style'
import TitleH1 from '../UI/TitleH1.style'
import TitleH3 from '../UI/TitleH3.styles'

function MainSlider() {
  const [sliderNumber, setSliderNumber] = useState(0)
  const [sliderWidth, setSliderWidth] = useState(window.innerWidth)

  const nextSlide = () =>
    setSliderNumber(sliderNumber === SlidersData.length - 1 ? 0 : sliderNumber + 1)

  const prevSlide = () =>
    setSliderNumber(sliderNumber === 0 ? SlidersData.length - 1 : sliderNumber - 1)

  useEffect(() => {
    const wrapper = document.querySelector('#wrapper')

    console.log('swipe')
    wrapper?.scrollTo({
      top: 0,
      left: sliderWidth * sliderNumber,
      behavior: 'smooth',
    })
    window.scrollTo(0, 0)
  }, [sliderNumber, sliderWidth])

  useEffect(() => {
    // Update sliderWidth when the viewport is resized
    const handleResize = () => {
      setSliderWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const [touchPosition, setTouchPosition] = useState(null)

  const handleTouchStart = (e: any) => {
    const touchDown = e.touches[0].clientX
    setTouchPosition(touchDown)
  }

  const handleTouchMove = (e: any) => {
    const touchDown = touchPosition

    if (touchDown === null) {
      return
    }

    const currentTouch = e.touches[0].clientX
    const diff = touchDown - currentTouch

    if (diff > 5) {
      setSliderNumber((prevIndex) =>
        prevIndex === SlidersData.length - 1 ? 0 : prevIndex + 1,
      )
    }

    if (diff < -5) {
      setSliderNumber((prevIndex) =>
        prevIndex === 0 ? SlidersData.length - 1 : prevIndex - 1,
      )
    }

    setTouchPosition(null)
  }
  return (
    <CarouselDiv onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
      <StyledPrevArrowContainer>
        <StyledPrevArrow type="button" onClick={prevSlide} />
      </StyledPrevArrowContainer>
      <WrapperSliders id="wrapper">
        {SlidersData.map((slider, idx) => (
          <StyledSlider
            key={idx}
            $isActive={sliderNumber === idx}
            $background={slider.image}
          >
            <TextContainer>
              <TitleH1>{slider.heading}</TitleH1>
              <TitleH3>{slider.paragraph}</TitleH3>
            </TextContainer>
          </StyledSlider>
        ))}
      </WrapperSliders>
      <StyledNextArrowContainer>
        <StyledNextArrow type="button" onClick={nextSlide} />
      </StyledNextArrowContainer>

      <StyledBullets>
        {SlidersData.map((_, idx) => (
          <Bullet
            key={idx}
            $isActive={sliderNumber === idx}
            onClick={() => setSliderNumber(idx)}
          />
        ))}
      </StyledBullets>
    </CarouselDiv>
  )
}

export default MainSlider
