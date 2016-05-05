// JavaScript Document

define(['module_a', 'module_b'], function (aM, bM) {
	let oDiv1 = document.getElementById('div1');
	let oSpan = oDiv1.getElementsByTagName('span')[0];
	oSpan.innerHTML = `${ aM }${ bM }`;
	//oSpan.innerHTML = aM + bM;
});