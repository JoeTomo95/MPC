    $(document).ready(function() {
        var Now = new Date();
        var CurrentDay = Now.getDay();
        if ((CurrentDay == 0 && Now.getHours() > 12) || CurrentDay == 1 || CurrentDay == 2 || CurrentDay == 3) {
            $('#del_fri').show();
        } else if ((CurrentDay == 3 && Now.getHours() > 12) || CurrentDay == 4 || CurrentDay == 5) {
            $('#del_mon').show();
        } else {
            $('#del_tom').show();
        }
    })