$(document).ready(function() {

    var newSearchField =   '<div style="height:2.5em;" class="form-group">' +
        '<div class="col-9">' +
        '<input type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter keyword">' +
        '</div>' +
        '<div>' +
        '<div class="col-3 remove-field">' +
        '<a><span class="glyphicon glyphicon-minus minus-button"></span></a>' +
        '</div>' +
        '</div>' +
        '</div>';

    $(".remove-field").hide();
    $(".add-field").click(function(element) {
        $("#searchFieldList").innerHTML += newSearchField;
        $(".remove-field").show();
    });

    $(".remove-field").click(function() {
        alert("remove field");
    });

    $("#searchbtn").click(function() {
        alert("Hello");
    });

    var count = 0;

    $("#addbtn").click(function() {
        if (count > 5) {
            alert("Only 5 keywords are allowed.");
            return;
        }
        count++;

        var objNewDiv = document.createElement('div');
        objNewDiv.setAttribute('id', 'key' + count);
        objNewDiv.innerHTML = newSearchField;
        document.getElementById('searchFieldList').appendChild(objNewDiv);



    });


});
