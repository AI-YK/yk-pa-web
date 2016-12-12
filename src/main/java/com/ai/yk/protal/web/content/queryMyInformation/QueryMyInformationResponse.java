package com.ai.yk.protal.web.content.queryMyInformation;

import java.io.Serializable;
import java.util.List;
/**
 * 公共安全事件检索接口出参
 * @author shancong
 */
public class QueryMyInformationResponse implements Serializable{
		private static final long serialVersionUID = 3037496561666627522L;
		/**记录数   是否必填：Y**/
		private Integer resultCount;
		/**资讯list  是否必填：Y**/
		private List<QueryMyInformationVo> resultList;

		public Integer getResultCount() {
			return resultCount;
		}

		public void setResultCount(Integer resultCount) {
			this.resultCount = resultCount;
		}

		public List<QueryMyInformationVo> getResultList() {
			return resultList;
		}

		public void setResultList(List<QueryMyInformationVo> resultList) {
			this.resultList = resultList;
		}
	}