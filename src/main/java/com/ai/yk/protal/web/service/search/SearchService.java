/**
 * 
 */
package com.ai.yk.protal.web.service.search;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ai.opt.sdk.util.StringUtil;
import com.ai.yk.protal.web.constants.YeesightApiConstants;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.getdatasourcelist.GetDataSourceListMessage;
import com.ai.yk.protal.web.content.getdatasourcelist.GetDataSourceListReponse;
import com.ai.yk.protal.web.content.queryAreaList.QueryAreaListMessage;
import com.ai.yk.protal.web.content.queryAreaList.QueryAreaListVo;
import com.ai.yk.protal.web.content.searchPublicSafety.SearchPublicSafetyMessage;
import com.ai.yk.protal.web.content.searchPublicSafety.SearchPublicSafetyResponse;
import com.ai.yk.protal.web.content.searchPublicSafety.SearchPublicSafetyVo;
import com.ai.yk.protal.web.service.common.QueryAreaListService;
import com.ai.yk.protal.web.utils.HttpClientUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;

/**
 * <br>
 * Date: 2016年12月6日 <br>
 * Copyright (c) 2016 asiainfo.com <br>
 * 
 * @author xuyw
 */
@Service
public class SearchService {
	/**
	 * 搜索数据源列表
	 */
	public YJResponse<GetDataSourceListReponse> getDataSourceList(YJRequest<GetDataSourceListMessage> req) {
		String url = YeesightApiConstants.getApiUrl(YeesightApiConstants.API_SEARCH_GETDATASOURCELIST);
		String result =HttpClientUtil.getYJBaseResponse(url,req);
		if(!StringUtil.isBlank(result)){
			return JSON.parseObject(result, new TypeReference<YJResponse<GetDataSourceListReponse>>(){});
		}
		return null;
	}
	
	/**
	 * 公共安全事件检索
	 */
	public YJResponse<SearchPublicSafetyResponse> getSearchPublicSafety(YJRequest<SearchPublicSafetyMessage> req) {
		String url = YeesightApiConstants.getApiUrl(YeesightApiConstants.API_YEESIGHTFORPUBLICAFFAIRS_SEARCHPUBLICSAFETY);
		String result =HttpClientUtil.getYJBaseResponse(url,req);
		if(!StringUtil.isBlank(result)){
			return JSON.parseObject(result, new TypeReference<YJResponse<SearchPublicSafetyResponse>>(){});
		}
		return null;
	}

	public static void main(String[] args) throws Exception {
		
		/*SearchService service = new SearchService();
		YJRequest<SearchPublicSafetyMessage> req = new YJRequest<SearchPublicSafetyMessage>();
		SearchPublicSafetyMessage message = new SearchPublicSafetyMessage();
		message.setMediaType("news");
		message.setProvincecityCode("吉林");
		message.setCityCode("长春");
		message.setPublicAffairsType("公共卫生");
		message.setMediaLevel("1");
		message.setSentimentId("1");
		message.setOrder("desc");
		message.setFieldName("pubdate ");
		
		req.setMessage(message);
		System.out.println(JSON.toJSON(req));
		YJResponse<SearchPublicSafetyResponse> res = service.getSearchPublicSafety(req);
		System.out.println(JSON.toJSONString(res));*/
		
		
		/*String str ="{'data':{'resultCount':10,'resultList':[{'mediaNameSrc':'中国结婚论坛-彩妆造型','mediaId':'10021','mediaNameZh':'中国结婚论坛-彩妆造型','mediaNameEn':'中国结婚论坛-彩妆造型','url':'chinajiehun.com'}]},'head':{'result':'true','message':'ok'}}";
		YJResponse<GetDataSourceListReponse> data =JSON.parseObject(str, new TypeReference<YJResponse<GetDataSourceListReponse>>(){});
		System.out.println(data.getData().getResultCount());*/
	}
}
