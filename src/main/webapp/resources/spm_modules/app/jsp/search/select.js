define('app/jsp/search/select', function (require, exports, module) {
    'use strict';
    var $=require('jquery');
	require("echarts/echarts.min");
	require("select2/select2.min");
	require("select2/select2.css");
	require("select2/select2_locale_zh-CN");
	require("jquery-autocomplete/jquery.autocomplete");
	require("jquery-autocomplete/jquery.autocomplete.css");
	var  Base = require('arale-base/1.2.0/base');
    var   AjaxController = require('opt-ajax/1.0.0/index');
    
    var ajaxController = new AjaxController();
    
    var SelectUtil = Base.extend({
        //重写父类
        setup: function () {
        	SelectUtil.superclass.setup.call(this); 
        },
        initOrgSelect:function(selectIds){
        
        	var url = _base +"/common/getChProvince";
        	var param={};
        	param.language="zh";
        	param.type="3";
        	ajaxController.ajax({
        		type: "post",
				processing: false,
				message: "保存数据中，请等待...",
				url: url,
				data: param,
				success:function(rs){
					var data = rs.data;
					var options = "<option value='-1'>省份</option>";
					for(var i=0;i<data.length;i++){
						options = options + "<option value='" + data[i].code + "'>"+data[i].name+"</option>";
					}
					
					if(options!=""){
						var sid=null;
						for(var j=0;j<selectIds.length;j++){
							sid ="#"+selectIds[j];
							$(sid).html(options);
							$(sid).select2({"val":"-1"});
						}
					}
					
				}
        	    
        	});
        },
        //[{"id":"","callback":function(){执行操作}}]
        initLanguageSelect:function(selectConfig){
        	var _this = this;
        	var url = _base +"/common/getQueryInfoLanguage";
        	var param={};
        	param.language="zh";
        	param.languageType="0";
        	ajaxController.ajax({
        		type: "post",
				processing: false,
				message: "保存数据中，请等待...",
				url: url,
				data: param,
				success:function(rs){
					var data = rs.data;
					if(!data){
						data =[];
					}
					var data2 = [];
					data2.push({"id":'',"text":"语言不限"});
					for(var i=0;i<data.length;i++){
						var obj ={};
						obj.id=data[i].srcValue;
						obj.text=data[i].name;
						data2.push(obj);
					}
					var selectConfigData = []; 
					if($.isArray(selectConfig)){//数组模式
						selectConfigData =selectConfig; 
					}else{
						selectConfigData.push(selectConfig);
					}
					for(var j=0;j<selectConfigData.length;j++){
						var selectObj = selectConfigData[j];
						_this._commonselect(selectObj.id, '语言', data2,selectObj.callback);
					}
				  }
					
				});
        },
        initDicSelect:function(selectConfig){
        	var _this = this;
        	var url = _base +"/common/getDicByTypeAndLanguage";
        	var param={};
        	param.language="zh";
        	param.type="SJYYXL";
        	ajaxController.ajax({
        		type: "post",
				processing: false,
				message: "保存数据中，请等待...",
				url: url,
				data: param,
				success:function(rs){
					var data = rs.data;
					if(!data){
						data =[];
					}
					var data2 = [];
					data2.push({"id":'',"text":"影响力不限"});
					for(var i=0;i<data.length;i++){
						var obj ={};
						obj.id=data[i].dicValue;
						obj.text=data[i].dicName;
						data2.push(obj);
					}
					var selectConfigData = []; 
					if($.isArray(selectConfig)){//数组模式
						selectConfigData =selectConfig; 
					}else{
						selectConfigData.push(selectConfig);
					}
					for(var j=0;j<selectConfigData.length;j++){
						var selectObj = selectConfigData[j];
						_this._commonselect(selectObj.id, '影响力', data2,selectObj.callback);
					}
				}
        	    
        	});
        },
        autocompleteDic:function(input,store){
        	var url = _base + "/common/getDataSourceList";
        	$('#'+input).focus().autocomplete(url,{
        		dataType: "json", 
        		max:30,
        		minChars:1,
        		mustMatch:true,
        		matchSubset:false,
        		matchCase:true,
        	    parse: function(result) {  
                    var rows = $.map(result.data, function(row) {  
                        return {  
                            data: row,  
                            value: row.mediaId,  
                            result: row.mediaNameZh  
                        }  
                    });  
                    //alert(JSON.stringify(rows));
                    return rows;
                },  
        		formatItem: function(row, i,max) {
        			return row.mediaNameZh; 
        	    }
        	}).result(function(event, item) {
        		if(item){
        			$('#'+store).val(item.mediaId);
        		}else{
        			$('#'+store).val("");
        		}
        	});
        	
        },
        queryMediaName:function(ele,storeId){
        	ele.select2({
        		minimumInputLength: 1,//至少输入n个字符，才去加载数据  
        	    allowClear: true,  
        	    width: "100px",  
        	    height:"20px", 
        	    language: "zh-CN",
        	    placeholder: "媒体",  
        	    formatSelection : function (item) {
        	    	$("#"+storeId).val(item.id);
        	    	return item.text; 
        	    },  // 选择结果中的显示
        	    formatResult    : function (item) { return item.text; },  // 搜索列表中的显示
        	    ajax: {  
        	        url: _base + "/common/getDataSourceList", 
        	        type: 'POST',
        	        dataType: 'json',  
        	        delay: 250,  
        	        data: function (term, page) {  
        	            return {  
        	                q: term,  
        	                limit:10
        	            };  
        	        },  
        	        cache: false, 
        	        results: function (res, page) { 
        	        	var options = [];  
        	            if (res.statusCode=="1") {  
        	                var data = res.data;
        	                var len =data.length;
        	                for (var i = 0;i < len; i++) {  
        	                    var option = {  
        	                        "id": data[i]["mediaId"],  
        	                        "text": data[i]["mediaNameZh"]  
        	                    };  
        	                    options.push(option);  
        	                }  
        	            } 
        	          return {results:options};
        	        },  // 构造返回结果
        	        escapeMarkup : function (m) { return m; }               // 字符转义处理 
        	    }  
        	});  
        },
        /*排序下拉*/
        initSortSelect:function(selectConfig){
        	debugger;
        	var _this = this;
        	var data = [];
        	data.push({"id":'',"text":"排序不限"});
			data.push({"id":"relevance","text":"相关度"});
        	data.push({"id":"time","text":"时间"});
        	data.push({"id":"force","text":"权重"});
        	data.push({"id":"transCount","text":"转载量"});
        	var selectConfigData = []; 
			if($.isArray(selectConfig)){//数组模式
				selectConfigData =selectConfig; 
			}else{
				selectConfigData.push(selectConfig);
			}
			for(var j=0;j<selectConfigData.length;j++){
				var selectObj = selectConfigData[j];
				_this._commonselect(selectObj.id, '排序', data,selectObj.callback);
			}
        },
        /*译文下拉*/
        initTranSelect:function(selectConfig){
        	var _this = this;
        	var data = [];
        	data.push({"id":"tran","text":"译文"});
        	data.push({"id":"onlyTran","text":"仅显示译文"});
        	data.push({"id":"onlyText","text":"仅显示原文"});
        	data.push({"id":"tranAndText","text":"显示译文和原文"});
        	var selectConfigData = []; 
        	if($.isArray(selectConfig)){//数组模式
        		selectConfigData =selectConfig; 
        	}else{
        		selectConfigData.push(selectConfig);
        	}
        	for(var j=0;j<selectConfigData.length;j++){
        		var selectObj = selectConfigData[j];
        		_this._commonselect(selectObj.id, '译文', data,selectObj.callback);
        	}
        },
        
        
        
        
        /*生成通用下拉列表*/
        _commonselect:function(id,text,data,callback){
        	var html = [];
        	html.push('<input type="hidden" id="'+id+'_input">');
        	html.push('<p> <span id="'+id+'_select_text">'+text+'</span><i class="icon iconfont">&#xe659;</i>');
        	html.push('<div id="'+id+'_data_list" class="select-dropdown-show" style="display:none;">');
        	html.push('<ul>'); 
        	if(data){
        		var len = data.length;
        		//class="current"
        		for(var i =0;i<len;i++){
        			var obj = data[i];
					html.push('<li data-val="'+obj.id+'" data-text="'+obj.text+'">'+obj.text+'</li>'); 	
				}
        	}
			html.push('</ul>'); 
			html.push('</div>'); 
			html.push('</p>'); 
			var selectObj = $("#"+id);
			selectObj.html(html.join(""));
			var selectDataList = $("#"+id+"_data_list");
			selectObj.mouseenter(function () {
				selectDataList.show(1);
		    }).mouseleave(function () {
			 selectDataList.hide(1);
		    });
			selectDataList.click(function () {
		                $(this).hide(1);
		           });
			var selectLi = $("#"+id+"_data_list ul li");
			selectLi.click(function(){
				selectLi.removeClass("current");
				var _this=$(this);
				_this.addClass("current");
				var val = _this.attr("data-val");
				var text = _this.attr("data-text");
				$("#"+id+"_input").val(val);
				$("#"+id+"_select_text").html(text);
				//回调
				if(callback){
				 callback();
				}
			});
		}
        
    });

    module.exports = SelectUtil;
});
