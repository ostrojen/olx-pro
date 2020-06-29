window.addEventListener('DOMContentLoaded', event => {

	browser.storage.local.get('hiddenTop')
        .then(response => {
            document.querySelector('input[name="hiddenTop"]').checked = response.hiddenTop;
        })

	document.querySelector('label[for="hiddenTop"]').textContent = browser.i18n.getMessage("label_top_hidden");

	document.querySelector('input[name="hiddenTop"]').addEventListener('change', event => {
		browser.storage.local.set({hiddenTop: event.target.checked})
	});

});
