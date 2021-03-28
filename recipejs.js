function searchRecipes(){
  document.getElementById('msg').textContent ='';
  //grab the search term 
   const searchM = document.querySelector('#searchBox').value;
 
   //grab the url
 const endpoint = 'https://api.edamam.com/search?q='+searchM+'&app_id=2bf3179a&app_key=422f0ef0552ff95f55a45444d1bf05c9&from=0&to=32'; 
   //set up the ajax 
  $.ajax({
    url: endpoint,
    Accept: 'application/json',
    Headers: {'Api-User-Agent': 'Search-Here'},
    ContentType: "application/x-www-form-urlencoded",
    type: 'GET',
    data: {},
    dataType: 'json',
    success: function(data){
    
      var label, image,source,url,diet;
 
      function reset(){
     //grab what I want to reset/ clear
     //clear the field 
             var childRemove =  $('.results').remove();
         return childRemove;
   }
      reset(); 
      
      for(var i = 0; i < data.hits.length; i++){
        //set the vars to their respective locations in JSON
         label = data.hits[i].recipe["label"];
         image = data.hits[i].recipe["image"];
         source = data.hits[i].recipe["source"];
         url = data.hits[i].recipe["url"];
        diet =data.hits[i].recipe["dietLabels"];
        var results = ('<div class="one col-xl-3 col-lg-4 col-md-6"><figure class="results"><a href="'+url+'" target="_blank"><img src="'+image+ '"alt='+label+'"/></a><h4 class="results_label">'+label+'</h4><h4 class="results_source">From '+source+'</h4><h4 class="diet_label"> '+diet+'</h4></figure></div>');
        
        $('.displaySearch').append(results);
        
      }
       if (data.more==false){
          document.getElementById('msg').textContent = "Sorry, we can't find any recipes.";
        } 
      document.getElementById('searchBox').textContent = '';
      
    },
    error:function(err){
      alert('sorry, something is wrong!');
    },
        
  });
   
 }
 
 //line that makes the code show up
 document.getElementById('search').addEventListener('click', searchRecipes);