var vm = new Vue({
	el: "#app",
	data: {
	  editing: false,
	  cupTypes: ['small','medium','large','mock'],
	  coffees: [
		{name: "job",
		 money: 80,achivement: 0,compatible: 0,feeling: 0,type: "small"},
		{name: "love",
		money: 40,achivement: 0,compatible: 40,feeling: 0,type: "mock"},
		{name: "relationship",
		money: 40,achivement: 20,compatible: 0,feeling: 50,type:"large"},
		{name: "ego",
		money: 30,achivement: 30,compatible: 0,feeling: 30,type:"medium"}
	  ],
	  favoriteType: ""
	}
	// el: "#app",
	// data:{
	// 	cupTypes:[
	// 		"small","medium","big","mock"
	// 	],
	// 	lifes:[
	// 		{name: "job",money: 50,achivement: 20,coworker:30,job: 0},
	// 		{name: "love",compat: 50,money: 20,background:30,appearance: 20},
	// 		{name: "relationship",comfortable: 50,funny: 20,profitable 30,compat: 20},
	// 		{name: "ego",achievement: 50,humor: 20,concept 30,goal: 20}],
	// 	chooseType: "relationship",
	// 	editing: true
	// }
})