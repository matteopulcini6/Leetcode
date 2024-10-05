function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a,b) => a-b);
  let closest = Number.MAX_VALUE;

  for(let i = 0; i < nums.length - 2; i++){
      let left = i + 1;
      let right = nums.length - 1;

      while (left < right) {
          let sum = nums[i] + nums[left] + nums[right];
          if(Math.abs(closest - target) >= Math.abs(sum - target)){closest = sum;}
          
          if(sum < target){
              left++;     // Move the left pointer to the right to increase the sum
          } else if(sum > target) {
              right--;    // Move the right pointer to the left to decrease the sum
          } else {
              left++; 
              right--;
          }
      }
}

return closest;
};