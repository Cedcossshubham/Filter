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


$(document).ready(function(){
    var html =" <div id='main'> \
                        <select id='brand'>\
                        <option value='Apple'>Apple</option>\
                        <option value='Motorola'>Motorola</option>\
                        <option value='ASUS'>ASUS</option>\
                        <option value='Samsung'>Samsung</option>\
                        <option value='Microsoft'>Microsoft</option>\
                         </select>\
                         <select id='os'>\
                        <option value='Andriod'>Andriod</option>\
                        <option value='iOS'>iOS</option>\
                        <option value='Windows'>Windows</option>\
                        </select>\
                    <div id='table'>\
                    </div>\
               </div>";

                    
    $("#wrapper").html(html);

    var row = " <tr>\<th>Product Id</th><th>Product Name</th><th>Product Brand</th><th>Product Os</th></tr>";
    
    for(let i=0;i<products.length;i++)
        row +='<tr><td>'+products[i].id+'</td><td>'+products[i].name+'</td><td>'+products[i].brand+'</td><td>'+products[i].os+'</td><td><a href="#" class="close">X</a></td></tr>';

    $("#table").html("<table>"+row+"</table>");
    

    //filter by brands
    $("select#brand").change(function(){
       var brand = $(this).children("option:selected").val();
       $("td").filter(function(){
       return $(this).text().indexOf(brand) !== -1;
       }).parent().remove();
    
    });



    //filter by OS
    $("select#os").change(function(){
        var os = $(this).children("option:selected").val();
        console.log(os);
        $("td").filter(function(){
            return $(this).text().indexOf(os) == -1;
        }).parent().remove();

    });

 });
 



  







     
