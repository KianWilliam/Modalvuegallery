/*
* @package component borggique for Joomla! 3.x
 * @version $Id: com_borggique 1.0.0 2017-4-10 23:26:33Z $
 * @author Kian William Nowrouzian
 * @copyright (C) 2016- Kian William Nowrouzian
 * @license GNU/GPLv3 http://www.gnu.org/licenses/gpl-3.0.html
 
 This file is part of borggique.
    borggique is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    borggique is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
    You should have received a copy of the GNU General Public License
    along with borggique.  If not, see <http://www.gnu.org/licenses/>. 
*/

	  var counter = 1;
      var pid ;
function jInsertEditorText(text, editor) 
{
	/*var ne = document.createElement("SPAN");			
			ne.setAttribute("id", "newEl");
				ne.innerHTML=text;
			document.body.appendChild(ne);
		var valeur = document.getElementById('newEl').children[0].getAttribute('src');
							jQuery(editor).val(valeur);
		  jQuery.fn.modalupload.addthumbnail(valeur, editor)*/					  

			var fid;
				 fid = pid.substring(14);
				
				if(fid==counter)
				{
			var ne = document.createElement("SPAN");
			
			ne.setAttribute("id", "newEl");
			counter-=1;


			ne.innerHTML=text;
			document.body.appendChild(ne);
		   if(document.getElementById('newEl').children[0]!=="img")	
		   {
			   window.location.reload();
		   }
	     
		  var valeur = document.getElementById('newEl').children[0].getAttribute('src');
		
		   window.parent.jQuery('#myimgth'+counter).attr('src', JURI+valeur);
		   window.parent.jQuery('#myslideimgname'+counter).val(valeur);
           counter++;
			}
			else
			{
				var ne = document.createElement("SPAN");			
			    ne.setAttribute("id", "newEl");
				ne.innerHTML=text;
     			document.body.appendChild(ne);
				
          if(document.getElementById('newEl').children[0]!=="img")	
		   {
			   window.location.reload();
		   }
		   
				var valeur = document.getElementById('newEl').children[0].getAttribute('src');

				
		        window.parent.jQuery('#myimgth'+fid).attr('src', JURI+valeur);
		        window.parent.jQuery('#myslideimgname'+fid).val(valeur);
			}
			
			
			
		Joomla.submitbutton('module.apply');



}


function jModalClose(){
	// window.parent.jQuery('.modal.in').modal('hide');
   window.parent.jQuery('.modal.in').modal('toggle');
}
(function($)
{
      var config={};
      var imgthumb;
      var imgname;
	  var global = {selected:'', selector:''};
	  var init = $.prototype.init;
	  
		$.prototype.init = function (selector, context)
	    {
		   var r = init.apply(this, arguments);
		   if(selector && selector.selector)
		   {
			r.context = selector.context;
			r.selector = selector.selector;
		   }
		   if(typeof selector == 'string')
		   {
			r.context = context || document,r.selector = selector,global.selector = r.selector;
		   }
		   global.selected = r;

		   return r;
	   }
	   	$.prototype.init.prototype = $.prototype;
		
		$.fn.modalupload = {
			
			addslide:function(imgname, imgthumb, imgtext){	

					$('<li class="myslide" id="myslide'+counter+'"></li>').appendTo('#myslideslist');
					$('<div class="myslidehandle"><div class="myslidenumber">Slide Number: ' + counter + '</div></div>').appendTo('#myslide'+counter);
					$('<div class="del"><input name="myslidedelete' + counter + '" type="button" id="myslidedelete'+counter+'" onclick="jQuery.fn.modalupload.removeslide(jQuery(this).parent().parent())" class="myslidedelete"  value="' + Joomla.JText._('MOD_SPARTA_REMOVE', 'RemoveSlide') + '" /></div>').appendTo('#myslide'+counter);
					$('<div class="sliderow"><div class="imgthumb"><img src="' + imgthumb + '" id="myimgth'+counter+'" class="myimgth" width="64" height="64"/></div>').appendTo('#myslide'+counter);
					$('<input name="myslideimgname" id="myslideimgname' + counter + '" class="myslideimgname hasTip" title="Image::This is the main image for the slide, it will also be used to create the thumbnail" type="text" value="'+imgname+'"  />').appendTo('#myslide'+counter);
					$('<a class="btn"  data-toggle="modal" href="#mymodal" onclick="pid = jQuery(this).prev().attr(\'id\');">' + Joomla.JText._('MOD_SLIDESHOWCK_SELECTIMAGE', 'select image') + '</a>').appendTo('#myslide'+counter);
					$('<div class="explanation"><textarea name="myslidetext' + counter + '"  class="myslidetext">'+imgtext+'</textarea></div>').appendTo('#myslide'+counter);
					$.fn.modalupload.storeslide();
                    counter++;	
			},
			storeslide:function()
			{
				var slides = new Array();
				for(var i=0; i<$('.myslide').length; i++)
				{
					slide = new Object();
		           slide['imgname'] = $('.myslide').eq(i).find('.myslideimgname').val()
		           slide['imgthumb'] = $('.myslide').eq(i).find('.myimgth').attr('src');
		           slide['imgtext']=$('.myslide').eq(i).find('.myslidetext').val();		
		           slides[i] = slide;
				}
				slides = JSON.stringify(slides);
	            slides = slides.replace(/"/g, "|qq|");
				$('#myslides').val(slides);
			},
		
			removeslide:function(slide)
			{
				if (confirm(Joomla.JText._('MOD_SLIDESHOWCK_REMOVE', 'Remove this slide') + ' ?'))
				{
		                   slide.remove();
		                   counter--;
				           $.fn.modalupload.storeslide();
	            }
			},
			callslides:function()
			{
				var slides = JSON.parse($('#myslides').val().replace(/\|qq\|/g, "\""));
	             if (slides) {
		               for(var i=0; i<slides.length; i++)
					   {
                          $.fn.modalupload.addslide(slides[i].imgname, slides[i].imgthumb, slides[i].imgtext);
					   }
                     }
			},
			setConfig:function(conf)
			{
				config = conf;
			}
			
		}
		
		
		$(window).load(function () {
				

    	$.fn.modalupload.callslides();
		 $('<script></script>')
    .attr('type', 'text/javascript')
    .text("Joomla.submitbutton = function(task){"
			+ "jQuery(document).ready(function(){jQuery.fn.modalupload.storeslide();});"
			+ "if (task == 'module.cancel' || document.formvalidator.isValid(document.getElementById('module-form'))) {	Joomla.submitform(task, document.getElementById('module-form'));"
			+ "if (self != top) {"
			+ "window.top.setTimeout('window.parent.SqueezeBox.close()', 1000);"
			+ "}"
			+ "} else {"
			+ "alert('Formulaire invalide');"
			+ "}}")
    .appendTo('body');
    
      });
	  
	
		
}(jQuery))
 


