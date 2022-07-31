<template>
	<el-config-provider :locale="zhCn">
		<router-view />
	</el-config-provider>
</template>

<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
import { ElConfigProvider } from "element-plus";
// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
import zhCn from "element-plus/lib/locale/lang/zh-cn";
</script>
