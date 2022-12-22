const upvoteApp = {
    data() {
        return {
            submissions: Seed.submissions
        }
    },
};

Vue.createApp(upvoteApp).mount('#app');

console.log(upvoteApp)