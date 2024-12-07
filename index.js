// Przyszle funkcje mojego projektu

// Fail Fast | Before

// function processData(data) {
//     let result = [];

//     for (let i = 0; i < data.length; i++) {
//         let number = data[i];

//         let squared = number * number;

//         result.push(squared);
//     }

//     if (result.length === 0) {
//         console.log("No valid data processed.");
//     } else {
//         console.log("Data processed successfully:", result);
//     }

//     return result;
// }

// const inputData = [1, 2, "three", 4];
// const outputData = processData(inputData);

// KISS | Before

// function getItem(itemId, items) {
//     if (items === undefined || items.length === 0) {
//         console.log("Item list is empty or undefined.");
//         return null;
//     }

//     for (let i = 0; i < items.length; i++) {
//         if (items[i].id === itemId) {
//             console.log("Item found:", items[i]);
//             return items[i];
//         }
//     }

//     console.log("Item with ID", itemId, "not found.");
//     return null;
// }

// const itemList = [{ id: 1, name: "Item A" }, { id: 2, name: "Item B" }];
// getItem(1, itemList);

// DRY | Before

// function registerUser(username, email, password) {
//     if (username.length < 3) {
//         console.log("Username must be at least 3 characters long.");
//         return false;}
//     if (!email.includes("@")) {
//         console.log("Invalid email address.");
//         return false;}
//     if (password.length < 6) {
//         console.log("Password must be at least 6 characters long.");
//         return false;}
//     console.log("User registered successfully!");
//     return true;
// }
// function registerAdmin(username, email, password) {
//     if (username.length < 3) {
//         console.log("Username must be at least 3 characters long.");
//         return false;}
//     if (!email.includes("@")) {
//         console.log("Invalid email address.");
//         return false;}
//     if (password.length < 6) {
//         console.log("Password must be at least 6 characters long.");
//         return false;}
//     console.log("Admin registered successfully!");
//     return true;
// }

// registerUser("user", "user@example.com", "password123");
// registerAdmin("admin", "admin@example.com", "adminpass");

// YAGNI | Before
// function authenticateUser(username, password, rememberMe, sendNotification, logActivity) {
//     if (username === "admin" && password === "password123") {
//         console.log("User authenticated");

//         if (rememberMe) {
//             console.log("User will be remembered");
//         }

//         if (sendNotification) {
//             console.log("Notification sent to user");
//         }

//         if (logActivity) {
//             console.log("User activity logged");
//         }

//         return true;
//     } else {
//         console.log("Authentication failed");
//         return false;
//     }
// }

// authenticateUser("admin", "password123", true, false, false);

// Use meaningful names | Before
// let a = document.getElementById("a");
// let b = document.getElementById("b");
// let c = document.getElementsByClassName("cc")[0];

// btn.onclick = function () {
//   a.style.display = "block";
// };

// span.onclick = function () {
//   a.style.display = "none";
// };

// window.onclick = function (event) {
//   if (event.target === a) {
//     a.style.display = "none";
//   }
// };

let model = document.getElementById("myModal");
let btn = document.getElementById("openModal");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  model.style.display = "block";
};

span.onclick = function () {
  model.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === model) {
    model.style.display = "none";
  }
};

// funkcje które będą sprawdzać czy dane wprowadzone w formularz są prawidlowe
function validateUserInfo(username, email) {
  // Sprawdzamy, czy długość nazwy użytkownika jest mniejsza niż 3
  if (username.length < 3) {
    // Jeśli tak, wypisujemy komunikat błędu i zwracamy "false"
    console.log("Username must be at least 3 characters long.");
    return false;
  }
  // Sprawdzamy, czy adres e-mail zawiera znak "@"
  if (!email.includes("@")) {
    // Jeśli znak "@" jest nieobecny, wypisujemy komunikat błędu i zwracamy "false"
    console.log("Invalid email address.");
    return false;
  }
  // Jeśli wszystkie warunki są spełnione, zwracamy "true"
  return true;
}
function registerUser(username, email) {
  // Sprawdzamy, czy dane użytkownika przeszły walidację
  if (!validateUserInfo(username, email)) {
    // Jeśli walidacja się nie powiodła, kończymy rejestrację i zwracamy "false"
    return false;
  }
  // Wypisujemy komunikat o pomyślnej rejestracji użytkownika
  console.log("User registered successfully!");
  // Zwracamy "true", aby potwierdzić, że rejestracja zakończyła się sukcesem
  return true;
}

// Przykład działania: wywołanie registerUser z poprawnymi danymi użytkownika
// registerUser("user", "user@example.com");

// KISS | After

function getItem(itemId, items) {
  if (!items || items.length === 0) {
    return null; // Early return for empty item list
  }

  const item = items.find((item) => item.id === itemId); // Simplified lookup
  return item || null; // Return found item or null if not found
}

const itemList = [
  { id: 1, name: "Item A" },
  { id: 2, name: "Item B" },
];
const foundItem = getItem(1, itemList);
if (foundItem) {
  console.log("Item found:", foundItem);
} else {
  console.log("Item not found.");
}

// Fail Fast | After

function processData(data) {
  if (!Array.isArray(data) || data.length === 0) {
    console.log("Invalid input: data should be a non-empty array.");
    return [];
  }

  let result = [];

  for (let i = 0; i < data.length; i++) {
    let number = data[i];

    if (typeof number !== "number") {
      console.log(`Invalid item at index ${i}: ${number} is not a number.`);
      return [];
    }

    let squared = number * number;
    result.push(squared);
  }

  console.log("Data processed successfully:", result);
  return result;
}

const inputData = [1, 2, "three", 4];
const outputData = processData(inputData);

// YAGNI | after

function authenticateUser(username, password) {
  if (username === "admin" && password === "password123") {
    console.log("User authenticated");
    return true;
  } else {
    console.log("Authentication failed");
    return false;
  }
}

authenticateUser("admin", "password123");



// Przyszle funkcje mojego projektu

// Fail Fast | Before

// function processData(data) {
//     let result = [];

//     for (let i = 0; i < data.length; i++) {
//         let number = data[i];

//         let squared = number * number;

//         result.push(squared);
//     }

//     if (result.length === 0) {
//         console.log("No valid data processed.");
//     } else {
//         console.log("Data processed successfully:", result);
//     }

//     return result;
// }

// const inputData = [1, 2, "three", 4];
// const outputData = processData(inputData);

// KISS | Before

// function getItem(itemId, items) {
//     if (items === undefined || items.length === 0) {
//         console.log("Item list is empty or undefined.");
//         return null;
//     }

//     for (let i = 0; i < items.length; i++) {
//         if (items[i].id === itemId) {
//             console.log("Item found:", items[i]);
//             return items[i];
//         }
//     }

//     console.log("Item with ID", itemId, "not found.");
//     return null;
// }

// const itemList = [{ id: 1, name: "Item A" }, { id: 2, name: "Item B" }];
// getItem(1, itemList);

// DRY | Before

// function registerUser(username, email, password) {
//     if (username.length < 3) {
//         console.log("Username must be at least 3 characters long.");
//         return false;}
//     if (!email.includes("@")) {
//         console.log("Invalid email address.");
//         return false;}
//     if (password.length < 6) {
//         console.log("Password must be at least 6 characters long.");
//         return false;}
//     console.log("User registered successfully!");
//     return true;
// }
// function registerAdmin(username, email, password) {
//     if (username.length < 3) {
//         console.log("Username must be at least 3 characters long.");
//         return false;}
//     if (!email.includes("@")) {
//         console.log("Invalid email address.");
//         return false;}
//     if (password.length < 6) {
//         console.log("Password must be at least 6 characters long.");
//         return false;}
//     console.log("Admin registered successfully!");
//     return true;
// }

// registerUser("user", "user@example.com", "password123");
// registerAdmin("admin", "admin@example.com", "adminpass");

// YAGNI | Before
// function authenticateUser(username, password, rememberMe, sendNotification, logActivity) {
//     if (username === "admin" && password === "password123") {
//         console.log("User authenticated");

//         if (rememberMe) {
//             console.log("User will be remembered");
//         }

//         if (sendNotification) {
//             console.log("Notification sent to user");
//         }

//         if (logActivity) {
//             console.log("User activity logged");
//         }

//         return true;
//     } else {
//         console.log("Authentication failed");
//         return false;
//     }
// }

// authenticateUser("admin", "password123", true, false, false);

// Use meaningful names | Before
// let a = document.getElementById("a");
// let b = document.getElementById("b");
// let c = document.getElementsByClassName("cc")[0];

// btn.onclick = function () {
//   a.style.display = "block";
// };

// span.onclick = function () {
//   a.style.display = "none";
// };

// window.onclick = function (event) {
//   if (event.target === a) {
//     a.style.display = "none";
//   }
// };

// Use meaningful names | After

let modal = document.getElementById("myModal");
let btn = document.getElementById("openModal");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// DRY | After

function validateUserInfo(username, email, password) {
  if (username.length < 3) {
    console.log("Username must be at least 3 characters long.");
    return false;
  }
  if (!email.includes("@")) {
    console.log("Invalid email address.");
    return false;
  }
  if (password.length < 6) {
    console.log("Password must be at least 6 characters long.");
    return false;
  }
  return true;
}

function registerUser(username, email, password) {
  if (!validateUserInfo(username, email, password)) {
    return false;
  }
  console.log("User registered successfully!");
  return true;
}

function registerAdmin(username, email, password) {
  if (!validateUserInfo(username, email, password)) {
    return false;
  }
  console.log("Admin registered successfully!");
  return true;
}

registerUser("user", "user@example.com", "password123");
registerAdmin("admin", "admin@example.com", "adminpass");

// KISS | After

function getItem(itemId, items) {
  if (!items || items.length === 0) {
    return null; // Early return for empty item list
  }

  const item = items.find((item) => item.id === itemId); // Simplified lookup
  return item || null; // Return found item or null if not found
}

const itemList = [
  { id: 1, name: "Item A" },
  { id: 2, name: "Item B" },
];
const foundItem = getItem(1, itemList);
if (foundItem) {
  console.log("Item found:", foundItem);
} else {
  console.log("Item not found.");
}

// Fail Fast | After

function processData(data) {
  if (!Array.isArray(data) || data.length === 0) {
    console.log("Invalid input: data should be a non-empty array.");
    return [];
  }

  let result = [];

  for (let i = 0; i < data.length; i++) {
    let number = data[i];

    if (typeof number !== "number") {
      console.log(`Invalid item at index ${i}: ${number} is not a number.`);
      return [];
    }

    let squared = number * number;
    result.push(squared);
  }

  console.log("Data processed successfully:", result);
  return result;
}

const inputData = [1, 2, "three", 4];
const outputData = processData(inputData);

// YAGNI | after

function authenticateUser(username, password) {
  if (username === "admin" && password === "password123") {
    console.log("User authenticated");
    return true;
  } else {
    console.log("Authentication failed");
    return false;
  }
}

authenticateUser("admin", "password123");
