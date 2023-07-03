import { styled } from "@/styles";
import Image from "next/image"


export const PostWrapper = styled('article', {
  backgroundColor: '$gray700', 
  display: 'flex',
  flexDirection: 'column', 
  gap: '$8', 
  padding: '$6', 
  borderRadius: '$sm',
})

export const PostHeader = styled('header', {
  display: 'flex', 
  justifyContent: 'space-between',
})

export const PostHeaderContent = styled('div', {
  display: 'flex',
  gap: '$4',
})

export const PostHeaderTitle = styled('div',{
  display: 'flex', 
  flexDirection: 'column', 

  '&>p': {
    fontSize: '$md', 
    lineHeight: '$short', 
    color: '$gray100',
  },

  '&>span':{
    fontSize: '$sm', 
    lineHeight: '$base', 
    color: '$gray400',
  },
})

export const UserImage = styled(Image, {
  borderRadius: '$full',
})

export const PostBodyWrapper = styled('div', {
  display: 'flex', 
  gap: '$5'
})

export const PostBodyContent = styled('div', {
  '&>h2': {
    fontSize: '$md', 
    fontWeight: '$bold', 
    lineHeight: '$short', 
    color: '$gray100',
  },

  '&>span': {
    fontSize: '$sm', 
    lineHeight: '$base', 
    color: '$gray400'
  },
  
  '&>p': {
    marginTop: '$5',
    fontSize: '$sm', 
    lineHeight: '$base', 
    color: '$gray300'
  },
})
