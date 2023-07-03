import Image from "next/image";
import { HomeWrapper, LoginButton, MainWrapper, MenuContentWrapper, MenuOption, MenuOptionWrapper, MenuWrapper, PopularBookWrapper, PopularWrapper, PopuparBookTitleWrapper, RatingsWrapper } from "./styles";
import logoSvg from '../../assets/logo.svg'
import { ArrowLineRight, Binoculars, ChartLineUp, Star } from "phosphor-react";
import { GetServerSideProps } from "next";
import axios from "axios";
import { useEffect, useState } from "react";
import { api } from "@/lib/axios";
import { Post } from "./components/post";

interface PopularBooksProps {
  id: string,
  name: string,
  author: string,
  summary: string,
  cover_url: string,
  total_pages: number,
  created_at: Date,
  rate: number
}

interface BookProps {
  id: string,
  name: string,
  author: string,
  summary: string,
  cover_url: string,
  total_pages: number,
  created_at: Date,
}

interface UserProps {
  avatar_url: string 
  created_at: Date 
  id: string 
  name: string
}
export interface RatingProps {
  id: string
  book_id: string
  user_id: string
  created_at: string 
  description: string
  rate: number
  book: BookProps
  user: UserProps
}

interface HomeProps {
  popular: PopularBooksProps[]
  ratings: RatingProps[]
}


export default function Home({popular, ratings}:HomeProps) {
  return (
    <HomeWrapper>
      <MenuWrapper>
        <MenuContentWrapper>
          <Image src={logoSvg} alt="" width={128} height={32} />
            <MenuOptionWrapper defaultValue="inicio">
              <MenuOption value="inicio">
                <ChartLineUp size={24} />
                <span>Início</span>
              </MenuOption>
              <MenuOption value="login">
                <Binoculars size={24} />
                <span>Explorar</span>
              </MenuOption>
            </MenuOptionWrapper>
        </MenuContentWrapper>
        <LoginButton>
          <span>Fazer login</span>
          <ArrowLineRight size={20} />
        </LoginButton>
      </MenuWrapper>

      <MainWrapper>
        <h1>
          <ChartLineUp size={32} />
          <span>Início</span>
        </h1>
        <div>
          <RatingsWrapper>
            <span>Avaliações mais recentes</span>
            {ratings.map(rating => <Post key={rating.id} rating={rating} />)}
          </RatingsWrapper>
          <PopularWrapper>
          <span>Livros populares</span>
          {popular.map(popularBook => (
              <PopularBookWrapper key={popularBook.id}>
                <Image src={popularBook.cover_url} alt={popularBook.cover_url} width={64} height={94}/>
                <PopuparBookTitleWrapper>
                  <h3>{popularBook.name}</h3>
                  <p>{popularBook.author}</p>
                  {/* <span>{popularBook.rate}</span> */}
                  <Star size={16} />
                </PopuparBookTitleWrapper>
              </PopularBookWrapper>
            ))}
          </PopularWrapper>
        </div>
      </MainWrapper>
    </HomeWrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const popular = (await api.get('books/popular')).data
  const ratings = (await api.get('books/rating')).data
  return {
    props:{popular, ratings}
  }
}