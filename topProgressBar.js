// ==UserScript==
// @name         progress bar
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var myProgressObj = {
        progress: function progress() {
            var pro = document.createElement('div');
            document.body.appendChild(pro);
            window.addEventListener('scroll', function () {
                var a = document.body.scrollTop;
                var b = document.body.scrollHeight;
                var c = window.innerHeight;
                var progressLength = a / (b - c) * 100;
                pro.setAttribute('style', 'position:fixed;top:0;left:0;height:3px;background-color:#0A74DA;width:' + progressLength + '%;z-index:1000000000;');
            });
        }
    };
    myProgressObj.progress();
})();