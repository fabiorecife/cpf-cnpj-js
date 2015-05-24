/**
 * Created by fabio on 23/05/15.
 */


if (!String.prototype.repeat) {
    String.prototype.repeat = function(num) {
        return new Array(num + 1).join(this);
    }
}

function calcDvCPF(_cpf) {
    var soma = 0;
    var cpf = _cpf;
    var w, i, j;
    for (w = 0; w < 2; w++) {
        for (i = 0, j = cpf.length + 1; i < cpf.length; i++, j--)
            soma += (cpf.substr(i, 1) - 0) * j;
        soma = (soma * 10) % 11;
        if (soma === 10)
            soma = 0;
        cpf = cpf + soma.toString();
        soma = 0;
    }
    return cpf.substring(9, 11);
}

function isCPFNumber(_cpf) {
    _cpf = _cpf.replace(/[^0-9]/g, "");
    var cpf;
    if (_cpf.length === 11) {
        cpf = _cpf.substr(0, 9);
        cpf = cpf + calcDvCPF(cpf);

    }
    return (cpf === _cpf);
}

function formatCPF(_cpf) {
    _cpf = _cpf.replace(/[^0-9]/g, "");
    return _cpf.replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1-$2");
}

function generateCPF(_format, _cpfseed) {
    var xs;
    var cpf = _cpfseed ? (_cpfseed.length > 9 ? _cpfseed.substring(0, 9) : _cpfseed) : "";
    xs = 'x'.repeat(9 - cpf.length);
    cpf = cpf + xs.replace(/[x]/g, function(c) {
        var r = Math.random() * 10 | 0;
        return r.toString(10);
    });

    cpf = cpf + calcDvCPF(cpf);
    if (_format)
        cpf = formatCPF(cpf);
    return cpf;
}

function calcDvCNPJ(_cnpj) {
    var cgc = _cnpj.substr(0, 12);
    var w, i;
    var soma = 0;
    var mult = "543298765432";
    for (w = 0; w < 2; w++)
    {
        for (i = 0; i < cgc.length; i++)
            soma += (cgc.substr(i, 1) - 0) * (mult.substr(i, 1));
        soma = (soma * 10) % 11;
        if (soma == 10)
            soma = 0;
        cgc = cgc + soma;
        soma = 0;
        mult = "6" + mult;
    }
    return cgc.substr(12,14);
}

function isCNPJNumber(_cnpj) {
    _cnpj = _cnpj.replace(/[^0-9]/g, "");
    var cnpj;
    if (_cnpj.length === 14) {
        cnpj = _cnpj.substr(0, 12);
        cnpj = cnpj + calcDvCNPJ(cnpj);

    }
    return (cnpj === _cnpj);
}

function formatCNPJ(_cnpj) {
    _cnpj = _cnpj.replace(/[^0-9]/g, "");
    return _cnpj.replace(/(\d{2})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1/$2")
            .replace(/(\d{4})(\d)/, "$1-$2")
    ;
}

function generateCNPJ(_format, _cnpjseed) {
    var xs;
    var cnpj = _cnpjseed ? (_cnpjseed.length > 12 ? _cnpjseed.substring(0, 12) : _cnpjseed) : "";
    xs = 'x'.repeat(12 - cnpj.length);
    cnpj = cnpj + xs.replace(/[x]/g, function(c) {
        var r = Math.random() * 10 | 0;
        return r.toString(10);
    });

    cnpj = cnpj + calcDvCNPJ(cnpj);
    if (_format)
        cnpj = formatCNPJ(cnpj);
    return cnpj;
}