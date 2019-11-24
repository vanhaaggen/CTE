import { createContext } from 'react'


const I18NContext = createContext({})

export const I18NProvider = I18NContext.Provider
export const I18NConsumer = I18NContext.Consumer

export default I18NContext