/**
 * Created by fabio on 23/05/15.
 */

$("#buttonValidarCPF").click(function() {
    var cpf = $("#cpfvalor").val();
    if (isCPFNumber(cpf)) {

        $("#alertcpfsuccess").removeClass("sr-only");
        window.setTimeout(function() {
            $("#alertcpfsuccess").fadeTo(500, 0).slideUp(500, function(){
                $(this).addClass("sr-only")
            });
        }, 2000);
    } else {

        $("#alertcpferro").removeClass("sr-only");
        window.setTimeout(function() {
            $("#alertcpferro").fadeTo(500, 0).slideUp(500, function(){
                $(this).addClass("sr-only")
            });
        }, 2000);
    }

});