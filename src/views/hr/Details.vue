<template>
  <div class="details">
    <div class="title">
      <Title bg-text="DETAILS" title="动态详情" />
    </div>
    
  </div>
</template>
<script>

import Title from '../../components/Title';

export default {
  name: 'Details',
  components: { Title },
  data: function(){
    return {
    }
  },
  mounted() {
    alert('111111111')
  },
  methods: {

  },
}
</script>
<style lang="scss" scoped>
    .details{
      width: 100%;

    }
</style>