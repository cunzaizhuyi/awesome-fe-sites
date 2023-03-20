export type Site = {
	name: string;
	link: string;
	desc: string;
};

type HotSite = {
	/**
	 * 站点名称
	 */
	name: string;
	/**
	 * 站点链接
	 */
	link: string;
	logo?: any;

	iconClass?: string;

	// Some icons may have their center of gravity off-center, or their area too large or too small. we are using additional CSS to correct this.
	extraCss?: string;
};
