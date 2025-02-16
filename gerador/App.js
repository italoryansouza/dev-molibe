import { NavigationContainer } from '@react-navigation/native'
import { Routes } from './src/routes'


let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVXWYZ0123456789@!$%'; 

export default function App(){

  return(
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  )
}

