var tableContentArr = [
  {name: 'Yegal', last:'Barshshet', city: 'Nir Israel'},
  {name: 'Shlomi', last:'Ohana', city: 'Nir Israel'}
]

tableContentArr.push({name: 'Amit', last:'Zilber', city: 'Pardes-Hana'});


//create HTML for table
var tableHTML = "<table><tr><th>First</th><th>Last</th><th>City</th></tr>";

for (i=0; i<tableContentArr.length;i++){
  var tableRowHTML = 
      "<tr><td>"+tableContentArr[i].name+"</td>"+
      "<td>"+tableContentArr[i].last+"</td>"+
      "<td>"+tableContentArr[i].city+"</td></tr>";
  
  
  tableHTML += tableRowHTML;
  
 
}

tableHTML += "</table>";

//create table
document.getElementById('tableConteiner').innerHTML = tableHTML;




