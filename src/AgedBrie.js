const agedBrie ={} 
Object.assign(agedBrie, item)

agedBrie.updateQuality = () => {
    if(this._quality <= 0) {
      throw new Error('Cannot go below minimum quality')
    } else if (this._quality > 50) {
      throw new Error('Cannot exceed maximum quality')
    } 
    this.quality += 1
    this._sellIn -= 1
  }

