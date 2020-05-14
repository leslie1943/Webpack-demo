<template>
  <div>
    <div>
      <el-row style="text-align:center;">
        <el-button type="primary">Hello Vue</el-button>
        <el-col :offset="6" :span="6">
          <el-input v-model="test" />
        </el-col>
      </el-row>
    </div>
    <!-- <div style="color:pink">{{test}}</div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: 'This is a test sentence'
    }
  },
  mounted() {
  }
}
</script>

<style>
</style>