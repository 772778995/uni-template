<template>
	<view class="flex flex-col h-full justify-around items-center">
		<view class="text-xl">{{ $t('uni-template') }}</view>
		<u-picker
			v-model="pickerShow"
			mode="selector"
			:default-selector="[0]"
			:range="$_.map(localeList, 'txt')"
			@confirm="e => (locale = $_.map(localeList, 'locale')[e[0]])"
		/>
		<u-button @click="pickerShow = true">{{ $t('switch-lang') }}</u-button>
	</view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { localeList } from '@/common/i18n'
import _ from 'lodash'

const { locale } = useI18n()
const pickerShow = ref(false)
</script>
