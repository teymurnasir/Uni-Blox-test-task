describe('General UI checking', () => {

  beforeEach(() => {
    cy.visit('https://d3j8nuwp74eyml.cloudfront.net/5U5PU/S2xbn');
  });

  it('checks the website title', () => {
    cy.title().should('eq', 'Home');
  });

  it('checks if the website does not have a favicon', () => {
    cy.get('link[rel="icon"]').should('not.exist');
  });

  it('checks if the first image exist on the website', () => {
    cy.get('div.h-screen.flex.flex-col.bg-white').find('img').first().should('exist');
  });

  it('checks if the image "Header Logo" exist on the website', () => {
    cy.get('img[alt="Header Logo"]').should('exist');
  });

  it('checks if the "Welcome!" text exist on the website', () => {
    cy.get('h1').contains('Welcome!').should('be.visible');
  });

  it('checks if the "Need help?" button exist on the website and opens email client', () => {
    cy.get('button').contains('Need help?').should('exist');
    cy.get('button').contains('Need help?').parents('a').should('have.attr', 'href', 'mailto:support@uniblox.co'); 
  });

});