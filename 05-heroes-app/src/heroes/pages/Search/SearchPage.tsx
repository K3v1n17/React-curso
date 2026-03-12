import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { HeroStats } from '@/heroes/components/HeroStats';
import React from 'react'
import { SearchControls } from './ui/SearchControls';
import { CustomBreadcrumbs } from '@/components/custom/CustomBreadcrumbs';

export const SearchPage = () => {
  return (

    <>
      <CustomJumbotron title="Busqueda de superheroes" description="Find your favorite superheroes and villains by name" />
      <CustomBreadcrumbs currentPage="Busqueda" breadcrumbs={
        [
          { label: 'Home', to: '/' },
          { label: 'Home2', to: '/' },
          { label: 'Home3', to: '/' },


        ]
      } />

      <HeroStats />

      {/* Filter and Search */}
      <SearchControls />

    </>

  )
}

export default SearchPage;