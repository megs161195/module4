 $(document).ready(function() {
    $("#lesen").click(function() {
        $.ajax({
            url : "megs.txt",
            dataType: "text",
            success : function (data) {
                $(".text").html(data);
            }
        });
    });
}); 