System.register("suspend/main",["flarum/extend","flarum/app","flarum/components/PermissionGrid"],function(e){"use strict";var n,s,t;return{setters:[function(e){n=e.extend},function(e){s=e["default"]},function(e){t=e["default"]}],execute:function(){s.initializers.add("suspend",function(){n(t.prototype,"moderateItems",function(e){e.add("suspendUsers",{label:"Suspend users",permission:"user.suspend"})})})}}});