/**
 * Created by fabio on 23/05/15.
 */

$("#buttonValidarCPF").click(function() {
    var cpf = $("#cpfvalor").val();
    if (isCPFNumber(cpf)) {
        $("#alertcpfsuccess").removeClass("in").show();
        $("#alertcpfsuccess").delay(200).addClass("in").fadeOut(2000);
        $("#formgroupcpf").addClass("has-success");
        $("#formgroupcpf").removeClass("has-error");

    } else {
        $("#alertcpferro").removeClass("in").show();
        $("#alertcpferro").delay(200).addClass("in").fadeOut(2000);
        $("#formgroupcpf").removeClass("has-success");
        $("#formgroupcpf").addClass("has-error");
    }
});

$("#buttonValidarCNPJ").click(function() {
    var cnpj = $("#cnpjvalor").val();
    if (isCNPJNumber(cnpj)) {
        $("#alertcnpjsuccess").removeClass("in").show();
        $("#alertcnpjsuccess").delay(200).addClass("in").fadeOut(2000);
        $("#formgroupcnpj").addClass("has-success");
        $("#formgroupcnpj").removeClass("has-error");
    } else {
        $("#alertcnpjerro").removeClass("in").show();
        $("#alertcnpjerro").delay(200).addClass("in").fadeOut(2000);
        $("#formgroupcnpj").removeClass("has-success");
        $("#formgroupcnpj").addClass("has-error");
    }

});

$("#buttonGerarCPF").click(function(){
   var cpf = generateCPF(true);
   var lista = $("#listaCPF");
   var li = $("<li/>").append(cpf).addClass("bg-info").appendTo(lista);
});


$("#buttonGerarCNPJ").click(function(){
    var cnpj = generateCNPJ(true);
    var lista = $("#listaCNPJ");
    var li = $("<li/>").append(cnpj).addClass("bg-warning").appendTo(lista);
});

