function add_item(){


    var htmldata ;
    var item-document.getElementByid("add_item").value;
    menu_list_array.push(item) ;
    menu_list_array.sort() ;
    htmldata="<section class="cards">";
    for(var i=0;1<menu_list_array.length;i++){
        

        htmldata=htmldata+"<div class="cards">" +'<img src="images/pizzaImg.png"/>';
    }
    htmldata =htmldata+ "</section>"
    document.getElementByIdById("display_addedmenu").innerHTML = htmldata;
}

menu_list_array = ["Chicken Tandoori Pizza",
"veg supreme pizza",
"Paneer Tikka Pizza",
"Deluxe Veggie pizza",
"Veg extravaganza pizza",

]

function getmenu(){
    var htmldata;
    htmldata="<ol class='menu_list'>"
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+ '<li>' + menu_list_array[i] + '<li>'
    }
    htmldata=htmldata+"</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
}