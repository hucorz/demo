class ScorePanel{
    score: number = 0;
    level: number = 1;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    maxLevel: number;
    levelUpScore: number;


    constructor(maxLevel: number = 10, levelUpScore: number = 10){
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.levelUpScore = levelUpScore;
    }

    addScore(){
        this.scoreEle.innerHTML = ++this.score + '';
        if(this.score % this.levelUpScore === 0){
            this.levelUp();
        }
    }

    levelUp(){
        if(this.level < this.maxLevel){
            this.levelEle.innerHTML = ++this.level + '';
        }
    }
}

export default ScorePanel;