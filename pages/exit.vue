<template>
  <div class/>
</template>

<script>
export default {
  layout: 'blank',
  middleware: async ctx => { // 中间件执行, 到达页面自动执行
    const { status, data } = await ctx.$axios.get('/users/exit')
    if (status === 200 && data && data.code === 0) {
      window.location.href = '/'
    }
  }
}
</script>
