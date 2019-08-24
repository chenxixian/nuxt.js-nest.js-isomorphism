import { BaseService, BaseOption } from '~/core/service/base.service';
import configService from '~/core/service/config.service';

/**
 * cn node服务
 *
 * @class CnNodeService
 * @extends {BaseService}
 */
class CnNodeService extends BaseService {
	constructor() {
		const baseOption: BaseOption = new BaseOption();
		baseOption.baseUrl = configService.getConfig().cnodeUrl;
		super(baseOption);
	}

	/**
	 * 获取主题列表
	 *
	 * @returns {Promise<any>}
	 * @memberof CnNodeService
	 */
	public async getTopics(): Promise<any> {
		return await this.get('/api/v1/topics');
	}
}

export default new CnNodeService();
