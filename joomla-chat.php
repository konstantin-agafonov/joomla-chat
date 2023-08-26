<?php

defined('_JEXEC') or die('Restricted Access');

use Joomla\CMS\Factory;

$document = Factory::getDocument();

$options = array("version" => "auto");
$attributes = array("defer" => "defer");

$document->addScript(JURI::root()       . "modules/joomla-chat/app/build/static/js/main.371e4360.js", $options, $attributes);
$document->addStyleSheet(JURI::root()   . "modules/joomla-chat/app/build/static/css/main.960f9393.css", $options);

$document->addScriptOptions('my_vars', [ 'id' => "css-js-demo-id2" ] );

JText::script('JLIB_HTML_EDIT_MENU_ITEM_ID');

echo '<div id="root"></div>';
