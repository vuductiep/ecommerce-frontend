'use client'

import Center from "@/components/Center";
import styled from "styled-components";
import PrimaryBtn from "@/components/PrimaryBtn";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
`

const Desc = styled.div`
  color: #aaa;
  font-size: .8rem;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  img{
    max-width: 100%;
  }
`

const Column = styled.div`
  display: flex;
  align-items: center;
`

export default function Featured() {
  return (
    <Bg>
      <Center>
        <Wrapper>
          <Column>
            <div>
              <Title>Pro max</Title>
              <Desc>flkasdfjl akjsaljf lasjf salfjas;lfj</Desc>
              <PrimaryBtn>Read more</PrimaryBtn>
              <PrimaryBtn>Add to cart</PrimaryBtn>
            </div>
          </Column>
          <Column>
            <img src={"http://100.110.241.90:9000/next-ecommerce/1681883810443.jpg"}/>
          </Column>
        </Wrapper>
      </Center>
    </Bg>
  )
}