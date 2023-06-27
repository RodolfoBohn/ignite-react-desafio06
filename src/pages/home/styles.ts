import { styled } from "@/styles"
import * as RadioGroup from '@radix-ui/react-radio-group';


export const HomeWrapper = styled('div', {
  padding: '$5',
})

export const MenuWrapper = styled('aside', {
  height: 'calc(100vh - $space$10)', 
  backgroundColor: '$gray700',
  width: 232,
  padding: '$10',
  display: 'flex', 
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'space-between'
})

export const MenuContentWrapper = styled('div', {
  display: 'flex', 
  alignItems: 'center',
  flexDirection: 'column',
})

export const MenuOptionWrapper = styled(RadioGroup.Root, {
  marginTop: '4rem',
  display: 'flex', 
  flexDirection: 'column',
  gap: '$4',
})

export const MenuOption = styled(RadioGroup.Item,{
  all: 'unset',
  padding: '$2 0', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'flex-start',
  gap: '$3',
  position: 'relative',
  color: '$gray400' ,
  width: 100,
  cursor: 'pointer',

  '&[aria-checked="true"]': {
    fontWeight: 'bold', 
    color: '$gray100',
    '&::before': {
      content: '', 
      width: 4, 
      height: 24, 
      backgroundImage: '$gradient-vertical',
      position: 'absolute', 
      left: -20,
      borderRadius: '$full',
    },
  },
})

export const LoginButton = styled('button', {
  all: 'unset', 
  color: '$gray200',
  fontWeight: 'bold',
  cursor: 'pointer',
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center',
  gap: '$3',
})

export const MainWrapper = styled('main', {})

export const PopularWrapper = styled('aside', {})