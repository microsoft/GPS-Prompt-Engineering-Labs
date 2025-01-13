function buildHierarchyMenu(){
    var hierarchy = [$('<ul>')];
    var currentLevel = 2;
  
    var headings = $('.page-content h2, .page-content h3');
    headings.each(function(i, heading) {
      var level = parseInt(heading.tagName.slice(1));
      var id = $(heading).attr('id');
      var text = $(heading).text();
      var link = $('<a>').attr('href', `#${id}`).text(text);
      
      var item = $('<li>').append(link);
  
      if (level > currentLevel) {
        var newLevel = $('<ul>');
        hierarchy[hierarchy.length - 1].children().last().addClass('collapser').addClass('uncollapsedMarker');
        hierarchy[hierarchy.length - 1].children().last().append(newLevel);
        hierarchy.push(newLevel);
      } else if (level < currentLevel) {
        hierarchy.pop();
      }
  
      hierarchy[hierarchy.length - 1].append(item);
      currentLevel = level;
    });
  
    $('#sidebar-index').append(hierarchy[0]);
    $('#sidebar-toggle').click(function() {
      $('#sidebar-index').toggleClass('collapsed');
      $('#sidebar-index').hasClass('collapsed') ? $(this).text('<') : $(this).text('>');
    });

    $('#sidebar-index .collapser').on('click', function(event) {
      // This code will run when the caret is clicked
      if (event.target.tagName === 'A') {
        return;
      }
      $(this).children('ul').toggle();
      // Check if the parent li has the class 'collapsedMarker' or 'uncollapsedMarker'
      if ($(this).hasClass('collapsedMarker')) {
        // If it has the class 'collapsedMarker', remove it and add the class 'uncollapsedMarker'
        $(this).removeClass('collapsedMarker').addClass('uncollapsedMarker');
      } else if ($(this).hasClass('uncollapsedMarker')) {
        // If it has the class 'uncollapsedMarker', remove it and add the class 'collapsedMarker'
        $(this).removeClass('uncollapsedMarker').addClass('collapsedMarker');
      }
    });
  }
  
function buildNavigation(){
  var current;
  var hashToStep={};
  var steps = $('.step');

  $('button.prev').on('click', function(){
    var currentIndex=steps.index(hashToStep[current]);
    if(currentIndex>0){
      location.hash=$(steps[currentIndex-1]).children('h2, h3, h4, h5, h6').first().attr('id') || $(steps[currentIndex-1]).siblings('h2, h3, h4, h5, h6').first().attr('id');
    }
  });
  $('button.next').on('click', function(){
    var currentIndex=steps.index(hashToStep[current]);
    if(currentIndex<steps.length-1){
      location.hash=$(steps[currentIndex+1]).children('h2, h3, h4, h5, h6').first().attr('id') || $(steps[currentIndex+1]).siblings('h2, h3, h4, h5, h6').first().attr('id');
    }
  });

  function changeIndex(index)
  {
    if(current){
      var c= hashToStep[current];
      if(c){
        $(c).parents('.section')[0].classList.remove('active');
        c.classList.remove('active');
      }
    }

    current=index;
    if(current){
      var c= hashToStep[current];
      if(c){
        c.classList.add('active');
        $(c).parents('.section')[0].classList.add('active');
      }
    }
    
    var currentIndex=steps.index(hashToStep[index]);
    if(currentIndex>0){
      $('button.prev').removeAttr('disabled');
    }
    else{
      $('button.prev').attr('disabled','disabled');
    }
    if(currentIndex<steps.length-1){
      $('button.next').removeAttr('disabled');
    }
    else{
      $('button.next').attr('disabled','disabled');
    }
  }

  $('h2, h3, h4, h5, h6').each((i,heading)=>{
    var id=$(heading).attr('id');
    if(id){
      // find closest step
      var step=$(heading).siblings('.step');
      if(!step.length){
        step=$(heading).children('.step');
        if(!step.length){
          step=$(heading).parents('.step');
        }
      }
      if(step.length){
        hashToStep[id]=step[0];
      }
      else{
        console.log('no step found for heading', heading);      
      }
    }
  });

  steps.each((i,step)=>{
    $(step).children('h2, h3, h4, h5, h6').each((i,heading)=>{
      var id=$(heading).attr('id');
      hashToStep[id]=step;
    });
  });

  $(window).on('hashchange', function(e){
    if(location.hash){
      changeIndex(location.hash.slice(1));
    }
  });
  if(location.hash){
    changeIndex(location.hash.slice(1));
  }
  else{
    changeIndex($('h2:first').attr('id'));
  }
}
  

$(document).ready(function() {
  buildNavigation();
  buildHierarchyMenu();
});