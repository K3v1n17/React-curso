import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { HeroStats } from '@/heroes/components/HeroStats';
import React from 'react'
import { SearchControls } from './ui/SearchControls';

export const SearchPage = () => {
  return (

    <>
       <CustomJumbotron title="Busqueda de superheroes" description="Find your favorite superheroes and villains by name" />
       <HeroStats />

       {/* Filter and Search */}
       <SearchControls />
   
    </>
   
  )
}

export default SearchPage;