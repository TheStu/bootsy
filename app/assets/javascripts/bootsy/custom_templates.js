window.Bootsy = window.Bootsy || {};

window.Bootsy.imageTemplate = function(locale, options) {
  var size = (options && options.size) ? ' btn-' + options.size : '';

  return  '<li>' +
    '<a class="btn btn-default ' + size + '" data-wysihtml5-command="image" title="' + locale.image.insert + '" tabindex="-1">' +
      '<span class="glyphicon glyphicon-picture"></span>' +
    '</a>' +
  '</li>';
};

window.Bootsy.alignTemplate = function(locale, options) {
  var size = (options && options.size) ? ' btn-' + options.size : '';

  return "<li>" +
      "<div class='btn-group'>" +
      "<a class='btn btn-default " + size + "' data-wysihtml5-command='justifyLeft' title='" + locale.align.left + "' tabindex='-1'><i class='glyphicon glyphicon-align-left'></i></a>" +
      "<a class='btn btn-default " + size + "' data-wysihtml5-command='justifyCenter' title='" + locale.align.center + "' tabindex='-1'><i class='glyphicon glyphicon-align-center'></i></a>" +
      "<a class='btn btn-default " + size + "' data-wysihtml5-command='justifyRight' title='" + locale.align.right + "' tabindex='-1'><i class='glyphicon glyphicon-align-right'></i></a>" +
      "<a class='btn btn-default " + size + "' data-wysihtml5-command='justifyFull' title='" + locale.align.justify + "' tabindex='-1'><i class='glyphicon glyphicon-align-justify'></i></a>" +
      "</div>" +
      "</li>";
};
