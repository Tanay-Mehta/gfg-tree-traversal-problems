class node{
  constructor(d){
    this.left = null;
    this.right = null;
    this.data = d;
  }
}

function inorder(head){
    if(head === null){
      return;
    }
    else{
      inorder(head.left);
      console.log(head.data);
      inorder(head.right);
    }
}
function preorder(head){
    if(head === null){
      return;
    }
    else{
      console.log(head.data);
      preorder(head.left);
      preorder(head.right);
    }
}
function postorder(head){
    if(head === null){
      return;
    }
    else{
      postorder(head.left);
      postorder(head.right);
      console.log(head.data);
    }
}
let root = new node(1);
root.left = new node(2);
root.right = new node(3);
root.left.left = new node(4);
root.left.right = new node(5);
postorder(root);
