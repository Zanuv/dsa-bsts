class Node {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

class BinarySearchTree {
	constructor(root = null) {
		this.root = root;
	}

	insert(val) {
		const newNode = new Node(val);
		if (!this.root) {
			this.root = newNode;
			return this;
		}
		let current = this.root;
		while (true) {
			if (val < current.val) {
				if (current.left === null) {
					current.left = newNode;
					return this;
				}
				current = current.left;
			} else {
				if (current.right === null) {
					current.right = newNode;
					return this;
				}
				current = current.right;
			}
		}
	}

	insertRecursively(val, currentNode = this.root) {
		if (!this.root) {
			this.root = new Node(val);
			return this;
		}
		if (val < currentNode.val) {
			if (!currentNode.left) {
				currentNode.left = new Node(val);
			} else {
				this.insertRecursively(val, currentNode.left);
			}
		} else {
			if (!currentNode.right) {
				currentNode.right = new Node(val);
			} else {
				this.insertRecursively(val, currentNode.right);
			}
		}
		return this;
	}

	find(val) {
		if (!this.root) return undefined;
		let current = this.root;
		let found = false;
		while (current && !found) {
			if (val < current.val) {
				current = current.left;
			} else if (val > current.val) {
				current = current.right;
			} else {
				found = true;
			}
		}
		if (!found) return undefined;
		return current;
	}

	findRecursively(val, currentNode = this.root) {
		if (!currentNode) return undefined;
		if (val < currentNode.val) {
			return this.findRecursively(val, currentNode.left);
		} else if (val > currentNode.val) {
			return this.findRecursively(val, currentNode.right);
		} else {
			return currentNode;
		}
	}

	dfsPreOrder() {
		let visited = [];
		const traverse = (node) => {
			visited.push(node.val);
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		};
		traverse(this.root);
		return visited;
	}

	dfsInOrder() {
		let visited = [];
		const traverse = (node) => {
			if (node.left) traverse(node.left);
			visited.push(node.val);
			if (node.right) traverse(node.right);
		};
		traverse(this.root);
		return visited;
	}

	dfsPostOrder() {
		let visited = [];
		const traverse = (node) => {
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
			visited.push(node.val);
		};
		traverse(this.root);
		return visited;
	}

	bfs() {
		let node = this.root,
			data = [],
			queue = [];
		queue.push(node);
		while (queue.length) {
			node = queue.shift();
			data.push(node.val);
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
		return data;
	}
}

module.exports = BinarySearchTree;
