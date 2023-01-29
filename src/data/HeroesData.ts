type HeroAbility = 'attacker' | 'defender';
type SuitColor = 'red' | 'green' | 'blue' | 'yellow';

export type Hero = {
    name: string,
    ability: HeroAbility,
    guid: string,
    trainingStartingDate: Date,
    suitColors: SuitColor[],
    startingPower: number,
    currentPower: number,
}

export type SerializableHero = Omit<Hero, 'trainingStartingDate'> & {
    trainingStartingDate: number,
}

export function serializableHero(hero: Hero): SerializableHero {
    return {...hero,
        trainingStartingDate: hero.trainingStartingDate.valueOf(),
    }
}

export function deserializeHero(hero: SerializableHero): Hero {
    return {...hero,
        trainingStartingDate: new Date(hero.trainingStartingDate),
    }
}