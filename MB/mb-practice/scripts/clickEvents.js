var ClickEvents = {
    showModal: function() {
        ModalEvents.clearForm();
        ModalEvents.bodyNoScroll();
        ModalEvents.showElement('.modal-container');
    },
    closeModal: function() {
        ModalEvents.bodyScroll();
        ModalEvents.hideElement('.modal-container');
    },
    toggleCardSize: function(e) {
        var $this = $(e.target);

        CardEvents.toggleCardSize($this);
    },
    fakePostForm: function(e) {
        ModalEvents.fakePostForm(e);
    }
};
