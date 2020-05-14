let obj = {
  goodsObj:{'117':1,'101':5},
  addShop({id,num}){
    if(this.goodsObj[id]) {
      this.goodsObj[id]+=num;
    }
    else {
      this.goodsObj[id]=num;
    }
  },
  deleteGoods() {

  }
}
window.test=obj;
export default obj;
