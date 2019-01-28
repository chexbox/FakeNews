// ==UserScript==
// @name         Fake News
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Help determine if news is true.
// @author       chexbox
// @match        *.huffingtonpost.com/*
// @match        https://*.cnn.com/*
// @match        *.msnbc.com/*
// @grant        none
// @updateURL    https://chexbox.github.io/FakeNews/fakenews.user.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    function setSrc(){
        for (let i; i < document.getElementsByTagName("img").length; i++){
            document.getElementsByTagName("img")[i].src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Famericafirstpatriots.com%2Fwp-content%2Fuploads%2F2017%2F06%2Fvery-fake-news-trump.jpg&f=1";
        }
    }
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = "body, div, section { background-image: url(https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fi.imgur.com%2FLMgs3xU.gif%3Fnoredirect&f=1), url(https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fmedia.indiatimes.in%2Fmedia%2Ffacebook%2F2017%2FJan%2Fgghju_1484224447_1484224456_800x420.jpg&f=1); }";
    document.body.appendChild(css);
    //unsafeWindow.onload = '(function(){for (let i; i < document.getElementsByTagName("img").length; i++){document.getElementsByTagName("img")[i].src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Famericafirstpatriots.com%2Fwp-content%2Fuploads%2F2017%2F06%2Fvery-fake-news-trump.jpg&f=1";}})();';
})();
