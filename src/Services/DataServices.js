// Function for Say Hello

async function SayHelloFunction(name)
{
    const response = await fetch(`https://aguilarfcorslight.azurewebsites.net/AllForOneAPI/Hello/${name}`); 

    const data = await response.text();
    console.log(data);
    return data;
}

export {SayHelloFunction}


// Function for Adding Two Numbers

async function AddingTwoNumbersFunction(num1, num2)
{
    const response = await fetch(`https://aguilarfcorslight.azurewebsites.net/AllForOneAPI/Adding/${num1}/${num2}`);

    const data = await response.text();
    console.log(data);
    return data;
}

export {AddingTwoNumbersFunction}


// Function for Asking Questions

async function AskingQuestionsFunction(answer1, answer2)
{
    const response = await fetch(`https://aguilarfcorslight.azurewebsites.net/AllForOneAPI/AskQuestions/${answer1}/${answer2}`);

    const data = await response.text();
    console.log(data);
    return data;
}

export {AskingQuestionsFunction}


// Function for Greater Than Or less Than

async function GreaterThanOrLessThanFunction(num1, num2)
{
    const response = await fetch(`https://aguilarfcorslight.azurewebsites.net/AllForOneAPI/BiggerOrSmaller/${num1}/${num2}`);

    const data = await response.text();
    console.log(data);
    return data;
}

export {GreaterThanOrLessThanFunction}


// Function for Mad Lib

async function MadLibFunction(nameInput, friendNameInput, placeInput, adjectiveInput, superHeroOneInput, superHeroTwoInput, villainInput, superPowerOneInput, superPowerTwoInput, amusementParkInput)
{
    const response = await fetch(`https://aguilarfcorslight.azurewebsites.net/AllForOneAPI/userInput/${nameInput}/${friendNameInput}/${placeInput}/${adjectiveInput}/${superHeroOneInput}/${superHeroTwoInput}/${villainInput}/${superPowerOneInput}/${superPowerTwoInput}/${amusementParkInput}`);

    const data = await response.text();
    console.log(data);
    return data;
}

export {MadLibFunction}


// Function for Odd or Even

async function OddOrEvenFunction(num)
{
    const response = await fetch(`https://aguilarfcorslight.azurewebsites.net/AllForOneAPI/tryNumbers/${num}`);

    const data = await response.text();
    console.log(data);
    return data;
}

export {OddOrEvenFunction}


// Function for Reverse It

async function ReverseItFunction(num)
{
    const response = await fetch(`https://aguilarfcorslight.azurewebsites.net/AllForOneAPI/reverseIt/${num}`);

    const data = await response.text();
    console.log(data);
    return data;
}

export {ReverseItFunction}


// Function for Student Directory First Name

async function StudentDirectoryFunctionFirstName(firstName)
{
    const response = await fetch(`https://aguilarfcorslight.azurewebsites.net/AllForOneAPI/studentLookUp/${firstName}`);

    const data = await response.json();
    console.log(data);
    return [data.firstName, data.lastName, data.slackName, data.email, data.hobbies];
}

export {StudentDirectoryFunctionFirstName}


// Function for Student Directory Last Name

async function StudentDirectoryFunctionLastName(lastName)
{
    const response = await fetch(`https://aguilarfcorslight.azurewebsites.net/AllForOneAPI/studentLookUp/${lastName}`);

    const data = await response.json();
    console.log(data);
    return [data.firstName, data.lastName, data.slackName, data.email, data.hobbies];
}

export {StudentDirectoryFunctionLastName}


// Function for Student Directory Slack Name

async function StudentDirectoryFunctionSlackName(slackName)
{
    const response = await fetch(`https://aguilarfcorslight.azurewebsites.net/AllForOneAPI/studentLookUp/${slackName}`);

    const data = await response.json();
    console.log(data);
    return [data.firstName, data.lastName, data.slackName, data.email, data.hobbies];
}

export {StudentDirectoryFunctionSlackName}


// Function for Student Directory Email

async function StudentDirectoryFunctionEmail(email)
{
    const response = await fetch(`https://aguilarfcorslight.azurewebsites.net/AllForOneAPI/studentLookUp/${email}`);

    const data = await response.json();
    console.log(data);
    return [data.firstName, data.lastName, data.slackName, data.email, data.hobbies];
}

export {StudentDirectoryFunctionEmail}


// Function for Restaurant Picker

async function RestaurantPickerFunction(foodType)
{
    const response = await fetch(`https://aguilarfcorslight.azurewebsites.net/AllForOneAPI/myChoice/${foodType}`);

    const data = await response.text();
    console.log(data);
    return data;
}

export {RestaurantPickerFunction}

