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
var campingoGithubLinkButton = document.getElementById("campingo-github-link");
var campingoWebsiteLinkButton = document.getElementById("campingo-website-link")
var imagesearchGithubLinkButton = document.getElementById("imagesearch-github-link");
var imagesearchWebsiteLinkButton = document.getElementById("imagesearch-website-link");
var ootoobeGithubLinkButton = document.getElementById("ootoobe-github-link");
var ootoobeWebsiteLinkButton = document.getElementById("ootoobe-website-link");
var minipediaGithubLinkButton = document.getElementById("minipedia-github-link");
var minipediaWebsiteLinkButton = document.getElementById("minipedia-website-link");
var saaGithubLinkButton = document.getElementById("saa-github-link");
var gtcGithubLinkButton = document.getElementById("gtc-github-link");
var gtcWebsiteLinkButton = document.getElementById("gtc-website-link");
var flexGalleryGithubLinkButton = document.getElementById("flexgallery-github-link");
var flexGalleryWebsiteLinkButton = document.getElementById("flexgallery-website-link");

deduplicateGithubLinkButton.addEventListener('click', function(){
	window.open('https://www.github.com/gk400282/deduplicate');
});
campingoGithubLinkButton.addEventListener('click', function(){
	window.open('https://www.github.com/gk400282/campingo');
});
campingoWebsiteLinkButton.addEventListener('click', function(){
	window.open('https://campingo.onrender.com/');
});
imagesearchGithubLinkButton.addEventListener('click', function(){
	window.open('https://www.github.com/gk400282/imagesearch');
});
imagesearchWebsiteLinkButton.addEventListener('click', function(){
	window.open('https://gk400282.github.io/imagesearch/');
});
ootoobeGithubLinkButton.addEventListener('click', function(){
	window.open('https://www.github.com/gk400282/ootoobe');
});
ootoobeWebsiteLinkButton.addEventListener('click', function(){
	window.open('https://gk400282.github.io/ootoobe/');
});
minipediaGithubLinkButton.addEventListener('click', function(){
	window.open('https://www.github.com/gk400282/minipedia');
});
minipediaWebsiteLinkButton.addEventListener('click', function(){
	window.open('https://gk400282.github.io/minipedia/');
});
saaGithubLinkButton.addEventListener('click', function(){
	window.open('https://www.github.com/gk400282/Sentiment-Analysis-App/');
});
gtcGithubLinkButton.addEventListener('click', function(){
	window.open('https://www.github.com/gk400282/guessthecolor/');
});
gtcWebsiteLinkButton.addEventListener('click', function(){
	window.open('https://gk400282.github.io/guessthecolor/');
});
flexGalleryGithubLinkButton.addEventListener('click', function(){
	window.open('https://www.github.com/gk400282/flexgallery/');
});
flexGalleryWebsiteLinkButton.addEventListener('click', function(){
	window.open('https://gk400282.github.io/flexgallery/');
});
window.onload = function(){
	document.querySelectorAll('.image').forEach(function(image){
		var n = Math.ceil(image.clientHeight / 10 + 1);
		image.parentElement.style.gridRowEnd = `span ${n}`;
	});
}
function scroller(){
	page2.scrollIntoView({behavior: "smooth", block: "start", inline: "center"});
	// page1.removeEventListener("click", scroller);
}
page1.addEventListener("click", scroller);