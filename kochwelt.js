document.addEventListener('DOMContentLoaded', function () {
	const portionInput = document.querySelector('#recipe-ingredients .input-ingredients');
	if (!portionInput) return;

    const amountCells = document.querySelectorAll('#recipe-ingredients .table-ingredients td.td-padding');
  
    // Begrenze die Eingabe auf maximal 20
  portionInput.addEventListener('input', function () {
    if (this.value > 20) {
      this.value = 20;
    }
    if (this.value < 1) {
      this.value = 1;
    }
  });

	// Parse and store original values (number + unit or raw text)
	amountCells.forEach(td => {
		const text = td.textContent.trim();
		td.dataset.originalText = text;

		// Try to capture a leading number (integer or decimal, comma or dot)
		const m = text.match(/^\s*([0-9]+(?:[.,][0-9]+)?)\s*(.*)$/);
		if (m) {
			const num = parseFloat(m[1].replace(',', '.'));
			td.dataset.originalNumber = String(num);
			td.dataset.originalUnit = m[2] ? m[2].trim() : '';
		} else {
			td.dataset.originalNumber = '';
			td.dataset.originalUnit = '';
		}
	});

	const basePortions = parseFloat(portionInput.value) || 1;

	function formatNumber(n) {
		if (Math.abs(n - Math.round(n)) < 1e-9) return String(Math.round(n));
		// show up to 2 decimal places, trim trailing zeros
		return String(Number(n.toFixed(2))).replace(/\.0+$/,'');
	}

	function updateAmounts() {
		const newPortions = parseFloat(portionInput.value) || basePortions;
		const factor = newPortions / basePortions;

		amountCells.forEach(td => {
			const origNum = td.dataset.originalNumber;
			const origUnit = td.dataset.originalUnit || '';
			if (origNum) {
				const val = parseFloat(origNum) * factor;
				td.textContent = formatNumber(val) + (origUnit ? ' ' + origUnit : '');
			} else {
				// leave non-numeric entries as they were
				td.textContent = td.dataset.originalText || '';
			}
		});
	}

	// Update on blur (when input loses focus) and on change
	portionInput.addEventListener('blur', updateAmounts);
	portionInput.addEventListener('change', updateAmounts);
});





