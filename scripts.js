/* Chart */
$("#button").click(function(){
     alert('Handler for .click() called.')
   });

/* Self distributed unsigned */
var data = {
  series: [100]
};

var sum = function(a, b) { return a + b };

new Chartist.Pie('.ct-chart-selfdistributed-unsigned', data, {
  labelInterpolationFnc: function(value) {
    return Math.round(value) + '%';
  }
});

/* Self distributed signed */
var data = {
  series: [23, 47, 30],
  colors:["#333", "#222", "#111"]
};

var sum = function(a, b) { return a + b };

new Chartist.Pie('.ct-chart-selfdistributed-signed', data, {
  labelInterpolationFnc: function(value) {
    return Math.round(value / data.series.reduce(sum) * 100) + '%';
  }
});

/* Itunes album unsigned */
var data = {
  series: [60, 40]
};

var sum = function(a, b) { return a + b };

new Chartist.Pie('.ct-chart-itunes-album-unsigned', data, {
  labelInterpolationFnc: function(value) {
    return Math.round(value / data.series.reduce(sum) * 100) + '%';
  }
});

/* Itunes album signed */
var data = {
  series: [23, 47, 30]
};

var sum = function(a, b) { return a + b };

new Chartist.Pie('.ct-chart-itunes-album-signed', data, {
  labelInterpolationFnc: function(value) {
    return Math.round(value / data.series.reduce(sum) * 100) + '%';
  }
});

/* Itunes track unsigned */
var data = {
  series: [70, 30]
};

var sum = function(a, b) { return a + b };

new Chartist.Pie('.ct-chart-itunes-track-unsigned', data, {
  labelInterpolationFnc: function(value) {
    return Math.round(value / data.series.reduce(sum) * 100) + '%';
  }
});

/* Itunes track signed */
var data = {
  series: [23, 47, 30]
};

var sum = function(a, b) { return a + b };

new Chartist.Pie('.ct-chart-itunes-track-signed', data, {
  labelInterpolationFnc: function(value) {
    return Math.round(value / data.series.reduce(sum) * 100) + '%';
  }
});

/* Bars */
new Chartist.Bar('.ct-chart', {
  labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6'],
  series: [
    [105, 457, 210, 547, 1826, 5478]
  ]
}, {
  stackBars: true,
  axisY: {
    labelInterpolationFnc: function(value) {
      return (value);
    }
  }
}).on('draw', function(data) {
  if(data.type === 'bar') {
    data.element.attr({
      style: 'stroke-width: 30px'
    });
  }
});

new Chartist.Bar('.ct-chart', {
  labels: ['Google play', 'Tidal', 'Spotify', 'Youtube'],
  series: [
    [172206, 180000, 1117021, 4200000],
    [70391, 29302, 180000, 700000]
  ]
}, {
  seriesBarDistance: 40,
  axisX: {
    offset: 60
  },
  axisY: {
    offset: 80,
    labelInterpolationFnc: function(value) {
      return value
    },
    scaleMinSpace: 35
  }
});

/* Video */
$( document ).ready(function() {

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

});

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}
