var $ = require("jquery");

$(document).ready(function() {
    $.ajax({
        url: "http://kilmajster.herokuapp.com/"
    }).then(function(data) {
       $('.hello-id').append(data.id);
       $('.hello-message').append(data.message);
       $('.hello-time').append(data.currentTime);
    });
});
