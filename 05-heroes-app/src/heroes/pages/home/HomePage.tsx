import  { useMemo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { getHeroesByPageAction } from "@/heroes/actions/get-heores-by-page";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { getSummaryAction } from "@/heroes/actions/get-summary-actions";
import { useHeroSummary } from "@/heroes/hooks/useHeroSummary";

export const HomePage = () => {

  // useEffect(() => {
  //   getHeroesByPage().then()
  // }, [])

  const [searchParams , setSearchParams] = useSearchParams();


   const activeTab = searchParams.get('tab') ?? 'all' 
   const page = Number(searchParams.get('page') ?? '1')
   const limit = searchParams.get('limit') ?? 6
  
   
   const selectedTab = useMemo(() => {
    const validTabs = ['all', 'favorites', 'heroes', 'villains'];
     return validTabs.includes(activeTab) ? activeTab : 'all';
   }, [activeTab]);


  const { data : heroesResponses} = useQuery(
    {
      queryKey: ['heroes' , { page, limit }],
      queryFn: () => getHeroesByPageAction(+page, +limit),
      staleTime: 1000 * 60 * 5, // 5 minutos
    }

  )
    
     const {data : summary } = useHeroSummary()


  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron
          title="Universo de superheores"
          description="Discover, explore, and manage your favorite superheroes and villains"
        />

        <CustomBreadcrumbs currentPage="Super Heroes" />
        {/* Stats Dashboard */}
        <HeroStats />

        {/* Tabs */}
        <Tabs value={selectedTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={() => setSearchParams((prev)=> {
              prev.set('tab', 'all');
              return prev;
            })} >All Characters {summary?.totalHeroes}</TabsTrigger>
            <TabsTrigger value="favorites" onClick={() => setSearchParams((prev)=> {
              prev.set('tab', 'favorites');
              return prev;
            })} className="flex items-center gap-2">

              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes" onClick={() => setSearchParams((prev)=> {
              prev.set('tab', 'heroes');
              return prev;
            })}>
              Heroes {summary?.heroCount}
            </TabsTrigger>
            <TabsTrigger value="villains" onClick={() => setSearchParams((prev)=> {
              prev.set('tab', 'villains');
              return prev;
            })}>
              Villains {summary?.villainCount}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            {/* Mostrar todos los personajes */}
           <HeroGrid heroes = { heroesResponses?.heroes ?? [] } />

          </TabsContent>

          <TabsContent value="favorites">
            {/* Mostrar todos los favoritos */}
            <h1>Favorites</h1>
            {/* <HeroGrid /> */}

          </TabsContent>

          <TabsContent value="heroes">

            {/* Mostrar todos los heroes */}
            <h1>Heroes</h1>
            {/* <HeroGrid /> */}

          </TabsContent>

          <TabsContent value="villains">
            {/* Mostrar todos los villanos */}
            <h1>Villanos</h1>
            {/* <HeroGrid /> */}

          </TabsContent>
        </Tabs>

        {/* Pagination */}
        <CustomPagination totalPages={heroesResponses?.pages ?? 1} />
      </>
    </>
  );
};
