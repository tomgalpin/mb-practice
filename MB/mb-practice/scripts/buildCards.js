var BuildCards = {
    format: function(data) {
        /**
        * Formats data from API to set the cards up easier.
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
    buildCards: function(data) {
        /**
        * Builds the all of the cards in the DOM & sets container width (for scrolling)
        * @param {data} array of obj
        * @return {function}
        */
        var title,
            sales,
            array           = this.format(data),
            length          = array.length,
            $cardsConatiner = $('.cards-container');

        for (var i=0;i<array.length;i++) {
            title = array[i].name;
            sales = array[i].monthlySales;

            $cardsConatiner.append(this.buildCard(title, sales));
        };

        this.setContainerWidth(length);
    },
    buildCard: function(title, sales) {
        /**
        * Builds a single card as as string
        * @param {string} title
        * @param {string} salse
        * @return {string} cardHtml
        */

        var cardHtml = '<div class="card">' +
                '<button class="pencil"></button>' +
                '<div class="card-container top-container">' +
                    '<p class="card-title bold-title">' + title + '</p>' +
                    '<p class="graph-title light-text">Sales by month</p>' +
                    '<div class="bar-graph"></div>' +
                '</div>' +
                '<div class="card-container middle-container">' +
                    '<div class="column">' +
                        '<div class="middle-title-container">' +
                            '<p class="light-text">Total Monthly</p>' +
                            '<p class="light-text">Sales</p>' +
                        '</div>' +
                    '</div>' +
                    '<div class="column">' +
                        '<table>' +
                            '<tr>' +
                                '<th>Current</th>' +
                                '<th>1- Year</th>' +
                            '</tr>' +
                            '<tr>' +
                                '<td class="bold-title"><p>$' + sales + '</p></td>' +
                                '<td>' +
                                    '<div class="graph-image"></div>' +
                                '</td>' +
                            '</tr>' +
                        '</table>' +
                    '</div>' +
                '</div>' +
                '<div class="card-container bottom-container">' +
                    '<table>' +
                        '<tr class="table-headers">' +
                            '<th>Price Name</th>' +
                            '<th>Current</th>' +
                            '<th>1- Year</th>' +
                        '</tr>' +
                    '</table>' +
                '</div>' +
                '<div class="footer">' +
                    '<a class="more-less">' +
                        '<span class="more active">more</span>' +
                        '<span class="less">less</span>' +
                    '</a>' +
                '</div>' +
            '</div>';

        return cardHtml;
    },
    setContainerWidth: function(length) {
        /**
        * Sets cards container width (for scrolling)
        * @param {integer} length
        * @return {function}
        */
        var $cardContainer = $('.cards-container'),
            cardWidth      = 275,
            containerWidth = cardWidth * length;

        $cardContainer.width(containerWidth);
    },
    getUniques: function(data) {
        /**
        * Get and set the unique elements in the array, based on obj.Name
        * @param {array} data
        * @return {array} uniqueObjs
        */
        var uniqueNames = [],
            uniqueObjs  = [];

        for (var i=0;i<data.length;i++) {
            if (!uniqueNames.includes(data[i].Name)) {
                uniqueNames.push(data[i].Name);
                uniqueObjs.push(data[i])
            }
        };

        return uniqueObjs;
    },
    buildRows: function(data) {
        /**
        * Build all the unique rows for teh card
        * @param {array} data
        * @return {function}
        */
        var title,
            sales,
            uniques     = this.getUniques(data).reverse(), // reverse the order to match the specs
            $headers    = $('.cards-container').find('.table-headers');

        for (var i=0;i<uniques.length;i++) {
            title = uniques[i].Name;
            sales = uniques[i].Sales;

            $headers.after(this.buildRow(title, sales));
        }
    },
    buildRow: function(title, cost) {
        /**
        * Build a single card row
        * @param {string} title
        * @param {string} cost
        * @return {function}
        */
        var rowHtml =   '<tr>' +
                            '<td><p>' + title + '</p></td>' +
                            '<td>$' + cost + '</td>' +
                            '<td>' +
                                '<div class="graph-image first-graph"></div>' +
                            '</td>' +
                        '</tr>';

        return rowHtml;
    }
};
