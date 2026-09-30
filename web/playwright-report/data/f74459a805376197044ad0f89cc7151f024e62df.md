# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: produtos.spec.js >> cadastra um produto novo
- Location: e2e\produtos.spec.js:15:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 204
Received: 404
```

# Test source

```ts
  1  | import{test,expect} from "@playwright/test"
  2  | 
  3  | test.beforeEach(async({page,request})=>{
  4  |     const resposta = await request.post("http://localhost:3000/_reset");
> 5  |     expect(resposta.status()).toBe(204);
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  6  |     await page.goto("/")
  7  | })
  8  | 
  9  | test("lista os produtos iniciais", async({page})=>{
  10 |     await expect(page.getByRole("heading",{name: "produtos"})).toBeVisible();
  11 |     await expect(page.getByRole("row")).toHaveCount(4);
  12 |     await expect(page.getByRole("cell",{name: "coxinha"})).toBeVisible
  13 | })
  14 | 
  15 | test("cadastra um produto novo", async({page})=>{
  16 |     await page.getByLabel("nome").fill("Kibe");
  17 |     await page.getByLabel("Preco").fill("7");
  18 |     await page.getByLabel("button",{name:"cadastrar"}).click();
  19 |     
  20 | 
  21 |     const linha = page.getByRole("row",{name: /Kibe/});
  22 |     await expect(linha).toBeVisible();
  23 |     await expect(linha).toContainText("R$ 7,00");
  24 | 
  25 | });
  26 | test("mostra erro ao cadastrar sem preenchimento", async ({page})=>{
  27 |     await page.getByRole("button",{name:"Cadastrar"}).click();
  28 |     await expect(page.getByText("nome e preco sao obrigatorios")).toBeVisible()
  29 | });
  30 | 
  31 | test("remove um produto", async({page})=>{
  32 |     const linha = page.getByRole("row",{name:/pastel/});
  33 |     await linha.getByRole("button",{name:"remover"}).click();
  34 |     await expect(linha).toHaveCount(0);
  35 | });
```