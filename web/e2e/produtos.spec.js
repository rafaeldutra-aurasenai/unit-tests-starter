import{test,expect} from "@playwright/test"

test.beforeEach(async({page,request})=>{
    const resposta = await request.post("http://localhost:3000/_reset");
    expect(resposta.status()).toBe(204);
    await page.goto("/")
})

test("lista os produtos iniciais", async({page})=>{
    await expect(page.getByRole("heading",{name: "produtos"})).toBeVisible();
    await expect(page.getByRole("row")).toHaveCount(4);
    await expect(page.getByRole("cell",{name: "coxinha"})).toBeVisible
})

test("cadastra um produto novo", async({page})=>{
    await page.getByLabel("nome").fill("Kibe");
    await page.getByLabel("Preco").fill("7");
    await page.getByLabel("button",{name:"cadastrar"}).click();
    

    const linha = page.getByRole("row",{name: /Kibe/});
    await expect(linha).toBeVisible();
    await expect(linha).toContainText("R$ 7,00");

});
test("mostra erro ao cadastrar sem preenchimento", async ({page})=>{
    await page.getByRole("button",{name:"Cadastrar"}).click();
    await expect(page.getByText("nome e preco sao obrigatorios")).toBeVisible()
});

test("remove um produto", async({page})=>{
    const linha = page.getByRole("row",{name:/pastel/});
    await linha.getByRole("button",{name:"remover"}).click();
    await expect(linha).toHaveCount(0);
});