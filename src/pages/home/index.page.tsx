import Image from "next/image";
import { HomeWrapper, LoginButton, MainWrapper, MenuContentWrapper, MenuOption, MenuOptionWrapper, MenuWrapper, PopularWrapper } from "./styles";
import logoSvg from '../../assets/logo.svg'
import { ArrowLineRight, Binoculars, ChartLineUp, ToggleRight } from "phosphor-react";
import * as RadioGroup from '@radix-ui/react-radio-group';

export default function Home() {
  return (
    <HomeWrapper>
      <MenuWrapper>
        <MenuContentWrapper>
          <Image src={logoSvg} alt="" width={128} height={32} />
            <MenuOptionWrapper defaultValue="inicio">
              <MenuOption value="inicio">
                <ChartLineUp size={24} />
                <span>Início</span>
              </MenuOption>
              <MenuOption value="login">
                <Binoculars size={24} />
                <span>Explorar</span>
              </MenuOption>
            </MenuOptionWrapper>
        </MenuContentWrapper>
        <LoginButton>
          <span>Fazer login</span>
          <ArrowLineRight size={20} />
        </LoginButton>
      </MenuWrapper>
      <MainWrapper></MainWrapper>
      <PopularWrapper></PopularWrapper>
    </HomeWrapper>
  )
}