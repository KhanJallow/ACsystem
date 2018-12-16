<template>
    <div class="sidebar">
        <div class="card profile-details" style="border-radius: 0px">
            <div class="card-body">
                <div class="image">
                    <img class="profile-pic" src="img/profile-placeholder.png" alt="">
                </div>
                <div class="details">
                    <h5 class="card-title name">Ebrima Khan</h5>
                    <h6 class="card-subtitle position">Intern</h6>
                </div>
            </div>
        </div>
        <div class="card sidebar-links" style="border-radius: 0px">
            <ul class="list-group list-group-flush">
                <router-link tag="a" class="link" to="/">Dashboard</router-link>
                <router-link tag="a" class="list-group-item" to="/Projects">Projects</router-link>

                <a class="link" href="/">
                    <li class="list-group-item">Dashboard</li>
                     <span class="glyphicon glyphicon-align-left" aria-hidden="true"></span>
                </a>
                <a class="link" href="/">
                    <li class="list-group-item">Locations</li>
                </a>
                <a class="link" href="/">
                    <li class="list-group-item">Projects</li>
                </a>
                <a class="link" href="/">
                    <li class="list-group-item">Interns</li>
                </a>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        mounted() {

        }
    }
</script>

<style type="text/css" scoped>
    .profile-details {
        border-radius: 0;
        border-bottom-width: 0;
    }

    .card-body {
        display: flex;
        flex-direction: row;
    }
    .image {
        width: 30%
    }
    .profile-pic {
        width: 100%
    }
    .details {
        margin-left: 5%;
    }
</style>