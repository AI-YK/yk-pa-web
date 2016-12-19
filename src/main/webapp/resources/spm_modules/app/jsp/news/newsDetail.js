define("app/jsp/news/newsDetail", function(require, exports, module) {
	var $ = require('jquery'), 
	Widget = require('arale-widget/1.2.0/widget'), 
	Dialog = require("optDialog/src/dialog"), 
	AjaxController = require('opt-ajax/1.0.0/index');
	var ajaxController = new AjaxController();
	var translatePage = require("app/jsp/translate/translate");
	var translate = new translatePage();
	var newsDetailPage = Widget.extend({
		/* 事件代理 */
		events : {
			 
		},
		/* 重写父类 */
		setup : function() {
			newsDetailPage.superclass.setup.call(this);
			this._init();
		},
		/* 初始化动画 */
		_initAnimation:function(){
			//专题
			$(function () {
			    var st = 100;
			    $('.news-detail-information ul #yuyan').mouseenter(function () {
			  	  	$(this).css("background-image","url("+uedroot+"/images/yy-2.png)");
					$('#typesetting').show(1);
			    });
				$("#typesetting").click(function () {
			           $(this).hide(1);
			           $('.news-detail-information ul #yuyan').css("background-image","url("+uedroot+"/images/yy-1.jpg)");
			     });	
					$('.news-detail-information ul #yuyan').mouseleave(function () {
			        $('#typesetting').hide(1);
			        $('.news-detail-information ul #yuyan').css("background-image","url("+uedroot+"/images/yy-1.jpg)");
			    });	
					//分享
				$(function () {
				  var st = 100;
					$('.news-detail-information ul #share1').mouseenter(function () {
					  	  	$('.news-detail-information ul #share1 .shareicon').css("color","#3382ee");
							$('#share-show').show(1);
					});
				  $("#share-show").click(function () {
					                $(this).hide(1);
					                $('.news-detail-information ul #share1 .shareicon').css("color","#ddd");
					           });	
							$('.news-detail-information ul #share1').mouseleave(function () {
					        $('#share-show').hide(1);
					        $('.news-detail-information ul #share1 .shareicon').css("color","#ddd");
				});		
			 }); 
			//解决样式冲突
			$("#typesetting li").css("font-size","12px");
			$("#share-show li").css("font-size","12px");
			 var $xiding = $("#xuanf1");
			    $(window).on("scroll",function(){
			        var $this = $(this);
			        var st = $this.scrollTop();
			        if(st>100){
				       $('#xuanf1').css("background","#fff");
				       $('#xuanf1').addClass("additional");
				       $xiding.stop(true,true).show();   
			        }  else {
				       $('#xuanf1').css("background","#fff");
				       $xiding.stop(true,true).show();
				       $('#xuanf1').removeClass("additional");
			        }
			    });
		});
		},
		/*处理原文格式*/
		showSrcContent:function(){
			var srcContent = $("#srcContent").html();
			if(srcContent){
				srcContent= srcContent.replace("<BR/>","<br>").split("<br>");
				var html = [];
				for(var i=0;i<srcContent.length;i++){
					html.push("<li>"+srcContent[i]+"</li>");
				}
				$("#newsDetailContent").html(html.join(""));
			}
		},
		/*显示译文*/
		showTranslation:function(){
			//终止上一次
			translate.stopTranslate();
			$("#newsDetailContent").html('');
			this.queryTranslation(function(json){
				json ="<li>"+json+"</li>";
				$("#newsDetailContent").append(json);
				});
		},
		/*显示原文*/
		showOriginal:function(){
			//终止上一次
			translate.stopTranslate();
			this.showSrcContent();
		},
		/*显示混合*/
		showSynchysis:function(){
			//终止上一次
			translate.stopTranslate();
			$("#translateContent").html('');
			$("#translateTitle").html('');
			this.showSrcContent();
			$('#drag').show();
			this.queryTranslation(function(json){
				$("#translateTitle").append(json);
			 });
			this.queryTranslation(function(json){
				json ="<p>"+json+"</p>";
				$("#translateContent").append(json);
			 });
			
		},
		//翻译
		queryTranslation:function(callBack){
			var text =$("#srcContent").html();
			//目标语言
			var tgtl ="zh";
			var srcLanguage = $("#srcLanguage").val();
			if(srcLanguage=="zh"){
				tgtl ="en";
			}
			var param = {};
			//原语言
			param.srcl=srcLanguage;
        	param.text = text;
        	param.tgtl = tgtl;
        	translate.execTranslate(param,callBack);
		},
		/*查询分享收藏数*/
		_queryCollOrShareCount:function(){
			/*$.get(_base+"/news/collOrShareCount",{'id':newsDetailsId},function(json){
				if(json.shareCount!=""){
					$("#collCount").html(json.shareCount);
				}
			});*/
		},
		/*收藏操作*/
		_collectionHandle:function(type){
			/*$.get(_base+"/news/collectionHandle",{'id':newsDetailsId,"type":type},function(json){
				if(3==type){
				//查询是否收藏
					console.log(JSON.stringify(json));
				}
			});*/
		},
		_bindEvent:function(){
			var _this = this;
			$("#showTranslation").on("click",function(){
				_this.showTranslation();
			});
			$("#showOriginal").on("click",function(){
				_this.showOriginal();
			});
			$("#showSynchysis").off("click").on("click",function(){
				_this.showSynchysis();
			});
		},
		_init:function(){
			this._initAnimation();
			this._bindEvent();
			this.showSrcContent();
		}
		
	});
	module.exports = newsDetailPage;
});