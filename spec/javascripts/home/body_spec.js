describe("Body Control", function() {

  beforeEach(function() {
    loadFixtures('index.html')
    var body = new Body('body');
  });

  describe(".loadPanel(id)", function() {

    beforeEach(function() {
      spyOn(body, 'activatePanel');
      spyOn(body, 'panel');
      body.loadPanel('webography');
    })

    it("pulls panels based on an id", function() {
      expect(body.panel).toHaveBeenCalledWith('webography');
    });

    it("acvtivates the right panel", function() {
      expect(body.activatePanel).toHaveBeenCalled();
    });

  });

  describe(".activatePanel(activePanel)", function() {

    beforeEach(function() {
      yes_selector = '.webography';
      ap = $(yes_selector);
      body.activatePanel(ap);
    });

    it("to fade in choosen panel", function() {
      yes = $(yes_selector);
      expect(yes).toExist();
      expect(yes).toBeVisible();
    });

    it("hides the other panels", function() {
      no = $('.brief_history');
      expect(no).toExist();
      expect(no).not.toBeVisible();
    });

  });

});