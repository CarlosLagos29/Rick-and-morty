const { server } = require('../src/app');
const session = require('supertest');
const agent = session(server);

describe("Test de RUTAS", () => {
    describe('GET /rickandmorty/character/:id', () => {
        it('Responde con status: 200', async () => {
            await agent.get('/rickandmorty/character/1').expect(200);
        })
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"',async ()=>{
            let response = (await agent.get('/rickandmorty/character/1')).body // aca sacamos el obj de la url
            expect(response).toHaveProperty('id');
            expect(response).toHaveProperty('name');
            expect(response).toHaveProperty('status');
            expect(response).toHaveProperty('species');
            expect(response).toHaveProperty('gender');
            expect(response).toHaveProperty('origin');
            expect(response).toHaveProperty('image');
        })
        it('Si hay un error responde con status: 404', async () => {
            await agent.get('/rickandmorty/character/12222').expect(404);
        })
    })
    describe("GET /rickandmorty/login", () => {
        it('Access pasa seteado en true', async () => {
            let response = (await agent.get("/rickandmorty/login?email=lagosc252@gmail.com&password=carlos02")).body
            expect(response.access).toEqual(true)
        })
        it('Access pasa seteado en false', async () => {
            let response = (await agent.get("/rickandmorty/login?email=hola@gmail.com&password=sadadad")).body
            expect(response.access).toEqual(false)
        })
    });
    describe("POST /rickandmorty/fav",()=>{
        const character1 = {id: 1 ,name: "Messi"}
        const character2 = {id: 2 ,name :"ramon"}

        it("Devuelve el elemento por body",async()=>{
            let response = (await agent.post("/rickandmorty/fav").send(character1)).body
            expect(response).toContainEqual(character1)
        })
        it("Devuelve el elemento anterior y el actual",async()=>{
            let response = (await agent.post("/rickandmorty/fav").send(character2)).body
            expect(response).toContainEqual(character1)
            expect(response).toContainEqual(character2)
        })
    })
    describe("DELETE /rickandmorty/fav/:id",()=>{
        const character1 = {id: 1 ,name: "Messi"}
        const character2 = {id: 2 ,name :"ramon"}

        it("Devuelve la ruta si no hay un personaje con ese id", async()=>{
            let response = (await agent.delete("/rickandmorty/fav/3")).body
            expect(response).toContainEqual(character2)
            expect(response).toContainEqual(character1)
        })
        it("Elimina al personaje con ese id", async()=>{
            let response = (await agent.delete("/rickandmorty/fav/1")).body
            expect(response).toContainEqual(character2)
        })
    })
})
