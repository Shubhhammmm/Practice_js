const orders = [ { id: 1, ordername: 'Order1', orderstatus: 'completed' }, { id: 2, ordername: 'Order 2',
orderstatus: 'pending' }, { id: 3, ordername: 'Order 3',
orderstatus: 'aborted' }, { id: 4, ordername: 'Order 4',
orderstatus: 'completed' }, { id: 5, ordername: 'Order 5',
orderstatus: 'pending' }, { id: 6, ordername: 'Order 6',
orderstatus: 'aborted' }, ]


let orderTable = document.getElementById('serial')
console.log(orderTable);

orders.forEach(order =>{
    let newRow = document.createElement('tr')
    // let idCell  = document.createElement('td')
    // let orderStatus = document.createElement('td')
    // let orderName  = document.createElement('td')

   for(let [key , value] of Object.entries(order)){
    console.log(key , value);
     let cell = document.createElement('td')
     cell.innerText = value;
     newRow.appendChild(cell)
   }

    // idCell.innerText = order.id;
    // orderStatus.innerText = order.orderstatus
    // orderName.innerText = order.ordername
    // newRow.appendChild(idCell)
    // newRow.appendChild(orderName)
    // newRow.appendChild(orderStatus)

    orderTable.appendChild(newRow)
    
}) 

// let table = [...orders]
// document.write(table);