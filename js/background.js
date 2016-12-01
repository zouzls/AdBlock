 chrome.webRequest.onBeforeRequest.addListener(
         function(details) {
         	return {cancel: true}; 
         },{
         	urls: ["*://pos.baidu.com/*","*://www16.53kf.com/*"]
         },
         ["blocking"]
 );
