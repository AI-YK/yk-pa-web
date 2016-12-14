<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport"
	content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<title>突发事件</title>
<%@ include file="/inc/inc.jsp"%>
<link href="${uedroot}/css/modular/modular.css" rel="stylesheet" type="text/css" />

</head>
<body>
	<!--面包屑导航-->
	<%@ include file="/inc/topHead.jsp"%>
	<!--子导航-->
	<div class="subnav">
		<div class="subnav-main">
			<div class="breadcrumb">
				<p><i class="icon iconfont">&#xe600;</i></p>
				<p>您当前的位置：</p>
				<p><a href="${_base}/home/index">首页</a>&gt;</p>
				<p>突发事件</p>
			</div>
		</div>
	</div>
	<!--二级框架-->
	<div class="level-wrapper">
		<div class="level-left-conter">
			<div id="le-tba1">
				<div class="level-left-list">
					<div class="list-form">
						<ul>
							<li>
								<p>
					              <input id="keyword" type="text" class="int-text int-large radius">
					              <a href="#"><i id="searchBtn" class="icon iconfont suos">&#xe658;</i></a>
				                </p>
							</li>
						</ul>
					</div>
					<div class="level-news" >
						<div class="level-news-title">
							<p>共有相关数据</p>
							<p class="blue" id="news-num" >0</p>
						</div>
						<div class="level-news-list" id="news-list">
							
						</div>
						<div id="news-message"></div>
						<div class="biu-paging" >
							<ul id="news-paging">
								
							</ul>
						</div>
					</div>
				</div>
			</div>
			<!--/tab1结束-->
		</div>
		<div class="levle-right">
			<%@include file="topic.jsp"%>
		</div>
	</div>
	<!--底部-->
	<%@include file="/inc/indexFoot.jsp"%>
</body>
<script id="levelNewsTempl" type="text/x-jsrender">
<ul>
	<li class="title" style="width:80%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;" >{{:zhTitle}}</li>
	<li class="list">
		<p>
			<span><a href="#">{{:zhSource}}</a></span><span>{{:dayTime}}</span>
		</p>
		<p class="right">
			<span>{{:languageTname}}</span>
            <span>{{:zhCountry}}<img style="height:14px;" src="${uedroot}/images/country/{{:enCountry}}@2x.png" /></span> 
            <span>转载：{{:heatValue}}</span>
		</p>
	</li>
	<li class="news" style="-webkit-line-clamp: 2;-webkit-box-orient: vertical;display: -webkit-box;text-overflow:ellipsis;overflow:hidden;" >
        {{:zhSummary}}
	</li>
</ul>
</script>

<script type="text/javascript">
    var pager;
    (function () {
        seajs.use('app/jsp/search/event', function (eventPage) {
            pager = new eventPage({element: document.body});
            pager.render();
        });
    })();
</script>
</html>
