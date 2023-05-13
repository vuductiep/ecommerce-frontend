'use client'

import Header from "components/Header"
import Featured from "@/components/Featured";
import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Cinzel&family=Fauna+One&display=swap');
  body{
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
`

export default function Home({product}) {
  console.log(product)
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Featured />
    </div>
  )
}
