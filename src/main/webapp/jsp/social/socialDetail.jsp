<%@ page language="java" contentType="text/html;charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
<title>社交详情</title>
<%@ include file="/inc/inc.jsp"%>
<link href="${uedroot}/css/modular/modular.css" rel="stylesheet" type="text/css"/>
<link href="${uedroot}/css/modular/index.css" rel="stylesheet" type="text/css" />
<style type="text/css">
/* 百度地图去logo */
.anchorBL{  
       display:none;  
   } 
</style>
</head>
<body>
	<!--面包屑导航-->
	<%@ include file="/inc/topHead.jsp"%>
	<!--子导航-->
	<div class="subnav">
		<div class="subnav-main">
			<div class="breadcrumb">
				<p>
					<i class="icon iconfont">&#xe600;</i>
				</p>
				<p>您当前的位置：</p>
				<p>
					<a href="${_base}">首页</a>>
				</p>
				<p style="width:300px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;">${socialDetail.srcTitle}</p>
			</div>
		</div>
	</div>
	<!--二级框架-->
	<div class="level-wrapper">
		<div class="level-left-conter">
			<div class="news-detail">
				<div class="news-detail-title" style="width:600px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;">${socialDetail.srcTitle}</div>
				<div class="news-detail-information" id="xuanf1" style="background: rgb(255, 255, 255);">
					<ul>
						 <li class="zhuanz">
						<span>${socialDetail.srcSource}</span>
						</li>
						<li>
						<fmt:parseDate value="${socialDetail.pubdate}" pattern="yyyy-MM-dd HH:mm:ss" var="pubdate"/>
						<fmt:formatDate value="${pubdate}" pattern="yyyy.MM.dd HH:mm" />
						</li>
						<%-- <li>${socialDetail.languageTName}</li> --%>
						<li>${socialDetail.countryNameSrc}&nbsp;&nbsp;<img  height="20px" width="30px" src="${uedroot}/images/country/${socialDetail.countryNameEn}@2x.png" /></li>
						<li class="zhuanz">转载量：<span>${socialDetail.view}</span></li>
						<li class="yuyan" id="yuyan"><a href="javascrpt:;"></a>
							<div class="user-show" id="typesetting">
								<span><i class="icon iconfont">&#xe65a;</i></span>
								<ul>
									<a id="showTranslation" href="javascrpt:;" class="ahov1"><li>译文排版</li></a>
									<a id="showOriginal"  href="javascrpt:;" class="ahov2"><li>原文排版</li></a>
									<a id="showSynchysis" href="javascrpt:;" class="ahov3"><li>原译混排</li></a>
								</ul>
							</div></li>
						<!-- <li><a href="#"><i class="icon iconfont">&#xe665;</i></a></li>
						<li class="x-red"><a href="#"><i class="icon iconfont">&#xe666;</i><span id="collCount">0</span></a></li>
						<li class="share" id="share1"><a href="#"><i
								class="icon iconfont shareicon">&#xe667;</i></a>
							<div class="share-show" id="share-show">
								<span><i class="icon iconfont">&#xe65a;</i></span>
								<ul >
									<a href="javascrpt:;" class="ahov1"><li><i class="icon iconfont">&#xe65c;</i>分享到新浪微博</li></a>
									<a href="javascrpt:;" class="ahov2"><li><i class="icon iconfont">&#xe65e;</i>分享到腾讯微博</li></a>
									<a href="javascrpt:;" class="ahov3"><li><i class="icon iconfont">&#xe65e;</i>分享到微信</li></a>
								</ul>
							</div></li> -->
					</ul>
				</div>
				<div class="news-detail-news">
				 <ul id="newsDetailContent" style="text-indent:2em"></ul>
				</div>
				<!-- <div class="news-detail-share">
					<ul class="bdsharebuttonbox">
						<li>分享到：</li>
						<li id="bottom_share" class="right">
							<p class="red">
								<a id="gotsina" data-cmd="tsina" href="javascrpt:;"></a>
							</p>
							<p class="green">
								<a  data-cmd="weixin" href="javascrpt:;"></a>
							</p>
							<p class="blue">
								<a  data-cmd="sqq" href="javascrpt:;"></a>
							</p>
						</li>
					</ul>
				</div> -->
			</div>
		</div>
		<div class="levle-right">
		    <!--拖拽-->
				<div id="drag" style="z-index: 999;">
					<div class="drag-title">
						<p><img src="${uedroot}/images/drag-yw.jpg"></p>
						<p class="right"><i class="icon iconfont" id="deag-close">&#xe618;</i></p>
					</div>
					<div class="drag-list">
						<div class="drag-list-bt" id="translateTitle">${socialDetail.enTitle}</div>
					<div class="drag-list-word" id="translateContent">
					</div>
					</div>
					 <div id="coor"></div>
				</div>
			<!-- / 拖拽结束-->
			<div class="levle-right-news">
				<div class="levle-right-title">相关资讯</div>
				<div class="sentiment-detail-list-conter-news">
						<ul>
							<li><a href="#">昨天，结束了亚锦赛征程的朴泰桓</a></li>
							<li class="date">50分钟前</li>
						</ul>
						<ul>
							<li><a href="#">昨天，结束了亚锦赛征程的朴泰桓</a></li>
							<li class="date">50分钟前</li>
						</ul>
						<ul>
							<li><a href="#">昨天，结束了亚锦赛征程的朴泰桓</a></li>
							<li class="date">50分钟前</li>
						</ul>
						<ul>
							<li><a href="#">昨天，结束了亚锦赛征程的朴泰桓</a></li>
							<li class="date">50分钟前</li>
						</ul>
						<ul>
							<li><a href="#">昨天，结束了亚锦赛征程的朴泰桓</a></li>
							<li class="date">50分钟前</li>
						</ul>
						<ul>
							<li><a href="#">昨天，结束了亚锦赛征程的朴泰桓</a></li>
							<li class="date">50分钟前</li>
						</ul>
						<ul>
							<li><a href="#">昨天，结束了亚锦赛征程的朴泰桓</a></li>
							<li class="date">50分钟前</li>
						</ul>
						<ul>
							<li><a href="#">昨天，结束了亚锦赛征程的朴泰桓</a></li>
							<li class="date">50分钟前</li>
						</ul>
						<ul>
							<li><a href="#">昨天，结束了亚锦赛征程的朴泰桓</a></li>
							<li class="date">50分钟前</li>
						</ul>
						
					</div>
			</div>
			<!-- <div class="levle-right-map" id="baiduContainer">
		
			</div>
			<div class="levle-right-chart" >
				<div class="levle-right-chart-title">
					<p>时间趋势</p>
					<p class="right">选择时间：2016-11-15 至 2016-11-19</p>
				</div>
				图表嵌套区域
				<div class="levle-right-chart-list">图表嵌套区域</div>
				/图表嵌套区域结束

			</div> -->
			<!-- <div class="levle-right-chart">
				<div class="levle-right-chart-title">
					<p>媒体统计</p>
					<p class="right">选择时间：2016-11-15 至 2016-11-19</p>
				</div>
				图表嵌套区域
				<div class="levle-right-chart-list">图表嵌套区域</div>
				/图表嵌套区域结束

			</div> -->
		</div>
	</div>
	<!--底部-->
	<input id="detailsId" type="hidden" value="${socialDetail.id}"/>
	<input id="srcLanguage" type="hidden" value="${socialDetail.srcLanguage }"/>
	<div id="srcContent" style="display: none;">
	 ${socialDetail.srcContent}
	</div>
	<div id="srcTitle" style="display: none;">
	 ${socialDetail.srcTitle}
	</div>
	<div id="zhContent" style="display: none;">
	 ${socialDetail.zhContent}
	</div>
	<div id="enContent" style="display: none;">
	 ${socialDetail.enContent}
	</div>
	<%@include file="/inc/indexFoot.jsp"%>
    <%@include file="/inc/incJs.jsp"%>
    <script src="${uedroot}/scripts/modular/drag.js"></script>
	<script type="text/javascript">
    var pager;
    (function () {
        seajs.use('app/jsp/social/socialDetail', function (socialDetailPage) {
            pager = new socialDetailPage({element: document.body});
            pager.render();

        });
    })();
	/* window._bd_share_config = {
		common : {
			bdText : '${news.zhContent}',	
			bdDesc : '${news.zhSummary}',	
			bdUrl : location.href, 	
			bdPic : ''
		},
		share : [{}],
		slide : [{}]
	}
	with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion='+~(-new Date()/36e5)];
	 
	function initialize() {  
		var map = new BMap.Map("baiduContainer");          // 创建地图实例  
		var point = new BMap.Point("${news.longitude}"*1, "${news.latItude}"*1);  // 创建点坐标  
		map.centerAndZoom(point, 22);                 // 初始化地图，设置中心点坐标和地图级别  
	} 

	function loadScript() {
		        var script = document.createElement("script");
		        script.src = "http://api.map.baidu.com/api?v=1.4&callback=initialize";
		        document.body.appendChild(script);
	}
	window.onload = loadScript;*/
	/* $(document).ready(function(){
		 var _res = setInterval(function(){
			 var box = $(".bdshare-slide-button-box");
            if(box.length > 0){
            	box.hide();
                clearInterval(_res);//清除setInterval
             }
         },500);
		
	}); */
</script>
</body>
</html>