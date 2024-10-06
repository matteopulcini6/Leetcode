function inorderTraversal(root: TreeNode | null): number[] {
  let result: number[] = [];
  inOrderTraversal(result, root);
  return result;
};

// 1.0: Visit left subtree.
// 2.0: Visit the current node (root of the subtree).
// 3.0: Visit the right subtree.

function inOrderTraversal(result: number[], node: TreeNode | null): void{
  if(node === null) return;

  // Traverse Left Graph
  inOrderTraversal(result, node.left);
  result.push(node.val);

  // Traverse Right Graph
  inOrderTraversal(result, node.right);
}