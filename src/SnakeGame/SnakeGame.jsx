import {useEffect} from "react"
import './SnakeGame.scss';

function SnakeGame() {
    useEffect(() => {
        let canvas= document.getElementById("game")
        let cxt= canvas.getContext("2d")
        cxt.strokeStyle = "#3B0943"
        let blockSize;
        let direction;
        let snake = [];
        let apple = [];

        function initSnake(){
            snake=[[40,40]]
            apple=[[80,80]]
            direction="right"
            blockSize=20;
        }
        initSnake()

        function getRandomPosApple(min,max){
            return Math.floor(Math.random() * (max - min)) + min;
            
        }

        function drowSetka(){
            for(let i=0; i<=canvas.offsetWidth; i+=blockSize){  
            cxt.beginPath();
            cxt.moveTo(0,blockSize +i);
            cxt.lineTo(500, blockSize+i);
            cxt.closePath();
            cxt.stroke();
            }
            for(let i=0; i<=canvas.offsetHeight; i+=blockSize){  
                cxt.beginPath();
                cxt.moveTo(blockSize +i, 0);
                cxt.lineTo(blockSize +i, 500);
                cxt.closePath();
                cxt.stroke();
            }
        }
        drowSetka();  
        
        function drowCubik(){
            cxt.fillStyle="green"
            for(let snakeCube of snake){
                cxt.fillRect(snakeCube[0],snakeCube[1],blockSize,blockSize);
            }
        }
        
        drowCubik()

        function drowApple(){
            cxt.fillStyle = 'red'; 
            cxt.fillRect(apple[0][0], apple[0][1], 20, 20);
            
        }
        drowApple()

        function snakeMove(){
            cxt.clearRect(0,0,canvas.width, canvas.height)
            if (direction === "right") {
                snake.unshift([snake[0][0] +blockSize, snake[0][1]]);
            } else if (direction === "down") {
                snake.unshift([snake[0][0], snake[0][1]+blockSize]);
            } else if (direction === "left") {
                snake.unshift([snake[0][0]-blockSize, snake[0][1]]);
            } else if (direction === "top") {
                snake.unshift([snake[0][0], snake[0][1]-blockSize]);
            }

            if(snake[0][0]!==apple[0][0] || snake[0][1]!==apple[0][1]){
                snake.pop()
            } else{ 
                apple[0][0] = getRandomPosApple(0,20) * blockSize 
                apple[0][1] = getRandomPosApple(0,20)*blockSize;
            }

            if(snake[0][0] >=canvas.offsetWidth){
                snake[0][0]=0
            } else if(snake[0][0] <0){
                snake[0][0]=canvas.offsetWidth-blockSize
            } else if(snake[0][1] >=canvas.offsetHeight){
                snake[0][1]=0
            } else if(snake[0][1]<0){
                snake[0][1]=canvas.offsetHeight-blockSize
            }

            drowSetka()
            drowCubik()
            drowApple()
        };

        const gameInterval = setInterval(snakeMove, 100);

        canvas.addEventListener('keydown', function(event) {
            event.preventDefault()
            // aaaaa
            //стрелка влево
            if (event.key === "ArrowLeft" && direction !== "right") {
                direction = "left";
            //стрелка вверх
            }   else if (event.key === "ArrowUp" && direction !== "down") { 
                direction = "top";
            //стрелка вправо
            }   else if (event.key === "ArrowRight" && direction !== "left") { 
                direction = "right";
            //стрелка вниз
            }   else if (event.key === "ArrowDown" && direction !== "top") { 
                direction = "down";
            } 
        }, true);

        return () => {
            console.log("Dai")
            clearInterval(gameInterval)
            cxt.clearRect(0,0,canvas.width, canvas.height)
        };
    }, [])
    
    return (
        <div className="SnakeGameCanvas">
            <canvas tabIndex = '-1' id="game" width="500" height="500"></canvas>
        </div>
    );
}

export default SnakeGame;
