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
              while(left < right && nums[left] === nums[left-1]) left++;
          } else {
              right--;    // Move the right pointer to the left to decrease the sum
              while(left < right && nums[right] === nums[right+1]) right--;
          } 
      }
}

return closest;
};