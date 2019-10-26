<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">{{appName}}</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul class="navbar-nav row">
                <li class="nav-item active col">
                    <a class="nav-link" href="#">Portfolio <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item col">
                    <a class="nav-link" href="#">Main</a>
                </li>
                <li class="nav-item col">
                    <a class="nav-link" href="#">Other Works</a>
                </li>
                <li class="nav-item col">
                    <a class="nav-link" href="#">Images</a>
                </li>
                <li class="nav-item col">
                    <a class="nav-link" href="#">Login</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "NavBar",
        data: function () {
            return {
                appName: "Laravel"
            }
        },
    }
</script>

<style scoped>

</style>
