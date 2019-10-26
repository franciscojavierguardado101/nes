<template>
    <div class="container">
        <div class="container text-center">

            <figure class="figure">
                <img src="https://loremflickr.com/320/240" class="figure-img img-fluid" alt="...">
            </figure>

            <blockquote class="blockquote">
                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                    ante.</p>
            </blockquote>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum. </p>

        </div>
        <div class="text-center row bootstrap snippets">
            <div class="col-md-6 col-md-offset-2 col-sm-12">
                <div class="comment-wrapper">
                    <div class="panel panel-info">
                        <div class="panel-heading">
                            Comments
                        </div>
                        <div class="panel-body">
                            <textarea class="form-control" placeholder="write a comment..." rows="3"></textarea>
                            <br>
                            <button type="button" class="btn btn-info pull-right">Post</button>
                            <div class="clearfix"></div>
                            <hr>
                            <ul class="media-list">
                                <li class="media">
                                    <a href="#" class="pull-left">
                                        <img src="https://bootdey.com/img/Content/user_1.jpg" alt="" class="img-circle">
                                    </a>
                                    <div class="media-body">
                                <span class="text-muted pull-right">
                                    <small class="text-muted">30 min ago</small>
                                </span>
                                        <strong class="text-success">@MartinoMont</strong>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Lorem ipsum dolor sit amet, <a href="#">#consecteturadipiscing </a>.
                                        </p>
                                    </div>
                                </li>
                                <li class="media">
                                    <a href="#" class="pull-left">
                                        <img src="https://bootdey.com/img/Content/user_2.jpg" alt="" class="img-circle">
                                    </a>
                                    <div class="media-body">
                                <span class="text-muted pull-right">
                                    <small class="text-muted">30 min ago</small>
                                </span>
                                        <strong class="text-success">@LaurenceCorreil</strong>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Lorem ipsum dolor <a href="#">#ipsumdolor </a>adipiscing elit.
                                        </p>
                                    </div>
                                </li>
                                <li class="media">
                                    <a href="#" class="pull-left">
                                        <img src="https://bootdey.com/img/Content/user_3.jpg" alt="" class="img-circle">
                                    </a>
                                    <div class="media-body">
                                <span class="text-muted pull-right">
                                    <small class="text-muted">30 min ago</small>
                                </span>
                                        <strong class="text-success">@JohnNida</strong>
                                        <p>
                                            Lorem ipsum dolor <a href="#">#sitamet</a> sit amet, consectetur adipiscing
                                            elit.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>

</template>

<script>
    export default {
        name: "PostView"
    }
</script>

<style scoped>
    .comment-wrapper .panel-body {
        max-height: 650px;
        overflow: auto;
    }

    .comment-wrapper .media-list .media img {
        width: 64px;
        height: 64px;
        border: 2px solid #e5e7e8;
    }

    .comment-wrapper .media-list .media {
        border-bottom: 1px dashed #efefef;
        margin-bottom: 25px;
    }
</style>
