var Helpers = {
    dollarize: function(num) {
        /**
        * Formats a number into a dollar amount with commas
        * @param {int} num
        * @return {string}
        */
        var numbersWithCommas = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
            dollarized          = '$' + numbersWithCommas;

        console.log(6, dollarized);
        return dollarized;
    }
};