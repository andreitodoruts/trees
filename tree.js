(function main() {
    
    function Node(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
    
    function BST() {
        this.root = null;
        this.node = null;
        this.add = function(value) 
        {
            if(this.root === null) {
                this.root = new Node(value);
                
            } else {
                var node = this.root;
                function searchFreeNode(node){
                    console.log(value);
                    if(value < node.value) {
                        if(node.left === null) {
                            node.left = new Node(value);
                            return;
                        } else if(node.left != null){
                            return searchFreeNode(node.left);
                        }


                    } else if(value > node.value) {
                        if(node.right === null) {
                            node.right = new Node(value);
                            return;
                        } else {
                            return searchFreeNode(node.right);
                        }

                    } else {
                        return null;
                    }
                }
                
                return searchFreeNode(node);
            }
            
        }
        
        this.findMin = function() {
            var node = this.root;
            
            while(node.left != null) {
                node = node.left;
            }
            
            return node.value;
        }
        
        this.findMax = function() {
            var node = this.root;
            
            while(node.right != null) {
                node = node.right;
            }
            
            return node.value;
        }
        
        this.find = function(value) {
            
            var node = this.root;
            var current = this.root; 
            
            while(current.value != null) {
                
                if(value < node.value) {
                    current = current.left;        
                } else if(value > node.value) {
                    current = current.right
                }
                
                if(value == current.value) {
                    return true;
                } else {
                    return false;
                }
                
            }
         
            
            return false;
            
        }
    }
}());