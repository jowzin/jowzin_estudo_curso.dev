const caculadora = require("../models/calculadora");

test("soma de 2 + 2 deve ser 4", () => {
  const resultado = caculadora.somar(2, 2);
  // console.log("resultado: ", resultado);
  expect(resultado).toBe(4);
});

test("soma de 5 + 100 deve ser 105", () => {
  const resultado = caculadora.somar(5, 100);
  // console.log("resultado: ", resultado);
  expect(resultado).toBe(105);
});

test("soma de 'banana' + 100 deve ser 'Erro'", () => {
  const resultado = caculadora.somar("banana", 100);
  // console.log("resultado: ", resultado);
  expect(resultado).toBe("Erro");
});
