var count = 1;

$(document).ready(function() {
    $('.minus-button').click(function() {
        alert("Hello");
    });

    removeField = function(keyval) {
        $("#keydiv"+keyval).hide();
        count = count - 1;
    };



    $("#addbtn").click(function() {
        if (count > 4) {
            alert("Only 5 keywords are allowed.");
            return;
        }

        var countStr = count.toString();

        var newSearchField =   '<div id="keydiv'+count+'" style="height:2.5em;" class="form-group">' +
            '<div class="col-9">' +
            '<input type="text" class="form-control" id="keyval'+countStr+'" placeholder="Enter keyword">' +
            '</div>' +
            '<div>' +
            '<div class="col-3 remove-field" onClick="removeField('+countStr+')" >' +
            '<a><span class="glyphicon glyphicon-minus minus-button"></span></a>' +
            '</div>' +
            '</div>' +
            '</div>';
        var objNewDiv = document.createElement('div');
        objNewDiv.setAttribute('id', 'key' + count);
        objNewDiv.innerHTML = newSearchField;
        document.getElementById('searchFieldList').appendChild(objNewDiv);
        count = count + 1;
    });

});
