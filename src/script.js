var products = [{
    "id": "100",
    "name": "iPhone 4S",
    "brand": "Apple",
    "os": "iOS"
},
{
    "id": "101",
    "name": "Moto X",
    "brand": "Motorola",
    "os": "Android"	
},
{
    "id": "102",
    "name": "iPhone 6",
    "brand": "Apple",
    "os": "iOS"
},
{
    "id": "103",
    "name": "Samsung Galaxy S",
    "brand": "Samsung",
    "os": "Android"
},
{
    "id": "104",
    "name": "Google Nexus",
    "brand": "ASUS",
    "os": "Android"
},
{
    "id": "105",
    "name": "Surface",
    "brand": "Microsoft",
    "os": "Windows"
}];


var html =" <div id='main'> \
    <select id='brand'>\
        <option value='all'>All</option>\
        <option value='Apple'>Apple</option>\
        <option value='Motorola'>Motorola</option>\
        <option value='ASUS'>ASUS</option>\
        <option value='Samsung'>Samsung</option>\
        <option value='Microsoft'>Microsoft</option>\
    </select>\
    <select id='os'>\
        <option value='all'>All</option>\
        <option value='Android'>Android</option>\
        <option value='iOS'>iOS</option>\
        <option value='Windows'>Windows</option>\
    </select>\
    <input id='search' placeholder='search'>\
    <div id='table'>\
    </div>\
</div>";

$("#wrapper").html(html);

var selectedOs ="all";
var selectedBrand ="all";

display(products);


$(document).ready(function(){
       
     //filter by brand
     $("select#brand").on("change",function(){
        selectedBrand = $(this).children("option:selected").val();
        console.log(selectedOs);
        console.log(selectedBrand);
        filterVals(selectedBrand,selectedOs);

    });


    //filter by os
    $("select#os").change(function(){
        selectedOs = $(this).children("option:selected").val();
        console.log(selectedOs);
        console.log(selectedBrand);
        filterVals(selectedBrand,selectedOs);
    });

    //search the product
    $('input#search').on('keyup',function(){
        var value = $(this).val();
        $("tr").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value)>-1);
            });
    });


    //show/hide particular row
        $(".close").on('click',function(){
            $(this).parents("tr").toggle();
        });

});



//display table
function display(filterproduct){
    var row = " <tr>\<th>Product Id</th><th>Product Name</th><th>Product Brand</th><th>Product Os</th></tr>";
    for(let i=0;i<filterproduct.length;i++)
        row +='<tr><td>'+filterproduct[i].id+'</td><td>'+filterproduct[i].name+'</td><td>'+filterproduct[i].brand+'</td><td>'+filterproduct[i].os+'</td><td><a href="#" class="close">X</a></td></tr>';

    $("#table").html("<table>"+row+"</table>");

}



//fetching filter values
function filterVals(selectedBrand,selectedOs){
    var displayProduct =[];

   if(selectedBrand=='all' && selectedOs=='all'){
       display(products);
   }

   else if(selectedBrand=='all' &&  selectedOs !=='all'){
       for(var i=0;i<products.length;i++){
           if(products[i].os === selectedOs){
               displayProduct.push(products[i]);
           }
       }
     display(displayProduct);
 
   }
   else if(selectedOs=='all' && selectedBrand !=='all'){
    for(var i=0;i<products.length;i++){
        if(products[i].brand == selectedBrand){
            displayProduct.push(products[i]);
        }
    }
  
   display(displayProduct);
   }
  else{
    for(var i=0;i<products.length;i++){
        if(products[i].brand === selectedBrand && products[i].os === selectedOs){
            displayProduct.push(products[i]);
        }
    }

  display(displayProduct);

  }

  
}
     
