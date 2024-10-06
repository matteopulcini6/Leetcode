function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if(p === null && q === null) return true;
  else if(p === null && q !== null) return false;
  else if(q === null && p !== null) return false;
  else if (p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}