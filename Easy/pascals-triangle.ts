function generate(numRows: number): number[][] {
  let result: number[][] = [];

  if(numRows === 0) return [];
  else if(numRows === 1){return [[1]];}
  
  result.push([1], [1,1]);
  
  if(numRows === 2){ return result;}

  for(let i = 2; i < numRows; i++){
      let currentArray:number[] = [1];
      let last_array = result[i - 1];

      for(let j = 0; j < i - 1; j++){
          currentArray.push(last_array[j] + last_array[j+1])
      }
      currentArray.push(1);
      result.push(currentArray);
  }

  return result;
};