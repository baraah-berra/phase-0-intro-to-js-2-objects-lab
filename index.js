// Write your solution in this file!

// Step 1: Initialize the employee Object
const employee = {
    name: "John Doe",
    streetAddress: "123 Main Street",
  };
  
  // Step 2: Create the functions
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Use the spread operator to create a new object with the updated key-value pair
    return { ...employee, [key]: value };
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Modify the original employee Object by assigning the new value to the specified key
    employee[key] = value;
    return employee; // Return the updated employee Object (optional but useful)
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    // Use the spread operator to create a new object without the specified key-value pair
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Mutate the original employee Object by deleting the specified key
    delete employee[key];
    return employee; // Return the updated employee Object (optional but useful)
  }
  