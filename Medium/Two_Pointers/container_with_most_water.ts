function maxArea(height: number[]): number {
  let l = 0;
  let r = height.length - 1;
  let area = 0;
  
  while(l !== r){
      let h = Math.min(height[l], height[r]);
      let width = r-l;
       if(h*width > area){
          area = h*width;
       }

      if(height[l] < height[r]){
          l++;
      } else {
          r--;
      }
  }

  return area;
};