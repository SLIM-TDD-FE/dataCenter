<template>
  <Menu width="auto" @on-select="go">
    <Menu-item name="2">
      <Icon type="ios-keypad" :size="iconSize"></Icon>
      <span class="layout-text">选项 2</span>
    </Menu-item>
    <Menu-item name="/home/mutliTable">
      <Icon type="ios-navigate" :size="iconSize"></Icon>
      <router-link to="/home/mutliTable" tag="span" class="layout-text">多级表格</router-link>
    </Menu-item>
    <Menu-item name="3">
      <Icon type="ios-analytics" :size="iconSize"></Icon>
      <span class="layout-text">选项 3</span>
    </Menu-item>
  </Menu>
</template>
<script>
export default {
  data: function () {
    return {}
  },
  props: ['iconSize'],
  methods: {
    go: function (a) {
      console.log(a)
    }
  }
}
</script>
<style lang="less" scoped>
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}

.layout-hide-text {
  .layout-text {
    display: none;
  }
}
</style>
