class MinStack {
  private arr:number[] = []
  private min = 0;

  push(val: number): void {
      if(this.arr.length === 0) {
          this.arr.unshift(val);
          this.min = this.arr[0];
      } else if (val < this.min){
          this.arr.unshift(val*2 - this.min);
          this.min = val;
      } else {
          this.arr.unshift(val);
      }
  }

  pop(): void {
      if(this.arr.length !== 0){
          let topElement = this.arr.shift();
          if(topElement < this.min){
              this.min = this.min*2 - topElement
          }
      }
  }

  // if popped value is less than min, we have a transformed value
  top(): number {
      if(this.arr[0]! < this.min) return this.min
      else {
           return this.arr[0];
      }
     
  }

  getMin(): number {
      return this.min;
  }
}

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/