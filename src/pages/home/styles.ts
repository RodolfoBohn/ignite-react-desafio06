import { styled } from "@/styles"
import * as RadioGroup from '@radix-ui/react-radio-group';


export const HomeWrapper = styled('div', {
  padding: '$5',
  display: 'flex',
})

export const MenuWrapper = styled('aside', {
  height: 'calc(100vh - $space$10)', 
  backgroundColor: '$gray700',
  width: 232,
  padding: '$10',
  display: 'flex', 
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'space-between',
  // position: 'fixed',
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

export const MainWrapper = styled('div', {
  flex: 1,
  display: 'flex', 
  flexDirection: 'column', 

  '&>h1': {
    marginTop: '3.5rem',
    marginLeft:'6rem',
    marginBottom: '$10',
    display: 'flex', 
    alignItems: 'center', 
    gap: '$3',

    '&>svg': {
      color: '$green100'
    }, 
    '&>span': {
      color: '$gray100', 
      size: '$2xl', 
      lineHeight: '$short', 
      fontWeight: '$bold',
    },
  },

  '&>div': {
  display: 'flex', 
  },
})

export const RatingsWrapper = styled('main', {
  display: 'flex', 
  flexDirection: 'column', 
  gap: '$3',
  padding: '0 4rem 0 6rem',
  // position: 'fixed',

  '&>span': {
    marginBottom: '$1', 
    color: '$gray100',
    fontSize: '$sm', 
    lineHeight: '$short',
  },
})

export const PopularWrapper = styled('aside', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
})

export const PopularBookWrapper = styled('div', {
  padding: '$5 $4', 
  borderRadius: '$sm',
  backgroundColor: '$gray700',
  display: 'flex',
  gap: '$5',
  width: 324,
})

export const PopuparBookTitleWrapper = styled('div', {
  '&>h3': {
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    display: '-webkit-box',
    overflow: 'hidden',
    fontSize: '$md',
    lineHeight: '$short',
    fontWeight: 'bold',
    color: '$gray100',
  },

  '&>p': {
    color: '$gray400',
    fontSize: '$sm',
    lineHeight: '$base',
  },
})