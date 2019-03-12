<template>
  <div>
    <nav-component></nav-component>
    <home-component></home-component>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Libre+Franklin');
@import url('https://fonts.googleapis.com/css?family=Lora:400,400i,700');
@import url('https://fonts.googleapis.com/css?family=Arvo:400,400i,700');

body { font-family: 'Libre Franklin', sans-serif; }
h1, h2 { font-family: 'Arvo', serif; }
p {  font-family: 'Libre Franklin', sans-serif; }

a { color: #E88E27; 
  &:hover {
    color: #F7CB15; 
  }
  &:hover text {
    color: #F7CB15; 
  }
}

text {
  font-size: 24px;
}


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


.App-logo {
  transition-timing-function: cubic-bezier(0.25,0.1,0.25,1);
  height: 20vmin;
  pointer-events: none;
}

.App-slide1 {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  background-image: url(./assets/images/firm-porange.png);
  background-repeat: no-repeat;
  margin-top: -20vh;

  #right-pane {
      background-color: rgba(255,255,255,0.9);
      margin-top: 2rem;
  }

}

.App-slide2 {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  /*color: white;*/
  background-image: url(./assets/images/heretostay.jpg);
  background-repeat: no-repeat;
  margin-top: -25vh;

  #right-pane {
    background-color: rgba(255,255,255,0.9);
    margin-top: 2rem;
  }
}

.slide1 {
  &#right-pane {
    padding-top: 1em;

  }
}

.card {
  background-color: transparent;
  background-clip: border-box;
  border: 0;
  border-radius: 0;
}

.card-title { margin-bottom: 2rem; }

.list-group-item {
    background: transparent;
}

.slide1 {
  &.card {
    background-color: transparent;
    background-clip: border-box;
    border: 0;
    border-radius: 0;
  }
}


.App-link {
  color: #61dafb;
}

</style>
