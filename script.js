function countingProd() {
  // Cambia "tags" por la etiqueta real que quieres seleccionar
  const collectionAmount = document.querySelectorAll(
    "jobDescription" && "#type"
  );
  const changeText = document.getElementById("changeId");

  // Verifica si la colección tiene exactamente un elemento
  if (collectionAmount.length === 0) {
    console.log(`Found 0: ${collectionAmount.length} elements.`);
  } else if ((collectionAmount.length = 1)) {
    changeText.innerText = "KEY DESIGNED PRODUCT"; // Modifica el texto o haz lo que necesites
    console.log(`Found 1: ${collectionAmount.length} elements.`);
  } else if (collectionAmount.length > 1) {
    console.log(`Found +1: ${collectionAmount.length} elements.`);
    changeText.innerText = "KEY DESIGNED PRODUCTS"; // Modifica el texto o haz lo que necesites
  }
  // Opcional: verifica si el elemento con id 'changeId' existe antes de usarlo
  //   if (changeText) {
  //     changeText.innerText = "Updated text"; // Modifica el texto o haz lo que necesites
  //   }
}

// -----
// function countingProd() {
//   const collectionAmount = document.querySelectorAll("tags");
//   const changeText = document.getElementById("changeId");

//   if (collectionAmount.length == 1) {
//     console.log("nothing to show!");
//   }
// }
// -------

//   if (collectionAmount) {
//     console.log("Worked on this project");
//   } else if (collectionAmount.length == 1) {
//     console.log("nothing to show!");

//     document.getElementById.changeId.innerHTML = "equal to 1";

//     document.changeId.innerHTML = "equal to 1";
//   } else if (collectionAmount > 1) {
//     changeText.innerHTML = "equal plus 1";
//   }
// }
