<template>
  <header class="header" id="header">
    <div class="logo">
      <img src="../../assets/svg/vue-school-logo.svg" />
    </div>

    <div class="btn-hamburger">
      <!-- use .btn-humburger-active to open the menu -->
      <div class="top bar"></div>
      <div class="middle bar"></div>
      <div class="bottom bar"></div>
    </div>

    <!-- use .navbar-open to open nav -->
    <nav class="navbar">
      <ul>
        <li class="navbar-user">
          <a href="#">
            <img class="avatar-small" :src="auth?.avatar" alt="" />
            <span>
              {{ auth?.name }}
              <img
                class="icon-profile"
                src="../../assets/svg/arrow-profile.svg"
                alt=""
              />
            </span>
          </a>
          <div id="user-dropdown">
            <div class="triangle-drop"></div>
            <ul class="dropdown-menu">
              <li class="dropdown-menu-item">
                <a href="profile.html">View profile</a>
              </li>
              <li class="dropdown-menu-item"><a href="#">Log out</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Navbar",
  computed: {
    ...mapGetters({
      auth: "auth/getCurrentUser",
    }),
  },
};
</script>

<style scoped>
</style>