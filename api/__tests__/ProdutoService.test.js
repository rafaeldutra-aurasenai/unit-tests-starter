const ProdutoService = require("../services/ProdutoService")

describe('produtosService - testes unitarios com mocks', () => {
    let service;
    let mockRepository

    beforeEach(() => {
        mockRepository = {
            findAll: jest.fn(), //funcao vazia retorna nada pq ai no teste define oq ela vai ter
            findById: jest.fn(),
            create: jest.fn(),
            delete: jest.fn(),
        };
        service = new ProdutoService(mockRepository)
    });

    describe('listar', () => {
        test("chama repository.findAll uma vez e retorna o resultado", () => {
            const produtos = [{ id: 1, nome: "coxinha", preco: 5 }];
            mockRepository.findAll.mockReturnValue(produtos);

            const resultado = service.listar();

            expect(mockRepository.findAll).toHaveBeenCalledTimes(1)
            expect(resultado).toEqual(produtos)



            //criar caso de teste para buscar por id
        })
    })


    describe('criar', () => {
        test("repassa os dados para o repository.create", () => {
            const dados = { nome: "coxinha", preco: 5 };
            const produtoCriado = {
                id: 1,
                nome: "coxinha",
                preco: 5
            };
            mockRepository.create.mockReturnValue(produtoCriado);

            const resultado = service.criar(dados);

            expect(mockRepository.create).toHaveBeenCalledWith(dados)
            expect(resultado).toEqual(produtoCriado)
        });
        test("propaga o erro lançado pelo repository quando os dados forem validos", () => {
            const dados = {
                nome: "",
                preco: -5
            };
            mockRepository.create.mockImplementation(() => {
                throw new Error("Dados invalidos");
            });
        });
    });
});

