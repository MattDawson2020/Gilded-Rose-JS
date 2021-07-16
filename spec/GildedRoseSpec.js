describe("GildedRose", function() {
  let gildedRose
  let itemSpy

  beforeEach(function() {
    itemSpy = jasmine.createSpyObj("itemSpy", {}, { updateQuality: function() {return 'updating'} })
    gildedRose = new GildedRose([itemSpy])
    spyOn(gildedRose, 'updateQuality')
  });

  it("should update its items", function() {
    gildedRose.updateQuality()
    expect(gildedRose.updateQuality).toHaveBeenCalledTimes(1)
  });

});
