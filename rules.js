// var items = document.querySelectorAll(".item");
// items.forEach(function(item){
// 	item.addEventListener("click", function(){
// 		items.forEach(function(item){
// 			item.classList.remove("active");
// 		});
// 		this.classList.add("active");
// 	});
// });
var helloButton = document.getElementById("hello-button");
var page1 = document.getElementById("page-1");
var page2 = document.getElementById("page-2");
var deduplicateGithubLinkButton = document.getElementById("deduplicate-github-link");
var yelpcampGithubLinkButton = document.getElementById("yelpcamp-github-link");
var imagesearchGithubLinkButton = document.getElementById("imagesearch-github-link");
var imagesearchWebsiteLinkButton = document.getElementById("imagesearch-website-link");
var ootoobeGithubLinkButton = document.getElementById("ootoobe-github-link");
var ootoobeWebsiteLinkButton = document.getElementById("ootoobe-website-link");

deduplicateGithubLinkButton.addEventListener('click', function(){
	window.location.href = 'https://www.github.com/gk400282/deduplicate';
});
yelpcampGithubLinkButton.addEventListener('click', function(){
	window.location.href = 'https://www.github.com/gk400282/yelpcamp';
});
imagesearchGithubLinkButton.addEventListener('click', function(){
	window.location.href = 'https://www.github.com/gk400282/imagesearch';
});
imagesearchWebsiteLinkButton.addEventListener('click', function(){
	window.location.href = 'https://gk400282.github.io/imagesearch/';
});
ootoobeGithubLinkButton.addEventListener('click', function(){
	window.location.href = 'https://www.github.com/gk400282/ootoobe';
});
ootoobeWebsiteLinkButton.addEventListener('click', function(){
	window.location.href = 'https://gk400282.github.io/ootoobe/';
});

function scroller(){
	page2.scrollIntoView({behavior: "smooth", block: "start", inline: "center"});
	page1.removeEventListener("mousemove", scroller);
}
page1.addEventListener("mousemove", scroller);