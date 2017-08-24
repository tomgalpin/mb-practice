var CardEvents = {
    toggleCardSize: function(element) {
        /**
        * Toggles the individual card size
        * @param {element}
        * @return {function}
        */
        var $elParent           = element.parent(),
            $bottomContainer    = element.parent().parent().parent().find('.bottom-container'),
            $more               = $elParent.find('.more'),
            $less               = $elParent.find('.less');

        $more.toggleClass('active');
        $bottomContainer.toggleClass('active');
        $less.toggleClass('active');
    }
};
