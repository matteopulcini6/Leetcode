function isValid(s: string): boolean {
  const stack: string[] = [];
  const matchingBrackets: {[key:string]:string} = {
      ')':'(',
      '}':'{',
      ']':'[',
  };
  
  for(let i = 0; i < s.length; i++){
      let str = s[i];
      if(str === '(' || str === '{' || str === '['){
          stack.push(s[i]);
      } else if (str === ')' || str === '}' || str === ']'){
          if(stack.length === 0 || stack.pop() !== matchingBrackets[str]) return false;
      }
      
  }

  return stack.length === 0;
};