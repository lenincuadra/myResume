function exportPDF() {
  const el = document.getElementById("cardContainer");
  const options = {
    margin: 0,
    filename: "card.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
  };
  html2pdf().set(options).from(el).save();
}
