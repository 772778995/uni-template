import day from 'dayjs/esm'
import isLeapYear from 'dayjs/esm/plugin/isLeapYear'
import duration from 'dayjs/esm/plugin/duration'
import relativeTime from 'dayjs/esm/plugin/relativeTime'
import 'dayjs/esm/locale/zh-cn'

day.extend(isLeapYear)
day.extend(relativeTime)
day.extend(duration)
day.locale('zh-cn')

export default day
