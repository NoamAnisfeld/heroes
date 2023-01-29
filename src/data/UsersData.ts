import type { SerializableObject } from './SerializationUtils';
import {
    Hero,
    SerializableHero,
    serializableHero, 
    deserializeHero,
} from './HeroesData';

export interface User {
    username: string,
    heroes: Hero[],
}

export interface SerializableUser
    extends SerializableObject, Omit<User, 'heroes'> {
        heroes: SerializableHero[],
}

export function serializableUser(user: User): SerializableUser {
    return {...user,
        heroes: user.heroes.map(serializableHero),
    }
}

export function deserializeUser(user: SerializableUser): User {
    return {...user,
        heroes: user.heroes.map(deserializeHero),
    }
}