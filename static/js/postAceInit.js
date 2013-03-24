exports.postAceInit = function(hook, context){

  if($('#options-ircchat').is(':checked')) {
    chat.stickToScreen();
    var authorName = pad.getUserName();
    var url= '<iframe src="http://webchat.freenode.net?nick='+authorName+'&channels=etherpad,etherpad-lite-dev&uio=MTE9MjA16a" width="400" height=100% frameBorder=0></iframe>';

    $('#chatbox').html(url);
    $('#editorcontainer').css({"right":"406px", "width":"auto"});
    $('#chatbox').css("cssText", "width:405px !important;display:block;right:0px;top:37px;bottom:0px;padding:0;margin:0;height:auto;border:0;");
  }
}

