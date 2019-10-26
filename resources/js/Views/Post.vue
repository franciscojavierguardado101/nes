<template>
    <div class="container">
        <div class="justify-content-center">
            <div class="row">
                <div v-for="item in items" class="col-4 text-center">
                    <div class="mx-auto">
                            <router-link :to="{ name: 'postview', params: { postId: 1 }}">
                            <figure class="figure">
                                <img src="https://loremflickr.com/320/240" class="figure-img img-fluid rounded"
                                     alt="...">
                                <figcaption class="figure-caption">{{item.message}}</figcaption>
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
        name: "Post",
        data: function () {
            return {
                items: [
                    {message: 'Title'},
                    {message: 'Title'},
                    {message: 'Title'},
                    // {message: 'Title'},
                    // {message: 'Title'},
                    // {message: 'Title'}
                ]
            }
        }
    }
</script>

<style scoped>
    .figure:hover {
        opacity: 0.3;
    }
</style>
