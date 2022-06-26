let employees = [
    {
      first_name: "Suresh",
      last_name: "Kumar",
      address: "Nungambakkam",
      gender: "male",
      State : "TN",
      Country : "India",
      },
  
    {
        first_name: "Pradeep ",
        last_name: "Raj",
        address: "Saidapet",
        gender: "male",
        State : "Kerala",
        Country : "India",
    },
  
    {
        first_name: "Ramya",
        last_name: "Priya",
        address: "Kodambakkam",
        gender: "female",
        State : "Punjab",
        Country : "India"
    },
  
    {
        first_name: "Shivani",
        last_name: "Reddy",
        address: "Parrys",
        gender: "female",
        State : "AP",
        Country : "India"
    },
    {
        first_name: "Ajay",
        last_name: "Prasad",
        address: "Ramapuram",
        gender: "male",
        State : "Jammu",
        Country : "India"
        },
  
    {
        first_name: "Nanditha",
        last_name: "Premkumar",
        address: "West Mambalam",
        gender: "female",
        State : "TN",
        Country : "India"
    }
  ];

  let AllEmployeebtn = document.querySelector("#all-employee");
  AllEmployeebtn.addEventListener("click", function(){
    displayEmployees(employees);
  })

  let Malebtn = document.querySelector("#male-employee");
Malebtn.addEventListener("click", function(){
    let maleEmployee = employees.filter(function(employee){
        return employee.gender === "male";
    })
    console.log(maleEmployee);
    displayEmployees(maleEmployee)
}); 

let Femalebtn = document.querySelector("#female-employee");
Femalebtn.addEventListener("click", function(){
    let femaleEmployee = employees.filter(function(employee){
        return employee.gender === "female";
    })
    console.log(femaleEmployee);
    displayEmployees(femaleEmployee)
}); 


let displayEmployees = (employees) => {
    let tableBody = document.querySelector("#table-body");


    let tableRow="";
    for (let employee of employees){
        tableRow+=`<tr>
        <td>${employee.first_name}</td>
        <td>${employee.last_name}</td>
        <td>${employee.address}</td>
        <td>${employee.gender}</td>
        <td>${employee.State}</td>
        <td>${employee.Country}</td>
        </tr>`
        tableBody.innerHTML = tableRow;
    }
}