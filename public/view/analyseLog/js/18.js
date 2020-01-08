document.write('<li><a href="javascript:" id="fav">收藏LogHao</a></li>');
jQuery.fn.addFavorite = function (l, h) {
    return this.click(function () {
        var t = jQuery(this);
        if (jQuery.browser.msie) {
            window.external.addFavorite(h, l)
        } else if (jQuery.browser.mozilla || jQuery.browser.opera) {
            t.attr("rel", "sidebar");
            t.attr("title", l);
            t.attr("href", h)
        } else {
            alert("请使用Ctrl+D将本页加入收藏夹！")
        }
    })
};
$(function () {
    $('#fav').addFavorite('LogHao-百度蜘蛛分析神器', location.href)
});


document.write('<li><a href="http://www.loghao.com/php/url.php?url=http%3A%2F%2Fwww.loghao.com%2F%23urldon&title=LogHao%E7%BD%91%E7%AB%99%E6%97%A5%E5%BF%97%E5%9C%A8%E7%BA%BF%E5%88%86%E6%9E%90%E5%B7%A5%E5%85%B7" rel="external nofollow">下载到桌面</a></li>');






