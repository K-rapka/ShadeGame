export function createGrid(currentLevel:number){
    function getRandomInt(max:number) {
        return Math.floor(Math.random() * max);
      }

    let grid:number[][] = []

    for (let i:number = 0; i < currentLevel; i++){        
        grid.push([])
        for (let j:number = 0; j < currentLevel; j++){
            grid[i].push(0)
        }
    }
    grid[getRandomInt(grid.length)][getRandomInt(grid.length)] = 1


    return grid
}