let employees = [];
let nameElem = document.getElementById("name");
let numberElem = document.getElementById("number");
let emailElem = document.getElementById("email");
let addressElem = document.getElementById("address");
let cityElem = document.getElementById("city");
let roleElem = document.getElementById("role");
let employeeIndex = null;

function init(){
        let data = localStorage.getItem('employees')
        employees = data ? JSON.parse(data): [];
        if(employees.length > 0) showTable();
    }
    
    
init();

function showTable() {
    employees.forEach((employee, index) => {
      var table = document.getElementsByTagName("tbody")[0];
      var newRow = table.insertRow(table.length);
      newRow.setAttribute("index", index);
      var cell1 = newRow.insertCell(0);
      cell1.innerHTML = `<input type="checkbox" onclick="myFunction()"  name="ChildCheckBox" id="ChildCheckBox"  value="${index}"/>`;
       var cell2 = newRow.insertCell(1);
      cell2.innerHTML = employee.name;
      var cell3 = newRow.insertCell(2);
      cell3.innerHTML = employee.number;
      var cell4 = newRow.insertCell(3);
      cell4.innerHTML = employee.email;
      var cell5 = newRow.insertCell(4);
      cell5.innerHTML = employee.address;
      var cell6 = newRow.insertCell(5);
      cell6.innerHTML = employee.city;
      var cell7 = newRow.insertCell(6);
      cell7.innerHTML = employee.role;
      var cell8 = newRow.insertCell(7);
      cell8.innerHTML =  `<input type="submit" value="view" style="background-color:#8aacc8"; onclick='show(${index})'>
      <input type="submit" value="Edit" style="background-color:#8aacc8" onclick='editEmployee(${index})'>`
     
    });
}

function editEmployee(index){
  location.href = "updateemployee.html?idx="+index;
}

function show(index) {
  location.href="viewemployee.html?idx="+index;
}

function deleteRow(tableID) {
  var table = document.getElementById(tableID);
  var rowCount = table.rows.length;

  for (var i = 1; i < rowCount; i++) {
    var row = table.rows[i];
    var chkbox = row.cells[0].children[0];
    if (chkbox != null && chkbox.checked == true) {
      table.deleteRow(i);
      rowCount--;
      i--;
      employees.splice(i,1);
      
    }
  }
  localStorage.setItem('employees',JSON.stringify(employees))
  
  var rootChkbox = table.rows[0].cells[0].children[0];
  if (rowCount == 1) rootChkbox.checked = false;
  
}

 function checkAll(myCheckBox) {
    var checkboxes = document.querySelectorAll("input[type='checkbox']");
    console.log("checked");
    if (myCheckBox.checked == true) {
      checkboxes.forEach(function (checkboxes) {
        checkboxes.checked = true;
        console.log("checked")
      });
    } else {
      checkboxes.forEach(function (checkboxes) {
        checkboxes.checked = false;
      });
    }
  }
  
  function myFunction() {
    var checkboxes = document.getElementById("ChildCheckBox")
    
    
    var button = document.getElementById("button");
    if (checkboxes.checked == true){
      button.style.display = "block";
    } else {
       button.style.display = "none";
    }
  }












