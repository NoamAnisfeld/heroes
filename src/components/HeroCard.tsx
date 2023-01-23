import type { Hero } from "../data/HeroesData"
import '../styles/HeroCard.scss';

export default function HeroCard({
    hero
}: {
    hero: Hero
}) {
    return <div className="heroCard" style={{
        '--gradient-colors': hero.suitColors.join(',')
    } as React.CSSProperties }>
        <div className="heroCard__content">
            <h2>{hero.name}</h2>
            <p>{hero.ability}</p>
            <dl>
                <dt>Power</dt>
                <dd>{hero.currentPower}</dd>

                <dt>Started at</dt>
                <dd>{String(hero.trainingStartingDate)}</dd>
            </dl>
        </div>
    </div>
}