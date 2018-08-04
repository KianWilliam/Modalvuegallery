<?php 

/**
 * @package modalvuegallery for Joomla! 3.x
 * @version $Id: mod_modalvuegallery 1.0.0 2018-06-29 23:26:33Z $
 * @author Kian William Nowrouzian
 * @copyright (C) 2018- Kian William Nowrouzian
 * @license GNU/GPLv3 http://www.gnu.org/licenses/gpl-3.0.html
 
 This file is part of modalvuegallery.
    modalvuegallery is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    modalvuegallery is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
    You should have received a copy of the GNU General Public License
    along with modalvuegallery.  If not, see <http://www.gnu.org/licenses/>.
 
**/


?>
<?php 
defined('_JEXEC') or die('Restricted Access'); 
$document = JFactory::getDocument();
$document->addStyleSheet(JURI::base()."modules/mod_modalvuegallery/css/mystyles.css");
if($params->get('lib')==1)
{
  $document->addScript(JURI::base()."modules/mod_modalvuegallery/js/vue.js");
}

$contentb="



window.onload = function(){
Vue.component('modal', {
  template: '#modal-template'
})
var tablegallery = new Vue({

	el:'.gallerycontent.".trim($moduleclass_sfx)."',
	data:{
	
		leas:[],
		width:'',
		height:'',
		 showModal: false,
		 Src:'',
		 headerimg:'',
		 index:0,
		 modalimgwidth:'',
		 modalimgheight:'',
		 mystyle:'cursor:hand'
		 

	
	},

	methods:{
	
		showInModal:function(num)
		{
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

});

	tablegallery.leas = [];

     var len = '".$nums."';	
	 var myimages = ".json_encode($images).";
	 var mytexts = ".json_encode($texts).";
	 for(var i=0; i<len; i++)
	 {
		 tablegallery.leas[i]={};
		 tablegallery.leas[i].src=myimages[i];
		 tablegallery.leas[i].text=mytexts[i];
		 tablegallery.leas[i].num=i;
	 }
	 		 tablegallery.width='".$imgw."px';
			 tablegallery.height='".$imgh."px';
			 tablegallery.Src='';
 	 		 tablegallery.modalimgwidth='".$modalimgw."px';
  	 		 tablegallery.modalimgheight='".$modalimgh."px';
			 tablegallery.index=0;
			 tablegallery.headimage='';
  	 		 tablegallery.showmodal=false;



}

";
$document->addScriptDeclaration($contentb);


 $superstyle = "
.gallerycontent img.thumbs
{
	width:".$imgw."px;
	height:".$imgh."px;
	cursor:crosshair;
	
	
}
.gallerycontent img#modalimg
{
	width:".$modalimgw."px;
	height:".$modalimgh."px;
	cursor:crosshair;
	
	
	
}
";
$document->addStyleDeclaration($superstyle);

?>


<script type="text/x-template" id="modal-template">
  <transition name="modal">
    <div class="modal-mask" >
      <div class="modal-wrapper">
        <div class="modal-container" style="width:<?php echo $modalcontainerw; ?>px;background-color:<?php echo $modalbakcol ?>;border:<?php echo $modalbordersize; ?>px solid  <?php echo $modalbordercol; ?>;border-radius:<?php echo $modalborderradius; ?>%;">

          <div class="modal-header" style="text-align:left;">
            <slot name="header">
              default header
            </slot>
          </div>

          <div class="modal-body">
		  

		  
            <slot name="body">
			
			Lea Seydoux mon amour pour toujour!!!
			
            </slot>
			
          </div>

          <div class="modal-footer" style="background-color:transparent;">
		  
            <slot name="footer">
              
              <button class="modal-default-button" style="margin-top:-10px;background-image:none;background-color:<?php echo $modalbuttsbakcol; ?>;color:<?=$modalbuttstxtcol; ?>;" @click="$emit('close')">
                Close 
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</script>
<div class="gallerycontent<?php echo $moduleclass_sfx; ?>" style="width:<?php echo $containerw;?>px;margin-left:auto;margin-right:auto;text-align:center;background-color:<?php echo $containerbakcol;?>">




<img class="thumbs" v-for="lea in leas"  v-bind:src="lea.src" v-bind:width="width" v-bind:height="height" v-bind:title="lea.text" v-bind:style="mystyle" @click="showInModal(lea.num)" >


<div>
  <modal v-if="showModal" @close="showModal = false">

    <h3 slot="header" style="padding-bottom:5px;color:<?php echo $modaltxtcol; ?>;font-size:<?php echo $modalfontsize?>em;font-family:<?php echo $modalfontfamily; ?>; font-weight:<?php $moddalfontweight;?>; font-style:<?php echo $modalfontstyle; ?>">{{headerimg}}	<div style="font-size:0.5em;">Image No.{{index+1}} of {{leas.length}}</div></h3>
	<img  id="modalimg" slot="body" v-bind:src="Src"  v-bind:width="modalimgwidth" v-bind:height="modalimgheight" style="border:<?php echo $modalimgbordersize; ?>px solid <?php echo $modalimgbordercol; ?>;border-radius:<?php echo $modalimgborderradius?>%;" />

	<button  slot="header" style="margin-top:-10px;background-image:none;background-color:<?php echo $modalbuttsbakcol; ?>;color:<?php echo $modalbuttstxtcol; ?>;" @click="previous">Previous</button>
		<button class="modal-default-button next" slot="header" style="margin-top:-10px;background-image:none;background-color:<?php echo $modalbuttsbakcol; ?>;color:<?php echo $modalbuttstxtcol; ?>;" @click="next">Next</button>

  </modal>
</div>
</div>




