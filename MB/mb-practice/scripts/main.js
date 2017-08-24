$(document).ready(function(){
    var $moreLess = $('.more-less');

    // Make the API calls to get the Data for the Cards and Tables:
    GetData.getCards();
    GetData.getCardTable();

    // Fake-POST/Log to Console New Program Form Data:
    $('.form-submit').click(function(e) {
        ClickEvents.fakePostForm(e);
    });
    // Toggle Expand/Shrink Card
    $('body').on('click', '.more-less', function(e) {
        ClickEvents.toggleCardSize(e);
    });
    // Open Modal
    $('.new-program-button').click(ClickEvents.showModal);
    // Close Modal
    $('.modal-close').click(ClickEvents.closeModal);
    $('.modal-backdrop').click(ClickEvents.closeModal);
});