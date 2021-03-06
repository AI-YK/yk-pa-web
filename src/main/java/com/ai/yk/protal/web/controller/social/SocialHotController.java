package com.ai.yk.protal.web.controller.social;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.ai.opt.sdk.util.StringUtil;
import com.ai.yk.protal.web.constants.Constants;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.mycustomized.MyCustomizedVo;
import com.ai.yk.protal.web.content.mytopics.MyTopicsVo;
import com.ai.yk.protal.web.content.socialdetail.SocialDetailMessage;
import com.ai.yk.protal.web.content.socialdetail.SocialDetailResponse;
import com.ai.yk.protal.web.controller.BaseController;
import com.ai.yk.protal.web.service.social.SocialService;
import com.ai.yk.protal.web.utils.SessionUtil;
import com.alibaba.fastjson.JSON;

/**
 * 社交热点
 */
@Controller
@RequestMapping("social")
public class SocialHotController extends BaseController {
	private static final Logger LOG = LoggerFactory
			.getLogger(SocialHotController.class);
	/*社交详情view*/
	private static final String SOCIAL_DETAILS_VIEW ="/social/socialDetail";
	
	@Autowired
	private SocialService socialService;
	/**
	 *社交详情
	 * 
	 * @return
	 */
	@RequestMapping("/detail/{informationId}")
	public ModelAndView socialDetails(YJRequest<SocialDetailMessage> req,
			@PathVariable String informationId) {
		LOG.info("---------社交详情-【"+informationId+"】-----------");
		SocialDetailMessage message = new SocialDetailMessage();
		message.setId(informationId);
		req.setMessage(message);
		YJResponse<SocialDetailResponse> res = socialService.querySocialDetail(req);
		
		ModelAndView view = new ModelAndView(SOCIAL_DETAILS_VIEW);
		if(res==null||res.getData()==null||res.getData().getWeibo()==null || StringUtil.isBlank(res.getData().getWeibo().getName())){
			view.setViewName(Constants.PAGE_404);
			return view;
		}
		view.addObject("socialDetail", res.getData().getWeibo());
		/*String keyword = this.getString("keyword", "");
		if(!StringUtil.isBlank(keyword)){
			try {
				keyword = URLDecoder.decode(keyword ,Constants.DEFAULT_ENCODING);
			} catch (UnsupportedEncodingException e) {
				LOG.error(e.getMessage(),e);
			}
		}
		view.addObject("keyword", keyword);*/
		return view;
	}
	@RequestMapping("/toHotView")
	public String toHotView(Model model){
		List<MyTopicsVo> topics = SessionUtil.getTopics();
		MyCustomizedVo config = SessionUtil.getUserConfig();
		if(topics==null||topics.size()==0){
    		model.addAttribute("hasTopic", false);
    	}else{
    		model.addAttribute("hasTopic", true);
    		model.addAttribute("topics", topics);
    		model.addAttribute("topicss", JSON.toJSONString(topics));
    	}
		if(config!=null){
			model.addAttribute("hasIntere", true);
			model.addAttribute("interestList", config.getInterestList());
		}else{
			model.addAttribute("hasIntere", false);
		}
		return "/news/social";
	}
}
