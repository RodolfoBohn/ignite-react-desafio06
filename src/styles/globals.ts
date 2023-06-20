import { globalCss } from ".";


export const createGlobalCss = globalCss({
  '*': {
    margin: 0, 
    padding: 0, 
    boxSizing: 'border-box'
  },
  'body, input, button, textArea': {
    fontFamily: '$default', 
    fontWeight: '$regular',
    color: '$gray200',
  },

  'body': {
    backgroundColor: '$gray800',
  }
})