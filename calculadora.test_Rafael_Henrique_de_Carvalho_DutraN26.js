const{soma, subtrai, multiplica, divide, ehPar, raiz, media} = require("./calculadora");


describe("soma", ()=>{
    test("soma com dois numeros positivos",()=>{
        expect(soma(2,3)).toBe(5);
    })
})

describe("raiz", ()=>{
    test("calcula a raiz de numero nao exato com precisão",()=>{
        expect(raiz(2)).toBeCloseTo(1.414)
    })
    test("lancar erro para numero negativo",()=>{
        expect(()=> raiz(-4)).toThrow("Nao e possivel calcular raiz de numero negativo");
    })
})

describe("subtrai",()=>{
    test("subtrai um numero pelo o outro",()=>{
        expect(subtrai(2,2)).toBe(0);
    })

    test("retorna um numero negativo quando o numero for negativo ",()=>{
        expect(subtrai(2,4)).toBe(-2);
    })
})

describe("multiplica",()=>{
    test("multiplica um numero por outro e da um produto",()=>{
        expect(multiplica(2,2)).toBe(4);
    })
    test("retorna 0 quando multiplicado um numero por 0",()=>{
        expect(multiplica(2,0)).toBe(0);
    })
    test("O resultado deve ser maior do que cada um dos fatores individualmente (quando ambos forem maiores que 1)",()=>{
        expect(multiplica(5,5)).toBeGreaterThan(5)
    })
})

describe("divide",()=>{
    test("deve retornar o resultado correto da divisao",()=>{
        expect(divide(2,2)).toBe(1);
    })
    test("deve lancar o erro 'Nao e possivel dividir por zero' quando b for 0",()=>{
        expect(()=>divide(1, 0)).toThrow("Nao e possivel dividir por zero")
    })

})

describe("ehPar",()=>{
    test("retorna verdadeiro para numero par",()=>{
        expect(ehPar(4)).toBe(true)
    })
})
describe("ehPar",()=>{
    test("retorna falso para numero impar",()=>{
        expect(ehPar(5)).toBe(false)
    })
})

describe("media",()=>{
    test("Deve calcular corretamente a media de uma lista de inteiros",()=>{
        expect(media([2,4,6,])).toBe(4)
    })
})

describe("media",()=>{
    test("Deve calcular corretamente a media quando o resultado for decimal",()=>{
        expect(media([2.5,4.3,6.4,])).toBeCloseTo(4.4)
    })
})


describe("media",()=>{
    test("Deve lancar erro quando a lista estiver vazia",()=>{
        expect(()=> media([])).toThrow("A lista de numeros nao pode ser vazia")
    })
})

describe("media",()=>{
    test("Deve lancar erro quando a lista estiver vazia",()=>{
        expect(()=> media([])).toThrow("A lista de numeros nao pode ser vazia")
    })
})

describe("media",()=>{
    test("Deve lancar erro quando o argumento nao for um array",()=>{
        expect(()=> media("123")).toThrow("")
    })
})
