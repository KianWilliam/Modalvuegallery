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
if(!defined('DS')){define('DS', DIRECTORY_SEPARATOR);}
require_once(dirname(__FILE__).DS.'helper.php');

$containerw = $params->get('containerw');
$imgw = $params->get('imgw');
$imgh = $params->get('imgh');
$modalimgw = $params->get('modalimgw');
$modalimgh = $params->get('modalimgh');
$modalcontainerw = $params->get('modalcontainerw');
$lib = $params->get('lib');
$containerbakcol= $params->get('containerbakcol');
$modaltxtcol= $params->get('modaltxtcol');
$modalbakcol= $params->get('modalbakcol');
$modalbuttsbakcol= $params->get('modalbuttsbakcol');
$modalbuttstxtcol= $params->get('modalbuttstxtcol');
$modalbordercol= $params->get('modalbordercol');
$modalimgbordercol= $params->get('modalimgbordercol');
$modalimgbordersize= $params->get('modalimgbordersize');
$modalimgborderradius= $params->get('modalimgborderradius');
$modalbordersize= $params->get('modalimgbordersize');
$modalborderradius= $params->get('modalimgborderradius');
$modalfontfamily= $params->get('modalfontfamily');
$modalfontsize= $params->get('modalfontsize');
$modalfontstyle= $params->get('modalfontstyle');
$modalfontweight= $params->get('modalfontweight');
$moduleclass_sfx = $params->get('header_class');

 
 $items = json_decode(str_replace("|qq|", "\"", $params->get('slides')));
 $nums = count($items);
 foreach($items as $i=>$item)
 {	
		$images[] = JURI::base().$item->imgname;	
		$texts[]=$item->imgtext;	
 }

require_once(JModuleHelper::getLayoutPath('mod_modalvuegallery'));
?>