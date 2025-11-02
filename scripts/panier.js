function handleAddToCart(plan) {
    let selection = plan.split(', ')
    sessionStorage.setItem('name' + selection[2], selection[0])
    sessionStorage.setItem('price' + selection[2], selection[1])
}

function afficherPanier() {
    let indice = 1
    let total = 0

    while (indice <= 4) {
        if(sessionStorage.getItem('name' + indice) != null){
            creerPanier(indice)
            total = total + parseFloat(sessionStorage.getItem("price" + indice))
        }  
        
        indice++
    }
}

function creerPanier(identifiant) {
  let lignePanier = document.createElement("div");
  lignePanier.className = "cart-item fade-in";

  let nom = document.createElement("span");
  nom.className = "cart-name";
  nom.innerText = sessionStorage.getItem("name" + identifiant);

  let prix = document.createElement("span");
  prix.className = "cart-price";
  prix.innerText = sessionStorage.getItem("price" + identifiant) + " $";

  let bouton = document.createElement("button");
  bouton.className = "cart-remove";
  bouton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  bouton.onclick = () => supprimerElement(identifiant);

  lignePanier.appendChild(nom);
  lignePanier.appendChild(prix);
  lignePanier.appendChild(bouton);
  document.getElementById("panier").appendChild(lignePanier);

  document.getElementById("titrePanierVide").classList.add("d-none");
  document.getElementById("boutonEffacer").classList.remove("d-none");
  document.getElementById("total").classList.remove("d-none");
}




function supprimerElement(identifiant) {
    sessionStorage.removeItem("name" + identifiant);
    sessionStorage.removeItem("price" + identifiant);
    location.reload();
}
