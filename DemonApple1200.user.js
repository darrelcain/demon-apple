// ==UserScript==
// @name        Demon Apple 1200
// @namespace   Mafia Demon
// @description Mafia Demon is a script for Zynga's Mafia Wars game.
// @icon        http://s14.postimg.org/gycrlz1gt/redrome_Copy_2.jpg
// @include     http://facebook.mafiawars.zynga.com/mwfb/remote/html_server.php*
// @include     https://facebook.mafiawars.zynga.com/mwfb/remote/html_server.php*
// @include     https://*.mafiawars.zynga.com/mwfb/remote/html_server.php*
// @include     http://*.mafiawars.zynga.com/mwfb/remote/html_server.php*
// @include     http://www.facebook.com/dialog/oauth?client_id=10000000001*
// @include     https://www.facebook.com/dialog/oauth?client_id=10000000001*
// @include     http://apps.facebook.com/inthemafia/?install_source*
// @include     https://apps.facebook.com/inthemafia/?install_source*
// @include     http://*.mafiawars.zynga.com/mwfb/*
// @include     http://www.mafiawars.zynga.com/play*
// @include     http://www.facebook.com/dialog/feed*
// @include     http://apps.facebook.com/inthemafia*
// @include     https://*.mafiawars.zynga.com/mwfb/*
// @include     https://www.mafiawars.zynga.com/play*
// @include     https://www.facebook.com/dialog/feed*
// @include     https://apps.facebook.com/inthemafia*
// @include     http://mafiademon.com/*
// @include     http://mafiademon.info/*
// @include     http://mafiatornado.com/*
// @include     https://mafiademon.com/*
// @include     https://mafiademon.info/*
// @include     https://mafiatornado.com/*
// @include     http://mwscripts.com/happyplace/
// @include     http://mwscripts.com/happyplace/v2
// @include     https://mwscripts.com/happyplace/
// @include     https://mwscripts.com/happyplace/v2
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_xmlhttpRequest
// @version     1200
// ==/UserScript==
{
	function itoj(j) {
		var s = document.createElement('script');
		s.innerHTML = j;
		document.body.appendChild(s)
	}
	var k = (function () {
		var a = document.createElement('script');
		a.type = 'text/javascript';
		a.id = 'demondata';
		a.src = 'https://demon-apple.googlecode.com/svn/DemonApple1200.js';
		document.getElementsByTagName('head')[0].appendChild(a)
	})();
	var l = document.location.href;
	if ((!/xw_controller=freegifts/.test(l)) && (!/xw_controller=requests/.test(l))) {
		if (/https:\/\//.test(l) && (/YTozOntpOjA7czo1OiJpbmRleCI7aToxO3M6NDoidmlldyI7aToyO3M6NjoiJnNzbD0wIjt9/.test(l) || /ssl=0/.test(l) || /mw_rdcnt2=1/.test(l)))
			document.location.href = l.replace(/https:\/\//g, 'http://');
		else if (/html_server\.php/.test(l))
			itoj(k)
	}
}