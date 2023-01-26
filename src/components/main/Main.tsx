import type { Hero } from '../../data/HeroesData';
import uuid from 'react-uuid';
import HeroCard from '../HeroCard';

export default function Main() {

    const superman: Hero = {
        name: 'Superman',
        ability: 'defender',
        guid: uuid(),
        trainingStartingDate: new Date(1980, 0, 1),
        suitColors: ['blue', 'red'],
        startingPower: 1000,
        currentPower: 10000,
    }

    return <main>
        <HeroCard hero={superman} />
    </main>
}