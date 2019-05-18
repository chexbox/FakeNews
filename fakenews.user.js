// ==UserScript==
// @name         Fake News
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Help determine if news is true.
// @author       chexbox
// @match *.cnn.com/* 
// @match *.huffingtonpost.com/*
// @match *.time.com/* 
// @match *.npr.org/* 
// @match *.slate.com/* 
// @match *.newsweek.com/* 
// @match *.usnews.com/* 
// @match *.politico.com/* 
// @match *.salon.com/* 
// @match *.indymedia.org/*
// @match *.democraticunderground.com/*
// @match *.theatlantic.com/*
// @match *.villagevoice.com/*
// @match *.dailykos.com/*
// @match *.eschatonblog.com/*
// @match *.newyorker.com/*
// @match *.thedailybeast.com/*
// @match *.alternet.org/*
// @match *.commondreams.org/*
// @match *.crooksandliars.com/*
// @match *.buzzflash.com/*
// @match *.talkingpointsmemo.com/*
// @match *.moveon.org/*
// @match *.motherjones.com/*
// @match *.amnesty.org/*
// @match *.counterpunch.org/*
// @match *.thenation.com/*
// @match *.antiwar.com/*
// @match *.thinkprogress.org/*
// @match *.rawstory.com/*
// @match *.tnr.com/*
// @match *.plannedparenthood.com/*
// @match *.informationclearinghouse.info/*
// @match *.whatreallyhappened.com/*
// @match *.opednews.com/*
// @match *.bad.eserver.org/*
// @match *.politicalwire.com/*
// @match *.wsws.org/* 
// @match *.aclu.org/*
// @match *.cidh.oas.org/*
// @match *.mediamatters.org/*
// @match *.feministing.com/*
// @match *.truthout.org/*
// @match *.drudge.com/*
// @match *.prospect.org/*
// @match *.harpers.org/*
// @match *.firedoglake.com/*
// @match *.truthdig.com/*
// @match *.wonkette.com/*
// @match *.americablog.com/*
// @match *.fivethirtyeight.com/*
// @match *.washingtonmonthly.com/*
// @match *.michaelmoore.com/*
// @match *.bartcop.com/*
// @match *.airamerica.com/*
// @match *.oliverwillis.com/*
// @match *.mydd.com/*
// @match *.americanprogress.org/* 
// @match *.brookings.edu/* 
// @match *.zmag.org/* 
// @match        *.msnbc.com/*
// @match        *.cnbc.com/*
// @match        *.nbc.com/*
// @match        *.buzzfeed.com/*
// @match        *.buzzfeednews.com/*
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
    css.innerHTML = "body, div, section { background-size: contain; background-image: url(https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fi.imgur.com%2FLMgs3xU.gif%3Fnoredirect&f=1), url(https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fmedia.indiatimes.in%2Fmedia%2Ffacebook%2F2017%2FJan%2Fgghju_1484224447_1484224456_800x420.jpg&f=1); }";
    document.body.appendChild(css);
    //unsafeWindow.onload = '(function(){for (let i; i < document.getElementsByTagName("img").length; i++){document.getElementsByTagName("img")[i].src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Famericafirstpatriots.com%2Fwp-content%2Fuploads%2F2017%2F06%2Fvery-fake-news-trump.jpg&f=1";}})();';
})();
