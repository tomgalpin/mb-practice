var ModalEvents = {
    showElement: function(element) {
        /**
        * Shows an element/sets display: block.
        * @param {string} element = '.modal-container'
        * @return {function}
        */
        $(element).show();
    },
    hideElement: function(element) {
        /**
        * Hides an element/sets display: none.
        * @param {string} element = '.modal-container'
        * @return {function}
        */
        $(element).hide();
    },
    bodyNoScroll: function() {
        /**
        * Adds 'no-scroll' class to body
        * @return {function}
        */
        $('body').addClass('no-scroll');
    },
    bodyScroll: function() {
        /**
        * Removes 'no-scroll' class to body
        * @return {function}
        */
        $('body').removeClass('no-scroll');
    },
    clearForm: function() {
        /**
        * Make sure form fields are clear on open & Submit button text is normal
        * @return {function}
        */
        var $formSubmitButton = $('.form-submit'),
            $form = $('form');

        $formSubmitButton.text('Submit');
        $form[0].reset();
    },
    fakePostForm: function(e) {
        /**
        * Fake-POSTs/Console.logs New Program Form Data:
        * @param {e} event
        * @return {function}
        */
        var formData = this.gatherFormData(e),
            formattedData;

        if (formData.length === 0) {
            return;
        } else {
            formattedData = this.formatFormData(formData);

            console.log("Fake POST of New Program Form Data:");
            console.log(formattedData);
            this.showPosted();
        }
    },
    gatherFormData: function(e) {
        /**
        * Gathers Form Data
        * @param {e} event
        * @return {array} (array of objs)
        */
        var formData    = $('form').serializeArray(),
            isEmpty     = this.checkEmptyFormData(formData);

        e.preventDefault();

        if (isEmpty) {
            alert('Please make sure all input fields are filled in.  Only the Checkbox is optional!');
            formData = [];
        }

        return formData;
    },
    formatFormData: function(formData) {
        /**
        * Formats form data into JSON
        * @param {array} formData
        * @return {obj}
        */
        var formattedFormData = {
            "programType": "",
            "programName": "",
            "onlineScheduling": false,
            "capacity": "",
            "programTabs": []
            },
            tabsArray = [],
            key,
            value;

        for (var i=0;i<formData.length;i++) {
            key     = formData[i].name;
            value   = formData[i].value;

            if ( key === "programTabs") {
                tabsArray.push(value);
            } else {
                formattedFormData[key] = value;
            }
        }
        formattedFormData["programTabs"] = tabsArray;

        return formattedFormData;
    },
    showPosted: function() {
        /**
        * Changes Submit Button text & closes form modal on a timeout
        * @return {function}
        */
        var $formSubmitButton = $('.form-submit');

        $formSubmitButton.text('SUBMITTED!');
        setTimeout(function(){
            ClickEvents.closeModal();
        }, 1000);
    },
    checkEmptyFormData: function(formData) {
        /**
        * Checks to make sure there are not any empty form elements
        * @param {obj} formattedData
        * @return {boolean}
        */
        var comparisonArray = ["programType", "programName", "capacity", "programTabs"],
            formDataKeys = [],
            isAnInputEmpty,
            name;

        for (var i=0;i<formData.length;i++){
            name = formData[i].name;
            formDataKeys.push(name);
        }

        for (var i=0;i<comparisonArray.length;i++) {
            isAnInputEmpty = $.inArray(comparisonArray[i], formDataKeys) === -1;

            if (isAnInputEmpty) {
                break;
            }
        }

        return isAnInputEmpty;
    }
};
