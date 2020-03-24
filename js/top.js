class Top {
    constructor() {

        const listContainer = document.getElementById('listContainer');
        // Create an observer instance linked to the callback function
        const observer = new MutationObserver(mutations => {
            for (let mutation of mutations) {
                if (
                    mutation.target.id === listContainer.id &&
                    mutation.attributeName === 'class' &&
                    mutation.target.classList.contains('loaderActive') === false
                ) {
                    this.hideAll();
                }
            }
        });
        // Start observing the target node for configured mutations
        observer.observe(listContainer, { attributes: true });

        // Hide top offers after page loaded
        this.hideAll();

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
}

window.addEventListener('DOMContentLoaded', event => {
    var top = new Top();
});