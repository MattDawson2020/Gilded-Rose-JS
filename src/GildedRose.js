class GildedRose {
  constructor(items) {
    this.items = items
  }

  updateQuality = () => {
    this.items.forEach(item => item.updateQuality())
  }
}