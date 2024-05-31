document.addEventListener("mousemove",parallax);

function parallax(e){
    document.querySelectorAll(".cerdo").forEach(function (move){
        var moving_value=move.getAttribute("data-value");
        var x=(e.clientX*moving_value)/250;
        var y=(e.clientY*moving_value)/250;

        move.style.transform="translateX(" + x + "px) translateY(" + y + "px)";
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const loanForm = document.getElementById('loanForm');
    const resultDiv = document.getElementById('result');
    const monthlyPaymentEl = document.getElementById('monthlyPayment');
    const totalPaymentEl = document.getElementById('totalPayment');
    const downloadPDFButton = document.getElementById('downloadPDF');

    loanForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const amount = parseFloat(document.getElementById('amount').value);
        const interest = parseFloat(document.getElementById('interest').value) / 100 / 12;
        const years = parseInt(document.getElementById('years').value);
        const payments = years * 12;

        const x = Math.pow(1 + interest, payments);
        const monthlyPayment = (amount * x * interest) / (x - 1);
        const totalPayment = monthlyPayment * payments;

        monthlyPaymentEl.textContent = `Pago Mensual: $${monthlyPayment.toFixed(2)}`;
        totalPaymentEl.textContent = `Pago Total: $${totalPayment.toFixed(2)}`;

        resultDiv.classList.remove('hidden');
    });

    downloadPDFButton.addEventListener('click', function() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        doc.text("Resultado de la Cotización de Crédito", 10, 10);
        doc.text(monthlyPaymentEl.textContent, 10, 20);
        doc.text(totalPaymentEl.textContent, 10, 30);

        doc.save('cotizacion_credito.pdf');
    });
});

