/*!
 * author:jieyou
 * contacts:百度hi->youyo1122
 * see https://github.com/jieyou/sinaWeiboShare
 */
;(function(window){
	var sinaUrlPrefix = 'http://service.weibo.com/share/'+(/android|webos|ip(hone|ad|od)|opera (mini|mobi|tablet)|iemobile|windows.+(phone|touch)|mobile|fennec|kindle (Fire)|Silk|maemo|blackberry|playbook|bb10\; (touch|kbd)|Symbian(OS)|Ubuntu Touch/i.test(navigator.userAgent)?'mobile':'share')+'.php?' // see https://github.com/pinceladasdaweb/isMobile/blob/master/ismobile.js
	
	// options
	//  title或text String 分享内容，无需encodeURI
	//  url String 分享链接，无需encodeURI
	//  pic String 分享图片的url，无需encodeURI。新浪的接口多张图片尚未完全开放，暂时只能分享一张
	//  ralateUid String 或 Number 相关微博Uid，如果有此项，分享内容会自动 @相关微博
	// 	appkey String 或 Number 分享来源的appkey，如果有此项，会在微博正文地下，显示“来自XXX”
	function getUrl(options){
		var key,urlArray = []
		// 我们调起客户端分享的接口用text代表分享的内容，而sina微博的web分享接口用title表示分享的内容。为了兼容和减少工作量，可以用text代表title参数
		if(options.text){
			options.title = options.text
			delete options.text
		}
		if(options){
			for(key in options){
				if(options.hasOwnProperty(key)){
					switch(key){
						case 'url':
						case 'pic':
						case 'title':
							urlArray.push(key+'='+encodeURIComponent(options[key]))
							break;
						case 'ralateUid':
						case 'appkey':
							urlArray.push(key+'='+options[key])
							break;
					}
				}
			}
		}
		return sinaUrlPrefix+urlArray.join('&')
		
	}

	function action(optionsOrUrl){
		if(typeof(optionsOrUrl) != 'string'){
			optionsOrUrl = getUrl(optionsOrUrl)
		}
		try{
			window.open(optionsOrUrl)
		}catch(e){}
	}

	window.sinaWeiboShare = {
		action:action,
		getUrl:getUrl
	}
	
})(window)