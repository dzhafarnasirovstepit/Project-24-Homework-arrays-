console.clear();

const objInput = {
    name: "Jafar",
    dateOfBirth: "15.07.1995",
    email: "xjfxnsx@gmail.com",
    city: "Baku",
    academy: "Step IT",
};

const fieldsEntered = [];
const fieldsInObj = [];

const maxAttempts = 10;

for (let attempts = 0; attempts < maxAttempts; attempts++) {
    
    const enterData = prompt(`Attempts ${attempts + 1}: Enter field name:`);
    
    if (enterData) {
        
        fieldsEntered.push(enterData);
        
        if (objInput.hasOwnProperty(enterData)) {
            fieldsInObj.push(enterData);
        }
    
    } else {
        break;
    }
    
}

console.log("Fields in object:", fieldsInObj);

const notFieldsInObj = fieldsEntered.filter(field => !objInput.hasOwnProperty(field));

console.log("Fields not in object:", notFieldsInObj);