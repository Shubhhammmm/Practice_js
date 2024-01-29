const targets = [
  {
    id: 1,
    name: "Product 1",
    description: "This is product 1",
    price: 10.99,
    sales: 100,
    revenue: 1099,
  },
  {
    id: 2,
    name: "Product2",
    description: "This is product 2",
    price: 20.99,
    sales: 200,
    revenue: 4198,
  },
];

let growth = document.getElementById("company");
console.log(growth);

function printTable() {

  let headingRow = document.createElement('tr')
  let id = document.createElement('td')
  let name = document.createElement('td')
  let sales = document.createElement('td')
  let description = document.createElement('td')
  let revenue   = document.createElement('td')
  let price = document.createElement('td')

  id.innerText = "Id"
  name.innerText = "Name"
  sales.innerText = "Sales"
  description.innerText = "Description"
  revenue.innerText = "Revenue"
  price.innerText = "Price"
  headingRow.appendChild(id)
  headingRow.appendChild(name)
  headingRow.appendChild(description)
  headingRow.appendChild(price)
  headingRow.appendChild(sales)
  headingRow.appendChild(revenue)

  growth.appendChild(headingRow)



  targets.forEach((target) => {
    let newRow = document.createElement("tr");
    

    for (let [key, value] of Object.entries(target)) {
      console.log(key, value);
      let cell = document.createElement("td");
      cell.innerHTML = value;
      newRow.appendChild(cell);
    }

    growth.appendChild(newRow);
  });
}

printTable();

let sales = document.getElementById("sortBysales");
let revenue = document.getElementById("sortByrevenue");

sales.addEventListener("click", () => {
  targets.sort((t1, t2) => t2.sales - t1.sales);
  growth.innerHTML = "";
  printTable();
});

revenue.addEventListener("click", () => {
  targets.sort((t1, t2) => t2.revenue - t1.revenue);
  growth.innerHTML = "";
  printTable();
});



// const targets = [
//   {
//     id: 1,
//     name: "Product 1",
//     description: "This is product 1",
//     price: 10.99,
//     sales: 100,
//     revenue: 1099,
//   },
//   {
//     id: 2,
//     name: "Product2",
//     description: "This is product 2",
//     price: 20.99,
//     sales: 200,
//     revenue: 4198,
//   },
// ];

// let growth = document.getElementById("company");
// console.log(growth);

// function printTable(order) {
//   order.forEach((target) => {
//     let newRow = document.createElement("tr");

//     for (let [key, value] of Object.entries(target)) {
//       console.log(key, value);
//       let cell = document.createElement("td");
//       cell.innerHTML = value;
//       newRow.appendChild(cell);
//     }

//     growth.appendChild(newRow);
//   });
// }

// printTable(targets);

// let revenue = document.getElementById("sortByrevenue");
// let check = true;

// function tgl() {
//   let sales = document.getElementById("sortBysales");
//   let order = []
//   sales.addEventListener("click", () => {
//      order = targets.sort((t1, t2) => t2.sales - t1.sales);

//     growth.innerHTML = "";
//   });

//   if (!check) {
//     check = true;
//     order = targets.reverse();
//   } else {
//     check = false;
//   }

//   printTable(order);
// }

// revenue.addEventListener("click", () => {
//   targets.sort((t1, t2) => t2.revenue - t1.revenue);
//   growth.innerHTML = "";
//   printTable();
// });

// // 1st time ascending
// // 2nd decscending
// //repeat
// //heading remain constant
