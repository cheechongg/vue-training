<template>
    <div class="home">
        <h2>Welcome to the Forum</h2>
        <ThreadList />
    </div>
</template>

<script>

import ThreadList from "@/components/PageHome/ThreadList";

export default {
    name: 'Forum',
    inject: ['threads','users','posts'],
    components: {
        ThreadList
    },
    methods: {
        getPostThreadInformation(thread) {
            let posts = this.posts.filter((v) => thread.posts.includes(v.id)).map((v) => {
                let user = this.users.find((usr) => usr.id === v.userId);
                let postsCount = this.posts.filter((pst) => pst.userId === v.userId).length;

                return {
                    ...v,
                    user,
                    postsCount
                }
            });

            return posts 
        },
    }
}
</script>

<style lang="scss" scoped>
    .home {
        width: 94%;
        margin: 0 auto;
    }

    h2 {
        text-align: center;
    }
</style>

