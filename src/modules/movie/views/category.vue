<template>
	<cl-crud ref="Crud">
		<el-row>
			<!-- 刷新按钮 -->
			<cl-refresh-btn />
			<!-- 新增按钮 -->
			<cl-add-btn />
			<!-- 删除按钮 -->
			<cl-multi-delete-btn />
			<cl-flex1 />
			<!-- 关键字搜索 -->
			<cl-search-key />
		</el-row>

		<el-row>
			<!-- 数据表格 -->
			<cl-table ref="Table" />
		</el-row>

		<el-row>
			<cl-flex1 />
			<!-- 分页控件 -->
			<cl-pagination />
		</el-row>

		<!-- 新增、编辑 -->
		<cl-upsert ref="Upsert" />
	</cl-crud>
</template>

<script lang="ts" setup>
import { useCrud, useTable, useUpsert } from "@cool-vue/crud";
import { useCool } from "/@/cool";

const { service, named } = useCool();

named("movie-category");

// cl-upsert 配置
const Upsert = useUpsert({
	items: [
		{
			label: "分类名称",
			prop: "categoryName",
			required: true,
			component: { name: "el-input" }
		},
		{
			label: "分类图标",
			prop: "categoryIcon",
			component: { name: "cl-upload" },
			required: true
		}
	]
});

// cl-table 配置
const Table = useTable({
	columns: [
		{ type: "selection" },
		{ label: "ID", prop: "id" },
		{ label: "分类名称", prop: "categoryName" },
		{
			label: "分类图标",
			prop: "categoryIcon",
			component: { name: "cl-image", props: { size: 60 } }
		},
		{ label: "创建时间", prop: "createTime" },
		{ label: "更新时间", prop: "updateTime" },
		{ type: "op", buttons: ["edit", "delete"] }
	]
});

// cl-crud 配置
const Crud = useCrud(
	{
		service: service.movie.category
	},
	(app) => {
		app.refresh();
	}
);
</script>
