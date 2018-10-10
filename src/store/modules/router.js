export default {
  namespaced: true,
  state: {
    rootPage:""
  },
  mutations:{
    setRootPage(state, rootPage) {
      state.rootPage = rootPage;
    }
  }
}
