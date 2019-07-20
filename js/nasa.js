var url = "https://api.nasa.gov/planetary/apod?api_key=vKC0JNQIvMROP86o5Qxot2JmozoZJDO9XmGMkUgi";

$.ajax({
  url: url, 
  success: function(result){
  if("copyright" in result) {
    $("#copyright").text("Image Credits: " + result.copyright);
  }
  else {
    $("#copyright").text("Image Credits: " + "Public Domain");
  }
  if(result.media_type == "video") {
    $("#apod_img_id").css("display", "none"); 
    $("#apod_vid_id").attr("src", result.url);
  }
  else {
    $("#apod_vid_id").css("display", "none"); 
    $("#apod_img_id").attr("src", result.url);
  }
  $("#apod_explaination").text(result.explanation);
  $("#apod_title").text(result.title);
}
});