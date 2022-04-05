function List() {
	this.head = null;
}

List.prototype.addValue = function(n) {
	var n = new Node(n);
	if (this.head == null) {
		this.head = n
	} 
	else if (n.data.time < this.head.data.time) {
		n.next = this.head
		this.head = n
	}
	else if (this.head.next == null) {
			this.head.next = n
	}
	else {
		let current_node = this.head.next
		let previous_node = this.head
		while (current_node) {
			if (n.data.time < current_node.data.time) {
				n.next = current_node
				previous_node.next = n
				return
			} 
			else if (current_node.next == null) {
				current_node.next = n
				return
			} 
			else {
				previous_node = current_node
				current_node = current_node.next
			}
		}
	}
}