﻿<template>
  <div class="m-products-list">
    <!-- Intelligent sorting -->
    <dl>
      <dd
        v-for="(item, index) in nav"
        :key="item.name"
        :class="[item.active === true ? 's-nav-active' : '']"
        @click="navSelect(item.txt, index)"
      >{{ item.txt }}</dd>
    </dl>
    <ul>
      <Item
        v-for="(item, idx) in list"
        :key="idx"
        :meta="item"
      />
    </ul>
  </div>
</template>

<script>
import Item from './product.vue'
export default {
  components: {
    Item
  },
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      nav: [
        {
          name: 's-default',
          txt: '智能排序',
          acitve: false
        },
        {
          name: 's-price',
          txt: '价格最低',
          active: false
        },
        {
          name: 's-visit',
          txt: '人气最高',
          active: false
        },
        {
          name: 's-comment',
          txt: '评价最高',
          active: false
        }
      ]
    }
  },
  // async asyncData({ app }) {
  //   const { data } = await app.$axios.get('searchList')
  //   return { items: data.list }
  // },
  methods: {
    navSelect(txt, index) {
      if (txt === '价格最低') {
        this.list.sort((a, b) => a.price - b.price)
        this.nav.forEach(item => {
          item.active = false
        })
        this.nav[index].active = true
      } else if (txt === '人气最高') {
        this.list.sort((a, b) => b.comment - a.comment)
        this.nav.forEach(item => {
          item.active = false
        })
        this.nav[index].active = true
      } else if (txt === '评价最高') {
        this.list.sort((a, b) => b.rate - a.rate)
        this.nav.forEach(item => {
          item.active = false
        })
        this.nav[index].active = true
      } else if (txt === '智能排序') {
        this.list.sort((a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0))
        this.nav.forEach(item => {
          item.active = false
        })
        this.nav[index].active = true
      }
    }
  }
}
</script>
