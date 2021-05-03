function creaPDF(){
	var doc = new jsPDF();

	doc.text(75, 20, 'Creare un PDF con JavaScript');
	doc.text(20, 30, 'Questo file PDF');


	doc.addPage();
	doc.text(20, 20, 'Seconda Pagina');
	var nome = document.getElementById('nome').value;
	doc.text(20, 30, 'Il nome \u00E8:' + nome);
	var cognome = document.getElementById('cognome').value;
	doc.text(20, 40, 'Il cognome \u00E8:' + cognome);
	var numero = document.getElementById('numero').value;
	doc.text(20, 50, 'Il cognome \u00E8:' + numero);
	var email = document.getElementById('email').value;
	doc.text(20, 60, 'Il cognome \u00E8:' + email);
	var messaggio = document.getElementById('mess').value;
	doc.text(20, 70, 'Il cognome \u00E8:' + messaggio);

	doc.addPage();
	doc.text(20, 280, 'Fine documento...');
	doc.save('PDFdiProva.pdf');


}