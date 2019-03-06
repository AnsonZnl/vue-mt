<template>
  <div class/>
</template>

<script>
export default {
  layout: 'blank',
  // 中间件执行, 到达页面自动执行
  middleware: async ctx => {
    const { status, data } = await ctx.$axios.get('/users/exit')
    if (status === 200 && data && data.code === 0) {
      window.location.href = '/'
    }
  }
}
</script>
