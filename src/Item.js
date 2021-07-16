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
    this._checkAttributes()
    if (this._sellIn <= 0) {
      this._quality -= 2
    } else {
      this._quality -= 1
    }
    this._sellIn -= 1
  },

  _checkAttributes() {
    if(this._quality <= 0) {
      throw new Error('Cannot go below minimum quality')
    } else if (this._quality > 50) {
      throw new Error('Cannot exceed maximum quality')
    }
  }
}