function isPalindrome(s: string): boolean {
  let p = 0;
  let newString = s.replace(/[^A-Za-z0-9]/g, '');
  let q = newString.length - 1;
  
  while(p < q){
      if(newString[p].toLowerCase() !== newString[q].toLowerCase()) return false;
      p++;
      q--;
  }

  return true;
};