'use strict';
(function($){
   $(document).ready(function(){
       var template = Handlebars.compile($('#testReport').html());
       function renderingScreenInfo(){
           var devicePixelRatio = window.devicePixelRatio;
           if(devicePixelRatio === undefined){
               if(window.screen.deviceXDPI && window.screen.logicalXDPI){
                   devicePixelRatio = window.screen.deviceXDPI / window.screen.logicalXDPI;
               }
           }

           var renderData = {
               logicalWidth: window.screen.width,
               logicalHeight: window.screen.height,
               devicePixelRatio: devicePixelRatio,
               physicalWidth: window.screen.width * devicePixelRatio,
               physicalHeight: window.screen.height * devicePixelRatio,
               userAgent: window.navigator.userAgent
           };

           if($('#screen-info').size() === 0){
               $('.container').append('<div id="screen-info"></div>');
           }
           $('#screen-info').html(template(renderData));
       }

       renderingScreenInfo();

       $(window).on('resize', function(){
           renderingScreenInfo();
       });
   });
})(jQuery);
