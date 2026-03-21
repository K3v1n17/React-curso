import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import type { Hero } from "../types/hero.interface";


interface FavoriteHeroContext {

    // state 
    favorites: Hero[],
    favoriteCount: number,
    /// methods 
    toggleFavorite: (hero: Hero) => void,
    isFavorite: (hero: Hero) => boolean

}




// crear el contexto con el hook
export const FavoriteHeroContext = createContext({} as FavoriteHeroContext)

const getFavoritesFromLocaleStorage = (): Hero[] => {
    const favorites = localStorage.getItem('favoriteHeroes');  /// esto estarua en string 
    return favorites ? JSON.parse(favorites) : []   /// si existe lo parseamos sino devolvemos un array vacio

}

/// crear el provider 
export const FavoriteHeroProvider = ({ children }: PropsWithChildren) => {
    const [favorites, setFavorites] = useState<Hero[]>(getFavoritesFromLocaleStorage())


    useEffect(() => {
        localStorage.setItem('favoriteHeroes', JSON.stringify(favorites))   /// cada vez que cambie el estado de favoritos se actualiza el local storage
    }, [favorites])

    const toggleFavorite = (hero: Hero) => {
        const heroExist = favorites.find(h => h.id === hero.id)   // esto devuvle solo el que coincide

        if (heroExist) {
            const newFavorites = favorites.filter(h => h.id !== hero.id)   /// filter no elimina directamente , crea un nuevo array con los que cumplen la condición
            setFavorites(newFavorites)
            return
        }

        setFavorites([...favorites, hero])

    }


    const isFavorite = (hero: Hero) => {
        return favorites.some((h) => h.id === hero.id)     // devuelve true o false si existe o no 
    }

    return (
        <FavoriteHeroContext
            value={
                {
                    /// state
                    favorites: favorites,
                    favoriteCount: favorites.length,
                    /// methods
                    isFavorite: isFavorite,
                    toggleFavorite: toggleFavorite,

                }}
        >
            {children}
        </FavoriteHeroContext>
    )
}
