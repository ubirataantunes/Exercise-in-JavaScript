class spaceship {
  constructor(name, crew, engaged, gate) {
  this.name = name
  this.crew = crew
  this.engaged = false
  this.gate = false
  }
  engage(method) {
  this.engaged = true
  this.gate = true
  }
}


function spaceshipList(spaceship) {
  let spaceshipList = ""
  spaceship.forEach((spaceship, index) => {
    spaceshipList += (index +1) + "- " + spaceship.name + " (" + spaceship.crew + " tripulantes)\n"  
    }
  ) 
  alert(spaceshipList)
}  

function register() {
  let spaceName = prompt("Digite o nome da nave")
  let crew = Number(prompt("Digite a quantidade de tripulantes"))
  let newSpaceship = new spaceship (spaceName, crew)
  newSpaceship.engage()
  return newSpaceship
}

var listSpaceship = []

function showMenu() {
  let main
  do{
    main = prompt ("Digite a opção desejada\n" +
                  "1 - Cadastrar nova nave\n" + 
                  "2- Imprimir dados das naves cadastradas\n" + 
                  "3- Sair do programa")
      switch(main){
        case "1":
          let spaceshipAdd = register()
          spaceshipAdd.engage()
          listSpaceship.push(spaceshipAdd)
          break;
        case "2":  
          spaceshipList(listSpaceship);
          break;
        defaut:
          break;
      }
  } while (main != 3)
}

showMenu()