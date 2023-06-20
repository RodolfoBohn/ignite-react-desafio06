import Image from "next/image";
import { ButtonsWrapper, MainWrapper, ImageWrapper, Wrapper, ContentWrapper, LoginOptionButton } from "./styles";
import homeImg from '@/assets/home.png'
import googleLogo from '@/assets/google-logo.svg'
import githubLogo from '@/assets/github-logo.svg'
import { RocketLaunch } from "phosphor-react";

export default function Home() {
  return (
    <>
      <Wrapper>
        <ImageWrapper>
          <Image src={homeImg} alt="" quality={100} priority fill/>
        </ImageWrapper>
        <MainWrapper>
          <ContentWrapper>
          <h1>Boas vindas!</h1>
          <p>Faça seu login ou acesse como visitante</p>
          <ButtonsWrapper>
            <LoginOptionButton>
              <Image src={googleLogo} alt="" width={32} height={32} />
              <span>Entrar com Google</span>
            </LoginOptionButton>
            <LoginOptionButton>
            <Image src={githubLogo} alt="" width={32} height={32} />
              <span>Entrar com GitHub</span>
            </LoginOptionButton>
            <LoginOptionButton>
              <RocketLaunch size={32} />
              <span>Entrar como visitante</span>
            </LoginOptionButton>
          </ButtonsWrapper>
          </ContentWrapper>
        </MainWrapper>
      </Wrapper>
    </>
  )
}
