QUnit.test( "calcDvCPF", function( assert ) {
  assert.ok( calcDvCPF("344365338")==="32", "Passed!" );
  assert.ok( calcDvCPF("409384613")==="89", "Passed!" );
  assert.notOk( calcDvCPF("409384613")==="88", "Passed!" );
});

QUnit.test( "isCPFNumber", function( assert ) {
  assert.ok( isCPFNumber("34436533832"), "Passed!" );
  assert.ok( isCPFNumber("40938461389"), "Passed!" );
  assert.ok( isCPFNumber("4.09.384.613-89"), "Passed!" );
  assert.notOk( isCPFNumber("40938461381"), "Passed!" );
});

QUnit.test( "formatCPF", function( assert ) {
  assert.ok( formatCPF("34436533832")==="344.365.338-32", "Passed!" );
  assert.ok( formatCPF("40938461389")==="409.384.613-89", "Passed!" );
  assert.ok( formatCPF("409384.61389")==="409.384.613-89", "Passed!" );
  var exp = /\d{3}\.\d{3}\.\d{3}\-\d{2}/;
  assert.ok(exp.test(formatCPF("409384.61389")),"Passed!" );
  
});

QUnit.test( "generateCPF", function( assert ) {
  assert.ok( generateCPF().length===11, "Passed!" );
  assert.ok( isCPFNumber(generateCPF()), "Passed!" );
});

QUnit.test( "calcDvCNPJ", function( assert ) {
  assert.strictEqual( calcDvCNPJ("349371254388"),"28", "Passed!" );
  assert.strictEqual( calcDvCNPJ("907586870892"),"60", "Passed!" );
});


QUnit.test( "isCNPJNumber", function( assert ) {
  assert.ok( isCNPJNumber("34937125438828"), "Passed!" );
  assert.ok( isCNPJNumber("90758687089260"), "Passed!" );
  assert.notOk( isCNPJNumber("90758687089261"), "Passed!" );
});

QUnit.test( "formatCNPJ", function( assert ) {
  assert.ok( formatCNPJ("27555994180043")==="27.555.994/1800-43", "Passed!" );
  assert.ok( formatCNPJ("08318952616195")==="08.318.952/6161-95", "Passed!" );
  assert.ok( formatCNPJ("083.18952616195")==="08.318.952/6161-95", "Passed!" );
  var exp = /\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}/;
  assert.ok(exp.test(formatCNPJ("08318952616195")),"Passed!" );
});

QUnit.test( "generatorCNPJ", function( assert ) {
  assert.ok( generateCNPJ().length===14, "Passed!" );
  assert.ok( isCNPJNumber(generateCNPJ()), "Passed!" );
});