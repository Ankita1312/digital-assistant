describe("PokeAPI Tests", () => {
  it("should return correct data for Pikachu", () => {
    cy.request("GET", "https://pokeapi.co/api/v2/pokemon/pikachu").then(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body.name).to.eq("pikachu");

        const abilities = response.body.abilities.map((a) => a.ability.name);
        expect(abilities).to.include("lightning-rod");
      }
    );
  });

  it("should return 404 for non-existent Pokemon", () => {
    cy.request({
      url: "https://pokeapi.co/api/v2/pokemon/nonexistentpokemon",
      failOnStatusCode: false,
    })
      .its("status")
      .should("eq", 404);
  });
});
