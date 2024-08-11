describe('citi_test', () => {
  context('site open desctop', () =>{
      beforeEach(() => {
          cy.viewport(1920, 1080)
          cy.visit('https://citilink.ru')
      })

      it('check-search', () => {
          cy.wait(15000)
          cy.get('#app')
      })  
  })
  
})