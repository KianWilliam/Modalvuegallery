/**/


window.onload = function(){
Vue.component('modal', {
  template: '#modal-template'
})
var tablegallery = new Vue({

	el:'.gallerycontent',
	data:{
	
		//leas:[{src:'0.jpg', text:'Borgs lost!', num:0},{src:'1.jpg', text:'Mon Amour Lea Seydoux', num:1},{src:'2.jpg', text:'Spit Fire!', num:2},{src:'3.jpg', text:'Andrea Riseborough', num:3},{src:'4.jpg', text:'Pour Toujour Lea!', num:4},{src:'5.jpg', text:'King Kian William , rapist to the borgs! enjoying your bloody anuses!!!', num:5}],
		//width:'100px',
		//height:'100px',
		 //showModal: false,
		 //Src:'',
		 //headerimg:'',
		 //index:0,
		 //modalimgwidth:'170px',
		 //modalimgheight:'370px'

	
	},

	methods:{
	
		showInModal:function(num)
		{
		//console.log(num);
		this.index = num;
			this.showModal = 1;
			this.Src = this.leas[num].src;
			this.headerimg = this.leas[num].text;
		},
		next:function()
		{
		  if(this.index<this.leas.length-1)
		     this.index++;
		  else
			this.index=0;
	
			//console.log(this.index);
			this.Src = this.leas[this.index].src;
			this.headerimg = this.leas[this.index].text;
		},
		previous:function()
		{
		
			if(this.index>0)
		     this.index--;
		  else
			this.index=this.leas.length-1;
			
			this.Src = this.leas[this.index].src;
			this.headerimg = this.leas[this.index].text;
		}
	
	}

})



}