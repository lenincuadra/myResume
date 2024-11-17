function exportPDF() {
  const element = document.getElementById("downloadcv");
  const options = {
    margin: 1,
    filename: "document.pdf",
    html2canvas: {
      scale: 2, // Mayor escala mejora el texto y lo hace seleccionable
      useCORS: true, // Asegura la carga correcta de recursos externos
    },
    jsPDF: {
      unit: "pt",
      format: [1920, 2000],
      orientation: "portrait",
    },
  };
  html2pdf().set(options).from(document.getElementById("downloadcv")).save();
}
// function exportPDF() {
//   const element = document.getElementById("downloadcv");
//   const options = {
//     margin: [1, 0, 0, 0],

//     filename: "exported-card.pdf",

//     image: { type: "pdf", quality: 0.98 },

//     html2canvas: { scale: 1 },
//     jsPDF: { unit: "px", format: [1920, 2000], orientation: "portrait" },
//     // jsPDF: { unit: "pt", format: "a4", orientation: "portrait" },
//   };
//   html2pdf().set(options).from(element).save();
// }
