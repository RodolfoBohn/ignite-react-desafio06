import { styled } from "@/styles";

export const Wrapper = styled('div', {
  display: 'flex', 
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: '$5',
  height: '100vh',
})

export const ImageWrapper = styled('div', {
  width: 'calc((100vh - $space$5 - $space$5)/1.525)',
  height: 'calc(100vh - $space$5 - $space$5)',
  position: 'relative',
})

export const MainWrapper = styled('main', {
  flex: 1,
  display: 'flex', 
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',  
})

export const ContentWrapper = styled('div', {
  '&>h1': {
    lineHeight: '$short',
    fontSize: '$2xl', 
    color: '$gray100',
    fontWeight: '$bold',
  },

  '&>p': {
    lineHeight: '$base',
    fontSize: '$md', 
    color: '$gray200',
  },
})

export const ButtonsWrapper = styled('div', {
  marginTop: '$10',
  display: 'flex', 
  flexDirection: 'column',
  gap: '$4',
  width: 372,
})

export const LoginOptionButton = styled('button', {
  all: 'unset',
  background: '$gray600',
  padding: '$5 $6',
  borderRadius: '$sm',
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'flex-start', 
  gap: '$5',
  cursor: 'pointer',

  '&:hover': {
    background: '$gray500',
  },

  '&>span': {
    color: '$gray200',
    fontSize: '$lg', 
    fontWeight: '$bold', 
    lineHeight: '$base',
  },
  '&>svg': {
    color: '$purple100',
  },
})