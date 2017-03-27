<template>
  <Menu mode="horizontal" theme="dark" active-name="1" @on-select="go">
    <Row>
      <Col span="5" class="layout-logo">
        <router-link to="/home">
          <img src="../assets/logo.png">
          <span>Shangri-la Hotel DataCenter</span>
        </router-link>
      </Col>
      <Col span="19" class="layout-nav">
        <Menu-item name="1">
          <Icon type="ios-navigate"></Icon>
          导航一
        </Menu-item>
        <Menu-item name="2">
          <Icon type="ios-keypad"></Icon>
          导航二
        </Menu-item>
        <Menu-item name="3">
          <Icon type="ios-analytics"></Icon>
          导航三
        </Menu-item>
        <Menu-item name="4">
          <Icon type="ios-paper"></Icon>
          导航四
        </Menu-item>
      </Col>
    </Row>
  </Menu>
</template>
<script>
export default {
  methods: {
    go: function (key) {
      console.log(key)
    }
  }
}
</script>
<style lang="less" scoped>
.layout-logo {
  img{
    vertical-align: middle;
    margin: 10px;
    height: 40px;
  }
  span{
    line-height: 60px;
    color: #fff;
  }
}
</style>
