const app = Vue.createApp( {
    data: function() {
        return {
            courseGoalA: "Finish the course and learn Vue!",
            courseGoalB: "<h2>Master VUE and build amating apps<h2>",
            vuelink: "www.vuejs.org"
        };
    },
    methods: {
        outputGoal: function() {
            const randomNuber = Math.random();
            if (randomNuber < 0.5) {
                return this.courseGoalA;
            }
            else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount("#user-goal");