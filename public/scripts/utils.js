
$(document).ready(function(){
	$('#state').on('change', function() {
		let states = JSON.parse($('#allstates').val());
		console.log(states[this.value]);
		state= states[this.value]
		$('#city').children().remove().end()
		for(let city in state){
			$('#city').append(new Option(state[city], state[city]));	
		}
	  });

})