<template>
	<div>	
		<button type="button" class="btn btn-primary" @click="selectedComponent = 'MiddleCard' ">{{buttonText}}
		</button>
	</div>
</template>


<script>
	import Card from './MiddleCard.vue'

	export default {
		data: function() {
			return { 
				buttonText: 'Next',
				selectedComponent: 'MiddleCard'
			}
		},
		components: {
			'nextCard': MiddleCard
		},
		methods: {
			changeButtonStatus() {
				this.buttonText = 'Loading ... ';
				return this.buttonText;
			}
		}
	}
</script>

