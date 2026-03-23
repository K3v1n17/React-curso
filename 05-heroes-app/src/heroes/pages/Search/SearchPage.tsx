import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { HeroStats } from '@/heroes/components/HeroStats';
import { SearchControls } from './ui/SearchControls';
import { CustomBreadcrumbs } from '@/components/custom/CustomBreadcrumbs';
import { HeroGrid } from '@/heroes/components/HeroGrid';
import { useParams, useSearchParams } from 'react-router';
import { searchHeroAction } from '@/heroes/actions/search-hero.action';
import { useQuery } from '@tanstack/react-query';

export const SearchPage = () => {


  const [searchParams] = useSearchParams();

  const name = searchParams.get('name') ?? "";
  const strength = searchParams.get('strength') ?? "0";
  //TODO: Hacer peticion 

  const { data: heroes = [] } = useQuery({
    queryKey: ['search', { name, strength }],
    queryFn: () => searchHeroAction({ name, strength }),
    staleTime: 1000 * 60 * 5, // 5 minutos
  });





  return (
    <>
      <CustomJumbotron
        title="Búsqueda de SuperHéroes"
        description="Descubre, explora y administra super héroes y villanos"
      />

      <CustomBreadcrumbs
        currentPage="Buscador de héroes"
      // breadcrumbs={[
      //   { label: 'Home1', to: '/' },
      //   { label: 'Home2', to: '/' },
      //   { label: 'Home3', to: '/' },
      // ]}
      />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Filter and search */}
      <SearchControls />


      {/*  HEro Grid  */}
      <HeroGrid heroes={heroes} />

    </>
  );
};

export default SearchPage;
