package com.ai.yk.protal.web.controller.news;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.collection.CollectionMessage;
import com.ai.yk.protal.web.content.collection.CollectionResponse;
import com.ai.yk.protal.web.content.queryInformation.QueryInformationMessage;
import com.ai.yk.protal.web.content.queryInformation.QueryInformationResponse;
import com.ai.yk.protal.web.content.share.ShareCountVo;
import com.ai.yk.protal.web.content.share.ShareMessage;
import com.ai.yk.protal.web.controller.BaseController;
import com.ai.yk.protal.web.service.collection.CollectionService;
import com.ai.yk.protal.web.service.information.InformationService;
import com.ai.yk.protal.web.service.share.ShareService;

/**
 * 新闻<br>
 * Date: 2016年12月12日 <br>
 * Copyright (c) 2016 asiainfo.com <br>
 * 
 * @author xuyw
 */
@RestController
@RequestMapping("news")
public class NewsController extends BaseController {
	private static final Logger LOG = LoggerFactory
			.getLogger(NewsController.class);
	/*新闻详情view*/
	private static final String NEWS_DETAILS_VIEW ="/news/newsDetail";
	@Autowired
	private InformationService informationService;
	@Autowired
	private ShareService shareService;
	@Autowired
	CollectionService collectionService;
	/**
	 * 查询收藏分享数
	 * 
	 * @return
	 */
	@RequestMapping("/collOrShareCount")
	public ShareCountVo collOrShareCount(YJRequest<ShareMessage> req,ShareMessage message){
		req.setMessage(message);
		YJResponse<ShareCountVo> res=shareService.queryShareCount(req);
		if(res!=null&&res.getData()!=null){
			return res.getData();
		}else{
			LOG.error("查询分享或收藏数失败");
		}
		return  new ShareCountVo();
	}
	/**
	 * 收藏操作
	 * 
	 * @return
	 */
	@RequestMapping("/collectionHandle")
    public YJResponse<CollectionResponse> collectionHandle(YJRequest<CollectionMessage> req,CollectionMessage msg){
    	//msg.setId(SessionUtil.getLoginUser().getUserId());
    	req.setMessage(msg);
    	YJResponse<CollectionResponse> res = null;
    	int type = this.getInt("type");
    	switch (type) {
		case 1:
			//添加收藏
			res =collectionService.addCollection(req);
			break;
		case 2:
			//删除收藏
			res =collectionService.delCollection(req);
			break;
		case 3:
			//查询是否搜藏
			res =collectionService.queryIsCollection(req);
			break;

		}
    	return res;
    }
	
	/**
	 * 新闻详情
	 * 
	 * @return
	 */
	@RequestMapping("/detail/{informationId}")
	public ModelAndView newsDetails(YJRequest<QueryInformationMessage> req,
			@PathVariable String informationId) {
		LOG.info("---------新闻详情-【"+informationId+"】-----------");
		QueryInformationMessage message = new QueryInformationMessage();
		message.setInformationId(informationId);
		req.setMessage(message);
		YJResponse<QueryInformationResponse> res = informationService.queryNewsDetail(req);
		
		ModelAndView view = new ModelAndView(NEWS_DETAILS_VIEW);
		String temp ="11月4日，万达集团宣布以约10亿美元收购美国Dick Clark Productions.Inc.（以下简称“DCP”）100%股权，后者拥有20多项著名IP，其中包括金球奖、全美音乐奖、公告牌音乐奖（Billboard）、美国乡村音乐奖等颁奖典礼和纽约新年倒数晚会等$$超级IP及权益。<BR/>"+
				"此次收购意味着万达从电影产业进入电视制作行业，娱乐产业版图再次扩张。收购完成后，美国DCP集团管理层将全部留任，万达和管理层签订了长期的经营目标责任制，以保证DCP集团收入和利润将逐年大幅提升。<BR/>"+
				"DCP于1957年由美国艺人Dick Clark创建。1986年，DCP登陆纳斯达克，2002年该公司完成私有化，随后股权几经转手，身价也随着每次出售而翻倍。<BR/>"+
				"2007年6月，Dan Snyder的公司Red Zone Capital Management以1.75亿美元买下DCP。"+
"2012年，Guggenheim Parnters（古根海姆投资公司）以3.7亿美元从Dan Snyder手中买入DCP。在当时，外界认为3.7亿的收购价太高了。<BR/>"+
				"去年年末，古根海姆将公司业务拆分，DCP以及一些其他媒体资产出售给了DCP总裁Todd Boehly所控股的Eldridge Industries。目前，Todd Boehly是Eldridge Industries的CEO，同时也服务于古根海姆执行董事会。<BR/>"+
				"DCP旗下拥有“全美音乐奖”（American Music Awards）、“金球奖”（Golden Globes）以及“好莱坞电影奖”（Hollywood Film Awards）等重要IP。其中金球奖的知名度最高、成长最迅速，据悉，2018年，NBC将向DCP支付超过1000万美元，以获得金球奖的播放权。<BR/>"+
				"不过，DCP近些年正遭遇瓶颈期，很久没有成功的新IP节目诞生。<BR/>"+
				"一位金融人士透露，2012年DCP出售时，不算折旧、摊销、税务等费用，其营收为3600万美元，之后几年营收上涨至6000-7000万美元左右。<BR/>"+
				"知情人士表示，此次DCP出售过程中，除了万达外，最高出价为6亿美元，这个出价“简直神奇（Unreal）”，所以可想而知，当好莱坞听到万达要以10亿美元买下DCP时，基本都是一脸懵逼的状态。<BR/>"+
				"尽管外界看来万达10亿美元购DCP成了“冤大头”，但在王健林看来这其实是“必要步骤”，他曾说过：<BR/>";
		if(res!=null&&res.getData()!=null){
			view.addObject("newsDetails", res.getData());
			res.getData().setSrcContent(temp);
		}
		return view;
	}
}
