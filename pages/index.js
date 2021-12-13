import styled from 'styled-components'
import { StandardButton } from '../components/Button'
import { FlexColumnDiv } from '../components/utilityStyles/FlexColumnDiv'
import { MainTitle } from '../components/utilityStyles/MainTitle'



export default function Home() {

  return (
    <>
      <FlexColumnDiv height="100vh">

        <MainTitle>Do you want to improve communication at your school?</MainTitle>
        <p>What can we do to improve your school culture?</p>
        <a href="https://boskind.tech/blog/ncujhs-tech-guided-tour">
          <StandardButton>
            Click here to find out
          </StandardButton>
        </a>
      </FlexColumnDiv>

    </>
  )

}
