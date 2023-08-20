import Snake from './Snake';
import Food from './Food';
import ScorePanel from './ScorePanel';

class GameControl{
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;

    direction: string = "";
    isLive: boolean =true; // 蛇是否存活

    constructor(){
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel(8, 1);
        this.init()
    }

    init(){
        // 如果这么写的话，this 指的是 document
        // document.addEventListener('keydown', this.keydownHandler);
        // 所以需要改成这样
        document.addEventListener('keydown', this.keydownHandler.bind(this));
        this.run();
    }

    keydownHandler(event: KeyboardEvent){
        // 检查方向是否合法
        this.direction = event.key;
    }

    // 控制蛇的移动
    run(){
        let X = this.snake.X;
        let Y = this.snake.Y;

        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                X -= 10; 
                break;
            case "ArrowRight":
            case "Right":
                X += 10;
                break;
        };

        this.checkEat(X, Y);

        try{
            this.snake.X = X;
            this.snake.Y = Y;
        }catch(e:any) {
            alert(e.message + 'GAME OVER!');
            this.isLive = false;
        }
        

        this.isLive && setTimeout(this.run.bind(this), 300 -  30 * (this.scorePanel.level - 1));
    }

    checkEat(X: number, Y: number){
        if(X === this.food.X && Y === this.food.Y){
            this.food.change();
            this.scorePanel.addScore();
            this.snake.addBody();
        }
    }

}

export default GameControl;