package com.ai.yk.protal.web.content.search;

import com.ai.yk.protal.web.content.YJRequest;
/**
 *搜索列表接口入参
 * @author shancong
 *
 */
public class SearchRequest extends YJRequest {

	private SearchMessage message;

	public SearchMessage getMessage() {
		return message;
	}

	public void setMessage(SearchMessage message) {
		this.message = message;
	}
	
	



	

	
}
