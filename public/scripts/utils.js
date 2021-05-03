
$(document).ready(function(){
	$('#state').on('change', function() {
		let states = JSON.parse($('#allstates').val());
		state= states[this.value]
		$('#city').children().remove().end()
		$('#city').append(new Option("Other", "Other"));
		for(let city in state){
			$('#city').append(new Option(state[city], state[city]));
		}
	  });

	  $('#resource').on('change', function() {
		if(this.value==="1")
			{
				$("#quantity").attr("disabled", "disabled");
				$("#quantity").val(1)
			}
		else{
			$("#quantity").removeAttr("disabled");
			$("#quantity").val()
		}
	  });


})




var filtersConfig = {
	
	base_path: 'https://unpkg.com/tablefilter@latest/dist/tablefilter/',
	col_0: 'select',
	col_1: 'select',
	col_4: 'select',
	col_5: 'select',
	alternate_rows: true,
	rows_counter: true,
	btn_reset: true,
	loader: true,
	mark_active_columns: true,
	highlight_keywords: true,
	no_results_message: true,
	col_types: [
	  'string', 'string', 'number',
	  'number', 'string','string', 'string',
	  'string', 'number', 'number'
	],
	extensions: [{
	  name: 'sort',
	  images_path: 'https://unpkg.com/tablefilter@latest/dist/tablefilter/style/themes/'
	}]
  };
  
  var tf = new TableFilter('list', filtersConfig);
  tf.init();