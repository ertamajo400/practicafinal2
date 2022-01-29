<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="/">EL DIARI DE MARILYN</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <!--
            <b-nav-item :to="{name: 'home'}" exact>Home</b-nav-item>
            <b-nav-item :to="{name: 'contacto'}">Contacto</b-nav-item>
           -->
            <b-nav-item class="nav-link" to="/sobremi">Quí Sóc?</b-nav-item>
            <b-nav-item class="nav-link" to="/elsmeusviatges">L'art de Viatjar</b-nav-item>
            <b-nav-item class="nav-link" to="/galeria">Galeria</b-nav-item>
            <b-nav-item class="nav-link" to="/resenyes">Ressenyes</b-nav-item>
          </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Buscar"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Buscar</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Idioma" right>
          <b-dropdown-item href="#">CAT</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">CH</b-dropdown-item>
        </b-nav-item-dropdown>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

