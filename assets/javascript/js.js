const project = [
    {
        href: "https://sferangk.github.io/Masterskaya/",
        src: "./assets/images/МастерскаяДедаМороза.png",
        name: "Мастерская Деда Мороза"
    },

    {
        href: "https://sferangk.github.io/Prepodavanie_v_nachalnih_classah/",
        src: "./assets/images/ПреподованиеВНачальныхКлассах.png",
        name: "Преподавание в начальных классах"
    },
]


function startGame(){
    project.forEach((item) => {
        const element = createItem(item)
        document.querySelector("body").appendChild(element)
    });

    document.querySelector("body").style.opacity = "1"

}
function createItem(item){
    const element = document.createElement("a")
    element.href = item.href
    element.appendChild(createItemImage(item))
    element.appendChild(createItemName(item))
    return element
}

function createItemImage(item){
    const element = document.createElement("img")
    element.src = item.src
    return element
}

function createItemName(item){
    const element = document.createElement("h3")
    element.innerHTML = item.name
    return element
}

document.addEventListener("DOMContentLoaded", ()=>{
    startGame();
})
