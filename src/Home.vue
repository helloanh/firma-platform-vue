<template>
	<div>
		<div class="App-slide1" id="slide1">
			 <div class="home-slide container">
			 	{{selectedComponent}}
			        <div class="row">
			            <div class="col-lg-6" id="left-pane">  
			            </div><!-- left-pane -->
			            <div class="col-lg-6 slide1" id="right-pane">
				            <component :in="selectedComponent = 'slideTwo'">
					            <CardComponent>
					            </CardComponent>	
					        </component>		
			            </div><!-- right-pane -->
		           		
			        </div><!-- end row -->
			    </div><!-- end container -->
				<RoadmapComponent></RoadmapComponent>
			 </div>

		</div>  
	</div>
</template>

<script>
	import Card from './Card.vue';
	import MiddleCard from './MiddleCard.vue';
	import ThirdCard from './ThirdCard.vue';
	import Map from './Map.vue';

	export default {
		data: function() {
			return { 
				buttonText: 'Next',
				selectedComponent: 'slideTwo'
			}
		},
		components: {
			'RoadmapComponent': Map,
			'CardComponent': Card,
			'slideTwo': MiddleCard,
			'ThirdCard': ThirdCard
		}
	}
</script>

<style lang="scss">
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
</style>