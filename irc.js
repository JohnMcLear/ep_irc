const eejs = require('ep_etherpad-lite/node/eejs/');
const settings = require('ep_etherpad-lite/node/utils/Settings');
const checked_state = '';

exports.eejsBlock_mySettings = function (hook_name, args, cb) {
  let checked_state = 'checked';
  if (settings.ep_irc) {
    if (settings.ep_irc.disable_by_default === true) {
      checked_state = 'unchecked';
    } else {
      checked_state = 'checked';
    }
  }
  args.content += eejs.require('ep_irc/templates/irc_entry.ejs', {checked: checked_state});
  return cb();
};

/*
exports.eejsBlock_styles = function (hook_name, args, cb)
{
  args.content = args.content + '<link href="../static/plugins/ep_irc/static/css/irc.css" rel="stylesheet">';
}
*/

exports.eejsBlock_scripts = function (hook_name, args, cb) {
  args.content = `<script src="http://simplewebirc.com/latest.js"></script><script src="../static/plugins/ep_irc/static/js/irc.js"></script>${args.content}`;
};
