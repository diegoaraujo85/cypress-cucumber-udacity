class BasePage{
  static loadHomePage(){
    cy.visit('https://devexpress.github.io/testcafe/example/')
  }

  static wait(number){
    cy.wait(number)
  }
}
class Homepage extends BasePage{
  static scrollToBottom(){
    cy.get('#submit-button').scrollIntoView()
  }
  static scrollToTop(){
    cy.get('header').scrollIntoView()
  }
}

describe('Abstract with Classes', () => {
  it('should scroll down and up on the page', () => {
    Homepage.loadHomePage()
    Homepage.scrollToBottom()
    Homepage.wait(5000)
    Homepage.scrollToTop()
    Homepage.wait(3000)
  });
});
