var tableContentArr = [
  {headers:
   ['name','last','city', 'age']
  },
  {rows:[
    {name: 'Yegal', last:'Barshshet', city: 'Nir Israel'},
    {name: 'Shlomi', last:'Ohana', city: 'Nir Israel'}
  ]}

]

tableContentArr.push({name: 'Amit', last:'Zilber', city: 'Pardes-Hana'});

function createTable(dataHeaders, dataArr, element){

  //create HTML for table
  if (dataArr.length >0){

    //create header
    var tableHTML = "<table><tr><th>First</th><th>Last</th><th>City</th></tr>";

    //build rows
    for (i=0; i<dataArr.length;i++){
      var tableRowHTML = 
          "<tr><td>"+dataArr[i].name+"</td>"+
          "<td>"+dataArr[i].last+"</td>"+
          "<td>"+dataArr[i].city+"</td></tr>";

      tableHTML += tableRowHTML;
    }
    //close table
    tableHTML += "</table>";

    //create table
    document.getElementById(element).innerHTML = tableHTML;
  }
}

createTable(tableContentArr, 'tableConteiner');







