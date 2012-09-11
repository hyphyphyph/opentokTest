var app = {
    initialize: function() {
        this.bind();
    },
    bind: function() {
        document.addEventListener('deviceready', this.deviceready, false);
    },
    deviceready: function() {
      var apiKey = "20250742"; // Replace with your apiKey.
      var sessionId = "2_MX4yMDI1MDc0Mn5-VHVlIFNlcCAxMSAxMzozMTo0NiBQRFQgMjAxMn4wLjUzMDEzNjR-"; // Replace with your own session ID. Make sure it matches helloWorld.html
      var token = "T1==cGFydG5lcl9pZD0yMDI1MDc0MiZzZGtfdmVyc2lvbj10YnB5LUBzZGtfdmVyc2lvbkAuQG9wZW50b2suc2RrLnB5dGhvbi5tb2RfdGltZUAmc2lnPWI4NGJlZWRiZjdmMDliY2ZlMzQyMzNiYTVlZGQ4ODEzZDZmZDc1ZjE6bm9uY2U9ODIxODMxJmNyZWF0ZV90aW1lPTEzNDczOTU1MDYmcm9sZT1wdWJsaXNoZXImc2Vzc2lvbl9pZD0yX01YNHlNREkxTURjME1uNS1WSFZsSUZObGNDQXhNU0F4TXpvek1UbzBOaUJRUkZRZ01qQXhNbjR3TGpVek1ERXpOalIt"; // Replace with your session Token.
      // To Generate Sessions and Tokens, See http://www.tokbox.com/opentok/api/tools/generator

      var session = TB.initSession(sessionId); 
      var publisher = TB.initPublisher( apiKey, "myPublisherDiv" ); // Replace with your API key

      session.addEventListener("sessionConnected", sessionConnectedHandler);
      session.addEventListener("streamCreated", streamCreatedHandler);
      session.connect(apiKey, token);

      function sessionConnectedHandler(event) {
        subscribeToStreams(event.streams);
        session.publish( publisher );
      }

      function streamCreatedHandler(event) {
        subscribeToStreams(event.streams);
      }

      function subscribeToStreams(streams) {
        for (i = 0; i < streams.length; i++) {
          var stream = streams[i];
          if (stream.connection.connectionId != session.connection.connectionId) {
            var div = document.createElement('div');
            div.setAttribute('id', 'stream' + stream.streamId);
            document.body.appendChild(div);
            session.subscribe(stream, div.id);
          }
        }
      }
    },
    report: function(id) { 
        console.log("report:" + id);
        // hide the .pending <p> and show the .complete <p>
        document.querySelector('#' + id + ' .pending').className += ' hide';
        var completeElem = document.querySelector('#' + id + ' .complete');
        completeElem.className = completeElem.className.split('hide').join('');
    }
};


