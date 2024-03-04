const math = require('../math');

test('soma 2 + 3 igual a 5', () => { 
expect(math.soma(2, 3)).toBe(5); 
}); 

test('subtracao 2 - 3 igual a -1', () => { 
expect(math.subtracao(2, 3)).toBe(-1); 
}); 

test('multiplicacao 2 * 3 igual a 6', () => { 
expect(math.multiplicacao(2,3)).toBe(6); 
}); 

test('Divisao 9 / 3 igual a 3', () => { 
expect(math.divisao(9,3)).toBe(3); 
}); 

