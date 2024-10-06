function generate(numRows: number): number[][] {
  let result: number[][] = [];
  let base_1 = [1];
  let base_2 = [1,1];

  if(numRows === 0) return [];
  else if(numRows === 1){return [base_1];}
  
  result.push(base_1, base_2);
  
  if(numRows === 2){ return result;}

  let last_array = base_2;
  for(let i = 2; i < numRows; i++){
      let currentArray:number[] = [1];

      for(let j = 0; j < i - 1; j++){
          currentArray.push(last_array[j] + last_array[j+1])
      }
      currentArray.push(1);
      result.push(currentArray);

      last_array = currentArray;
  }

  return result;
};