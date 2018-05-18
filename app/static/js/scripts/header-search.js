$(function() {
    $('form').each(function() {
        $(this).find('input').keypress(function(e) {
            // Deteching if the Enter key or Return key is pressed
            if(e.which == 10 || e.which == 13) {
                this.form.submit();
            }
        });

        $(this).find('input[type=submit]').hide();
    });
});