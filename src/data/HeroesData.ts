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