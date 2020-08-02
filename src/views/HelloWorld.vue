<template>
  <div class="hello">
    <ul>
      <li @click.self="onClick">awesome-vue{{ type }} getType{{ getType }} count{{ count }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState, mapActions } from 'vuex';

export default {
  name: 'HelloWorld',
  updated() {
    console.log('updated...');
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      type: this.$store.state.common.type,
    };
  },
  computed: {
    ...mapState('common', ['count']),
    ...mapGetters('common', ['getType']),
  },
  methods: {
    // ...mapActions('common', ['increment']),
    ...mapMutations('common', ['increment']),
    onClick() {
      console.log('onClick ', this.$store.state.common.type);
      this.increment('123456');

      // this.$loading.show();

      // this.$toast.show('保存成功！');

      // this.$modal.alert('123136');

      this.$fetch.gw('/program/findBanners', {
      // this.$fetch.mock('/program/findBanners', {
        projectCode: 'expresswx',
        resCode: 'pos00001',
        contentType: 1,
        index: 1,
        pageSize: 50,
        needExtAttribute: false,
      });
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

.hello {
  font-size: 0.15rem;
}
</style>
