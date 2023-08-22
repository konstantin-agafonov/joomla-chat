<?php

defined('_JEXEC') or die('Restricted Access');

use Joomla\CMS\Factory;

$document = Factory::getDocument();

$options = array("version" => "auto");
$attributes = array("defer" => "defer");

$document->addScript(JURI::root() . "modules/joomla-chat/app/jchat.js", $options, $attributes);
$document->addStyleSheet(JURI::root() . "modules/joomla-chat/app/jchat.css", $options);

$document->addScriptOptions('my_vars', array('id' => "css-js-demo-id2"));

JText::script('JLIB_HTML_EDIT_MENU_ITEM_ID');

echo '<h1 id="css-js-demo-id1">Hello World!</h3>';
echo '<button id="css-js-demo-id2">Click here!</button>';
