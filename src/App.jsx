import React, { useContext } from 'react'
import Todo from './components/Todo'
import Lightonoff from './components/Lightonoff'
import Debounce from './components/Debounce'
import InfiniteScroll from './components/InfiniteScroll'
import Throoting from './components/Throoting'
import Slides from './components/Slides'
import FeedbackSystem from './components/FeedbackSystem'
import { useState } from 'react'
import Hospital from './components/Hospital'
import FormValidation from './components/FormValidation'
import Try from './components/Try'
import { useTheme } from './components/ThemeContext';
import { useToast } from './components/Notification'
import Props from './components/Props'
import Typing from './components/Typing'

function App() {

  const {theme , toggleTheme, count, increment} = useTheme()
  
  const { addToast } = useToast()

  return (
    <>
    {/* <Todo/> */}
    {/* <Lightonoff/> */}
    {/* <Debounce/> */}
    {/* <InfiniteScroll/> */}
    {/* <Throoting/> */}
    {/* <Slides slides={slides}/> */}
  {/* <FeedbackSystem/> */}
  {/* <Hospital/> */}
  {/* <FormValidation/> */}
  {/* <Try/> */}
  {/* <Props name="Madara Uchiha" /> */}
  <Typing />
    </>
  )
}

export default App













// const slides = [
//     { title: "Welcome", text: "This is the first slide" },
//     { title: "Today's Workout", text: "10 push-ups" },
//     { title: "Next", text: "20 squats" },
//     { title: "Finish", text: "15 sit-ups" },
//   ];
