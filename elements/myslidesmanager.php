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

defined('_JEXEC') or die('Restricted access');

jimport('joomla.html.html');
jimport('joomla.form.formfield');

class JFormFieldMyslidesmanager extends JFormField {
	
	protected $type = 'myslidesmanager';
	
	protected function getInput() {
		
		$document = JFactory::getDocument();
		$editor = JFactory::getEditor();
		$document->addScriptDeclaration("JURI='" . JURI::root() . "'");
		$path = 'modules/mod_modalvuegallery/elements/myslides/';
		JHTML::_('bootstrap.framework');
		JHTML::_('stylesheet', $path . 'slides.css');
		$document->addScript(JURI::root().'modules/mod_modalvuegallery/elements/myslides/slidejquery.js');

		$interface = "
		
		jQuery(document).ready(function(){
			
				

					jQuery('.myslideimgname').change(function(){

			});
				
				

			jQuery('.addslide').click(function(){
				jQuery.fn.modalupload.addslide();
			});
		});
			
		";
		
		$document->addScriptDeclaration($interface);

		$html = '<input name="' . $this->name . '" id="myslides" type="hidden" value="' . $this->value . '" />'
				. '<input name="addslide" id="addslide1" class="addslide" type="button" value="' . JText::_('MOD_MODALVUEGALLERY_ADDSLIDE') . '"   />'
				. '<ul id="myslideslist" style="clear:both;"></ul>'
				. '<input name="addslide" id="addslide2" class="addslide" type="button" value="' . JText::_('MOD_MODALVUEGALLERY_ADDSLIDE') . '"   />';
				
				
               $params = array();
               $params['title']  = "Select image:";
               $params['url']    = JURI::Base()."index.php?option=com_media&view=images&tmpl=component&e_name=myslideimgname";
               $params['height'] = 400;
               $params['width']  = "50%";
			   $params['animation']=true;
               $html .= JHtml::_('bootstrap.renderModal', 'mymodal', $params);

		return $html;
		
		
	}
	
	
	
	protected function getLabel() {

		parent::getLabel();
	}

	
	
}



 