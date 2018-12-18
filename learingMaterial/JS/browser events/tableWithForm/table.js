var tableContentArr = [
  {name: 'Yegal', famely:'Barshshet', city: 'Nir Israel'},
  {name: 'Shlomi', famely:'Ohana', city: 'Nir Israel'}
]

//<div style="background: black; top:0px; width:700px">voo</div>


function getInput(){
  var name = document.getElementsByName('name')[0].value;
  var famely = document.getElementsByName('famely')[0].value;
  var city = document.getElementsByName('city')[0].value;
  
  tableContentArr.push({name: name, famely:famely, city: city});
  
  createTable(tableContentArr, 'tableConteiner'); 
  
  document.getElementsByName('name')[0].value = '';
  document.getElementsByName('famely')[0].value = '';
  document.getElementsByName('city')[0].value = '';
}

function createTable(dataArr, element){
  //create HTML for table
  if (dataArr.length >0){
    
    //create header
    var tableHTML = "<table><tr><th>First</th><th>Last</th><th>City</th></tr>";

    //build rows
    for (i=0; i<dataArr.length;i++){
      var tableRowHTML = 
          "<tr><td>"+dataArr[i].name+"</td>"+
          "<td>"+dataArr[i].famely+"</td>"+
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