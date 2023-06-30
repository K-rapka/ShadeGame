//random number
function getRandomInt(max:number) {
    return Math.floor(Math.random() * max);
  }

// create grid
export function createGrid(currentLevel:number){
    

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

//get dark color
export function getColor(): string[] {
  const colors: Array<number[]> = [
    [255, 0, 0],      // красный
    [255, 165, 0],    // оранжевый
    [255, 255, 0],    // желтый
    [0, 128, 0],      // зеленый
    [0, 255, 255],    // голубой
    [0, 0, 255],      // синий
    [128, 0, 128],    // фиолетовый
    [255, 192, 203],  // розовый
    [255, 0, 255],    // пурпурный
    [0, 255, 0],      // ярко-зеленый
    [255, 69, 0],     // огненно-оранжевый
    [0, 128, 128],    // темно-голубой
    [255, 255, 128],  // светло-желтый
    [0, 128, 255],    // ярко-синий
    [255, 128, 0],    // темно-оранжевый
    [128, 0, 0],      // темно-красный
    [0, 255, 128]     // ярко-зеленый 2
  ];
    const index:number = getRandomInt(colors.length) 
    const darkerColor: number[] = colors[index].map((value) => Math.floor(value * 0.8));
    return [`rgb(${darkerColor.join(", ")})`,`rgb(${colors[index].join(", ")})`];
  }