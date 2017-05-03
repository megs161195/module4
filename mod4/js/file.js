var pageExecute = {

    fileContents:"Null",
    pagePrefix:"Null",
    slides:"Null",

    init: function () {
        $.ajax({
            url: "C:\Users\15-N225 TU/megs.txt",
            async: false,
            success: function (data){
                pageExecute.fileContents = data;
            }
        });
    }
};