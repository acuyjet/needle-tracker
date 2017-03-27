'use strict';

// Initialize select element for materializecss
$(document).ready(function() {
	$('select').material_select();
});

// Initialize datepicker
$('.datepicker').pickadate({
	selectMonths: true, // Creates a dropdown to control month
	selectYears: 1 // Creates a dropdown of 15 years to control year
});