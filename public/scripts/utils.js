
$(document).ready(function(){
	$('#state').on('change', function() {
		let states = JSON.parse($('#allstates').val());
		state= states[this.value]
		$('#city').children().remove().end()
		for(let city in state){
			$('#city').append(new Option(state[city], state[city]));
		}
	  });

})
