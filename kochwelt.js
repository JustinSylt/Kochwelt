document.addEventListener('DOMContentLoaded', function () {
	const portionInput = document.querySelector('#recipe-ingredients .input-ingredients');
	if (!portionInput) return;

    const amountCells = document.querySelectorAll('#recipe-ingredients .table-ingredients td.td-padding');
    const warningMessage = document.querySelector('#recipe-ingredients .warning-message');
  
    let lastAppliedPortions = parseFloat(portionInput.value) || 1;
    let warningTimeout = null;
  
    // Begrenze die Eingabe auf maximal 20
  portionInput.addEventListener('input', function () {
    if (this.value > 20) {
      this.value = 20;
    }
    if (this.value < 1) {
      this.value = 1;
    }
    // Zeige Warnung nach 5 Sekunden, wenn der Wert sich vom letzten angewendeten unterscheidet
    const currentPortions = parseFloat(portionInput.value) || 1;
    if (currentPortions !== lastAppliedPortions) {
      // Lösche vorherigen Timeout, falls vorhanden
      if (warningTimeout) {
        clearTimeout(warningTimeout);
      }
      // Starte neuen Timeout für 5 Sekunden
      warningTimeout = setTimeout(function () {
        if (warningMessage) {
          warningMessage.style.display = 'block';
        }
      }, 5000);
    }
  });

	// Parse und speichere Originalwerte (Zahl + Einheit oder roher Text)
	amountCells.forEach(td => {
		const text = td.textContent.trim();
		td.dataset.originalText = text;

		// Versuche, eine führende Zahl zu erfassen (Ganzzahl oder Dezimalzahl, Komma oder Punkt)
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
		// Zeige bis zu 2 Dezimalstellen, entferne nachfolgende Nullen
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
				// Hinterlasse nicht-numerische Einträge so wie sie waren
				td.textContent = td.dataset.originalText || '';
			}
		});
	}

	// Aktualisiere nur wenn der "Portionen" Button geklickt wird
	const portionButton = document.querySelector('#recipe-ingredients .button');
	if (portionButton) {
		portionButton.addEventListener('click', function () {
			updateAmounts();
			// Verstecke die Warnung und speichere die neue Portionszahl
			lastAppliedPortions = parseFloat(portionInput.value) || 1;
			if (warningTimeout) {
				clearTimeout(warningTimeout);
				warningTimeout = null;
			}
			if (warningMessage) {
				warningMessage.style.display = 'none';
			}
		});
	}
});





