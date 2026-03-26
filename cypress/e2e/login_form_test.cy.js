<<<<<<< HEAD
describe('login formu testi', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })


it("Form doğru bilgilerle doldurulduğunda submit edebiliyor", () =>{
  cy.get("#exampleEmail").type("Cristal.Greenfelder20@gmail.com");
  cy.get("#examplePassword").type("Y3sYRjuuDmJgooq");
  cy.get("#terms").check();
  cy.get('button[type="submit"]').should("not.be.disabled");
  cy.get('button[type="submit"]').click();
  cy.url().should("include","/success");
})

it("Email yanlış girildiğinde hata mesajı görünür ve buton disabled kalır", () =>{
  cy.get("#exampleEmail").type("abcmail.com");
  cy.get('[data-cy="email-error"]').should("exist");
  cy.contains("Please enter a valid email address").should("be.visible");
  cy.get('button[type="submit"]').should("be.disabled");
})

it("Email ve password yanlış girildiğinde hata mesajları görünür ve buton disabled kalır", () =>{
  cy.get("#exampleEmail").type("abcmail.com");
  cy.get("#examplePassword").type("123");
  cy.get('[data-cy="email-error"]').should("exist");
  cy.contains("Please enter a valid email address").should("be.visible");
  cy.get('[data-cy="password-error"]').should("exist");
  cy.contains("Password must be at least 4 characters long").should("be.visible");
  cy.get('button[type="submit"]').should("be.disabled");
})

=======
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
>>>>>>> d7e65c85c8065f8b2c49b31edc8eb249c2cfe5fd
})