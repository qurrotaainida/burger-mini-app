import React, {useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import BurgerContext from './Context/BurgerContext'

import Layout from './Layouts/Layout'
import Home from './Pages/Home' // karena satu level, maka . satu
import BurgerMaker from './Pages/BurgerMaker'

function App() {
  // Menginisiasi state 'ingredients' dan setter 'setIngredients'
  const [ingredients, setIngredients] = useState ([])

  // Handler untuk menambah ingredient
  const addIngredientsHandler = (ingredient) => {
      setIngredients( prevState => {
          const newState = [ingredient, ...prevState]
          return newState
      })
  }

  // Handler untuk mengurangi ingredient
  const removeIngredientsHandler = (index) => {
      setIngredients( prevState => {
          const newState = [...prevState]
          newState.splice( index, 1 )
          return newState
      })
  }

  // Handler untuk menggeser ingredient ke atas 1 tingkat
  const moveUpIngredientsHandler = (index) => {
      setIngredients( prevState => {
          const newState = [...prevState]
          const temp = newState[index-1]
          newState[index-1] = newState[index]
          newState[index] = temp
          return newState
      })
  }

  // Handler untuk menggeser ingredient ke bawah 1 tingkat
  const moveDownIngredientsHandler = (index) => {
      setIngredients( prevState => {
          const newState = [...prevState]
          const temp = newState[index+1]
          newState[index+1] = newState[index]
          newState[index] = temp
          return newState
      })
  }

  return ( // dibawah ini adalah JSX, bisa dimasukkan javascript dengan tanda {}
    <BurgerContext.Provider value={ {ingredients,setIngredients,addIngredientsHandler,removeIngredientsHandler,moveUpIngredientsHandler,moveDownIngredientsHandler} }>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/burger-maker' element={<BurgerMaker />} />
        </Routes>
      </Layout>
    </BurgerContext.Provider>
  );
}

export default App;