<template>
	<el-container>
		<el-header style="height: 200px; border: 1px solid #eee">
			<div style="height: 50px; border: 1px solid #eee">
				输入关键字爬取百度结果页
			</div>
			<div style="height: 50px; border: 1px solid #eee">
				<el-input v-model="keyword" placeholder="请输入关键字" prefix-icon="el-icon-search" style="height: 50px; border: 1px solid #eee"></el-input>
				<el-button type="primary" @click="startCrawl" :loading="loading">开始爬取</el-button>
			</div>
		</el-header>
		<el-main>
			<el-table
		      :data="tableData"
		      class="searchCrawler el-table__body">
		      <el-table-column
		        prop="jobName"
		        label="任务名称"
		        width="180"
		        align="center">
		      </el-table-column>
		      <el-table-column
		        prop="crawlerCount"
		        label="爬取总数量"
		        width="180"
		        align="center">
		      </el-table-column>
		      <el-table-column
		        prop="incCrawlerCount"
		        label="爬取增量"
		        width="180"
		        align="center">
		      </el-table-column>
		      <el-table-column
		        prop="saveCount"
		        label="入库总数量"
		        width="180"
		        align="center">
		      </el-table-column>
		      <el-table-column
		        prop="incSaveCount"
		        label="入库增量"
		        width="180"
		        align="center">
		      </el-table-column>
		      <el-table-column
		        prop="cpu"
		        label="cpu使用率"
		        width="180"
		        align="center">
		      </el-table-column>
		      <el-table-column
		        prop="ram"
		        label="内存使用率"
		        width="180"
		        align="center">
		      </el-table-column>
		      <el-table-column
		        prop="monitorTime"
		        label="监控时间"
		        width="180"
		        align="center">
		      </el-table-column>
		      <!-- <el-table-column
		        prop="status"
		        label="状态">
		      </el-table-column> -->
		    </el-table>
		</el-main>
	</el-container>
</template>
<script src="./searchCrawler.css"></script>
<script src="./searchCrawler.js"></script>