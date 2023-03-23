const count = {

    actions: {
        //jia和jian的action没啥用，可以再组件里绕过dispatch，直接commit
        // jia(context,value){
        //     context.commit('JIA', value)
        // },
        // jian(context,value){
        //     context.commit('JIAN', value)
        // },

        jiaOdd(context,value){
            if(context.state.sum % 2)
                context.commit('JIA', value)
        },
        jiaWait(context,value){
            setTimeout(()=>{
                context.commit('JIA', value)
            },500)
        },
    },
    //潜规则：actions里函数用小写，mutations里对应函数就用大写（都小写也能运行）
    mutations: {
        JIA(state,value){
            state.sum += value
        },
        JIAN(state,value){
            state.sum -= value
        },
    },

    state() {
        return{
            sum: 0,
            school: "nju",
            subject: "software",
        }
    },

    getters: {
      bigSum(state){
          return state.sum*10
      }
    },

};


export default count