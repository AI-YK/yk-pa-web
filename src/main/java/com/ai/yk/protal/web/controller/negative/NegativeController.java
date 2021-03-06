package com.ai.yk.protal.web.controller.negative;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ai.opt.sdk.web.model.ResponseData;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.searchPublicSafety.SearchPublicSafetyMessage;
import com.ai.yk.protal.web.content.searchPublicSafety.SearchPublicSafetyNewsVo;
import com.ai.yk.protal.web.content.searchPublicSafety.SearchPublicSafetyResponse;
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
			@RequestParam(value="isTopic") int isTopic,
		 	/**专题ID **/
			@RequestParam(required=false) String id,
			@RequestParam(value="mediaType",defaultValue="") String mediaType,
			@RequestParam(value="sentimentId",defaultValue="-1") String sentimentId,
			@RequestParam(value="provincecityCode",defaultValue="") String provincecityCode,
			@RequestParam(value="cityCode",defaultValue="") String cityCode,
			@RequestParam(value="categoryId",defaultValue="") String categoryId,
			@RequestParam(value="mediaId",defaultValue="") String mediaId,
			@RequestParam(value="mediaLevel",defaultValue="") String mediaLevel,
			@RequestParam(value="fieldName",defaultValue="") String fieldName,
			@RequestParam(value="order",defaultValue="") String order,
			@RequestParam(value="idList",defaultValue="") String idList
			){
		SearchPublicSafetyMessage searchPublicSafetyMessage=new SearchPublicSafetyMessage();
		searchPublicSafetyMessage.setCityCode(cityCode);
		searchPublicSafetyMessage.setFieldName(fieldName);
		searchPublicSafetyMessage.setMediaId(mediaId);
		searchPublicSafetyMessage.setMediaLevel(mediaLevel);
		searchPublicSafetyMessage.setMediaType(mediaType);
		searchPublicSafetyMessage.setOrder(order);
		searchPublicSafetyMessage.setProvincecityCode(provincecityCode);
		searchPublicSafetyMessage.setCategoryId(categoryId);
		searchPublicSafetyMessage.setSentimentId(sentimentId);
		searchPublicSafetyMessage.setIdList(idList);
		YJResponse<SearchPublicSafetyResponse> yjr=searchService.getSearchPublicSafety(searchPublicSafetyMessage);
		if(yjr==null){
			return new ResponseData<SearchPublicSafetyResponse>(ResponseData.AJAX_STATUS_FAILURE,"查询负面舆情失败！", null);
		}
		SearchPublicSafetyResponse searchPublicSafetyResponse=yjr.getData();
		
		//SearchPublicSafetyResponse searchPublicSafetyResponse=get();
		return new ResponseData<SearchPublicSafetyResponse>(ResponseData.AJAX_STATUS_SUCCESS,"查询负面舆情成功！", searchPublicSafetyResponse);
	}
	
	public SearchPublicSafetyResponse get(){
		SearchPublicSafetyNewsVo searchPublicSafetyVo;
		List<SearchPublicSafetyNewsVo> list=new ArrayList<SearchPublicSafetyNewsVo>();
		for(int i=1;i<10;i++){
			searchPublicSafetyVo=new SearchPublicSafetyNewsVo();
			searchPublicSafetyVo.setTitleZh("昨天，结束了亚锦赛征程的朴泰桓。");
			searchPublicSafetyVo.setPubdate("2016-12-0"+i);
			list.add(searchPublicSafetyVo);
		}
		SearchPublicSafetyResponse searchPublicSafetyResponse=new SearchPublicSafetyResponse();
		searchPublicSafetyResponse.setResultList(list);
		return searchPublicSafetyResponse;
	}
}
