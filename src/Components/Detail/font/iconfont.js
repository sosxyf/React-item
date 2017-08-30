(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-back" viewBox="0 0 1024 1024">'+""+'<path d="M671.968 912c-12.288 0-24.576-4.672-33.952-14.048L286.048 545.984c-18.752-18.72-18.752-49.12 0-67.872l351.968-352c18.752-18.752 49.12-18.752 67.872 0 18.752 18.72 18.752 49.12 0 67.872l-318.016 318.048 318.016 318.016c18.752 18.752 18.752 49.12 0 67.872C696.544 907.328 684.256 912 671.968 912z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-right" viewBox="0 0 1024 1024">'+""+'<path d="M761.056 532.128c0.512-0.992 1.344-1.824 1.792-2.848 8.8-18.304 5.92-40.704-9.664-55.424L399.936 139.744c-19.264-18.208-49.632-17.344-67.872 1.888-18.208 19.264-17.376 49.632 1.888 67.872l316.96 299.84-315.712 304.288c-19.072 18.4-19.648 48.768-1.248 67.872 9.408 9.792 21.984 14.688 34.56 14.688 12 0 24-4.48 33.312-13.44l350.048-337.376c0.672-0.672 0.928-1.6 1.6-2.304 0.512-0.48 1.056-0.832 1.568-1.344C757.76 538.88 759.2 535.392 761.056 532.128z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-gouwuche" viewBox="0 0 1037 1024">'+""+'<path d="M3.2 512C3.2 229.230208 232.368035 0 515.2 0 797.969792 0 1027.2 229.168035 1027.2 512 1027.2 794.769792 798.031965 1024 515.2 1024 232.430208 1024 3.2 794.831965 3.2 512ZM647.485217 725.333334 647.485217 704.520325 605.151009 704.520325 605.151009 725.333334 647.485217 725.333334ZM456.981279 725.333334 456.981279 704.520325 414.647071 704.520325 414.647071 725.333334 456.981279 725.333334ZM386.914495 610.672692 384.320312 590.048782 653.835348 590.048781C664.025315 590.048781 671.551142 584.683831 674.305601 575.905004L720.860196 405.286574C724.261153 392.579128 715.120031 381.9187 700.402979 381.9187L356.534656 381.9187 386.914495 610.672692ZM386.939608 610.861795 653.835348 610.861788C673.242834 610.861788 689.026838 599.609818 694.643187 581.662031L741.317327 410.631581C748.384612 384.225629 728.559688 361.105691 700.402979 361.105691L353.770569 361.105691 349.998304 332.701295C347.212059 312.15375 329.33899 298.666666 307.753193 298.666666L287.644444 298.666666 287.644444 319.479675 307.753193 319.479675C319.265051 319.479675 327.715764 325.856613 329.013138 335.424143L369.226894 638.225533C372.024799 658.859068 390.069376 673.300813 411.472005 673.300813L679.235873 673.300813 679.235873 652.487805 411.472005 652.487805C400.368009 652.487805 391.559287 645.437857 390.21206 635.502687L386.939608 610.861795ZM386.914495 610.672692 386.938281 610.861795 386.914495 610.672692ZM353.750001 361.105691 356.34375 381.9187 356.534656 381.9187 353.770569 361.105691Z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-jia-copy" viewBox="0 0 1024 1024">'+""+'<path d="M511.999983 85.219608c-235.112901 0-425.708822 190.595921-425.708822 425.708822 0 235.112901 190.595921 425.708822 425.708822 425.708822s425.708822-190.595921 425.708822-425.708822C937.708805 275.816746 747.111667 85.219608 511.999983 85.219608zM755.262167 541.337419l-212.854411 0 0 212.854411-60.815546 0 0-212.854411-212.854411 0 0-60.815546 212.854411 0 0-212.854411 60.815546 0 0 212.854411 212.854411 0L755.262167 541.337419z"  ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)