isItemInCart()

function isItemInCart (){
    let item = document.getElementById("meieToode")
    item.style.display = sessionStorage.meieToode;
}
function onRemoveItemFromCart (){
    sessionStorage.meieToode = "none";
    isItemInCart()
}