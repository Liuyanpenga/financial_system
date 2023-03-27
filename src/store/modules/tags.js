export default {
  state:{
    tags:[]
  },
  getters:{
    getTags(state){
      return state.tags
    }
  },
  mutations:{
    addTags(state,tag){
      if(state.tags.some(ele => ele.name === tag.name ))return;
      state.tags.push(tag)
    },
    deleteTags(state,tag){
       let index = state.tags.findIndex(ele => ele.name === tag.name )
       if(index !== -1){
        state.tags.splice(index, 1);
       }
    }
  }
}