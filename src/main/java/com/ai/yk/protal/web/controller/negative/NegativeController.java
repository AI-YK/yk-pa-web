package com.ai.yk.protal.web.controller.negative;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ai.opt.sdk.web.model.ResponseData;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.getdatasourcelist.GetDataSourceListMessage;
import com.ai.yk.protal.web.content.searchPublicSafety.SearchPublicSafetyMessage;
import com.ai.yk.protal.web.content.searchPublicSafety.SearchPublicSafetyResponse;
import com.ai.yk.protal.web.content.searchPublicSafety.SearchPublicSafetyVo;
import com.ai.yk.protal.web.service.search.SearchService;

/**
 * 负面舆情
 */
@Controller
@RequestMapping("/negative")
public class NegativeController {

	@Autowired
	private SearchService searchService;
	
	@RequestMapping("/getNegativeList")
	@ResponseBody
	public ResponseData<SearchPublicSafetyResponse> getNegativeList(
			@RequestParam(value="mediaType",defaultValue="") String mediaType,
			@RequestParam(value="sentimentId",defaultValue="-1") String sentimentId,
			@RequestParam(value="province",defaultValue="") String province,
			@RequestParam(value="city",defaultValue="") String city,
			@RequestParam(value="publicAffairsType",defaultValue="") String publicAffairsType,
			@RequestParam(value="mediaId",defaultValue="") String mediaId,
			@RequestParam(value="mediaLevel",defaultValue="") String mediaLevel,
			@RequestParam(value="fieldName",defaultValue="") String fieldName,
			@RequestParam(value="order",defaultValue="") String order
			){
		SearchPublicSafetyResponse searchPublicSafetyResponse=get();
		/*SearchPublicSafetyMessage searchPublicSafetyMessage=new SearchPublicSafetyMessage();
		searchPublicSafetyMessage.setCity(city);
		searchPublicSafetyMessage.setFieldName(fieldName);
		searchPublicSafetyMessage.setMediaId(mediaId);
		searchPublicSafetyMessage.setMediaLevel(mediaLevel);
		searchPublicSafetyMessage.setMediaType(mediaType);
		searchPublicSafetyMessage.setOrder(order);
		searchPublicSafetyMessage.setProvince(province);
		searchPublicSafetyMessage.setPublicAffairsType(publicAffairsType);
		searchPublicSafetyMessage.setSentimentId(sentimentId);
		YJRequest<SearchPublicSafetyMessage> req=new YJRequest<SearchPublicSafetyMessage>();
		req.setMessage(searchPublicSafetyMessage);1昨天，结束了亚锦赛征
		YJResponse<SearchPublicSafetyResponse> yjr=searchService.getNewsList(req);
		SearchPublicSafetyResponse searchPublicSafetyResponse=yjr.getData();*/
		
		return new ResponseData<SearchPublicSafetyResponse>(ResponseData.AJAX_STATUS_SUCCESS,"查询负面舆情成功！", searchPublicSafetyResponse);
	}
	
	public SearchPublicSafetyResponse get(){
		SearchPublicSafetyVo searchPublicSafetyVo;
		List<SearchPublicSafetyVo> list=new ArrayList<SearchPublicSafetyVo>();
		for(int i=1;i<10;i++){
			searchPublicSafetyVo=new SearchPublicSafetyVo();
			searchPublicSafetyVo.setTitleZh("昨天，结束了亚锦赛征程的朴泰桓。");
			searchPublicSafetyVo.setPubdate("2016-12-0"+i);
			list.add(searchPublicSafetyVo);
		}
		SearchPublicSafetyResponse searchPublicSafetyResponse=new SearchPublicSafetyResponse();
		searchPublicSafetyResponse.setResultList(list);
		return searchPublicSafetyResponse;
	}
}
