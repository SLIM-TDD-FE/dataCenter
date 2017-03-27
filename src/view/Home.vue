<template>
  <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
    <Row>
      <top-header></top-header>
    </Row>
    <Row type="flex">
      <Col :span="spanLeft" class="layout-menu-left">
        <left-nav :icon-size='iconSize'></left-nav>
      </Col>
      <Col :span="spanRight">
        <div class="layout-header">
          <i-button type="text" @click="toggleClick">
            <Icon type="navicon" size="32"></Icon>
          </i-button>
        </div>
        <div class="layout-breadcrumb">
          <Breadcrumb>
            <Breadcrumb-item href="#">首页</Breadcrumb-item>
            <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
            <Breadcrumb-item>某应用</Breadcrumb-item>
          </Breadcrumb>
        </div>
        <div class="layout-content">
          <router-view></router-view>
        </div>
        <div class="layout-copy">
          2017 &copy; Shangri-la TDC
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
import LeftNav from '../components/LeftNav'
import TopHeader from '../components/TopHeader'

export default {
  data () {
    return {
      spanLeft: 5,
      spanRight: 19
    }
  },
  computed: {
    iconSize () {
      return this.spanLeft === 5 ? 14 : 24
    }
  },
  components: {
    LeftNav,
    TopHeader
  },
  methods: {
    toggleClick () {
      if (this.spanLeft === 5) {
        this.spanLeft = 2
        this.spanRight = 22
      } else {
        this.spanLeft = 5
        this.spanRight = 19
      }
    }
  }
}
</script>

<style scoped>
.layout {
  background: #f5f7f9;
  position: relative;
  overflow: hidden;
}

.layout-breadcrumb {
  padding: 10px 15px 0;
}

.layout-content {
  min-height: 200px;
  margin: 15px;
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
}

.layout-content-main {
  padding: 10px;
}

.layout-copy {
  text-align: center;
  padding: 10px 0 20px;
  color: #9ea7b4;
}

.layout-header {
  height: 49px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
}

.layout-ceiling-main a {
  color: #9ba7b5;
}

.ivu-col {
  /* transition: width .1s ease-in-out; */
}
</style>
