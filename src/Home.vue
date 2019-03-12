<template>
		<section class="App-slide1" id="slide1">
			 <div class="home-slide container">
			        <div class="row">
			           <div class="col-lg-6" id="left-pane">  
			           </div><!-- left-pane -->

			           <div class="col-lg-6 slide1" id="right-pane">
			            	<CardComponent 
				             	title="FIRM is fighting for an America that is United, Strong, and Free."
				             	subtitle="Our Values in Action:">
			            	</CardComponent>
			           </div><!-- right-pane -->
			        </div><!-- end row -->
			       
			    </div><!-- end container -->
				<div>
					<RoadmapComponent></RoadmapComponent>
				</div>
			 </div>
		</section>  
</template>

<script>
	import Card from './Card.vue';
	import Map from './Map.vue';
	export default {
		data: function() {
			return { 
				status: 'Begin'
			}
		},
		components: {
			'RoadmapComponent': Map,
			'CardComponent': Card
		},
		methods: {
			changeStatus() {
				this.status = 'Green';
				return this.status;
			}
		}
	}
</script>

<style lang="scss" scoped>
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