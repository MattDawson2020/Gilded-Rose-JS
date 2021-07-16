const item = {
  _name: 'Item',
  _sellIn: 20,
  _quality: 50,

  get quality() {
    return this._quality
  },

  get sellIn() {
    return this._sellIn
  },

  updateQuality() {
    if (this._sellIn <= 0) {
      this._quality -= 2
    } else {
      this._quality -= 1
    }
    this._sellIn -= 1
  }
}