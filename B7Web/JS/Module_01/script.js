function clicou() {
    let div = document.querySelector(".teste")
    let ul = div.querySelector('ul')

    const newUl = document.createElement("ul")

    for (let i = 0; i < 5; i++) {
        let newLi = document.createElement("li")
        newLi.innerHTML = "Item add " + i
        newUl.append(newLi)
    }
    newUl.append()

    ul.after(newUl)

}