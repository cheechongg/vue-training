<template>
    <div class="thread-item" :class="isEven">
        <div class="thread-topic">
            <div class="topic"><router-link :to="{ name: 'thread', params: { threadId : threadId }}">{{ title }}</router-link></div>
            <div class="sub-topic">
                By <span class="user">{{ user }}</span>, {{ publishedAt }}
            </div>
        </div>
        <div class="thread-replies">{{ repliesCount }} replies</div>
        <div class="thread-user">
            <div class="user-image">
                <img :src="avatar" alt="user-image"/>
            </div>
            <div class="user-info">
                <div class="user">{{ user }}</div>
                <div class="timestamp">{{ getHumanDate(publishedAt) }}</div>
            </div>
        </div>
    </div>
</template>

<script>

import dayjs from "dayjs"
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export default {
    name: "ThreadListItem",
    props: {
        title: String,
        user: String,
        publishedAt: String,
        repliesCount: Number,
        threadId: Number,
        avatar: String,
        index: Number
    },
    computed: {
        isEven() {
            return {
                'even': this.index % 2 === 0
            }
        }
    },
    methods: {
        getHumanDate(timestamp) {
            return dayjs.unix(timestamp).fromNow();
        }
    }
}
</script>

<style lang="scss" scoped>

.thread-item {
    font-size: 0.75rem;
    display: flex;
    padding: 0.5rem 0.8rem;

    &.even {
        background: rgba(0,0,0, 0.1);
        border-bottom-left-radius: 14px;
    }

    .topic, .user {
        color: #42b883;
    }

    .thread-topic {
        flex: 4;
        align-items: center;

        .topic {
            margin-bottom: 0.25rem;
            font-size: 0.85rem;

            a {
                text-decoration: none;
                color: inherit;
                transition: all 100ms ease-in-out;

                &:hover {
                    color: #34495E;
                }
            }
        }

        .sub-topic {
            font-size: 0.65rem;
        }
    }

    .thread-replies {
        flex: 1;
        align-self: center;
    }

    .thread-user {
        flex: 1;
        display: flex;
        align-items: center;

        .user-image {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: grey;
            margin-right: 0.35rem;
            box-shadow: 0 0 3px 0 rgba(0,0,0, 0.2);
            overflow: hidden;

            img {
                height: 100%;
                width: 100%;
            }
        }

        .user-info {
            display: flex;
            flex-direction: column
        }
    }
}

</style> 