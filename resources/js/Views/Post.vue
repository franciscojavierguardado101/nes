<template>
    <div class="container">
        <div class="justify-content-center">
            <div class="row">
                <div v-for="item in items" class="col-4 text-center">
                    <div class="mx-auto">
                        <a :href="item.socialMedia" target="_blank" class="social" v-if="hasSocialMediaLink(item)"
                           @click="goToPostAfterSocial(item.id)">
                            <figure class="figure">
                                <img v-bind:src="item.image" class="figure-img img-fluid rounded"
                                     alt="...">
                                <figcaption class="figure-caption">{{item.title}}</figcaption>
                            </figure>
                        </a>
                        <router-link :to="{ name: 'postview', params: { postId: item.id }}" v-else>
                            <figure class="figure">
                                <img v-bind:src="item.image" class="figure-img img-fluid rounded"
                                     alt="...">
                                <figcaption class="figure-caption">{{item.title}}</figcaption>
                            </figure>
                        </router-link>

                    </div>
                </div>
            </div>
            <div class="row text-center justify-content-center">
                <nav aria-label="Page navigation">
                    <ul class="pagination">
                        <li class="page-item" v-if="!isFirstPage && hasPreviousPage"
                            @click="getPosts(false,$event)">
                            <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span class="sr-only">Previous</span>
                            </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">{{this.currentPage}}</a></li>
                        <li class="page-item" v-if="hasNextPage" @click="getPosts(true,$event)">
                            <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span class="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Post", components: {},
        data: function () {
            return {
                items: [],
                totalPost: 0,
                currentPage: 1,
                nextPageUrl: null,
                lastPageUrl: null,
            }
        }, methods: {
            hasSocialMediaLink(item) {
                return !_.isEmpty(item.socialMedia)
            },
            getPosts: function (param, event) {
                var url = 'post'
                if (param) {
                    if (!_.isEmpty(this.nextPageUrl)) {
                        var nextPageUrl = new URL(this.nextPageUrl)
                        url = nextPageUrl.pathname + nextPageUrl.search
                    }
                } else {
                    if (!param && !_.isEmpty(this.lastPageUrl)) {
                        var lastPageUrl = new URL(this.lastPageUrl)
                        url = lastPageUrl.pathname + lastPageUrl.search
                    }

                }
                axios.get(url).then((response) => {
                        this.items = response.data.data;
                        this.totalPost = response.data.total;
                        this.currentPage = response.data.current_page;
                        this.lastPageUrl = response.data.prev_page_url;
                        this.nextPageUrl = response.data.next_page_url;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }, goToPostAfterSocial(postId) {
                this.$router.push({ name: 'postview', params: { postId } })
            }
        }
        ,
        mounted() {
            this.getPosts();
        }, computed: {
            hasNextPage() {
                return !_.isEmpty(this.nextPageUrl)
            }, hasPreviousPage() {
                return !_.isEmpty(this.lastPageUrl)
            }, isFirstPage() {
                return this.currentPage === 1;
            }
        }
    }
</script>

<style scoped>
    .figure:hover {
        opacity: 0.3;
    }
</style>
