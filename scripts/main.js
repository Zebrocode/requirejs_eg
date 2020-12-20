
//  var editor = ace.edit("editor");
//  editor.setTheme("ace/theme/monokai");
//  editor.session.setMode("ace/mode/javascript");
//  var lang = ace.require("ace/lib/lang");
//  var Range = ace.require("ace/range").Range;

requirejs(["helper/util"],function(util){
    util.a();
    //alert(" helper/util load success!");
})

requirejs(["helper/searchhighlight"],function(sh){
    console.log(" sh:  ",sh);
})