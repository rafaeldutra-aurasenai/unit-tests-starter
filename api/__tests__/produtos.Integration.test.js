const request = require("supertest");
const createApp =require("../app")

describe("API/produtos testes de integracao",()=>{
    let app;

    beforeEach(()=>{
        app = createApp()

    })

    describe('GET /produtos',()=>{
        test("retorna 200 e um array com os produtos iniciais",async()=>{
            const res = await request(app).get("/produtos");

            expect(res.status).toBe(200)
            expect(Array.isArray(res.body)).toBe(true);
            expect(res.body.length).toBe(3);

            
        })   
     });



      describe('GET /produtos/:id ',()=>{
        test("retorna 200 para quando achar um id especifico",async()=>{
            const res = await request(app).get("/produtos/1");

            expect(res.status).toBe(200)
            expect(res.body.id).toBe(1);

            
        })   
     });
})