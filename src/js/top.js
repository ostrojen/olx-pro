class Top {
    start() {
        var listContainer = document.getElementById('listContainer');
        // Create an observer instance linked to the callback function
        const observer = new MutationObserver(mutations => {
            for (let mutation of mutations) {
                if (
                    mutation.target.id === listContainer.id &&
                    mutation.attributeName === 'class' &&
                    mutation.target.classList.contains('loaderActive') === false
                ) {
                    this.checkHidden();
                }
            }
        });
        // Start observing the target node for configured mutations
        observer.observe(listContainer, { attributes: true });

        // Hide top offers after page loaded
        this.checkHidden()
    }

    getOffers() {
        return document.querySelectorAll('.promoted');
    }
    hideAll() {
        this.getOffers().forEach(offer => { offer.hidden = true });
        return this;
    }
    showAll() {
        this.getOffers().forEach(offer => { offer.hidden = false });
        return this;
    }
    checkHidden() {
        browser.storage.local.get('hiddenTop')
        .then((response) => {
            if(response.hiddenTop){
                this.hideAll();
            } else {
                this.showAll();
            }
        })
        .catch();
    }
}

var top = new Top();

window.addEventListener('DOMContentLoaded', event => {
    top.start();
});

browser.storage.onChanged.addListener( event => {
    top.start();
})
