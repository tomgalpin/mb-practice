var BuildBottomTable = {
    format: function(data) {
        /**
        * Formats data from API to set the table up easier.
        * @param {data} array of obj
        * @return {array} cards
        */
        var cards   = [];

        for (var i=0;i<data.length;i++) {
            card = {};

            card.name = data[i].Name;
            card.monthlySales = data[i].TotalMonthlySales;
            card.monthlyAttendance = data[i].MonthlyAttendance;

            cards.push(card);
        }

        return cards;
    },
    buildTable: function(data) {
        /**
        * Builds the table in the DOM
        * @param {data} array of obj
        * @return {function}
        */
        var title,
            sales,
            attendance,
            array           = this.format(data),
            $tableHeaders = $('.bottom-table-headers');

        for (var i=0;i<array.length;i++) {
            title = array[i].name;
            sales = array[i].monthlySales;
            attendance = array[i].monthlyAttendance;

            $tableHeaders.after(this.buildTableRow(title, sales, attendance));
        };
    },
    buildTableRow: function(title, sales, attendance){
        /**
        * Builds a single row as as string
        * @param {string} title
        * @param {string} sales
        * @param {string} attendance
        * @return {string} tableRowHtml
        */
        var tableRowHtml = '<tr>' +
                                '<td class="class-title">' +
                                    '<span>' + title + '</span>' +
                                    '<br>' +
                                    '<span class="med-text table-more-link">more</span>' +
                                '</td>' +
                                '<td>' +
                                    '<span>$' + sales + '</span>' +
                                '</td>' +
                                '<td>' +
                                    '<span>' + attendance + '</span> <span class="med-text">visits</span>' +
                                '</td>' +
                            '</tr>';

        return tableRowHtml;
    }
};
