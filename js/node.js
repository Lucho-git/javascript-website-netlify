var list;
let width = 600;
let height = 400;

function setup() {
	createCanvas(width,height);
	background(51);

	list = new List();


	week_ar = [[40,0,3], [40,1,4], [40,2,1], [-150,3,2], [40,4,5], [40,6,2]];
	largest_val = 0;
	largest_time = 0;
	total_val = 0;

	for (i in week_ar) {
		list.addValue(week_ar[i]);

		if (week_ar[i][1]+week_ar[i][2] > largest_time) {largest_time = week_ar[i][1]+week_ar[i][2]}
		if (week_ar[i][0] < 0) {
			temp = week_ar[i][0] *-1;
		} else { temp = week_ar[i][0]}
		if (temp > largest_val) {largest_val = temp}

		total_val += week_ar[i][0];
	}


	console.log(total_val)
	console.log(list)



	node = list.head;
	size = new Size_Data(largest_time,largest_val);
	node.addCoords(size);
	while(node.next) {
		node = node.next;
		node.addCoords(size);
		console.log(node.coords)
	}


	node = list.head;
	drawNode(node);

	while(node.next) {
		node = node.next;
		drawNode(node);
	}

}



Node.prototype.addCoords = function(size_data) {
	this.coords = new R_Coords(this.data, size_data);
}


function Node(data){
	this.data = new Data(data);
	this.coords = null
	this.next = null;
}


function Data(data) {
	this.value = data[0];
	this.time = data[1];
	this.duration = data[2];
}


function Size_Data(max_time, max_value) {
	this.max_time = max_time;
	this.max_value = max_value;
}


function Coords(data) {
	time_multiplier = 15
	value_multiplier = 15


	x = height/2
	y = width/16


	this.lineY = y+data.time*time_multiplier;
	this.lineX = x;
	this.valY = y+(data.time+data.duration)*time_multiplier;
	this.valX = x-data.value*value_multiplier;
}	

function R_Coords(data, size_data) {
	x = height/2;
	y = width/16;

	max_length = 14*width/16
	max_height = 4*height/10

	time_multiplier = max_length/size_data.max_time;
	value_multiplier = max_height/size_data.max_value;


	this.lineY = y+data.time*time_multiplier;
	this.lineX = x;
	this.valY = y+(data.time+data.duration)*time_multiplier;
	this.valX = x-data.value*value_multiplier;



}	