// HTML Sitemap for Era Corner.com
// Author: Kush
// Copyright 2022 Era Corner. All Rights Reserved.
// ---------------------------------------------------

var postTitle=new Array();var postUrl=new Array();var postDate=new Array();var postSum=new Array();var postLabels=new Array();var sortBy="datenewest";var tocLoaded=false;var numChars=250;var postFilter="";var tocdiv=document.getElementById("bp_toc");var totalEntires=0;var totalPosts=0;function loadtoc(a){function b(){if("entry" in a.feed){var e=a.feed.entry.length;totalEntires=totalEntires+e;totalPosts=a.feed.openSearch$totalResults.$t;if(totalPosts>totalEntires){var g=document.createElement("script");g.type="text/javascript";startindex=totalEntires+1;g.setAttribute("src","/feeds/posts/summary?start-index="+startindex+"&max-results=500&alt=json-in-script&callback=loadtoc");tocdiv.appendChild(g)}for(var m=0;m<e;m++){var q=a.feed.entry[m];var f=q.title.$t;var o=q.published.$t.substring(0,10);var n;for(var j=0;j<q.link.length;j++){if(q.link[j].rel=="alternate"){n=q.link[j].href;break}}if("content" in q){var p=q.content.$t}else{if("summary" in q){var p=q.summary.$t}else{var p=""}}var r=/<\S[^>]*>/g;p=p.replace(r,"");if(p.length>numChars){p=p.substring(0,numChars);var d=p.lastIndexOf(" ");p=p.substring(0,d)+"..."}var c="";if("category" in q){for(var j=0;j<q.category.length;j++){c+="<a href=\"javascript:filterPosts('"+q.category[j].term+"');\" title=\"Click here to select all posts with label '"+q.category[j].term+"'\">"+q.category[j].term+"</a>,  "}var h=c.lastIndexOf(",");if(h!=-1){c=c.substring(0,h)}}postTitle.push(f);postDate.push(o);postUrl.push(n);postSum.push(p);postLabels.push(c)}}if(totalEntires==totalPosts){tocLoaded=true;showToc()}}b();sortPosts(sortBy);tocLoaded=true}function filterPosts(a){postFilter=a;displayToc(postFilter)}function allPosts(){postFilter="";displayToc(postFilter)}function sortPosts(d){function c(e,g){var f=postTitle[e];postTitle[e]=postTitle[g];postTitle[g]=f;var f=postDate[e];postDate[e]=postDate[g];postDate[g]=f;var f=postUrl[e];postUrl[e]=postUrl[g];postUrl[g]=f;var f=postSum[e];postSum[e]=postSum[g];postSum[g]=f;var f=postLabels[e];postLabels[e]=postLabels[g];postLabels[g]=f}for(var b=0;b<postTitle.length-1;b++){for(var a=b+1;a<postTitle.length;a++){if(d=="titleasc"){if(postTitle[b]>postTitle[a]){c(b,a)}}if(d=="titledesc"){if(postTitle[b]<postTitle[a]){c(b,a)}}if(d=="dateoldest"){if(postDate[b]>postDate[a]){c(b,a)}}if(d=="datenewest"){if(postDate[b]<postDate[a]){c(b,a)}}}}}function displayToc(a){var k=0;var g="";var d="POST TITLE";var l="Click to sort by title";var c="POST DATE";var j="Click to sort by date";var b="LABELS";var h="";if(sortBy=="titleasc"){l+=" (descending)";j+=" (newest first)"}if(sortBy=="titledesc"){l+=" (ascending)";j+=" (newest first)"}if(sortBy=="dateoldest"){l+=" (ascending)";j+=" (newest first)"}if(sortBy=="datenewest"){l+=" (ascending)";j+=" (oldest first)"}if(postFilter!=""){h="Click to show all posts"}g+="<table>";g+="<tr>";g+='<td class="toc-header-col1">';g+='<a href="javascript:toggleTitleSort();" title="'+l+'">'+d+"</a>";g+="</td>";g+='<td class="toc-header-col2">';g+='<a href="javascript:toggleDateSort();" title="'+j+'">'+c+"</a>";g+="</td>";g+='<td class="toc-header-col3">';g+='<a href="javascript:allPosts();" title="'+h+'">'+b+"</a>";g+="</td>";g+="</tr>";for(var f=0;f<postTitle.length;f++){if(a==""){g+='<tr><td class="toc-entry-col1"><a href="'+postUrl[f]+'" title="'+postSum[f]+'">'+postTitle[f]+'</a></td><td class="toc-entry-col2">'+postDate[f]+'</td><td class="toc-entry-col3">'+postLabels[f]+"</td></tr>";k++}else{z=postLabels[f].lastIndexOf(a);if(z!=-1){g+='<tr><td class="toc-entry-col1"><a href="'+postUrl[f]+'" title="'+postSum[f]+'">'+postTitle[f]+'</a></td><td class="toc-entry-col2">'+postDate[f]+'</td><td class="toc-entry-col3">'+postLabels[f]+"</td></tr>";k++}}}g+="</table>";if(k==postTitle.length){var e='<span class="toc-note">Displaying all '+postTitle.length+" posts<br/></span>"}else{var e='<span class="toc-note">Displaying '+k+" posts labeled '";e+=postFilter+"' of "+postTitle.length+" posts total<br/></span>"}tocdiv.innerHTML=e+g}function toggleTitleSort(){if(sortBy=="titleasc"){sortBy="titledesc"}else{sortBy="titleasc"}sortPosts(sortBy);displayToc(postFilter)}function toggleDateSort(){if(sortBy=="datenewest"){sortBy="dateoldest"}else{sortBy="datenewest"}sortPosts(sortBy);displayToc(postFilter)}function showToc(){if(tocLoaded){displayToc(postFilter);var a=document.getElementById("toclink")}else{alert("Just wait... TOC is loading")}}function hideToc(){var a=document.getElementById("toc");a.innerHTML="";var b=document.getElementById("toclink");b.innerHTML='<a href="#" onclick="scroll(0,0); showToc(); Effect.toggle(\'toc-result\',\'blind\');">» Show Table of Contents</a> <img src="https://1.bp.blogspot.com/-fmnG1sov44w/Yl2Qpo9yBaI/AAAAAAAADSI/8GHjc7cW4mQkrcLd6qou-0TnYelz2prEACK4BGAYYCw/new_1.gif"/>'};
