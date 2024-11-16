function elementToPrint() {
  const element = document.body; // Captura todo el cuerpo
  const options = {
    scale: window.devicePixelRatio, // Escala para alta calidad
  };

  html2canvas(element, options).then((canvas) => {
    const imgData = canvas.toDataURL("image/png"); // Convierte a imagen
    const pdf = new jsPDF("portrait", "px", [canvas.width, canvas.height]);

    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height); // Ajusta al tamaño exacto
    pdf.save("page.pdf");
  });
}

// THIS ACTUALLY WORKS
// function exportPDF() {
//   const element = document.getElementById("exportPDF");
//   const options = {
//     margin: 2,
//     filename: "CV-export-test__.pdf",
//     image: { type: "webp", quality: 1 },
//     html2canvas: { scale: window.devicePixelRatio, width: 1440 },
//     jsPDF: {
//       unit: "px",
//       format: [1440, element.scrollWidth],
//       orientation: "portrait",
//     },
//   };

//   html2pdf().set(options).from(element).save();
// }
