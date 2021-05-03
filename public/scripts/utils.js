$(document).ready(function () {
  $("#state").on("change", function () {
    let states = JSON.parse($("#allstates").val());
    state = states[this.value];
    $("#city").children().remove().end();
    $("#city").append(new Option("Other", "Other"));
    for (let city in state) {
      $("#city").append(new Option(state[city], state[city]));
    }
  });

  $("#resource").on("change", function () {
    if (this.value === "1") {
      $("#quantity").attr("disabled", "disabled");
      $("#quantity").val(1);
    } else {
      $("#quantity").removeAttr("disabled");
      $("#quantity").val();
    }
  });
});

var filtersConfig = {
	base_path: "https://unpkg.com/tablefilter@latest/dist/tablefilter/",
	auto_filter: {
		delay: 1100, 
	},
	rows_counter: true,
	col_0: "select",
  col_2: "select",
  col_6: "select",
  col_7: "select",
  filters_row_index: 1,
  state: true,
  alternate_rows: true,
  btn_reset: true,
  status_bar: true,
  msg_filter: "Filtering...",
  col_types: [
    "string",
    "string",
    "string",
    "number",
    "number",
    "string",
    "string",
    "string",
    "string",
    "number",
    "number",
  ],
  rows_counter: {
    text: "Count: "
  },
  extensions: [
    {
      name: "sort",
      images_path:
        "https://unpkg.com/tablefilter@latest/dist/tablefilter/style/themes/",
    },
  ],
};

var tf = new TableFilter("list", filtersConfig);
tf.init();
