var app = {
    initialize: function() {
        this.bind();
    },
    bind: function() {
        document.addEventListener('deviceready', this.deviceready, false);
    },
    deviceready: function() {
      var apiKey = "20284472";
      var sessionId = "1_MX4yMDI4NDQ3Mn5-VGh1IFNlcCAxMyAwOTo0MzowMyBQRFQgMjAxMn4wLjA4MDcwMTM1fg";
      var token = "T1==cGFydG5lcl9pZD0yMDI4NDQ3MiZzaWc9NzY5NzNkNjQwMTg5YmJkOTdhODdiMWMxODcwNmVhNGIwZmYwYjI2NDpzZXNzaW9uX2lkPTFfTVg0eU1ESTRORFEzTW41LVZHaDFJRk5sY0NBeE15QXdPVG8wTXpvd015QlFSRlFnTWpBeE1uNHdMakE0TURjd01UTTFmZyZjcmVhdGVfdGltZT0xMzQ3NTU0NjA5JmV4cGlyZV90aW1lPTEzNDc2NDEwMDkmcm9sZT1wdWJsaXNoZXImY29ubmVjdGlvbl9kYXRhPSZub25jZT02OTc1NjM=";

      TB.setLogLevel(TB.DEBUG);

      var session = TB.initSession(sessionId);
      session.addEventListener("sessionConnected", function (event) {
        alert('Connected');
      });
      session.connect(apiKey, token);
      app.report('deviceready');
    },
    report: function(id) {
        console.log("report:" + id);
        // hide the .pending <p> and show the .complete <p>
        document.querySelector('#' + id + ' .pending').className += ' hide';
        var completeElem = document.querySelector('#' + id + ' .complete');
        completeElem.className = completeElem.className.split('hide').join('');
    }
};


