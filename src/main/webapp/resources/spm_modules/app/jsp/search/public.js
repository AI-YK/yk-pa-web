define('app/jsp/search/public',function(require, exports, module) {
			//'use strict';
			require("jsviews/jsrender.min");
			var $ = require('jquery'), Widget = require('arale-widget/1.2.0/widget'), AjaxController = require('opt-ajax/1.0.0/index');
			var Dialog = require("optDialog/src/dialog");
			require('jquery-i18n/1.2.2/jquery.i18n.properties.min');
			require("app/util/jsviews-yi");
			require("bootstrap-paginator/bootstrap-paginator.min");
			require("opt-paging/aiopt.pagination");
			require("twbs-pagination/jquery.twbsPagination.min");
			require("my97DatePicker/WdatePicker");
			var moment = require("moment/2.9.0/moment");
			var SelectUtil = require("app/jsp/search/select");
			var SearchChart = require("app/jsp/search/charts");
			// 实例化AJAX控制处理对象
			var ajaxController = new AjaxController();

			var selectUtil = new SelectUtil();
			var searchChart = new SearchChart();

			var publicPage = Widget.extend({
				// 属性，使用时由类的构造函数传入
				attrs : {
					clickId : "",
					model:""
						
				},
				// 事件代理
				events : {

				},

				// 重写父类
				setup : function() {
					var _this = this;
					publicPage.superclass.setup.call(this);
                    this.model = $("#model").val(); 
                    if(this.model=='news'){
                    	$("#le-tba1").show();
                    }else if(this.model=='social'){
                    	$("#le-tba2").show();
                    }else{
                    	$("#le-tba1").show();
                    }
					_this._bindEvent();
					
					_this._loadTopics();
					selectUtil.initOrgSelect(['orgnizationId1','orgnizationId2']);
					selectUtil.initDicSelect(['dicId1','dicId2']);
					
					if(this.model=='news'){
						_this._search("news");
                    }else if(this.model=='social'){
                    	_this._search("social");
                    }else{
                    	_this._search("news");
    					_this._search("social");
                    }
					
					_this._loadChartData();

				},
				_bindEvent : function() {
					var _this = this;
					$(".level-left-table ul li a").click(function() {
						$(".level-left-table ul li a").each(function() {
							$(this).removeClass("current");
						});
						$(this).addClass("current");
						var index = $('.level-left-table ul li a').index(this);
						if (index == 0) {
							$('#le-tba1').show();
							$('#le-tba2').hide();
						}
						if (index == 1) {
							$('#le-tba2').show();
							$('#le-tba1').hide();
						}
					});
					
					//日期控件
					$(document).on("click",".calendar",function(){
						var timeId = $(this).attr('id');
						WdatePicker({el:timeId,readOnly:true,dateFmt:'yyyy-MM-dd'});
					});
					
					$("#searchBtn1").click(function(){
						_this._search("news");
					});
					$("#searchBtn2").click(function(){
						_this._search("social");
					});
					
					$(document).on("click","#news-list ul",function(){
						var _this = $(this);
		            	var uuid = _this.attr("uuid");
		            	var url =_base+"/news/detail/"+uuid;
		            	var keyword = _this.attr("keyword");
		 	           	if(keyword){
		 	           		url = url+"?keyword="+encodeURI(encodeURI(keyword));
		 	           	}
		 	        	window.open (url, '_blank' ) ;
					});

					$(document).on("click","#social-list ul",function(){
		            	var _this = $(this);
		           	    var myid = _this.attr("myid");
		           	    var keyword = _this.attr("keyword");
		           	    var url =_base+"/social/detail/"+myid;
		        	    if(keyword){
			           		url = url+"?keyword="+encodeURI(encodeURI(keyword));
			           	}
			        	window.open (url, '_blank' ) ;
		            });
					
					selectUtil.autocompleteDic('mediaIn1','mediaId1');
					selectUtil.autocompleteDic('mediaIn2','mediaId2');

				},
				_loadChartData:function(){
					var param = {};
					var idList = $("#cities").val();
					if(idList!=""){
						param.idList = idList;
					}
					//领域分类
					var categoryId = $("#interestes").val();
					if(categoryId!=""){
						param.categoryId = categoryId;
					}
					var nowDate = moment().format('YYYY-MM-DD');
					var pre7Date = moment().add('days',-6).format('YYYY-MM-DD');
					$("#tDate").html("选择时间："+pre7Date+" 至 "+nowDate);
					$("#mDate").html("选择时间："+pre7Date+" 至 "+nowDate);
					param.beginTime = nowDate + " 23:59:59";
					param.endTime = pre7Date + " 00:00:00";
					searchChart._queryMediaCoverageTrend(param);
				},
				_getSearchParams : function(mediaType) {

					var param = {};
					param.mediaType = mediaType;
					var provincecityCode = $("#province").val();
					if(provincecityCode!=""){
						param.provincecityCode = provincecityCode;
					}
					var idList = $("#cities").val();
					if(idList!=""){
						param.idList = idList;
					}
					//领域分类
					var categoryId = $("#interestes").val();
					if(categoryId!=""){
						param.categoryId = categoryId;
					}
					param.highlight = "true";
					var keyword='';
					if ('news' == mediaType) {
						keyword = $("#keyword1").val();
						if($("#dicId1").val()!=""){
							param.dicValue= $("#dicId1").val();
						}
						var timeStr = $("#timeId1").val();
						if(timeStr!=""){
							timeStr = timeStr.replace(/\./g,"-");
							param.beginTime= timeStr + " 00:00:00";
							param.endTime= timeStr + " 23:59:59";
						}
						if($("#mediaId1").val()!=""){
							param.mediaId=$("#mediaId1").val();
						}
						if($("#fileId1").val()!=""){
							param.fieldName= $("#fileId1").val();
							param.order = 'desc';
						}
						if($("#sentimentId1").val()!=""){
							param.sentimentId= $("#sentimentId1").val();
						}
					}else if ('social' == mediaType) {
						keyword = $("#keyword2").val();
						if($("#dicId2").val()!=""){
							param.dicValue= $("#dicId2").val();
						}
						var timeStr = $("#timeId2").val();
						if(timeStr!=""){
							timeStr = timeStr.replace(/\./g,"-");
							param.beginTime= timeStr + " 00:00:00";
							param.endTime= timeStr + " 23:59:59";
						}
						if($("#fileId2").val()!=""){
							param.fieldName= $("#fileId2").val();
							param.order = 'desc';
						}
						if($("#medialId2").val()!=""){
							param.mediaLevel= $("#medialId2").val();
						}
						if($("#sentimentId2").val()!=""){
							param.sentimentId= $("#sentimentId2").val();
						}
					}
					if(keyword!=''){
						param.keyword = keyword;
					}
					return param;
				},
				/** 媒体类型news/social* */
				_search : function(mediaType) {
					var _this = this;
					var url = _base + "/news/getSearchPublicSafety";
					var param = {};
					var pagination;
					var renderId = null;
					var messageId = null;
					if ('news' == mediaType) {
						param = _this._getSearchParams('news');
						pagination = $("#news-paging");
						renderId = 'news-list';
						messageId = 'news-message';
					} else {
						param = _this._getSearchParams('social');
						pagination = $("#social-paging");
						renderId = 'social-list';
						messageId = 'social-message';
					}
					
					pagination.runnerPagination({
						url : url,
						method : "POST",
						dataType : "json",
						messageId : messageId,
						renderId : renderId,
						data : param,
						pageSize : 8,
						visiblePages : 7,
						first : false,
						last : false,
						message : "正在为您查询数据..",
						callback:function(data){
							if ('news' == mediaType) {
								$("#news-num").html(_this._fdigit(data.count));
							}else if ('social' == mediaType) {
								$("#social-num").html(_this._fdigit(data.count));
							}
						},
						render : function(data) {
							if ('news' == mediaType) {
								$("#news-num").val();
								var listHtml = $("#levelNewsTempl").render(data);
								$("#news-list").html(listHtml);
							} else if ('social' == mediaType) {
								var listHtml = $("#levelSocialTempl").render(data);
								$("#social-list").html(listHtml);
							}
						}
					});
				},
				_loadTopics:function(){
		        	var _this = this;
		        	var url = "/emergency/getHotTopic";
		        	var param = {};
		        	param.pageSize= 10;
		        	param.pageNo = 1;
		        	var provincecityCode = $("#province").val();
					if(provincecityCode!=""){
						param.provinceCode = provincecityCode;
					}
					var idList = $("#cities").val();
					if(idList!=""){
						param.cityCode = idList;
					}
					//领域分类
					var categoryId = $("#interestes").val();
					if(categoryId!=""){
						param.categoryId = categoryId;
					}
		        	ajaxController.ajax({
						type: "post",
						processing: false,
						message: "保存数据中，请等待...",
						url: _base + url,
						data: param,
						success: function (rs) {
							var data = rs.data;
							for(var i=0;i<data.length;i++){
								data[i].detailsUrl = _base + "/event/detail/"+ data[i].srcId;
							}
							var topicHtml = $("#topicTempl").render(data);
							$("#topic-list").html(topicHtml);
							
						}
					});
		        },
		        _fdigit:function (s) {  
				    s = parseFloat((s + "").replace(/[^\d\.-]/g, "")) + "";  
				    var l = s.split(".")[0].split("").reverse();  
				    var t = "";  
				    for (i = 0; i < l.length; i++) {  
				        t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");  
				    }  
				    return t.split("").reverse();  
				}  
			});

			module.exports = publicPage;
		});
