import axios from 'axios';

export default {
  name: 'searchCrawler',
  data() {
    return {
		keyword: '',
		loading: false,
		startCrawlUrl: 'http://localhost:8088/MonitorCenter/web/startCrawl',
		getMsgUrl: 'http://localhost:8088/MonitorCenter/web/getMsg',
		tableData: [],
    }
  },
  methods: {
  	startCrawl() {
  		this.loading = true;
  		console.log("startCrawl");
  		var params = new URLSearchParams();
 		params.append('keyword', this.keyword);
  		axios.post(this.startCrawlUrl, params).then((response) => {
	        console.log(response.data.msg);
          	if(response.data.code == 0){
     			//定时请求接口
		        setInterval(() => { 
		            this.getMsg();
		        }, 5000);
          	}
      	}).catch((error) => {
      	});
    },
  	getMsg() {
  		console.log("getMsg");
  		axios.get(this.getMsgUrl + "?jobId=1").then((response) => {
	        if (response.data.code == 0) {
	          this.tableData = response.data.data.tableData;
	        }
      	}).catch((error) => {
      	});
  	}
  }
}