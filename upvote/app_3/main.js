const upvoteApp = {
    data() {
        return {
            submissions: Seed.submissions
        }
    },
    computed: {
        sortedSubmisstions() {
            return this.submissions.sort((a,b) => {
                return b.votes - a.votes;
            });
        },
    },
    methods: {
        upvote(submissionID) {
            const submission = this.submissions.find(
                (submission) => submissionID ===submission.id
            );
            submission.votes++;
        },
    },
};

Vue.createApp(upvoteApp).mount('#app');