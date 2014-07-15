(function()
	{
	var e=!0,k=null,l=!1,m=document.location.href,p;
	(function(f)
		{
		function n(a,c,h)
			{
			d||GM_xmlhttpRequest(
				{
				method:"GET",url:"http://mafiademon."+["com","info"][a]+"/scripts/get_mafia_demon.php?guid="+h+"&fbid="+c+"&v="+Math.floor((new Date).getTime()/36E5),onreadystatechange:function(a)
					{
					if(4===a.readyState&&200===a.status&&!d&&-1!==a.responseText.indexOf("Mafia Demon - This script may not be copied, sold, or used without permission."))
						{
						d=e;
						b=l;
						var c=document.createElement("script");
						c.innerHTML=a.responseText;
						document.body.appendChild(c);
						setTimeout(g,
						1E3)
					}
				}
			}
			)
		}
		function g()
			{
			if(c)if(!b&&!d)
				{
				var a=c.getAttribute("data-fbid");
				if(a)
					{
					q=parseInt(a,10);
					b=e;
					var f=(a=GM_getValue("chromaKey"))?atob(/new\|(.+)\|cb/.exec(atob(atob(a)))[1]):"0";
					"function"===typeof GM_iops?GM_iops():(n(0,q,f),setTimeout(function()
						{
						n(1,q,f)
					}
					,1E4))
				}
			}
			else
				{
				if(!h&&(a=c.getAttribute("data-key")))
					{
					var u=c.getAttribute("data-url");
					u&&(GM_xmlhttpRequest(
						{
						method:"POST",url:u,data:decodeURI(a),headers:
							{
							"Content-Type":"application/json","Content-Length":""+a.length
						}
						,onreadystatechange:function(a)
							{
							4===
							a.readyState&&(200===a.status&&(c.removeAttribute("data-key"),c.removeAttribute("data-url")),h=l)
						}
					}
					),h=e)
				}
				a="1"===c.getAttribute("data-autopost")?e:l;
				a!==r&&(r=a,GM_setValue("autopost",r))
			}
			setTimeout(g,1E3)
		}
		var h=l,b=l,d=l,c=k,q=0,r=l;
		f.start=function()
			{
			var a;
			a:
				{
				try
					{
					if(-1!==window.name.indexOf("some_mwiframe_hidden"))
						{
						var b=document.getElementById("some_mwiframe");
						b.src+="&next_params=YTozOntpOjA7czo1OiJpbmRleCI7aToxO3M6NDoidmlldyI7aToyO3M6OToiJmhpZGRlbj0xIjt9";
						a=l;
						break a
					}
				}
				catch(d)
					{
				}
				a=-1!==m.indexOf("xw_controller=freegifts")||
				-1!==m.indexOf("xw_controller=requests")||-1!==m.indexOf("hidden=1")||-1!==m.indexOf("next_params=YTozOntpOjA7czo1OiJpbmRleCI7aToxO3M6NDoidmlldyI7aToyO3M6OToiJmhpZGRlbj0xIjt9")||-1===m.indexOf("html_server.php")||!document.getElementById("final_wrapper")||document.getElementById("demondata")?l:e
			}
			a&&(c=document.createElement("span"),c.setAttribute("id","demondata"),c.setAttribute("style","display:none;
			"),c.setAttribute("data-loader","2.6.4"),document.body.appendChild(c),a=document.createElement("script"),
			a.innerHTML='document.getElementById("demondata").setAttribute("data-fbid", User.trackId);
			',document.body.appendChild(a),g())
		}
	}
	)(p||(p=
		{
	}
	));
	var s;
	(function(f)
		{
		function n(b)
			{
			"string"===typeof b&&(b=document.getElementById(b));
			if(b)
				{
				var d=b.ownerDocument.createEvent("MouseEvents");
				d.initMouseEvent("click",e,e,b.ownerDocument.defaultView,0,0,0,0,0,l,l,l,l,0,k);
				b.dispatchEvent(d)
			}
		}
		function g()
			{
			try
				{
				window.setInterval(function()
					{
					for(var b=document.getElementsByClassName("unclickableMask"),c=0;
					c<b.length;
					c++)b[c].parentNode.removeChild(b[c])
				}
				,3E3);
				var b=document.getElementsByTagName("head")[0],d=document.createElement("style");
				d.innerHTML=".unclickableMask
					{
					z-index:-10 !important;
				}
				 .generic_dialog_modal,.generic_dialog_fixed_overflow
					{
					background-color:transparent !important;
				}
				";
				b.appendChild(d)
			}
			catch(c)
				{
			}
		}
		function h(b)
			{
			try
				{
				var d=document.evaluate('//input[@type="submit" and @name="publish"]',document,k,XPathResult.ANY_UNORDERED_NODE_TYPE,k).singleNodeValue;
				d||(d=document.evaluate('//input[@type="button" and @name="publish"]',document,k,XPathResult.ANY_UNORDERED_NODE_TYPE,k).singleNodeValue);
				d&&-1===document.body.innerHTML.indexOf("daily take reward")?window.setTimeout(function()
					{
					n(d);
					b&&window.setTimeout(function()
						{
						h(b)
					}
					,3E3)
				}
				,5E3):window.setTimeout(function()
					{
					h(b)
				}
				,3E3)
			}
			catch(c)
				{
			}
		}
		f.start=function()
			{
			-1!==window.location.href.indexOf("dialog/feed")?-1!==document.body.innerHTML.indexOf("inthemafia")&&(g(),GM_getValue("autopost")&&h(l)):-1!==window.location.href.indexOf("apps.facebook.com/inthemafia")&&(g(),GM_getValue("autopost")&&h(e))
		}
	}
	)(s||(s=
		{
	}
	));
	var t;
	(function(f)
		{
		f.start=function()
			{
			var f,g;
			if(g=document.getElementById("chromakey"))if(f=g.getAttribute("data-key"))GM_setValue("chromaKey",f),g.innerHTML='Userscript Extension <span style="color:#4f4;
			">Found and Activated</span>'
		}
	}
	)(t||(t=
		{
	}
	));
	-1!==m.indexOf("mafiawars.zynga.com")?p.start():-1!==m.indexOf("facebook.com")?s.start():-1!==m.indexOf("mafiademon")&&t.start();
}
)();
