<template>
    <div class="container">
        <div class="justify-content-center">
            <div class="row">
                <div v-for="item in items" class="col-4 text-center">
                    <div class="mx-auto">
                        <a :href="item.socialMedia" target="_blank" class="social" v-if="hasSocialMediaLink(item)">
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
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span class="sr-only">Previous</span>
                            </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
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
            }
        }, methods: {
            hasSocialMediaLink(item) {
                return !_.isEmpty(item.socialMedia)
            },
        }
        ,
        mounted() {
            axios.get('post').then((response) => {
                    this.items = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
</script>

<style scoped>
    .figure:hover {
        opacity: 0.3;
    }
</style>
