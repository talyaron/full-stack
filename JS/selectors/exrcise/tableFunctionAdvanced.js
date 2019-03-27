var tableContentArr = [
  {headers:
   ['name','last','city', 'age']
  },
  {rows:[
    {name: 'Yegal', last:'Barshshet', city: 'Nir Israel', age:34},
    {name: 'Shlomi', last:'Ohana', city: 'Nir Israel', age:34}
  ]}

]

//tableContentArr.push({name: 'Amit', last:'Zilber', city: 'Pardes-Hana'});

function createTable(dataArr, element){

  //create HTML for table
  if (dataArr.length >0){

    //create header
    var tableHTML ='<table><tr>';
    for (i=0; i<dataArr.headers.length;i++){
      tableHTML += '<th>'+dataArr.headers[i]+'</th>'
    }
    
    tableHTML += "</tr>";

    //build rows
    for (i=0; i<dataArr.rows.length;i++){
      var tableRowHTML = 
          "<tr><td>"+dataArr.rows[i][dataArr.header[i]+"</td>"+
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







