
Helper.track_record = {
    dataToServer: {},
    url: '/evaluation/checkout',
    debug: true,   // if true, pause submit and print dataToServer
    getCompleteResult: function() {
        var self = this;
        var metaData = {};
        var dataToAMT = {};

        // stringify data before sending to server
        var dataToServer = {};

        $.extend(self.dataToServer, dataToServer);
        return {
            metaData: metaData,
            dataToAMT: dataToAMT
        };
    }
};