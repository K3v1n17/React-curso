import type { Hero } from "./hero.interface";

export interface SummaryInformationResponses {
    totalHeroes:   number;
    strongestHero: Hero;
    smartestHero:  Hero;
    heroCount:     number;
    villainCount:  number;
}