<template>
		<section class="App-slide1" id="slide1">
			 <div class="home-slide container">
			        <div class="row">
			           <div class="col-lg-6" id="left-pane">  
			           	
			           </div>
			        </div><!-- left pane -->
			        <div class="col-lg-6 slide1" id="right-pane">
			          <div class="card" style="width: 100%;">
			            <div class="card-body">
			              <h2 class="card-title">FIRM is fighting for an America that is United, Strong, and Free.</h2>
			              <p class="card-text">Our Values in Action: </p>
			            </div>
			            <ul class="list-group list-group-flush">
			              <li class="list-group-item">Bring separated families home and end family separations.</li>
			              <li class="list-group-item">We need more, not fewer immigrants.</li>
			              <li class="list-group-item">Celebrate the road to citizenship, making it easiser for immigrants to become citizens.</li>
			            </ul>
			            <div class="card-body">
			              <a href="#" class="card-link">
			              	<button type="button" class="btn btn-primary" @click="changeStatus">{{status}}
			              	</button>
			              </a>
			          </div>
			        </div>
			    </div><!-- right pane -->
				<div>
					<roadmap-component></roadmap-component>
				</div>
			 </div>
		</section>  
</template>

<script>
	import Map from './Map.vue';
	export default {
		data: function() {
			return { 
				status: 'Begin'
			}
		},
		components: {
			'roadmap-component': Map
		},
		methods: {
			changeStatus() {
				this.status = 'Green';
				return this.status;
			}
		}
	}
</script>