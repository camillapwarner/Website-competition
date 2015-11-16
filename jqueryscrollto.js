<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html dir='ltr' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
<head>
<meta content='text/html; charset=UTF-8' http-equiv='Content-Type'/>
<script type="text/javascript">(function() { (function(){function c(a){this.t={};this.tick=function(a,c,b){var d=void 0!=b?b:(new Date).getTime();this.t[a]=[d,c];if(void 0==b)try{window.console.timeStamp("CSI/"+a)}catch(e){}};this.tick("start",null,a)}var a;window.performance&&(a=window.performance.timing);var h=a?new c(a.responseStart):new c;window.jstiming={Timer:c,load:h};if(a){var b=a.navigationStart,e=a.responseStart;0<b&&e>=b&&(window.jstiming.srt=e-b)}if(a){var d=window.jstiming.load;0<b&&e>=b&&(d.tick("_wtsrt",void 0,b),d.tick("wtsrt_",
"_wtsrt",e),d.tick("tbsd_","wtsrt_"))}try{a=null,window.chrome&&window.chrome.csi&&(a=Math.floor(window.chrome.csi().pageT),d&&0<b&&(d.tick("_tbnd",void 0,window.chrome.csi().startE),d.tick("tbnd_","_tbnd",b))),null==a&&window.gtbExternal&&(a=window.gtbExternal.pageT()),null==a&&window.external&&(a=window.external.pageT,d&&0<b&&(d.tick("_tbnd",void 0,window.external.startE),d.tick("tbnd_","_tbnd",b))),a&&(window.jstiming.pt=a)}catch(k){}})();window.tickAboveFold=function(c){var a=0;if(c.offsetParent){do a+=c.offsetTop;while(c=c.offsetParent)}c=a;750>=c&&window.jstiming.load.tick("aft")};var f=!1;function g(){f||(f=!0,window.jstiming.load.tick("firstScrollTime"))}window.addEventListener?window.addEventListener("scroll",g,!1):window.attachEvent("onscroll",g);
 })();</script>
<meta content='blogger' name='generator'/>
<link href='http://flesler.blogspot.co.uk/favicon.ico' rel='icon' type='image/x-icon'/>
<link href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html' rel='canonical'/>
<link rel="alternate" type="application/atom+xml" title="Ariel Flesler - Atom" href="http://flesler.blogspot.com/feeds/posts/default" />
<link rel="alternate" type="application/rss+xml" title="Ariel Flesler - RSS" href="http://flesler.blogspot.com/feeds/posts/default?alt=rss" />
<link rel="service.post" type="application/atom+xml" title="Ariel Flesler - Atom" href="https://www.blogger.com/feeds/8640596986273216089/posts/default" />

<link rel="alternate" type="application/atom+xml" title="Ariel Flesler - Atom" href="http://flesler.blogspot.com/feeds/8211605211968606133/comments/default" />
<!--[if IE]> <script> (function() { var html5 = ("abbr,article,aside,audio,canvas,datalist,details," + "figure,footer,header,hgroup,mark,menu,meter,nav,output," + "progress,section,time,video").split(','); for (var i = 0; i < html5.length; i++) { document.createElement(html5[i]); } try { document.execCommand('BackgroundImageCache', false, true); } catch(e) {} })(); </script> <![endif]-->
<title>Ariel Flesler: jQuery.ScrollTo</title>
<link type='text/css' rel='stylesheet' href='https://www.blogger.com/static/v1/widgets/4235914959-widget_css_bundle.css' />
<link type='text/css' rel='stylesheet' href='https://www.blogger.com/dyn-css/authorization.css?targetBlogID=8640596986273216089&zx=16ace1b6-6565-4465-997d-22ca4aeb8210' />
<style id='page-skin-1' type='text/css'><!--
/*
* Blogger Template Style
* Name:     TicTac (Blueberry)
* Date:     1 March 2004
* Updated by: Blogger Team
*/
/* Variable definitions
====================
<Variable name="textcolor" description="Text Color"
type="color" default="#333">
<Variable name="pagetitlecolor" description="Page Header Color"
type="color" default="#FFF">
<Variable name="datecolor" description="Date Header Color"
type="color" default="#999999">
<Variable name="titlecolor" description="Post Title Color"
type="color" default="#993333">
<Variable name="footercolor" description="Post Footer Color"
type="color" default="#999">
<Variable name="sidebartextcolor" description="Sidebar Text Color"
type="color" default="#999">
<Variable name="sidebarcolor" description="Sidebar Title Color"
type="color" default="#666">
<Variable name="linkcolor" description="Link Color"
type="color" default="#69c">
<Variable name="visitedlinkcolor" description="Visited Link Color"
type="color" default="#666699">
<Variable name="bodyfont" description="Text Font"
type="font"
default="normal normal 100% Verdana, sans-serif">
<Variable name="pagetitlefont" description="Page Header Font"
type="font" default="normal normal 100% 'Lucida Grande','Trebuchet MS'">
<Variable name="titlefont" description="Post Title Font"
type="font" default="normal bold 130% 'Lucida Grande','Trebuchet MS'">
<Variable name="sidebarheaderfont" description="Sidebar Title Font"
type="font" default="normal bold 130% 'Lucida Grande','Trebuchet MS'">
<Variable name="startSide" description="Start side in blog language"
type="automatic" default="left">
<Variable name="endSide" description="End side in blog language"
type="automatic" default="right">
*/
/* ---( page defaults )--- */
body {
margin: 0;
padding: 0;
font-size: small;
text-align: center;
color: #333333;
background: #e0e0e0;
}
blockquote {
margin-top: 0;
margin-right: 0;
margin-bottom: 0;
margin-left: 30px;
padding-top: 10px;
padding-right: 0;
padding-bottom: 0;
padding-left: 20px;
font-size: 88%;
line-height: 1.5em;
color: #666;
background: url(http://www.blogblog.com/tictac_blue/quotes.gif) no-repeat top left;
}
blockquote p {
margin-top: 0;
}
abbr, acronym {
cursor: help;
font-style: normal;
border-bottom: 1px dotted;
}
code {
color: #996666;
}
hr {
display: none;
}
img {
border: none;
}
/* unordered list style */
ul {
list-style: none;
margin-left: 10px;
padding: 0;
}
li {
list-style: none;
padding-left: 14px;
margin-bottom: 3px;
background: url(http://www.blogblog.com/tictac_blue/tictac_blue.gif) no-repeat left 6px;
}
/* links */
a:link {
color: #6699cc;
}
a:visited {
color: #666699;
}
a:hover {
color: #5B739C;
}
a:active {
color: #5B739C;
text-decoration: none;
}
/* ---( layout structure )---*/
#outer-wrapper {
width: 847px;
margin: 0px auto 0;
text-align: left;
font: normal normal 100% Verdana, sans-serif;
background: url(http://www.blogblog.com/tictac_blue/tile_left.gif) repeat-y;
}
#content-wrapper {
margin-left: 42px; /* to avoid the border image */
width: 763px;
}
#main {
float: left;
width: 460px;
margin-top: 20px;
margin-right: 0;
margin-bottom: 0;
margin-left: 0;
padding-top: 0;
padding-right: 0;
padding-bottom: 0;
padding-left: 1em;
line-height: 1.5em;
word-wrap: break-word; /* fix for long text breaking sidebar float in IE */
overflow: hidden;     /* fix for long non-text content breaking IE sidebar float */
}
#sidebar {
float: right;
width: 259px;
padding-top: 20px;
padding-right: 0px;
padding-bottom: 0;
padding-left: 0;
font-size: 85%;
line-height: 1.4em;
color: #999999;
background: url(http://www.blogblog.com/tictac_blue/sidebar_bg.gif) no-repeat left top;
word-wrap: break-word; /* fix for long text breaking sidebar float in IE */
overflow: hidden;     /* fix for long non-text content breaking IE sidebar float */
}
/* ---( header and site name )--- */
#header-wrapper {
margin: 0;
padding: 0;
font: normal normal 100% 'Lucida Grande','Trebuchet MS';
background: #e0e0e0 url(http://www.blogblog.com/tictac_blue/top_div_blue_left.gif) no-repeat left top;
}
#header {
margin: 0;
padding-top: 25px;
padding-right: 60px;
padding-bottom: 35px;
padding-left: 160px;
color: #FFFFFF;
background: url(http://www.blogblog.com/tictac_blue/top_h1.gif) no-repeat bottom left;
}
#header h1 {
font-size: 200%;
text-shadow: #4F73B6 2px 2px 2px;
}
#header h1 a {
text-decoration: none;
color: #FFFFFF;
}
#header h1 a:hover {
color: #eee;
}
/* ---( main column )--- */
h2.date-header {
margin-top: 0;
padding-left: 14px;
font-size: 90%;
color: #999999;
background: url(http://www.blogblog.com/tictac_blue/date_icon_blue.gif) no-repeat left 50%;
}
.post h3 {
margin-top: 0;
font: normal bold 130% 'Lucida Grande','Trebuchet MS';
letter-spacing: -1px;
color: #993333;
}
.post {
margin-top: 0;
margin-right: 0;
margin-bottom: 1.5em;
margin-left: 0;
padding-top: 0;
padding-right: 0;
padding-bottom: 1.5em;
padding-left: 14px;
border-bottom: 1px solid #ddd;
}
.post h3 a,
.post h3 a:visited {
color: #993333;
text-decoration: none;
}
.post-footer {
margin: 0;
padding-top: 0;
padding-right: 0;
padding-bottom: 0;
padding-left: 14px;
font-size: 88%;
color: #999999;
background: url(http://www.blogblog.com/tictac_blue/tictac_grey.gif) no-repeat left 8px;
}
.post img, table.tr-caption-container {
padding: 6px;
border-top: 1px solid #ddd;
border-left: 1px solid #ddd;
border-bottom: 1px solid #c0c0c0;
border-right: 1px solid #c0c0c0;
}
.tr-caption-container img {
border: none;
padding: 0;
}
.feed-links {
clear: both;
line-height: 2.5em;
}
#blog-pager-newer-link {
float: left;
}
#blog-pager-older-link {
float: right;
}
#blog-pager {
text-align: center;
}
/* comment styles */
#comments {
padding: 10px 10px 0px 10px;
font-size: 85%;
line-height: 1.5em;
color: #666;
background: #eee url(http://www.blogblog.com/tictac_blue/comments_curve.gif) no-repeat top left;
}
#comments h4 {
margin-top: 20px;
margin-right: 0;
margin-bottom: 15px;
margin-left: 0;
padding-top: 8px;
padding-right: 0;
padding-bottom: 0;
padding-left: 40px;
font-family: "Lucida Grande", "Trebuchet MS";
font-size: 130%;
color: #666;
background: url(http://www.blogblog.com/tictac_blue/bubbles.gif) no-repeat 10px 0;
height: 29px !important; /* for most browsers */
height /**/:37px; /* for IE5/Win */
}
#comments ul {
margin-left: 0;
}
#comments li {
background: none;
padding-left: 0;
}
.comment-body {
padding-top: 0;
padding-right: 10px;
padding-bottom: 0;
padding-left: 25px;
background: url(http://www.blogblog.com/tictac_blue/tictac_blue.gif) no-repeat 10px 5px;
}
.comment-body p {
margin-bottom: 0;
}
.comment-author {
margin-top: 4px;
margin-right: 0;
margin-bottom: 0;
margin-left: 0;
padding-top: 0;
padding-right: 10px;
padding-bottom: 0;
padding-left: 60px;
color: #999;
background: url(http://www.blogblog.com/tictac_blue/comment_arrow_blue.gif) no-repeat 44px 2px;
}
.comment-footer {
border-bottom: 1px solid #ddd;
padding-bottom: 1em;
}
.deleted-comment {
font-style:italic;
color:gray;
}
/* ---( sidebar )--- */
.sidebar h2 {
margin-top: 0;
margin-right: 0;
margin-bottom: 0;
margin-left: 0;
padding-top: 25px;
padding-right: 0;
padding-bottom: 0;
padding-left: 40px;
font: normal bold 130% 'Lucida Grande','Trebuchet MS';
color: #666666;
height: 32px;
background: url(http://www.blogblog.com/tictac_blue/sidebar_icon.gif) no-repeat 10px 15px;
height: 32px !important; /* for most browsers */
height /**/:57px; /* for IE5/Win */
}
.sidebar .widget {
margin: 0;
padding-top: 0;
padding-right: 0;
padding-bottom: 10px;
padding-left: 10px;
border-bottom: 1px solid #ddd;
}
.sidebar li {
background: url(http://www.blogblog.com/tictac_blue/tictac_blue.gif) no-repeat left 5px;
}
.profile-textblock {
clear: both;
margin-left: 0;
}
.profile-img {
float: left;
margin-top: 0;
margin-right: 5px;
margin-bottom: 5px;
margin-left: 0;
border: 1px solid #ddd;
padding: 4px;
}
/* ---( footer )--- */
.clear { /* to fix IE6 padding-top issue */
clear: both;
}
#footer-wrapper {
margin: 0;
padding-top: 0;
padding-right: 0;
padding-bottom: 9px;
padding-left: 0;
font-size: 85%;
color: #ddd;
background: url(http://www.blogblog.com/tictac_blue/bottom_sill.gif) no-repeat bottom left;
}
#footer {
margin: 0;
padding-top: 20px;
padding-right: 320px;
padding-bottom: 20px;
padding-left: 95px;
background: url(http://www.blogblog.com/tictac_blue/bottom_sash_left.gif) no-repeat top left;
}
/** Page structure tweaks for layout editor wireframe */
body#layout #outer-wrapper,
body#layout #main,
body#layout #sidebar {
padding-top: 0;
margin-top: 0;
}
body#layout #outer-wrapper,
body#layout #content-wrapper {
width: 740px;
}
body#layout #sidebar {
margin-right: 0;
margin-bottom: 1em;
}
body#layout #header,
body#layout #footer,
body#layout #main {
padding: 0;
}
body#layout #content-wrapper {
margin: 0px;
}

--></style>
<!-- MY INCLUDES -->
<link href='http://flesler-blog.googlecode.com/svn/trunk/style.css' rel='stylesheet' type='text/css'/>
<script src='http://flesler-blog.googlecode.com/svn/trunk/helpers.js' type='text/javascript'></script>
<!-- -->
<script type="text/javascript">var a="&m=1",d="(^|&)m=",e="?",f="?m=1";function g(){var b=window.location.href,c=b.split(e);switch(c.length){case 1:return b+f;case 2:return 0<=c[1].search(d)?null:b+a;default:return null}}var h=navigator.userAgent;if(-1!=h.indexOf("Mobile")&&-1!=h.indexOf("WebKit")&&-1==h.indexOf("iPad")||-1!=h.indexOf("Opera Mini")||-1!=h.indexOf("IEMobile")){var k=g();k&&window.location.replace(k)};
</script><script type="text/javascript">
if (window.jstiming) window.jstiming.load.tick('headEnd');
</script></head>
<body>
<div class='navbar section' id='navbar'><div class='widget Navbar' id='Navbar1'><script type="text/javascript">
    function setAttributeOnload(object, attribute, val) {
      if(window.addEventListener) {
        window.addEventListener('load',
          function(){ object[attribute] = val; }, false);
      } else {
        window.attachEvent('onload', function(){ object[attribute] = val; });
      }
    }
  </script>
<div id="navbar-iframe-container"></div>
<script type="text/javascript" src="https://apis.google.com/js/plusone.js"></script>
<script type="text/javascript">
        gapi.load("gapi.iframes:gapi.iframes.style.bubble", function() {
          if (gapi.iframes && gapi.iframes.getContext) {
            gapi.iframes.getContext().openChild({
                url: 'https://www.blogger.com/navbar.g?targetBlogID\758640596986273216089\46blogName\75Ariel+Flesler\46publishMode\75PUBLISH_MODE_BLOGSPOT\46navbarType\75BLACK\46layoutType\75LAYOUTS\46searchRoot\75//flesler.blogspot.com/search\46blogLocale\75en\46v\0752\46homepageUrl\75http://flesler.blogspot.com/\46targetPostID\758211605211968606133\46blogPostOrPageUrl\75http://flesler.blogspot.com/2007/10/jqueryscrollto.html\46vt\75-1978575681764813702',
                where: document.getElementById("navbar-iframe-container"),
                id: "navbar-iframe"
            });
          }
        });
      </script><script type="text/javascript">
(function() {
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = '//pagead2.googlesyndication.com/pagead/js/google_top_exp.js';
var head = document.getElementsByTagName('head')[0];
if (head) {
head.appendChild(script);
}})();
</script>
</div></div>
<div id='outer-wrapper'><div id='wrap2'>
<!-- skip links for text browsers -->
<span id='skiplinks' style='display:none;'>
<a href='#main'>skip to main </a> |
      <a href='#sidebar'>skip to sidebar</a>
</span>
<div id='header-wrapper'>
<div class='header section' id='header'><div class='widget Header' id='Header1'>
<div id='header-inner'>
<div class='titlewrapper'>
<h1 class='title'>
<a href='http://flesler.blogspot.co.uk/'>Ariel Flesler</a>
</h1>
</div>
<div class='descriptionwrapper'>
<p class='description'><span>My jQuery plugins, and other scripts.</span></p>
</div>
</div>
</div></div>
</div>
<div id='content-wrapper'>
<div id='crosscol-wrapper' style='text-align:center'>
<div class='crosscol section' id='crosscol'></div>
</div>
<div id='main-wrapper'>
<div class='main section' id='main'><div class='widget Blog' id='Blog1'>
<div class='blog-posts hfeed'>
<h2 class='date-header'>Thursday, October 18, 2007</h2>
<div class='post hentry'>
<a name='8211605211968606133'></a>
<h3 class='post-title entry-title'>
<a href='http://flesler.blogspot.co.uk/2007/10/jqueryscrollto.html'>jQuery.ScrollTo</a>
</h3>
<div class='post-header-line-1'></div>
<div class='post-body entry-content'>
<p><h4>Notice</h4>I've pretty much stopped updating this blog, but the plugin development is still on-going. You can find the link to the Github project page at the bottom of the article.<br />
<br />
<h4>Introduction</h4>An <a href="http://www.learningjquery.com/2007/09/animated-scrolling-with-jquery-12" target="_blank">article</a> about animated scrolling with <a href="http://www.jquery.com" target="_blank">jQuery</a> inspired me to make a small, customizable plugin for scrolling elements, or the window itself.  <br />
<br />
<h4>How to specify what to scroll ?</h4>Simple, all the matched elements will be scrolled, for example:  <pre class="js"><span class="keyword">$</span>(<span class="string">'div.pane'</span>).scrollTo(<span class="comment">...</span>);<span class="comment">//all divs w/class pane</span>
</pre>If you need to scroll the window (screen), then use:  <pre class="js"><span class="keyword">$</span>.scrollTo(<span class="comment">...</span>);<span class="comment">//the plugin will take care of this</span>
</pre><h4>How to specify where ?</h4>There are many different ways to specify the target position.<br />
These are:<ul><li>A raw number</li>
<li>A string('44', '100px', '+=30px', etc )</li>
<li>A DOM element (logically, child of the scrollable element)</li>
<li>A selector, that will be relative to the scrollable element</li>
<li>The string 'max' to scroll to the end.</li>
<li>A string specifying a percentage to scroll to that part of the container (f.e: 50% goes to to the middle).</li>
<li>A hash { top:x, left:y }, x and y can be any kind of number/string like above.</li>
</ul>Note that you only need to use the hash form, if you are scrolling on both axes, and they have different positions.<br />
<u>Don't use the hash to scroll on both axes</u>. Instead, keep reading :)  <br />
<br />
<h4>Settings</h4>The plugin offers you many options to customize the animation and also the final position.<br />
The settings are:<ul><li><strong>axis</strong>: Axes to be scrolled, 'x', 'y', 'xy' or 'yx'. 'xy' is the default.</li>
<li><strong>duration</strong>: Length of the animation, none (sync) by default.</li>
<li><strong>easing</strong>: Name of the easing equation.</li>
<li><strong>margin</strong>: If true, target's border and margin are deducted.</li>
<li><strong>offset</strong>: Number or hash {left: x, top:y }. This will be added to the final position(can be negative).</li>
<li><strong>over</strong>: Add a fraction of the element's height/width (can also be negative).</li>
<li><strong>queue</strong>: If true and both axes are scrolled, it will animate on one axis, and then on the other. Note that 'axis' being 'xy' or 'yx', concludes the order</li>
<li><strong>onAfterFirst</strong>: If queing, a function to be called after scrolling the first axis.</li>
<li><strong>onAfter</strong>: A function to be called after the whole animation ended.</li>
<li>You can use any other setting accepted by <a href="http://api.jquery.com/animate/#animate-properties-options" target="_blank">$().animate()</a></li>
</ul>These settings are very well explained in the demo. Make sure to check it to understand them all.  <br />
<br />
<h4>Manually finding the scrolling limit</h4><p>$.scrollTo always had an internal function that calculates the scrolling limit for both axes. Since 1.4.2, this function is exposed as $.scrollTo.max.</p><p>It's not too nice to use yet but it's probably not something you'll need, you must pass two arguments: a DOM element and an axis string ('x' or 'y') and it will return the max number.</p><br />
<h4>Overloading</h4>This plugin accepts the arguments in two ways, like $.animate().  <pre class="js"><span class="keyword">$</span>(<span class="comment">...</span>).scrollTo( <em><span class="comment">target</span></em>, <em><span class="comment">duration</span></em>, <em><span class="comment">settings</span></em> );
</pre><pre class="js"><span class="keyword">$</span>(<span class="comment">...</span>).scrollTo( <em><span class="comment">target</span></em>, <em><span class="comment">settings</span></em> );
</pre>In this second case, you can specify the duration in the hash. You don't need to include any setting, not even the duration, everything has defaults.<br />
The hash of defaults can be accessed at: <em>$.scrollTo.defaults</em>.  <br />
<br />
<h4>jQuery.scrollTo's sons</h4>Indeed, jQuery.scrollTo has offspring :) <ul><li><a href="http://flesler.blogspot.com/2007/10/jquerylocalscroll-10.html" target="_blank">jQuery.localScroll</a>: Will add a scroll effect, to any anchor navigation. Ideal for slides, table of contents, etc. It's small, and incredibly easy to implement.</li>
<li><a href="http://flesler.blogspot.com/2008/02/jqueryserialscroll.html" target="_blank">jQuery.serialScroll</a>: It's a multi-purpose plugin to animate any kind of sequential navigation(prev/next). It's also small and highly customizable. </li>
</ul>These plugins require jQuery.scrollTo and <strong>can use its settings!</strong>.<br />
That makes around 20 options to fully customize each of them.<br />
They are wrappers for common situations where you might need this plugin.<br />
Using them will save you a lot of time and will give you even more customization.<br />
They can be safely used simultaneously and the 3 of them minified, take merely 3.5kb altogether!  <br />
<br />
<h4 id="scrollto_troubleshoot">Troubleshooting</h4><h5>Doesn't scroll on IE</h5>Sometimes, you need to set a position (relative or absolute) to the container and give it fixed dimensions, in order to hide the overflow.<br />
If this doesn't work, try giving the container fixed dimensions (height & width).  <br />
<br />
<h4>Links</h4><ul><li><a href="https://github.com/flesler/jquery.scrollTo/releases" target="_blank">Downloads</a></li>
<li><a href="https://github.com/flesler/jquery.scrollTo" target="_blank">Github Repo</a></li>
<li><a href="http://demos.flesler.com/jquery/scrollTo/" target="_blank">Demo</a></li>
<li><a href="https://github.com/flesler/jquery.scrollTo/blob/master/changes.txt" target="_blank">Changelog</a></li>
</ul></p>
<div style='clear: both;'></div>
</div>
<div class='post-footer'>
<p class='post-footer-line post-footer-line-1'><span class='post-author vcard'>
</span>
<span class='post-timestamp'>
Posted on
<a class='timestamp-link' href='http://flesler.blogspot.co.uk/2007/10/jqueryscrollto.html' rel='bookmark' title='permanent   link'><abbr class='published' title='2007-10-18T11:04:00-03:00'>Thursday, October 18, 2007</abbr></a>
</span>
<span class='post-comment-link'>
</span>
<span class='post-icons'>
<span class='item-control blog-admin pid-2014546588'>
<a href='https://www.blogger.com/post-edit.g?blogID=8640596986273216089&postID=8211605211968606133&from=pencil' title='Edit Post'>
<img alt='' class='icon-action' height='18' src='//img2.blogblog.com/img/icon18_edit_allbkg.gif' width='18'/>
</a>
</span>
</span>
</p>
<p class='post-footer-line post-footer-line-2'><span class='post-labels'>
Labels:
<a href='http://flesler.blogspot.co.uk/search/label/jQuery' rel='tag'>jQuery</a>,
<a href='http://flesler.blogspot.co.uk/search/label/jQuery.LocalScroll' rel='tag'>jQuery.LocalScroll</a>,
<a href='http://flesler.blogspot.co.uk/search/label/jQuery.ScrollTo' rel='tag'>jQuery.ScrollTo</a>,
<a href='http://flesler.blogspot.co.uk/search/label/jQuery.SerialScroll' rel='tag'>jQuery.SerialScroll</a>
</span>
</p>
<script charset='utf-8' src='http://feeds.feedburner.com/~s/Flesler?i=http://flesler.blogspot.co.uk/2007/10/jqueryscrollto.html' type='text/javascript'></script>
<p class='post-footer-line post-footer-line-3'></p>
</div>
</div>
<div class='comments' id='comments'>
<a name='comments'></a>
<h4>
55
comments:
        
</h4>
<dl id='comments-block'>
<dt class='comment-author ' id='c7651519648379736953'>
<a name='c7651519648379736953'></a>
Anonymous
said...
</dt>
<dd class='comment-body'>
<p>Can this plugin be made to default override the anchor scrollto behavior of the browser?<BR/><BR/>would be nice if you just put scrollTo(); in a script header and voila... smooth scrolling for all named anchor links.</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1193166060000#c7651519648379736953' title='comment permalink'>
October 23, 2007 at 4:01 PM
</a>
<span class='item-control blog-admin pid-46210132'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=7651519648379736953' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author blog-author' id='c8414884656438070990'>
<a name='c8414884656438070990'></a>
<a href='https://www.blogger.com/profile/17700414222186772120' rel='nofollow'>Flesler</a>
said...
</dt>
<dd class='comment-body'>
<p>Indeed, check the article I mentioned at the beginning of the post: http://www.learningjquery.com/2007/09/animated-scrolling-with-jquery-12<BR/><BR/>I adapted that code, to work with the plugin. Check the links up there, just add the js and it will do what you asked for.</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1193177100000#c8414884656438070990' title='comment permalink'>
October 23, 2007 at 7:05 PM
</a>
<span class='item-control blog-admin pid-2014546588'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=8414884656438070990' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author ' id='c4481079512713543581'>
<a name='c4481079512713543581'></a>
<a href='https://www.blogger.com/profile/17583475389465121189' rel='nofollow'>eshu</a>
said...
</dt>
<dd class='comment-body'>
<p>thx for this nice plugin...<BR/>i was thinking of some adjustment..<BR/>im js novice so it would be nice of you to help me with this one..<BR/><BR/>first of all i was thinking about is: can you please show me how to get a links form your examples (ie. instead of puting the numbers in box and hitting the scroll button i have a clickable links like 1., 2.,3., etc so i can put them in form of unordered list or so...?)<BR/><BR/>i would like to have something like unordered list from your example, so i can click them and then that takes me to some part of a &#180;page&#180;<BR/><BR/>what i have in mind, as a bottom line, is to mix this horizontal and vertical scrolling functionality in one...like having a navigation bar with subnavigation list.. Main navigation bars having a vertical scrolling capabilities and subnavigation one horizontal..<BR/>i hope you understand what i just asked  :-)) <BR/><BR/>thx!</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1193236200000#c4481079512713543581' title='comment permalink'>
October 24, 2007 at 11:30 AM
</a>
<span class='item-control blog-admin pid-666557261'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=4481079512713543581' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author blog-author' id='c2426235976761295636'>
<a name='c2426235976761295636'></a>
<a href='https://www.blogger.com/profile/17700414222186772120' rel='nofollow'>Flesler</a>
said...
</dt>
<dd class='comment-body'>
<p>There, I turned it into a plugin..<BR/>Check the demo, I tried to make more or less what you were asking for... <BR/><BR/>http://flesler.blogspot.com/2007/10/jquerylocalscroll-10.html</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1193279640000#c2426235976761295636' title='comment permalink'>
October 24, 2007 at 11:34 PM
</a>
<span class='item-control blog-admin pid-2014546588'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=2426235976761295636' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author blog-author' id='c7189662453510220755'>
<a name='c7189662453510220755'></a>
<a href='https://www.blogger.com/profile/17700414222186772120' rel='nofollow'>Flesler</a>
said...
</dt>
<dd class='comment-body'>
<p>Thanks :) the 2nd and 3rd release were small bug fixes. Usually happens I guess. I'm glad you like it :)<BR/><BR/>I really like jQuery.ScrollTo and it's very useful for other plugins like LocalScroll. I'm working on a slideshow using ScrollTo. I'll upload soon.</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1193700840000#c7189662453510220755' title='comment permalink'>
October 29, 2007 at 8:34 PM
</a>
<span class='item-control blog-admin pid-2014546588'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=7189662453510220755' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author ' id='c359839654166219983'>
<a name='c359839654166219983'></a>
<a href='https://www.blogger.com/profile/00439409568434947960' rel='nofollow'>Sterling</a>
said...
</dt>
<dd class='comment-body'>
<p>I'll look forward to it!</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1193702940000#c359839654166219983' title='comment permalink'>
October 29, 2007 at 9:09 PM
</a>
<span class='item-control blog-admin pid-550239620'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=359839654166219983' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author ' id='c3797740117943248304'>
<a name='c3797740117943248304'></a>
<a href='https://www.blogger.com/profile/02561613173295281689' rel='nofollow'>bawb</a>
said...
</dt>
<dd class='comment-body'>
<p>This is beautiful. Thank you.</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1201902000000#c3797740117943248304' title='comment permalink'>
February 1, 2008 at 7:40 PM
</a>
<span class='item-control blog-admin pid-1469331317'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=3797740117943248304' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author ' id='c8198240151041683745'>
<a name='c8198240151041683745'></a>
<a href='https://www.blogger.com/profile/08114845318441491180' rel='nofollow'>Marcus</a>
said...
</dt>
<dd class='comment-body'>
<p>Hi, <BR/><BR/>Question for you. Do you have any idea what would be involved in making the area scroll based on mouse movement, rather than via links? Kind of like what MooTools shows here (but using JQuery instead): http://demos.mootools.net/Scroller<BR/><BR/>Any info would be excellent. Thanks.</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1202418840000#c8198240151041683745' title='comment permalink'>
February 7, 2008 at 7:14 PM
</a>
<span class='item-control blog-admin pid-454230552'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=8198240151041683745' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author blog-author' id='c8487487572955474956'>
<a name='c8487487572955474956'></a>
<a href='https://www.blogger.com/profile/17700414222186772120' rel='nofollow'>Ariel Flesler</a>
said...
</dt>
<dd class='comment-body'>
<p>@bawb<BR/>&nbsp;&nbsp;Thanks!<BR/><BR/>@marcus<BR/>&nbsp;&nbsp;LocalScroll supports different events, the setting named 'event' can be changed to 'mouseover' for example.<BR/><BR/>If what you want, is not using anchors... then you just bind to some element's mousemove/mouseover and you make a call to jQuery.ScrollTo inside it.<BR/>If you plan to use mousemove, then you should limit the calls, I think it can be done using the plugin 'hoverIntent' of jQuery.<BR/>There was also a plugin called auto-scroll I think, maybe that can solve it too.<BR/><BR/>Cheers</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1202436120000#c8487487572955474956' title='comment permalink'>
February 8, 2008 at 12:02 AM
</a>
<span class='item-control blog-admin pid-2014546588'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=8487487572955474956' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author ' id='c3564016666575791762'>
<a name='c3564016666575791762'></a>
<a href='https://www.blogger.com/profile/04958421067076805668' rel='nofollow'>ap</a>
said...
</dt>
<dd class='comment-body'>
<p>Hi Ariel, great plugin! I don't know if this is at all possible, but how could I make the page scroll when coming from another page via a deep link?<BR/><BR/>Thanks!</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1204712520000#c3564016666575791762' title='comment permalink'>
March 5, 2008 at 8:22 AM
</a>
<span class='item-control blog-admin pid-264427191'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=3564016666575791762' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author blog-author' id='c2517377785817680635'>
<a name='c2517377785817680635'></a>
<a href='https://www.blogger.com/profile/17700414222186772120' rel='nofollow'>Ariel Flesler</a>
said...
</dt>
<dd class='comment-body'>
<p>Hi ap<BR/>  You mean, when the url has a hash (#abcdef) ?<BR/>If that's the case, check LocalScroll, in this blog, it has a function $.localScroll.hash() to check that, and autoscroll.<BR/><BR/>Cheers</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1204720560000#c2517377785817680635' title='comment permalink'>
March 5, 2008 at 10:36 AM
</a>
<span class='item-control blog-admin pid-2014546588'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=2517377785817680635' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author ' id='c5340610619131290588'>
<a name='c5340610619131290588'></a>
<a href='http://blog.purepistos.net' rel='nofollow'>Pistos</a>
said...
</dt>
<dd class='comment-body'>
<p>$( 'something' ).scrollTo() works fine, but $.scrollTo() appears broken: <A HREF="http://rome.purepistos.net/tmp/broken-scroll.html" REL="nofollow">Bug demo page</A></p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1204910880000#c5340610619131290588' title='comment permalink'>
March 7, 2008 at 3:28 PM
</a>
<span class='item-control blog-admin pid-852800538'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=5340610619131290588' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author blog-author' id='c8156525759396481359'>
<a name='c8156525759396481359'></a>
<a href='https://www.blogger.com/profile/17700414222186772120' rel='nofollow'>Ariel Flesler</a>
said...
</dt>
<dd class='comment-body'>
<p>Hi Pistos<BR/><BR/>Thanks for having a demo right away, I tried it and indeed, it didn't work.<BR/>I tried adding a doctype, and the problem was gone. This is some wicked issue of the browser.<BR/><BR/>Try adding one, right before the &lt;html&gt;.<BR/><A HREF="http://www.w3schools.com/tags/tag_doctype.asp" REL="nofollow">HERE</A> you have many. I'd advice you to use XHTML Transitional.<BR/><BR/>Cheers</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1204911960000#c8156525759396481359' title='comment permalink'>
March 7, 2008 at 3:46 PM
</a>
<span class='item-control blog-admin pid-2014546588'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=8156525759396481359' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author ' id='c608145374436896848'>
<a name='c608145374436896848'></a>
<a href='http://blog.purepistos.net' rel='nofollow'>Pistos</a>
said...
</dt>
<dd class='comment-body'>
<p>Okay, that helps for Firefox, but then it breaks Opera.  But that's okay for our purposes, we can ignore Opera breakage.<BR/><BR/>Thank you for the fast and helpful response.</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1204921980000#c608145374436896848' title='comment permalink'>
March 7, 2008 at 6:33 PM
</a>
<span class='item-control blog-admin pid-1571160233'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=608145374436896848' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author ' id='c911027675909538441'>
<a name='c911027675909538441'></a>
<a href='http://thegreycoin.livejournal.com/' rel='nofollow'>thegreycoin</a>
said...
</dt>
<dd class='comment-body'>
<p>Great plugin, very useful stuff...<BR/><BR/>I was wondering, however, if it's possible to use this plugin for dynamic content. I'm kind of a newbie at jQuery, so forgive me if my question sounds silly... but for example, say I'm creating a chat-like web app with large amounts of continuously updated content: so it's a fixed-size div with dynamic scrolling height that increases every time content is added. I basically just want a way to keep the focus on the bottom of the content in the div, so the user is always viewing the most recently appended content. <BR/><BR/>I have been able to do this using straight-up Javascript by taking advantage of the scrollHeight and scrollTop properties. However, I would like to integrate this with other jQuery animations and whatnot that I'm using, and have been having a lot of trouble.<BR/><BR/>Is there an easy way of doing this with this plugin? or with any other plugin you know of? I've scoured the web for the past two days looking for a solution to this problem, but have come up empty.<BR/><BR/>Thanks a ton!</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1208974380000#c911027675909538441' title='comment permalink'>
April 23, 2008 at 3:13 PM
</a>
<span class='item-control blog-admin pid-1045063017'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=911027675909538441' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author blog-author' id='c6795634199624981547'>
<a name='c6795634199624981547'></a>
<a href='https://www.blogger.com/profile/17700414222186772120' rel='nofollow'>Ariel Flesler</a>
said...
</dt>
<dd class='comment-body'>
<p>Hi<BR/><BR/>This plugin can handle that situation. It makes all the calculations, each time you call it, so dynamic content is just fine.<BR/><BR/>There's no specific method to scroll to the end.<BR/>But if you scroll over the bottom limit, it will make your number shorter.<BR/>That means that:<BR/><BR/>$('#pane').scrollTo( 99999, 1000 );<BR/><BR/>should work just fine, make that number as high as you want.</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1208974800000#c6795634199624981547' title='comment permalink'>
April 23, 2008 at 3:20 PM
</a>
<span class='item-control blog-admin pid-2014546588'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=6795634199624981547' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author ' id='c7906217581538447630'>
<a name='c7906217581538447630'></a>
<a href='http://kunder.jauda.no' rel='nofollow'>Håvard</a>
said...
</dt>
<dd class='comment-body'>
<p>hmm.. doesen't get the negative over value to work.. would be nice to have it scroll down to about 200px over the content i want to show.<BR/><BR/>you can see the stuff im working on at the url</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1209399720000#c7906217581538447630' title='comment permalink'>
April 28, 2008 at 1:22 PM
</a>
<span class='item-control blog-admin pid-1540282219'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=7906217581538447630' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author blog-author' id='c7641591803727034738'>
<a name='c7641591803727034738'></a>
<a href='https://www.blogger.com/profile/17700414222186772120' rel='nofollow'>Ariel Flesler</a>
said...
</dt>
<dd class='comment-body'>
<p>Hi Håvard<BR/><BR/>You <B>can</B> use negative 'over'.<BR/>What you can't do (browser restriction) is to scroll over thel limits, so you can't go above the start.<BR/><BR/>If you want a fixed margin (200px you said), you can use 'offset' instead.</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1209403680000#c7641591803727034738' title='comment permalink'>
April 28, 2008 at 2:28 PM
</a>
<span class='item-control blog-admin pid-2014546588'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=7641591803727034738' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author ' id='c3497323552398298238'>
<a name='c3497323552398298238'></a>
<a href='http://kunder.jauda.no' rel='nofollow'>Håvard</a>
said...
</dt>
<dd class='comment-body'>
<p>Thanks a lot.! nice plugin!! :D</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1209408420000#c3497323552398298238' title='comment permalink'>
April 28, 2008 at 3:47 PM
</a>
<span class='item-control blog-admin pid-42971755'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=3497323552398298238' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author ' id='c5150123226535007521'>
<a name='c5150123226535007521'></a>
andy
said...
</dt>
<dd class='comment-body'>
<p>Ariel,<BR/><BR/>What I was saying is that SerialScroller works well if you've got a div with 20 images in it. <BR/><BR/>What I've got instead is a div with a bunch of random html inside of it, which I want to scroll through 900px at a time.  As I understood SerialScroller, you have to specify your "items" which you want to scroll through.  I don't have a regular list of "items" in my code.<BR/><BR/>Since my scrolling isn't item-based but rather distance-based (like 900px at a time), I didn't think it was applicable to me.</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1209668040000#c5150123226535007521' title='comment permalink'>
May 1, 2008 at 3:54 PM
</a>
<span class='item-control blog-admin pid-2075979539'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=5150123226535007521' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author blog-author' id='c468034959365920881'>
<a name='c468034959365920881'></a>
<a href='https://www.blogger.com/profile/17700414222186772120' rel='nofollow'>Ariel Flesler</a>
said...
</dt>
<dd class='comment-body'>
<p>Right, got it.<BR/>That's easy. You do:<BR/><BR/>$('#prev').click(function(){<BR/>&nbsp;&nbsp;$('#pane').scrollTo('-=900');<BR/>});<BR/><BR/>That's to scroll left or up. Use += for right/bottom.<BR/>Of course you can specify speed, and any other setting.</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1209670740000#c468034959365920881' title='comment permalink'>
May 1, 2008 at 4:39 PM
</a>
<span class='item-control blog-admin pid-2014546588'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=468034959365920881' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author ' id='c6993667215580411088'>
<a name='c6993667215580411088'></a>
Anonymous
said...
</dt>
<dd class='comment-body'>
<p>Brilliant! This plug-in has saved me 3 days work ;)<BR/><BR/>If I was going to make a suggestion (beg for a feature) I'd split the 'easing' into two, so that you can have an 'easeIn' and 'easeOut' - That would make it really smart :)</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1213872120000#c6993667215580411088' title='comment permalink'>
June 19, 2008 at 7:42 AM
</a>
<span class='item-control blog-admin pid-966890336'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=6993667215580411088' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author blog-author' id='c3253417093659719981'>
<a name='c3253417093659719981'></a>
<a href='https://www.blogger.com/profile/17700414222186772120' rel='nofollow'>Ariel Flesler</a>
said...
</dt>
<dd class='comment-body'>
<p>Hi<BR/><BR/>The easing setting is just passed on to jQuery.animate() so I won't be changing much of that.<BR/><BR/>If you haven't yet, you should check the <A HREF="http://gsgd.co.uk/sandbox/jquery/easing/" REL="nofollow">easing plugin</A>.</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1213884180000#c3253417093659719981' title='comment permalink'>
June 19, 2008 at 11:03 AM
</a>
<span class='item-control blog-admin pid-2014546588'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=3253417093659719981' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author ' id='c4667457352804084910'>
<a name='c4667457352804084910'></a>
Anonymous
said...
</dt>
<dd class='comment-body'>
<p>Hi,<BR/>I am using this <BR/>where 'bo' is tbody and table is the table and rowid is id which i pass dynamically. <BR/><BR/>$('#bo').($("#table #"+rowId));<BR/><BR/>This is not working in IE. Can any one help me on this.<BR/>_thanks in advance</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1214414700000#c4667457352804084910' title='comment permalink'>
June 25, 2008 at 2:25 PM
</a>
<span class='item-control blog-admin pid-26250171'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=4667457352804084910' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author blog-author' id='c1123969356050861679'>
<a name='c1123969356050861679'></a>
<a href='https://www.blogger.com/profile/17700414222186772120' rel='nofollow'>Ariel Flesler</a>
said...
</dt>
<dd class='comment-body'>
<p>Scrolling tbodys isn't possible on IE.<BR/>I think there are some hacky alternatives out there...</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1214417580000#c1123969356050861679' title='comment permalink'>
June 25, 2008 at 3:13 PM
</a>
<span class='item-control blog-admin pid-2014546588'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=1123969356050861679' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author ' id='c6138719449037442901'>
<a name='c6138719449037442901'></a>
<a href='http://blog.pengoworks.com/' rel='nofollow'>Dan G. Switzer, II</a>
said...
</dt>
<dd class='comment-body'>
<p>@Ariel:<BR/><BR/>Any tips for preventing scrolling if the element is already in the viewport? I'd prefer not to do the scrolling if the element is already visible.</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1214857200000#c6138719449037442901' title='comment permalink'>
June 30, 2008 at 5:20 PM
</a>
<span class='item-control blog-admin pid-1999214003'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=6138719449037442901' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author blog-author' id='c1480352580137396056'>
<a name='c1480352580137396056'></a>
<a href='https://www.blogger.com/profile/17700414222186772120' rel='nofollow'>Ariel Flesler</a>
said...
</dt>
<dd class='comment-body'>
<p>Hi Dan<BR/><BR/>Try something like this:<BR/>http://flesler.pastebin.com/f6fd4efc9<BR/><BR/>You probably want only the vertical part.<BR/>The code I gave you only handles "below the fold".<BR/>That is, it doesn't check whether the element is actually above the fold.<BR/>You'll surely figure it out if you need that ;)</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1214857860000#c1480352580137396056' title='comment permalink'>
June 30, 2008 at 5:31 PM
</a>
<span class='item-control blog-admin pid-2014546588'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=1480352580137396056' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author ' id='c54111154417316841'>
<a name='c54111154417316841'></a>
<a href='http://blog.pengoworks.com/' rel='nofollow'>Dan G. Switzer, II</a>
said...
</dt>
<dd class='comment-body'>
<p>@Ariel:<BR/><BR/>I've got some code from another project I wrote, that I may just isolate into a plug-in of itself. While $.ScrollTo works great, it really doesn't have the behavior I was looking for. Technically, I want to make sure the element is in the viewport. So if it's already completely visible, I don't want to scroll at all. If only a small portion of the element is hidden, I just want to scroll to get the element fully visible.</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1214913840000#c54111154417316841' title='comment permalink'>
July 1, 2008 at 9:04 AM
</a>
<span class='item-control blog-admin pid-1445964550'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=54111154417316841' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author blog-author' id='c8050017972481954814'>
<a name='c8050017972481954814'></a>
<a href='https://www.blogger.com/profile/17700414222186772120' rel='nofollow'>Ariel Flesler</a>
said...
</dt>
<dd class='comment-body'>
<p>Dan<BR/><BR/>You can make that a formal plugin, that uses $.scrollTo (if you want).</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1214925540000#c8050017972481954814' title='comment permalink'>
July 1, 2008 at 12:19 PM
</a>
<span class='item-control blog-admin pid-2014546588'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=8050017972481954814' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author ' id='c3497197911195282325'>
<a name='c3497197911195282325'></a>
<a href='http://www.roundus.com' rel='nofollow'>Zachary Abresch</a>
said...
</dt>
<dd class='comment-body'>
<p>I love this plug-in. It allowed us to implement an interface idea without having to do the heavy lifting. I have one question though. When using the $(container).trigger('goto',[0]); is there a way to use a different duration for that scroll? I want the scroll to be super quick when going to the start but I use a duration:2000 for normal next and previous scrolling.</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1217043960000#c3497197911195282325' title='comment permalink'>
July 26, 2008 at 12:46 AM
</a>
<span class='item-control blog-admin pid-190023207'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=3497197911195282325' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author blog-author' id='c8195718364738622714'>
<a name='c8195718364738622714'></a>
<a href='https://www.blogger.com/profile/17700414222186772120' rel='nofollow'>Ariel Flesler</a>
said...
</dt>
<dd class='comment-body'>
<p>Hi Zachary<BR/><BR/>That is actually SerialScroll, this plugin (ScrollTo) is used underneath.<BR/>Now the answer: you can't, but you'll probably get the desired effect if you set the option 'constant' to false.</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1217047800000#c8195718364738622714' title='comment permalink'>
July 26, 2008 at 1:50 AM
</a>
<span class='item-control blog-admin pid-2014546588'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=8195718364738622714' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author ' id='c6526418051736939231'>
<a name='c6526418051736939231'></a>
<a href='https://www.blogger.com/profile/13058917493057928790' rel='nofollow'>alan</a>
said...
</dt>
<dd class='comment-body'>
<p>Really cool plug in. Even javascript ignorant persons like me can use it quite easy. The only problem that i cant get past is that scrolling whole window with double axis seems not to work. It only scrolls window to x or y axis (whichever is last in axis config) and then stops. Is it bug or am i just too damn stupid?</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1219068840000#c6526418051736939231' title='comment permalink'>
August 18, 2008 at 11:14 AM
</a>
<span class='item-control blog-admin pid-1269655089'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=6526418051736939231' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author blog-author' id='c5388959500363159209'>
<a name='c5388959500363159209'></a>
<a href='https://www.blogger.com/profile/17700414222186772120' rel='nofollow'>Ariel Flesler</a>
said...
</dt>
<dd class='comment-body'>
<p>Can you provide an online demo of the problem ?</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1219095780000#c5388959500363159209' title='comment permalink'>
August 18, 2008 at 6:43 PM
</a>
<span class='item-control blog-admin pid-2014546588'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=5388959500363159209' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author ' id='c8465350882415967529'>
<a name='c8465350882415967529'></a>
<a href='https://www.blogger.com/profile/13058917493057928790' rel='nofollow'>alan</a>
said...
</dt>
<dd class='comment-body'>
<p>There it is: http://www.frukt.ee/public/alan/html/index.html<BR/><BR/>Thats the page where i learn and test javascript and jqueri</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1219138260000#c8465350882415967529' title='comment permalink'>
August 19, 2008 at 6:31 AM
</a>
<span class='item-control blog-admin pid-1269655089'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=8465350882415967529' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author ' id='c8198363265008510273'>
<a name='c8198363265008510273'></a>
<a href='https://www.blogger.com/profile/02535910408735347877' rel='nofollow'>buildakicker</a>
said...
</dt>
<dd class='comment-body'>
<p>Hi Ariel,<BR/><BR/>Thanks for putting this up. I have been playing with it for a while. I have a question:<BR/><BR/>can I have it set up so that I can have it scroll to one place then to click on a link and have it scroll to another without going to the .eq(0) element first? Just fluid like?<BR/><BR/>Thanks!</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1219362180000#c8198363265008510273' title='comment permalink'>
August 21, 2008 at 8:43 PM
</a>
<span class='item-control blog-admin pid-541757729'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=8198363265008510273' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author blog-author' id='c6037179959325539435'>
<a name='c6037179959325539435'></a>
<a href='https://www.blogger.com/profile/17700414222186772120' rel='nofollow'>Ariel Flesler</a>
said...
</dt>
<dd class='comment-body'>
<p>Hi Buildakicker<BR/><BR/>I'm not sure I'm getting this well. Are you talking about the behavior from the demo ?<BR/>In the demo, I added a call to a reset function, that returns to start. That's there just for the demo.<BR/>If you call $().scrollTo() normally it will jump from one place to the other.</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1219368180000#c6037179959325539435' title='comment permalink'>
August 21, 2008 at 10:23 PM
</a>
<span class='item-control blog-admin pid-2014546588'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=6037179959325539435' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author ' id='c888575881222478049'>
<a name='c888575881222478049'></a>
<a href='https://www.blogger.com/profile/00872484430563570108' rel='nofollow'>Eric Corriel</a>
said...
</dt>
<dd class='comment-body'>
<p>I'm having trouble getting scrollTo to work going horizontally on divs where style="position:relative;float:left".  This page illustrates what specifically isn't working:<BR/><BR/>http://www.ericcorriel.com/test/test.scroll4.html<BR/><BR/>Any help would be greatly appreciated.  Thank you.</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1219731180000#c888575881222478049' title='comment permalink'>
August 26, 2008 at 3:13 AM
</a>
<span class='item-control blog-admin pid-958689752'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=888575881222478049' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author ' id='c7365844110035318453'>
<a name='c7365844110035318453'></a>
<a href='https://www.blogger.com/profile/07549591615612287932' rel='nofollow'>Håvard Fossli</a>
said...
</dt>
<dd class='comment-body'>
<p>hi. great plugin. works very nicely in camino, fx etc.<BR/>but it's not working in opera and safari. <BR/><BR/>could you take a look at this?<BR/><BR/>without hash:true<BR/>http://alltidmuligheter.no/dev/scrollto.html<BR/><BR/>with hash:true<BR/>http://alltidmuligheter.no/dev/scrolltowhashtrue.html<BR/><BR/>it's aligning to the right and stuff in opera and safari and also going to the beginning every time.<BR/><BR/>i used position:absolute; on the elements. also tried with float:left margin and stuff..<BR/><BR/>any ideas what i'm doing wrong (if i am)??</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1219748100000#c7365844110035318453' title='comment permalink'>
August 26, 2008 at 7:55 AM
</a>
<span class='item-control blog-admin pid-1500083177'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=7365844110035318453' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author ' id='c4628439750095926281'>
<a name='c4628439750095926281'></a>
<a href='https://www.blogger.com/profile/15717048167492417435' rel='nofollow'>Sexfilms</a>
said...
</dt>
<dd class='comment-body'>
<p>hello,<BR/><BR/>Was wondering what i would need to run scrollTo, with the next thing.<BR/><BR/>I have a box just like in the example i have images in it with width and height set to 100% and now i want them to scroll so when i press the link for photo 1 that foto scrolls in the foto div. etc etc</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1219756560000#c4628439750095926281' title='comment permalink'>
August 26, 2008 at 10:16 AM
</a>
<span class='item-control blog-admin pid-2084837588'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=4628439750095926281' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author blog-author' id='c4553279252039028941'>
<a name='c4553279252039028941'></a>
<a href='https://www.blogger.com/profile/17700414222186772120' rel='nofollow'>Ariel Flesler</a>
said...
</dt>
<dd class='comment-body'>
<p>@eric<BR/>The scrolled element needs to have overflow (auto|hidden|visible) and fixed dimensions (width|height).<BR/><BR/>@sexfilms<BR/>You should use LocalScroll, linking by href (#id).<BR/>Or SerialScroll, using the option 'navigation' which relates by index.<BR/><BR/>Both plugins are available and documented on this blog, check the demos.<BR/><BR/>@havard<BR/><BR/>It's working fine for me on Opera 9.25. You can't scroll the window beyond the limits, so the last element cannot be left aligned unless you enlarge the body.</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1219771380000#c4553279252039028941' title='comment permalink'>
August 26, 2008 at 2:23 PM
</a>
<span class='item-control blog-admin pid-2014546588'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=4553279252039028941' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author ' id='c410471991214533684'>
<a name='c410471991214533684'></a>
<a href='https://www.blogger.com/profile/00872484430563570108' rel='nofollow'>Eric Corriel</a>
said...
</dt>
<dd class='comment-body'>
<p>Thank you Ariel.  You are clearly a positive force on the internet.</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1219802040000#c410471991214533684' title='comment permalink'>
August 26, 2008 at 10:54 PM
</a>
<span class='item-control blog-admin pid-958689752'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=410471991214533684' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author blog-author' id='c8948411860649007385'>
<a name='c8948411860649007385'></a>
<a href='https://www.blogger.com/profile/17700414222186772120' rel='nofollow'>Ariel Flesler</a>
said...
</dt>
<dd class='comment-body'>
<p>Thanks a bunch for donation Eric!! much appreciated :)</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1219804680000#c8948411860649007385' title='comment permalink'>
August 26, 2008 at 11:38 PM
</a>
<span class='item-control blog-admin pid-2014546588'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=8948411860649007385' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author ' id='c6204173540321572292'>
<a name='c6204173540321572292'></a>
<a href='https://www.blogger.com/profile/06732034672540680463' rel='nofollow'>iKindred</a>
said...
</dt>
<dd class='comment-body'>
<p>Ariel: Felicitaciones por este plugin fabuloso que hiciste, me sorprendió mucho saber que habia sido programado por un compatriota :)<BR/><BR/>Muchas gracias, Saludos!</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1222524600000#c6204173540321572292' title='comment permalink'>
September 27, 2008 at 11:10 AM
</a>
<span class='item-control blog-admin pid-1454732235'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=6204173540321572292' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author blog-author' id='c3739608077514430719'>
<a name='c3739608077514430719'></a>
<a href='https://www.blogger.com/profile/17700414222186772120' rel='nofollow'>Ariel Flesler</a>
said...
</dt>
<dd class='comment-body'>
<p>Muchas gracias :)</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1222531080000#c3739608077514430719' title='comment permalink'>
September 27, 2008 at 12:58 PM
</a>
<span class='item-control blog-admin pid-2014546588'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=3739608077514430719' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author ' id='c6740794230590259744'>
<a name='c6740794230590259744'></a>
Michael
said...
</dt>
<dd class='comment-body'>
<p>Very nice Plugin, but I have difficulties scrolling 2 windows at the same time. I have a small scrollable thumb bar and a large contend div. I have arrows for the small and the big box. I want, that if I scroll the small box, also the big box moves some pixels. <BR/><BR/>My code:<BR/><I>var $paneTarget = $('#referenzenhaupt');<BR/> var $paneTargetb = $('#thumbshaupt');   <BR/> <BR/> $('#nachlinks').click(function(){<BR/>  $paneTarget.scrollTo( {left:'-=738'}, 800, { <BR/>   onAfter:function(){<BR/>    $paneTargetb.scrollTo( {left:'-=107'}, 800); <BR/>   }<BR/>  });<BR/> }); </I><BR/><BR/>It works, but the OnAfter Funktion moves twice. I would like them to move at the same time, but that did not work for me.<BR/><BR/>Can somebody give me an advice please.</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1234196820000#c6740794230590259744' title='comment permalink'>
February 9, 2009 at 2:27 PM
</a>
<span class='item-control blog-admin pid-1349777181'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=6740794230590259744' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author blog-author' id='c5322979071890307918'>
<a name='c5322979071890307918'></a>
<a href='https://www.blogger.com/profile/17700414222186772120' rel='nofollow'>Ariel Flesler</a>
said...
</dt>
<dd class='comment-body'>
<p>@Michael<BR/><BR/>Why not just put both calls to scrollTo one after the other ?<BR/>The callback being called twice sounds bad, do you have a demo online ? are you using scrollTo 1.4 ?</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1234818540000#c5322979071890307918' title='comment permalink'>
February 16, 2009 at 7:09 PM
</a>
<span class='item-control blog-admin pid-2014546588'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=5322979071890307918' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author ' id='c5115900161127203109'>
<a name='c5115900161127203109'></a>
<a href='http://www.realmaker.de' rel='nofollow'>Michael</a>
said...
</dt>
<dd class='comment-body'>
<p>Hello Ariel,<BR/><BR/>$('#nachlinks').click(function(){<BR/>  $paneTarget.stop().scrollTo( {left:'-=738'}, 800 );<BR/>$paneTargetb.stop().scrollTo( {left:'-=100'}, 800 );<BR/>});<BR/><BR/>does not work.<BR/><BR/>I had to remove the onAfter because IE stops working when pressing the button the first time.<BR/><BR/>How can I get "parallel" scrolling to work?<BR/>The demo you can see on www.realmaker.de/referenzen.php</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1234879560000#c5115900161127203109' title='comment permalink'>
February 17, 2009 at 12:06 PM
</a>
<span class='item-control blog-admin pid-1620907413'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=5115900161127203109' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author ' id='c665032512210964643'>
<a name='c665032512210964643'></a>
Michael
said...
</dt>
<dd class='comment-body'>
<p>P.S.<BR/>Yes I am using scrollTo 1.4.</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1234945080000#c665032512210964643' title='comment permalink'>
February 18, 2009 at 6:18 AM
</a>
<span class='item-control blog-admin pid-391665001'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=665032512210964643' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author blog-author' id='c932544074102833328'>
<a name='c932544074102833328'></a>
<a href='https://www.blogger.com/profile/17700414222186772120' rel='nofollow'>Ariel Flesler</a>
said...
</dt>
<dd class='comment-body'>
<p>Hi Michael<BR/><BR/>As the docs/demo say. To scroll horizontally, you need to play with the setting 'axis'. So make it something like this:<BR/><BR/>$('#nachlinks').click(function(){<BR/>$paneTarget.stop().scrollTo( '-=738', 800, {axis:'x'} );<BR/>$paneTargetb.stop().scrollTo( '-=100', 800, {axis:'x'} );<BR/>return false;<BR/>});</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1235616900000#c932544074102833328' title='comment permalink'>
February 26, 2009 at 12:55 AM
</a>
<span class='item-control blog-admin pid-2014546588'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=932544074102833328' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author ' id='c522655109130841854'>
<a name='c522655109130841854'></a>
<a href='https://www.blogger.com/profile/11905374477724297585' rel='nofollow'>Amir Hossein</a>
said...
</dt>
<dd class='comment-body'>
<p>Hello,<br />Thank you for this aesome plugin.<br />I have problem with easing setting and in fact it does&#39;t work!<br />For example:<br />$.scrollTo(&quot;#idName&quot;,3000,{easing:&#39;elasout&#39;});<br />The easing setting  doesn&#39;t work ,despite I added easing pluging in the head tag of my code!<br />Please tell me why?</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1286351657426#c522655109130841854' title='comment permalink'>
October 6, 2010 at 4:54 AM
</a>
<span class='item-control blog-admin pid-1021299373'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=522655109130841854' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author ' id='c2197923079220369483'>
<a name='c2197923079220369483'></a>
<a href='https://www.blogger.com/profile/01479890887524483917' rel='nofollow'>Niels Meijer</a>
said...
</dt>
<dd class='comment-body'>
<p>I can not make the plugin work in IE8, also the demo doesn&#39;t work for this browser??<br /><br />I think the click event isn&#39;t working. when I use an alert instead of scrolling it does&#39;nt work either.<br /><br />All other browsers do work fine.<br />Please help!</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1290064456623#c2197923079220369483' title='comment permalink'>
November 18, 2010 at 4:14 AM
</a>
<span class='item-control blog-admin pid-577037119'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=2197923079220369483' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author ' id='c6858067634532240262'>
<a name='c6858067634532240262'></a>
<a href='https://www.blogger.com/profile/08533092307103437405' rel='nofollow'>jase</a>
said...
</dt>
<dd class='comment-body'>
<p>First of all, you are my hero. I have been trying (unsuccessfully) to code something similar to this, but much much more clunky and miserable. You have saved me months of work at this rate.<br /><br />I think I have a pretty good understanding of your ajax demo, but I was wondering if it is plausible to bind a single class to all content links and have the script check to see if the link is local or if the content needs to be loaded. <br /><br />In your current demo for Ajax, you separate the logic between ajax-loading links and &quot;local links&quot; which is terrific for almost everything. I would just like to be able to have a menu with links from 5 different &quot;sections&quot; (as you called them in your LocalScroll Ajax demo&quot; and numerous &quot;subs&quot; in each section..<br /><br /><br />So the side menu would look like:<br /><br />SECTION ONE<br />  sub one<br />  sub two<br />  sub three<br /><br />SECTION TWO <br />  sub one<br />  sub two<br />  sub three<br /><br />and clicking on the SECTION TWO sub three link would know to load SECTION TWO (even if SECTION ONE was currently loaded) and then display sub three of SECTION TWO?<br /><br />If I&#39;m not making sense, I apologize. If I have dynamically loaded SECTION ONE and need to provide an inline link to a separate section AND subsection, it would be nice to just have the href indicate the full URL like href=&quot;SECTIONONE.html#subthree&quot; and if the locally loaded content is SECTIONONE.html, scroll to #subthree, if not, load SECTIONONE (and before displaying it, set the position to #subthree) and then swap the old content for the new.<br /><br />I know you wrote this forever ago, and I won&#39;t be upset if you can&#39;t/don&#39;t answer. Just know that you have REALLY helped me out a lot. Thanks either way!</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1298753675113#c6858067634532240262' title='comment permalink'>
February 26, 2011 at 5:54 PM
</a>
<span class='item-control blog-admin pid-269687394'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=6858067634532240262' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author ' id='c2389152468599867069'>
<a name='c2389152468599867069'></a>
<a href='https://www.blogger.com/profile/12727629066073786682' rel='nofollow'>appleLisa</a>
said...
</dt>
<dd class='comment-body'>
<p>Hi,<br /><br />I have read thru the comments &amp; haven&#39;t found anything for the absolute beginner.<br /><br />with localScroll i tried:<br />  $(&#39;#proj&#39;).localScroll({<br /> target: &#39;#projectsp1&#39;,<br /> axis: &#39;x&#39;,<br /> lazy: &#39;true&#39;,<br /> hash: &#39;true&#39;,<br />        easing:  &#39;easeInOutCirc&#39;,<br />  <br />});<br /><br />each nav item in the HTML has an id. i am trying to horizontally scroll entire pages (one wrapper broken down into many div pages)<br /><br />I have both localScroll &amp; scrollTo in the head along with jquery easing. unable to get easing to work, either. <br /><br />could really use some help. Thank you so much!!</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1315424850706#c2389152468599867069' title='comment permalink'>
September 7, 2011 at 4:47 PM
</a>
<span class='item-control blog-admin pid-1389511567'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=2389152468599867069' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author ' id='c6217574072332815922'>
<a name='c6217574072332815922'></a>
<a href='https://www.blogger.com/profile/09738478108225743025' rel='nofollow'>zimurg</a>
said...
</dt>
<dd class='comment-body'>
<p>Hello,<br /><br />I&#39;m building a dynamic page with horizontal scrolling. I used ScroolTo script.<br /><br />I was wondering how to set the end of scrolling forward. because it is scrolling infinitely.<br /><br />http://www.magistrala.org/index1.php<br /><br />tnx,<br /><br />zi</p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1329219227923#c6217574072332815922' title='comment permalink'>
February 14, 2012 at 8:33 AM
</a>
<span class='item-control blog-admin pid-148675559'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=6217574072332815922' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
<dt class='comment-author ' id='c3782907657450135304'>
<a name='c3782907657450135304'></a>
<a href='https://www.blogger.com/profile/03180578323607685485' rel='nofollow'>Angel Outon</a>
said...
</dt>
<dd class='comment-body'>
<p>Ariel, buen día.<br /><br />I am trying to do do  a page using your fantastic script. The idea is to have a 3x3 sections (working fine). My issue and I  hop you have the chance to help me with is I like to start in the middle (box 5) instead of the top (box 1)<br /><br />Is there a way to do this?  I tried the following just after doe { in document. ready:<br /><br />$(&#39;#wrapper&#39;).scrollTo($(&#39;a-inicio&#39;).attr(&#39;href&#39;), 10); <br /><br />but this just messed up everything and the console marked an error and no scrolling at all.<br /><br />Gacias por tu tiempo.<br /></p>
</dd>
<dd class='comment-footer'>
<span class='comment-timestamp'>
<a href='http://flesler.blogspot.com/2007/10/jqueryscrollto.html?showComment=1352741118763#c3782907657450135304' title='comment permalink'>
November 12, 2012 at 2:25 PM
</a>
<span class='item-control blog-admin pid-925648785'>
<a class='comment-delete' href='https://www.blogger.com/delete-comment.g?blogID=8640596986273216089&postID=3782907657450135304' title='Delete Comment'>
<img src='//www.blogger.com/img/icon_delete13.gif'/>
</a>
</span>
</span>
</dd>
</dl>
<p class='comment-footer'>
<a href='https://www.blogger.com/comment.g?blogID=8640596986273216089&amp;postID=8211605211968606133'>
Post a Comment
</a>
<strong class='marleft'>
<u>To get help prepare a demo.</u></strong>
</p>
<div id='backlinks-container'>
<div id='Blog1_backlinks-container'>
<a name='links'></a><h4>
</h4>
<p class='comment-footer'>
<a class='comment-link' href='' id='Blog1_backlinks-create-link' target='_blank'>
</a>
</p>
</div>
</div>
</div>
</div>
<div class='blog-pager' id='blog-pager'>
<span id='blog-pager-newer-link'>
<a class='blog-pager-newer-link' href='http://flesler.blogspot.co.uk/2007/10/jquerybubble.html' id='Blog1_blog-pager-newer-link' title='Newer Post'>Newer Post</a>
</span>
<span id='blog-pager-older-link'>
<a class='blog-pager-older-link' href='http://flesler.blogspot.co.uk/2007/10/jquerylisten.html' id='Blog1_blog-pager-older-link' title='Older Post'>Older Post</a>
</span>
<a class='home-link' href='http://flesler.blogspot.co.uk/'>Home</a>
</div>
<div class='clear'></div>
<div class='post-feeds'>
<div class='feed-links'>
Subscribe to:
<a class='feed-link' href='http://flesler.blogspot.com/feeds/8211605211968606133/comments/default' target='_blank' type='application/atom+xml'>Post Comments (Atom)</a>
</div>
</div>
</div></div>
</div>
<div id='sidebar-wrapper'>
<div class='sidebar section' id='sidebar'><div class='widget HTML' id='HTML3'>
<h2 class='title'>By Category</h2>
<div class='widget-content'>
<ul id="categories-list">
<li><h3 onclick="amf_togglePanel(this)">General</h3>
<ul>
<li><a href="http://flesler.blogspot.com/2008/04/benchmarking-javascript-variables-and.html">Benchmarking JS variables</a></li>
<li><a href="http://flesler.blogspot.com/2008/02/feedback.html">Feedback</a></li>
<li><a href="http://flesler.blogspot.com/2008/06/jquery-is-on-fire.html">jQuery is on fire!</a></li>
<li><a href="http://flesler.blogspot.com/2008/07/moving-demos-to-demosfleslercom.html">Moving demos to demos.flesler.com</a></li>
<li><a href="http://flesler.blogspot.com/2009/06/moving-my-plugins-to-google-code.html">Moving my plugins to Google Code</a></li>
</ul>
</li>
<li><h3 onclick="amf_togglePanel(this)">jQuery Plugins</h3>
<ul>
<li>
<a href="http://flesler.blogspot.com/2007/12/jqueryaccessible.html">Accessible</a>
</li>
<li>
<a href="http://flesler.blogspot.com/2009/05/2-ajax-plugins-for-jquery-13.html">AjaxFilter</a>
</li>
<li>
<a href="http://flesler.blogspot.com/2007/10/jquerybubble.html">Bubble</a>
</li>
<li><a href="http://flesler.blogspot.com/2008/01/jquerycollection.html">Collection</a></li>
<li><a href="http://flesler.blogspot.com/2008/04/jqueryfasttrigger.html">FastTrigger</a></li>
<li>
<a href="http://flesler.blogspot.com/2007/10/jquerylisten.html">Listen</a>(
<a href="http://flesler.blogspot.com/search/label/jQuery.Listen">all</a>
)
</li>
<li>
<a href="http://flesler.blogspot.com/2007/10/jquerylocalscroll-10.html">LocalScroll</a>(
<a href="http://flesler.blogspot.com/search/label/jQuery.LocalScroll">all</a>
)
</li>
<li>
<a href="http://flesler.blogspot.com/2008/04/jquerymodularize.html">Modularize</a>
</li>
<li>
<a href="http://flesler.blogspot.com/2008/01/jquerypreload.html">Preload</a>
</li>
<li>
<a href="http://flesler.blogspot.com/2007/11/jqueryrule.html">Rule</a>(
<a href="http://flesler.blogspot.com/search/label/jQuery.Rule">all</a>
)
</li>
<li>
<a href="http://flesler.blogspot.com/2007/10/jqueryscrollshow.html">ScrollShow</a>
</li>
<li>
<a href="http://flesler.blogspot.com/2007/10/jqueryscrollto.html">ScrollTo</a>(
<a href="http://flesler.blogspot.com/search/label/jQuery.ScrollTo">all</a>
)
</li>
<li>
<a href="http://flesler.blogspot.com/2008/02/jqueryserialscroll.html">SerialScroll</a>(
<a href="http://flesler.blogspot.com/search/label/jQuery.SerialScroll">all</a>
)
</li>
<li><a href="http://flesler.blogspot.com/2008/03/string-tokenizer-for-javascript.html">Tokenizer</a>
</li>
<li>
<a href="http://flesler.blogspot.com/2009/05/2-ajax-plugins-for-jquery-13.html">XHR</a>
</li>
</ul>
</li>
	<li><h3 onclick="amf_togglePanel(this)">Scripts</h3>
		<ul>
<li><a href="http://flesler.blogspot.com/2008/11/fast-trim-function-for-javascript.html">Fast Trim Function for Javascript</a></li>
<li><a href="http://flesler.blogspot.com/2008/11/haskell-functions-for-javascript.html">Haskell Functions for Javascript</a></li>
<li><a href="http://flesler.blogspot.com/2008/06/jsclass.html">jsClass</a></li>
			<li><a href="http://flesler.blogspot.com/2007/12/javascript-console-for-maxthon-jscm-200.html">JS Console For Maxthon</a></li>
			<li><a href="http://flesler.blogspot.com/2008/05/jsdump-pretty-dump-of-any-javascript.html">jsDump</a></li>
			<li><a href="http://flesler.blogspot.com/2008/02/rotator.html">Rotator</a></li>
			<li><a href="http://flesler.blogspot.com/2007/11/static-methods-for-array.html">Static methods for Array</a></li>
			<li><a href="http://flesler.blogspot.com/2008/03/string-tokenizer-for-javascript.html">String Tokenizer for JS</a></li>
			<li><a href="http://flesler.blogspot.com/2008/05/textnode-translator-for-javascript.html">Translator</a></li>
  <li><a href="http://flesler.blogspot.com/2008/03/xmlwriter-for-javascript.html">XMLWriter</a></li>

		</ul>
	</li>
</ul>
</div>
<div class='clear'></div>
<span class='widget-item-control'>
<span class='item-control blog-admin'>
<a class='quickedit' href='//www.blogger.com/rearrange?blogID=8640596986273216089&widgetType=HTML&widgetId=HTML3&action=editWidget&sectionId=sidebar' onclick='return _WidgetManager._PopupConfig(document.getElementById("HTML3"));' target='configHTML3' title='Edit'>
<img alt='' height='18' src='//img1.blogblog.com/img/icon18_wrench_allbkg.png' width='18'/>
</a>
</span>
</span>
<div class='clear'></div>
</div><div class='widget HTML' id='HTML9'>
<h2 class='title'>Donate to my blog</h2>
<div class='widget-content'>
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" style="text-align:center">
<input type="hidden" name="cmd" value="_donations" />
<input type="hidden" name="business" value="6X9ASFL47ZK52" />
<input type="hidden" name="lc" value="US" />
<input type="hidden" name="item_name" value="Donate to Ariel Flesler" />
<input type="hidden" name="currency_code" value="USD" />
<input type="hidden" name="bn" value="PP-DonationsBF:btn_donate_LG.gif:NonHostedGuest" />
<input type="image" src="https://www.paypalobjects.com/WEBSCR-640-20110401-1/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
<img alt="" border="0" src="https://www.paypalobjects.com/WEBSCR-640-20110401-1/es_XC/i/scr/pixel.gif" width="1" height="1" />
</form>
</div>
<div class='clear'></div>
<span class='widget-item-control'>
<span class='item-control blog-admin'>
<a class='quickedit' href='//www.blogger.com/rearrange?blogID=8640596986273216089&widgetType=HTML&widgetId=HTML9&action=editWidget&sectionId=sidebar' onclick='return _WidgetManager._PopupConfig(document.getElementById("HTML9"));' target='configHTML9' title='Edit'>
<img alt='' height='18' src='//img1.blogblog.com/img/icon18_wrench_allbkg.png' width='18'/>
</a>
</span>
</span>
<div class='clear'></div>
</div><div class='widget HTML' id='HTML6'>
<h2 class='title'>Recent</h2>
<div class='widget-content'>
<ul>
<li><a href="http://flesler.blogspot.com/2009/06/jqueryserialscroll-122-released.html">  jQuery.SerialScroll 1.2.2 released</a></li>
<li><a href="http://flesler.blogspot.com/2009/06/moving-my-plugins-to-google-code.html">Moving my plugins to Google Code</a></li>
<li><a href="http://flesler.blogspot.com/2009/05/2-ajax-plugins-for-jquery-13.html">2 Ajax plugins for jQuery +1.3</a></li>
<li><a href="http://flesler.blogspot.com/2009/05/jqueryscrollto-142-released.html">jQuery.ScrollTo 1.4.2 released</a></li>
<li><a href="http://flesler.blogspot.com/2009/03/jquerylocalscroll-127-released.html">jQuery.LocalScroll 1.2.7 released</a></li>
<li><a href="http://flesler.blogspot.com/2009/03/jqueryscrollto-141-released.html">jQuery.ScrollTo 1.4.1 released</a></li>
<li><a href="http://flesler.blogspot.com/2008/11/haskell-functions-for-javascript.html">Haskell Functions for Javascript</a></li>
<li><a href="http://flesler.blogspot.com/2008/11/fast-trim-function-for-javascript.html">Fast Trim Function for Javascript</a></li>
</ul>
</div>
<div class='clear'></div>
<span class='widget-item-control'>
<span class='item-control blog-admin'>
<a class='quickedit' href='//www.blogger.com/rearrange?blogID=8640596986273216089&widgetType=HTML&widgetId=HTML6&action=editWidget&sectionId=sidebar' onclick='return _WidgetManager._PopupConfig(document.getElementById("HTML6"));' target='configHTML6' title='Edit'>
<img alt='' height='18' src='//img1.blogblog.com/img/icon18_wrench_allbkg.png' width='18'/>
</a>
</span>
</span>
<div class='clear'></div>
</div><div class='widget HTML' id='HTML5'>
<h2 class='title'>Links</h2>
<div class='widget-content'>
<p class="sidelink"><img src="http://www.feedburner.com/fb/images/pub/feed-icon16x16.png"/><a href="http://feeds.feedburner.com/Flesler" rel="alternate" type="application/rss+xml">Subscribe to RSS</a></p>

<p class="sidelink"><img src="https://github.com/favicon.ico"/><a href="https://github.com/flesler">My Github profile</a></p>
</div>
<div class='clear'></div>
<span class='widget-item-control'>
<span class='item-control blog-admin'>
<a class='quickedit' href='//www.blogger.com/rearrange?blogID=8640596986273216089&widgetType=HTML&widgetId=HTML5&action=editWidget&sectionId=sidebar' onclick='return _WidgetManager._PopupConfig(document.getElementById("HTML5"));' target='configHTML5' title='Edit'>
<img alt='' height='18' src='//img1.blogblog.com/img/icon18_wrench_allbkg.png' width='18'/>
</a>
</span>
</span>
<div class='clear'></div>
</div><div class='widget HTML' id='HTML4'>
<h2 class='title'>Some sites using these scripts</h2>
<div class='widget-content'>
<p class="sidelink"><img src="http://www.engageinteractive.co.uk/images/favicon.ico" /><a href="http://www.engageinteractive.co.uk/">Engage Interactive</a>
</p>

<p class="sidelink"><img src="http://www.mediamonkey.com/favicon.ico" /><a href="http://www.mediamonkey.com/">MediaMonkey</a>
</p>

<p class="sidelink"><img src="http://www.arcinspirations.com/kobe/images/favicon.ico" /><a href="http://www.arcinspirations.com/kobe/">Kobe</a>
</p>

<p class="sidelink"><img src="http://www.cyberwoven.com/favicon.ico" /><a href="http://www.cyberwoven.com/">CyberWoven</a>
</p>

<p class="sidelink"><img src="http://www.streetread.com/sites/all/themes/barlow3/favicon.png" /><a href="http://www.streetread.com/">StreetRead</a>
</p>

<p class="sidelink"><img src="http://www.duvien.com/files/favicon.ico" /><a href="http://www.duvien.com/portfolio">Duvien</a>
</p>

<p class="sidelink"><img src="http://thousandminds.com/images/icon-web.gif" /><a href="http://thousandminds.com/">Thousand Minds</a>
</p>

<p class="sidelink"><img src="http://solutionarts.net/favicon.ico" /><a href="http://solutionarts.net/">Solution Arts</a>
</p>
</div>
<div class='clear'></div>
<span class='widget-item-control'>
<span class='item-control blog-admin'>
<a class='quickedit' href='//www.blogger.com/rearrange?blogID=8640596986273216089&widgetType=HTML&widgetId=HTML4&action=editWidget&sectionId=sidebar' onclick='return _WidgetManager._PopupConfig(document.getElementById("HTML4"));' target='configHTML4' title='Edit'>
<img alt='' height='18' src='//img1.blogblog.com/img/icon18_wrench_allbkg.png' width='18'/>
</a>
</span>
</span>
<div class='clear'></div>
</div><div class='widget Followers' id='Followers1'>
<h2 class='title'>Followers</h2>
<div class='widget-content'>
<div id='Followers1-wrapper'>
<div style='margin-right:2px;'>
<div><script type="text/javascript" src="https://apis.google.com/js/plusone.js"></script>
<div id="followers-iframe-container"></div>
<script type="text/javascript">
    window.followersIframe = null;
    function followersIframeOpen(url) {
      gapi.load("gapi.iframes", function() {
        if (gapi.iframes && gapi.iframes.getContext) {
          window.followersIframe = gapi.iframes.getContext().openChild({
            url: url,
            where: document.getElementById("followers-iframe-container"),
            messageHandlersFilter: gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
            messageHandlers: {
              '_ready': function(obj) {
                window.followersIframe.getIframeEl().height = obj.height;
              },
              'reset': function() {
                window.followersIframe.close();
                followersIframeOpen("https://www.blogger.com/followers.g?blogID\x3d8640596986273216089\x26origin\x3dhttp://flesler.blogspot.com/\x26colors\x3dCgt0cmFuc3BhcmVudBILdHJhbnNwYXJlbnQaBjk5OTk5OSIGNjY5OWNjKgZGRkZGRkYyBjk5MzMzMzoGOTk5OTk5QgY2Njk5Y2NKBjAwMDAwMFIGNjY5OWNjWgt0cmFuc3BhcmVudA%3D%3D\x26postID\x3d8211605211968606133");
              },
              'open': function(url) {
                window.followersIframe.close();
                followersIframeOpen(url);
              }
            }
          });
        }
      });
    }
    followersIframeOpen("https://www.blogger.com/followers.g?blogID\x3d8640596986273216089\x26origin\x3dhttp://flesler.blogspot.com/\x26colors\x3dCgt0cmFuc3BhcmVudBILdHJhbnNwYXJlbnQaBjk5OTk5OSIGNjY5OWNjKgZGRkZGRkYyBjk5MzMzMzoGOTk5OTk5QgY2Njk5Y2NKBjAwMDAwMFIGNjY5OWNjWgt0cmFuc3BhcmVudA%3D%3D\x26postID\x3d8211605211968606133");
  </script></div>
</div>
</div>
<div class='clear'></div>
<span class='widget-item-control'>
<span class='item-control blog-admin'>
<a class='quickedit' href='//www.blogger.com/rearrange?blogID=8640596986273216089&widgetType=Followers&widgetId=Followers1&action=editWidget&sectionId=sidebar' onclick='return _WidgetManager._PopupConfig(document.getElementById("Followers1"));' target='configFollowers1' title='Edit'>
<img alt='' height='18' src='//img1.blogblog.com/img/icon18_wrench_allbkg.png' width='18'/>
</a>
</span>
</span>
<div class='clear'></div>
</div>
</div></div>
</div>
<!-- spacer for skins that want sidebar and main to be the same height-->
<div class='clear'>&#160;</div>
</div>
<!-- end content-wrapper -->
<div id='footer-wrapper'>
<div class='footer section' id='footer'></div>
</div>
</div></div>
<!-- end outer-wrapper -->
<!-- MY INCLUDES -->
<script src='http://www.google-analytics.com/ga.js' type='text/javascript'></script>
<script src='http://flesler-blog.googlecode.com/svn/trunk/ga.init.js' type='text/javascript'></script>
<script src='http://flesler-blog.googlecode.com/svn/trunk/comments.js' type='text/javascript'></script>
<!-- -->
<script type="text/javascript">
if (window.jstiming) window.jstiming.load.tick('widgetJsBefore');
</script>

<!-- 'It is your responsibility to notify your visitors about cookies used on your blog. See http://www.blogger.com/go/cookiechoices for more details.' -->
<script src="/js/cookiechoices.js" defer></script>
<script>
  document.addEventListener('DOMContentLoaded', function(event) {
    window.cookieChoices && cookieChoices.showCookieConsentBar && cookieChoices.showCookieConsentBar(
        (window.cookieOptions && cookieOptions.msg) || 'This site uses cookies from Google to deliver its services, to personalise ads and to analyse traffic. Information about your use of this site is shared with Google. By using this site, you agree to its use of cookies.',
        (window.cookieOptions && cookieOptions.close) || 'Got it',
        (window.cookieOptions && cookieOptions.learn) || 'Learn more',
        (window.cookieOptions && cookieOptions.link) || 'https://www.blogger.com/go/blogspot-cookies');
  });
</script>

<script type="text/javascript" src="https://www.blogger.com/static/v1/widgets/3102085676-widgets.js"></script>
<script type="text/javascript" src="https://apis.google.com/js/plusone.js"></script>
<script type='text/javascript'>
if (typeof(BLOG_attachCsiOnload) != 'undefined' && BLOG_attachCsiOnload != null) { window['blogger_templates_experiment_id'] = "templatesV1";window['blogger_blog_id'] = '8640596986273216089';BLOG_attachCsiOnload('item_'); }_WidgetManager._Init('//www.blogger.com/rearrange?blogID\x3d8640596986273216089','//flesler.blogspot.co.uk/2007/10/jqueryscrollto.html','8640596986273216089');
_WidgetManager._SetDataContext([{'name': 'blog', 'data': {'blogId': '8640596986273216089', 'bloggerUrl': 'https://www.blogger.com', 'title': 'Ariel Flesler', 'pageType': 'item', 'postId': '8211605211968606133', 'url': 'http://flesler.blogspot.co.uk/2007/10/jqueryscrollto.html', 'canonicalUrl': 'http://flesler.blogspot.com/2007/10/jqueryscrollto.html', 'homepageUrl': 'http://flesler.blogspot.co.uk/', 'canonicalHomepageUrl': 'http://flesler.blogspot.com/', 'blogspotFaviconUrl': 'http://flesler.blogspot.co.uk/favicon.ico', 'enabledCommentProfileImages': true, 'adultContent': false, 'disableAdSenseWidget': false, 'analyticsAccountNumber': '', 'useUniversalAnalytics': false, 'searchLabel': '', 'searchQuery': '', 'pageName': 'jQuery.ScrollTo', 'pageTitle': 'Ariel Flesler: jQuery.ScrollTo', 'encoding': 'UTF-8', 'locale': 'en', 'localeUnderscoreDelimited': 'en', 'isPrivate': false, 'isMobile': false, 'isMobileRequest': false, 'mobileClass': '', 'isPrivateBlog': false, 'languageDirection': 'ltr', 'feedLinks': '\74link rel\75\42alternate\42 type\75\42application/atom+xml\42 title\75\42Ariel Flesler - Atom\42 href\75\42http://flesler.blogspot.com/feeds/posts/default\42 /\76\n\74link rel\75\42alternate\42 type\75\42application/rss+xml\42 title\75\42Ariel Flesler - RSS\42 href\75\42http://flesler.blogspot.com/feeds/posts/default?alt\75rss\42 /\76\n\74link rel\75\42service.post\42 type\75\42application/atom+xml\42 title\75\42Ariel Flesler - Atom\42 href\75\42https://www.blogger.com/feeds/8640596986273216089/posts/default\42 /\76\n\n\74link rel\75\42alternate\42 type\75\42application/atom+xml\42 title\75\42Ariel Flesler - Atom\42 href\75\42http://flesler.blogspot.com/feeds/8211605211968606133/comments/default\42 /\76\n', 'meTag': '', 'openIdOpTag': '', 'latencyHeadScript': '\74script type\75\42text/javascript\42\76(function() { (function(){function c(a){this.t\75{};this.tick\75function(a,c,b){var d\75void 0!\75b?b:(new Date).getTime();this.t[a]\75[d,c];if(void 0\75\75b)try{window.console.timeStamp(\42CSI/\42+a)}catch(e){}};this.tick(\42start\42,null,a)}var a;window.performance\46\46(a\75window.performance.timing);var h\75a?new c(a.responseStart):new c;window.jstiming\75{Timer:c,load:h};if(a){var b\75a.navigationStart,e\75a.responseStart;0\74b\46\46e\76\75b\46\46(window.jstiming.srt\75e-b)}if(a){var d\75window.jstiming.load;0\74b\46\46e\76\75b\46\46(d.tick(\42_wtsrt\42,void 0,b),d.tick(\42wtsrt_\42,\n\42_wtsrt\42,e),d.tick(\42tbsd_\42,\42wtsrt_\42))}try{a\75null,window.chrome\46\46window.chrome.csi\46\46(a\75Math.floor(window.chrome.csi().pageT),d\46\0460\74b\46\46(d.tick(\42_tbnd\42,void 0,window.chrome.csi().startE),d.tick(\42tbnd_\42,\42_tbnd\42,b))),null\75\75a\46\46window.gtbExternal\46\46(a\75window.gtbExternal.pageT()),null\75\75a\46\46window.external\46\46(a\75window.external.pageT,d\46\0460\74b\46\46(d.tick(\42_tbnd\42,void 0,window.external.startE),d.tick(\42tbnd_\42,\42_tbnd\42,b))),a\46\46(window.jstiming.pt\75a)}catch(k){}})();window.tickAboveFold\75function(c){var a\0750;if(c.offsetParent){do a+\75c.offsetTop;while(c\75c.offsetParent)}c\75a;750\76\75c\46\46window.jstiming.load.tick(\42aft\42)};var f\75!1;function g(){f||(f\75!0,window.jstiming.load.tick(\42firstScrollTime\42))}window.addEventListener?window.addEventListener(\42scroll\42,g,!1):window.attachEvent(\42onscroll\42,g);\n })();\74/script\076', 'mobileHeadScript': '', 'view': '', 'dynamicViewsCommentsSrc': '//www.blogblog.com/dynamicviews/4224c15c4e7c9321/js/comments.js', 'dynamicViewsScriptSrc': '//www.blogblog.com/dynamicviews/a90bf08c3a30a5f3', 'plusOneApiSrc': 'https://apis.google.com/js/plusone.js', 'sf': 'n', 'tf': ''}}, {'name': 'skin', 'data': {'vars': {'endSide': 'right', 'pagetitlefont': 'normal normal 100% \47Lucida Grande\47,\47Trebuchet MS\047', 'textcolor': '#333333', 'titlecolor': '#993333', 'linkcolor': '#6699cc', 'startSide': 'left', 'sidebarcolor': '#666666', 'sidebartextcolor': '#999999', 'datecolor': '#999999', 'bodyfont': 'normal normal 100% Verdana, sans-serif', 'visitedlinkcolor': '#666699', 'sidebarheaderfont': 'normal bold 130% \47Lucida Grande\47,\47Trebuchet MS\047', 'footercolor': '#999999', 'titlefont': 'normal bold 130% \47Lucida Grande\47,\47Trebuchet MS\047', 'pagetitlecolor': '#FFFFFF'}, 'override': ''}}, {'name': 'view', 'data': {'classic': {'name': 'classic', 'url': '?view\75classic'}, 'flipcard': {'name': 'flipcard', 'url': '?view\75flipcard'}, 'magazine': {'name': 'magazine', 'url': '?view\75magazine'}, 'mosaic': {'name': 'mosaic', 'url': '?view\75mosaic'}, 'sidebar': {'name': 'sidebar', 'url': '?view\75sidebar'}, 'snapshot': {'name': 'snapshot', 'url': '?view\75snapshot'}, 'timeslide': {'name': 'timeslide', 'url': '?view\75timeslide'}}}]);
_WidgetManager._RegisterWidget('_NavbarView', new _WidgetInfo('Navbar1', 'navbar', null, document.getElementById('Navbar1'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_HeaderView', new _WidgetInfo('Header1', 'header', null, document.getElementById('Header1'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_BlogView', new _WidgetInfo('Blog1', 'main', null, document.getElementById('Blog1'), {'cmtInteractionsEnabled': false, 'showBacklinks': true, 'postId': '8211605211968606133', 'lightboxEnabled': true, 'lightboxModuleUrl': 'https://www.blogger.com/static/v1/jsbin/2058145283-lbx.js', 'lightboxCssUrl': 'https://www.blogger.com/static/v1/v-css/1185134592-lightbox_bundle.css'}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_HTMLView', new _WidgetInfo('HTML3', 'sidebar', null, document.getElementById('HTML3'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_HTMLView', new _WidgetInfo('HTML9', 'sidebar', null, document.getElementById('HTML9'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_HTMLView', new _WidgetInfo('HTML6', 'sidebar', null, document.getElementById('HTML6'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_HTMLView', new _WidgetInfo('HTML5', 'sidebar', null, document.getElementById('HTML5'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_HTMLView', new _WidgetInfo('HTML4', 'sidebar', null, document.getElementById('HTML4'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_FollowersView', new _WidgetInfo('Followers1', 'sidebar', null, document.getElementById('Followers1'), {}, 'displayModeFull'));
</script>
</body>
</html>