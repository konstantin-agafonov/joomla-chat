alert('вжух!');

window.addEventListener('load',()=>{
    const params = Joomla.getOptions('my_vars');
    console.log(params);
    console.log("JS language constant: " + Joomla.JText._('JLIB_HTML_EDIT_MENU_ITEM_ID'));

    var message = Joomla.JText._('JLIB_HTML_EDIT_MENU_ITEM_ID');
    message = message.replace("%s", params.id);
    document.getElementById(params.id).addEventListener("click", function() {alert(message);});
});
