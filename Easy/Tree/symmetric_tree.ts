function isSymmetric(root: TreeNode | null): boolean {
  let left:TreeNode = root.left;
  let right:TreeNode = root.right;

  return isMirror(left, right);
};

function isMirror(left: TreeNode | null, right: TreeNode | null): boolean{
  if(left === null && right === null) return true;
  else if(left === null || right === null) return false;
  else {
      return (left.val == right.val) && isMirror(left.left, right.right) && isMirror(left.right, right.left)
  }
}