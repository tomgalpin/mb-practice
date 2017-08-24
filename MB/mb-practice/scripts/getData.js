var GetData = {
    getCards: function() {
        $.ajax({
            url: "https://api.myjson.com/bins/5bdb3",
            method: "GET"
        }).done(function(data) {
            BuildCards.buildCards(data);
            BuildBottomTable.buildTable(data);
        }).fail(function(xhr) {
            alert('there was an error on an API GET request!');
        });
    },
    getCardTable: function(){
        $.ajax({
            url: "https://api.myjson.com/bins/47axv",
            method: "GET"
        }).done(function(data) {
            BuildCards.buildRows(data);
        }).fail(function(xhr) {
            alert('there was an error on an API GET request!');
        });
    }
};

