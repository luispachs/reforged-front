import type { forEach } from "node_modules/cypress/types/lodash";

describe('template spec', () => {
  it('Login users pass', function() {
      cy.fixture("users").then(users=>{
          users.users.forEach((u:any)=>{
              cy.visit('/');
              cy.get('[data-cy="username-login"]').type(u.username);
              cy.get('[data-cy="password-login"').type(u.password);
              cy.get('[data-cy="submit-login').click();
              if(u.pass){
                  cy.get('[data-cy="fullname"]')
              }else{
                  cy.get('[data-cy="login-error"]')
              }
          })
      })
  })
})