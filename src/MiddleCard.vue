<template>
	<div>
	<component :in="selectedComponent = 'slideTwo'">
		{{selectedComponent}}
		<div class="App-slide2" id="slide2">
			<div class="card" style="width: 100%;">
			  <div class="card-body">
	  	        		<h2 class="card-title">We are fighting for a diverse and inclusive future that</h2>
	  	        		<ul class="list-group list-group-flush">
	  	        		  <li class="list-group-item">Provide citizenship for 11 million</li>
	  	        		  <li class="list-group-item">Strengthening  and protecting all families – family unity drives migration and we should have systems in place to protect that.</li>
	  	        		  <li class="list-group-item">Establish border policy that protects border communities and diversity</li>
	  	        		  <li class="list-group-item">Establish opportunities for safe future migration and maintaining worker protections.</li>
	  	        		</ul>
			  </div>
			  <div class="card-body">
			    <a href="#" class="card-link">    		
	    			<button type="button" class="btn btn-primary" @click="selectedComponent = 'thirdCard' ">{{buttonText}}
	    			</button>
			    </a>
			   </div>
			</div>
		</div>
	</component>
	</div>
</template>

<script>
	import ThirdCard from './ThirdCard.vue';

	export default {
		data: function() {
			return { 
				buttonText: 'Next',
				selectedComponent: 'thirdCard'
			}
		},
		components: {
			'thirdCard': ThirdCard
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