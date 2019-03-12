<template>
  <div>
    <NavComponent></NavComponent>
    <HomeComponent></HomeComponent>
  </div>
</template>

<script>
  import Home from './Home.vue'
  import Navigation from './Navigation.vue'

  export default {
    data: function() {
      return { 
        status: 'Begin'
      }
    },
    components: {
      'HomeComponent': Home,
      'NavComponent': Navigation,
    },
    methods: {
      changeStatus() {
        this.status = 'Green';
        return this.status;
      }
    }
  }
</script>


<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Libre+Franklin');
  @import url('https://fonts.googleapis.com/css?family=Lora:400,400i,700');
  @import url('https://fonts.googleapis.com/css?family=Arvo:400,400i,700');


  body { font-size: 18px;font-family: 'Lora', sans-serif; }
  h1, h2 { 
    font-family: 'Arvo', sans-serif;
  }

  a { color: #E88E27; 
    &:hover {
      color: #F7CB15; 
    }
    &:hover text {
      color: #F7CB15; 
    }
  }

  .App-logo {
    transition-timing-function: cubic-bezier(0.25,0.1,0.25,1);
    height: 20vmin;
    pointer-events: none;
  }

  text { font-size: 24px; }

  .nav-content {
      margin-top: -1em;
      .navbar {
        padding: 0;
      }
  }

  .btn-primary {
      color: #fff;
      background-color: #E88E27;
      border-color: #E88E27;
      border-radius: 2px;
      width: 30%;
  }

  svg {
      z-index: -999;
      #circle {
        height: 250px;
        width: 250px;
      }
  }

  .logo-svg-container {
    padding-top: 2.5em;
  }

  .App {
    text-align: center;
  }

  g:hover {
    circle {
      fill: transparent;
      stroke-dashoffset: 0;
      stroke-dasharray: 700;
      stroke-width: 10;

      &:hover {
        stroke: #FFB321;
      }
    }
  }

  .App-link {
    color: #61dafb;
  }
</style>

