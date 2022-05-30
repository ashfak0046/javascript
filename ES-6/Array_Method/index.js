const items = [
    { name: "Bike", price: 100 },
    { name: "TV", price: 200 },
    { name: "Album", price: 10 },
    { name: "Book", price: 20 },
    { name: "Phone", price: 15 },
    { name: "Monitor", price: 2000 },
  ];
  
  const filteredItem = items.filter((item) => {
    return item.price <= 50;
  });
  console.log(filteredItem);
  
  const itemName = filteredItem.map((item) => {
    return item.name;
  });
  console.log(itemName);
  
  items.forEach((item) => {
    console.log(item.price);
  });
  
  const hasInexpensiveItems = items.some((item) => {
    return item.price <= 100;
  });
  console.log(hasInexpensiveItems);
  
  const hasExpensiveItems = items.every((item) => {
    return item.price <= 2000;
  });
  console.log(hasExpensiveItems);
  
  const total = items.reduce((currentTotal, item) => { 
    return item.price + currentTotal; 
  }, 0);
  console.log(total);
  
  const items2 = [1,2,3,4,5,6,7,8,9,10];
  const includesTwo = items2.includes(6);
  console.log(includesTwo)