import { Hero } from "../data/HeroesData"

export default function HeroCard({
    hero
}: {
    hero: Hero
}) {
    return <div className="heroCard">
        <h2>{hero.name}</h2>
        <p>{hero.ability}</p>
        <dl>
            <dt>Power</dt>
            <dd>{hero.currentPower}</dd>

            <dt>Started at</dt>
            <dd>{String(hero.trainingStartingDate)}</dd>
        </dl>
    </div>
}