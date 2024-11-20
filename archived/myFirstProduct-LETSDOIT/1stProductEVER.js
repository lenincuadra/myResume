function kambioText() {
  // Lenin's Quote: 'a missing "" can break anything, even your confidence in your code'
  // my only issue was here: const collectionOfLi = document.getElementsByTagName(li);
  //

  // collect all the "li" inside the document
  const collectionOfLi = document.getElementsByTagName("li");

  // replace the content within "id1"
  const replaceId1 = document.getElementsByTagName("id1");

  // on the document, get the "id1" and replace the text.
  document.getElementById("id1").innerHTML = "Pollaco cambiado!";
}

// Greetings from the past, Lenin. Today is 20th Octuber 2024
