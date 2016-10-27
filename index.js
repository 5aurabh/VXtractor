var fs = require("fs");
var express = require("express");
var cheerio = require("cheerio");
var request = require("request");

var app = express();
var url = "https://www.youtube.com/watch?v=u4XevlloPY4";
// app.get("/scrape", function(req, res){
	request( url, function(error, response, html){
		if(error){
			console.log("Error:")
			console.log(error);
			return;
		}
		var $ = cheerio.load(html);
		var title = $(".watch-title").text();
		var channel = $("#watch-header .yt-user-info a").text();
		var channelSubscription = $(".yt-short-subscriber-count").text();
		var viewCount = $(".watch-view-count").text();
		var dislikeCount = $(".like-button-renderer-dislike-button span").text();
		var likeCount = $(".like-button-renderer-like-button span").text();
		var data = {
			title: title,
			channel: channel,
			channelSubscription: channelSubscription,
			viewCount: viewCount,
			dislikeCount: dislikeCount,
			likeCount: likeCount
		}
		console.log(data);
	});
	return
// })


app.listen(8000);