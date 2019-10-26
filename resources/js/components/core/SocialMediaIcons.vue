<template>
    <!-- The social media icon bar -->
    <div class="icon-bar">
        <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
        <a href="#" class="youtube"><i class="fa fa-youtube"></i></a>
        <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
        <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
    </div>
</template>

<script>
    export default {
        name: "SocialMediaIcons"
    }
</script>

<style scoped>
    /* Fixed/sticky icon bar (vertically aligned 50% from the top of the screen) */
    .icon-bar {
        position: fixed;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }

    /* Style the icon bar links */
    .icon-bar a {
        display: block;
        text-align: center;
        padding: 16px;
        transition: all 0.3s ease;
        color: white;
        font-size: 20px;
    }

    /* Style the social media icons with color, if you want */
    .icon-bar a:hover {
        background-color: #000;
    }

    .facebook {
        background: #3B5998;
        color: white;
    }

    .twitter {
        background: #55ACEE;
        color: white;
    }

    .google {
        background: #dd4b39;
        color: white;
    }

    .linkedin {
        background: #007bb5;
        color: white;
    }

    .youtube {
        background: #bb0000;
        color: white;
    }
</style>
