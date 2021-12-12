import styled from 'styled-components'
import { FlexColumnDiv } from '../components/utilityStyles/FlexColumnDiv'
import { MainTitle } from '../components/utilityStyles/MainTitle'



export default function Home() {

  return (
    <>
      <FlexColumnDiv>

        <MainTitle>Do you want to improve communication at your school?</MainTitle>
        <p>What can we do to improve your school culture?</p>
        <a href="https://boskind.tech/blog/ncujhs-tech-guided-tour">
          <button>
            <h3>Click here to find out</h3>
          </button>
        </a>
      </FlexColumnDiv>

    </>
  )

}
