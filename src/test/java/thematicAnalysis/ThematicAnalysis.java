package thematicAnalysis;

import java.util.ArrayList;
import java.util.List;

import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.thematicAnalysis.ThematicAnalysisMessage;
import com.ai.yk.protal.web.content.thematicAnalysis.ThematicAnalysisResponse;
import com.ai.yk.protal.web.service.thematicAnalysis.ThematicAnalysisService;
import com.alibaba.fastjson.JSON;

public class ThematicAnalysis {

	public static void main(String[] args) {
		ThematicAnalysisService service = new ThematicAnalysisService();
		YJRequest<ThematicAnalysisMessage> req = new YJRequest<>();
		ThematicAnalysisMessage message = new ThematicAnalysisMessage();
		message.setInfoId("5cf4f1c273fb6d24592ea34f42b1fd75");
		List<String> modelNo = new ArrayList<>();
		//modelNo.add("ListNCSD");
		//modelNo.add("Gender");
		modelNo.add("ListNST");
		modelNo.add("ListNMSD");
		message.setModelNo(modelNo);
		req.setMessage(message);
		YJResponse<ThematicAnalysisResponse> res = service.getAnalysis(req);
		System.out.println(JSON.toJSONString(res));
	}

}
