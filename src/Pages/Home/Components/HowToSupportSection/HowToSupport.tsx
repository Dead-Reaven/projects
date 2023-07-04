import pic1 from './../../../../assets/howToHelp/pic1.png'
import pic2 from '../../../../assets/howToHelp/pic2.png'
import {
  StyledSection,
  FlexContainer,
  CardDiv,
  StyledTitle,
  StyledTextDiv,
  StyledImg,
  StyledTitle3,
  StyledParagraph,
  StyledContainer,
} from './HowToSupport.style'

function HowToSupport() {
  return (
    <StyledSection>
      <StyledContainer>
        <StyledTitle>Як підтримати притулок </StyledTitle>
        <FlexContainer>
          <CardDiv>
            <StyledImg src={pic1} alt="bowl with dog food" />
            <StyledTextDiv>
              <StyledTitle3>Фінансова допомога</StyledTitle3>
              <StyledParagraph>Один клік - одна порція корму</StyledParagraph>
            </StyledTextDiv>
          </CardDiv>
          <CardDiv>
            <StyledImg src={pic2} alt="dog toys" />
            <StyledTextDiv>
              <StyledTitle3>Корм, ліки, іграшки</StyledTitle3>
              <StyledParagraph>
                З радістю приймаємо корм, засоби для обробки, ліжаки та іграшки для
                цуценят
              </StyledParagraph>
            </StyledTextDiv>
          </CardDiv>
        </FlexContainer>
      </StyledContainer>
    </StyledSection>
  )
}

export default HowToSupport