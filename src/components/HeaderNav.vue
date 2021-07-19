<template>
    <header>
        <b-navbar type="dark" variant="dark">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand to="/">Test App</b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav>
            <b-nav-item to="/">About</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
        </b-navbar>
    </header>
</template>


<style>
  header  {
    /* display: flex;
    border-bottom: 1px solid #ccc;
    padding: .5rem 1rem; */
    border-bottom: 1px solid #ccc;
    margin-bottom: 10px;
  }
</style>