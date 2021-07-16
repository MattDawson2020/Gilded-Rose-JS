describe("Sulfuras", function() {
  let sulfuras

  beforeEach(function() {
    sulfuras = new Sulfuras({
      name: 'Sulfuras Hand of Ragnaros', 
      sellIn: 0, 
      quality: 50
    })
  });

  it("should create an sulfuras", function() {
    expect(sulfuras).not.toBe(null)
  });

  it("should come with set attributes", function() {
    expect(sulfuras.quality).toBe(50)
    expect(sulfuras.sellIn).toBe(0)
  });

  it('attributes do not update', function() {
   let result = sulfuras.updateQuality()
   expect(result).toEqual("Legendary items do not degrade")
  })

});
