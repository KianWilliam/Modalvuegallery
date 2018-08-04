/*
 @package Module Sparta for Joomla! 3.x
  @version $Id: mod_sparta 1.0.0 2015-07-25 23:26:33Z $
  @author Kian William Nowrouzian
  @copyright (C) 2015- Kian William Nowrouzian
  @license GNU/GPLv3 http://www.gnu.org/licenses/gpl-3.0.html 
     This file is part of sparta.
    sparta is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    sparta is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
    You should have received a copy of the GNU General Public License
    along with sparta.  If not, see <http://www.gnu.org/licenses/>.
*/
(function($){

$.fn.sparta = function(options)
{
	
	
	var $container, $options;
	$container = $(this);
	$options = $.extend($.fn.sparta.defaults, options);	
	   var newobj = new Falange($container, $options);
	    newobj.circulation();
	
	
}

function Falange($container, $options)
{
	var myobj = this;
	var w, h;
	var outerLeft, outerTop;
	w =  parseInt($options.width)*2 + 15;
	h =  parseInt($options.height)*2 + 15;
	$container.css({position:'relative', marginLeft:'auto', marginRight:'auto', backgroundColor:$options.color, width:w+'px', height:h+'px', padding:'5px', boxSizing:'border-box',mozBoxSizing:'border-box',webkitBoxSizing:'border-box'});
	var arrayLs, arrayTs;	
	var l = 5;
	var t = 5;
	var nums = $options.images.length;
	var amount = parseInt(nums/4);
	var index1, index2, index3, index4;
	index1 = 1;
	index2 = amount+1;
	index3 = amount * 2+1;
	index4 = amount * 3+1;
	var subleft = parseInt($options.width) + 10;
	var subtop = parseInt($options.width) + 10;
	var ls = [5, subleft, 5, subleft];
	var ts = [5, 5, subtop, subtop];
	
	var interval;
	
	for(var i=0; i<4; i++)
	{
		$('<div id="k'+i+'"></div>').css({position:'absolute', left:ls[i]+'px', top:ts[i]+'px', width:$options.width+'px', height:$options.height+'px', overflow:'hidden'}).appendTo($container);
	}
		
	var counter = 0;
	var counterb = 0;
	var alllefts = [0, 0, 0, parseInt($options.width), 0,-parseInt($options.width) , 0, 0];
	var alltops = [0,-parseInt($options.height), 0, 0,0, 0,0, parseInt($options.height)];
	for(i=0; i<4; i++, counter+=amount-1, counterb++)
	{
		$('<div></div>').css({position:'absolute', left:alllefts[counterb], top:alltops[counterb], border:'1px solid blue;', width:$options.width+'px', height:$options.height+'px'}).appendTo($container.children('div').eq(i)).append('<img src="'+$options.images[counter]+'" width="'+$options.width+'px" height="'+$options.height+'px">');
		counter++;
		counterb++;
		$('<div></div>').css({position:'absolute', left:alllefts[counterb], top:alltops[counterb], border:'1px solid blue;', width:$options.width+'px', height:$options.height+'px'}).appendTo($container.children('div').eq(i)).append('<img src="'+$options.images[counter]+'" width="'+$options.width+'px" height="'+$options.height+'px">');
	}
	var p=0;
	for(i=0; i<4; i++)
	{
		for(var k=0; k<1; k++)
		{			
			
			$container.children('div').eq(i).children('div').eq(k).children('img').attr('title', $options.descs[p++]);
			
		}
		p+=parseInt($options.images.length)/4-1;
	}
	
	
	this.circulation = function()
	{
		
			for(var i=0; i<2; i++)
			{
				$container.children('div').eq(0).children('div').eq(i).stop(true, true).animate({top:"+="+parseInt($options.height)},parseInt($options.speed), function(){
				
					
					if(parseInt($(this).css('top'))==parseInt($options.height))
					{
						
					
						
					    if(index1<(amount-1))
						   index1++;
					    else
						   index1 = 0;
					
					
						$(this).css('top', -parseInt($options.height)+'px');
						$(this).children('img').attr('src', $options.images[index1]);
						$(this).children('img').attr('title', $options.descs[index1]);
						
					   for(var k=0; k<2; k++)
					   {
					   
						$container.children('div').eq(1).children('div').eq(k).stop(true, true).animate({left:"-="+parseInt($options.width)},parseInt($options.speed), function(){
						
							
								
								
							if(parseInt($(this).css('left'))==-parseInt($options.width))
							{
							
								if(index2<(2*amount-1))
								index2++
							    else
								index2 = amount;
							
								$(this).css('left', parseInt($options.width)+'px');
								$(this).children('img').attr('src', $options.images[index2]);
								$(this).children('img').attr('title', $options.descs[index2]);
								
								for(var l=0; l<2; l++)
								{
								
									$container.children('div').eq(3).children('div').eq(l).stop(true, true).animate({top:'-='+parseInt($options.height)},parseInt($options.speed), function(){
									
									
										if(parseInt($(this).css('top'))==-parseInt($options.height))
										{
											if(index4<4*amount-1)
												index4++;
											else
												index4 = amount*3;
												
												$(this).css('top', parseInt($options.height)+'px');
												$(this).children('img').attr('src', $options.images[index4]);
												$(this).children('img').attr('title', $options.descs[index4]);
												for(var s=0; s<2; s++)
												{
												
													$container.children('div').eq(2).children('div').eq(s).stop(true, true).animate({left:'+='+parseInt($options.width)},parseInt($options.speed), function(){
													
														if(parseInt($(this).css('left'))==parseInt($options.width))
														{
															if(index3<3*amount-1)
																index3++;
															else
																index3 = amount*2;
														
														$(this).css('left', -parseInt($options.width)+'px');
														$(this).children('img').attr('src', $options.images[index3]);
														$(this).children('img').attr('title', $options.descs[index3]);
														  myobj.outercirculation();
														}
													});
												
												}
										}
									
									})
								
								}
								
								
								
							}
						
						});
					  }
						
						
						
						
					}
					
					
				
				})
			}
	
	
	}
	
	
	this.outercirculation = function()
	{	
	
		for(var i=0; i<4; i++)
		{
			
			  if(parseInt($container.children('div').eq(i).css('left'))==l && parseInt($container.children('div').eq(i).css('top'))==t )
			  {
				outerLeft = l+l+parseInt($options.width);
				outerTop = t;
			  }
			  else
				if(parseInt($container.children('div').eq(i).css('left'))== (l+l+parseInt($options.width)) && parseInt($container.children('div').eq(i).css('top'))==t )
				{
					outerLeft = l+l+parseInt($options.width);
				    outerTop = t+t+parseInt($options.height);
				}
				else
				if(parseInt($container.children('div').eq(i).css('left'))==(l+l+parseInt($options.width)) && parseInt($container.children('div').eq(i).css('top'))==(t+t+parseInt($options.height)) )
				{
					outerLeft = l;
				    outerTop = t+t+parseInt($options.height);
				}
				else
				if(parseInt($container.children('div').eq(i).css('left'))==l && parseInt($container.children('div').eq(i).css('top'))==(t+t+parseInt($options.height)) )
				{
					outerLeft = l;
				    outerTop = t;
				}
			
			
				
				$container.children('div').eq(i).stop(true, true).animate({left:outerLeft, top:outerTop}, parseInt($options.speed), function(){
					if($(this).attr('id')=='k3')
					{
						
						myobj.circulation();
					}
				})
				
		}
	
	}
	
	
	
	
		
}



}(jQuery));