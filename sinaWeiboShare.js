;(function(window){
	var sinaUrlPrefix = 'http://service.weibo.com/share/'+(/android|webos|ip(hone|ad|od)|opera (mini|mobi|tablet)|iemobile|windows.+(phone|touch)|mobile|fennec|kindle (Fire)|Silk|maemo|blackberry|playbook|bb10\; (touch|kbd)|Symbian(OS)|Ubuntu Touch/i.test(navigator.userAgent)?'mobile':'share')+'.php?' // see https://github.com/pinceladasdaweb/isMobile/blob/master/ismobile.js
	
	// options
	//  title String 分享内容，无需encodeURI
	//  url String 分享链接，无需encodeURI
	//  pic String 分享图片的url，无需encodeURI。新浪的接口多张图片尚未完全开放，暂时只能分享一张
	//  ralateUid String 或 Number 相关微博Uid，如果有此项，分享内容会自动 @相关微博
	function sinaWeiboShare(options){
		var key,urlArray = []
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
							urlArray.push(key+'='+options[key])
							break;
					}
				}
			}
		}
		window.open(sinaUrlPrefix+urlArray.join('&'))
	}

	window.sinaWeiboShare = sinaWeiboShare
	
})(window)