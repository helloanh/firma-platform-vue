<template>
	<div>
		<div class="card" id="homecard" style="width: 100%;">
		  	<div class="card-body">
		    	<h2 class="card-title">FIRM is fighting for an America that is United, Strong, and Free.</h2>
		   		<p class="card-text">Our Values in Action:</p>
		  	</div>
		  	<ul class="list-group list-group-flush">
		    	<li class="list-group-item">Bring separated families home and end family separations.</li>
		    	<li class="list-group-item">Celebrate the road to citizenship, making it easiser for immigrants to become citizens.</li>
		    	<li class="list-group-item">Celebrate the road to citizenship, making it easiser for immigrants to become citizens.</li>
		  	</ul>
		  	<div class="card-body">
				<a href="#" class="card-link">    		
	    			<button type="button" class="btn btn-primary" @click="selectedComponent = 'middleCard' ">{{buttonText}}
	    			</button>
		   		</a>
		   </div>
		</div>
	</div>
</div>
</template>


<script>
	import MiddleCard from './MiddleCard.vue';

	export default {
		data: function() {
			return { 
				buttonText: 'Next',
				selectedComponent: 'middleCard'
			}
		},
		components: {
			'middleCard': MiddleCard
		},
		methods: {
			changeButtonStatus() {
				this.buttonText = 'Loading ... ';
				return this.buttonText;
			}
		}
	}
</script>

<style lang="scss" scoped>
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

ul {
	&.list-group {
		&.list-group-flush {
			font-size: 1.25rem;
		}
	}
}
</style>