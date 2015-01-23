'use strict';
(function($){
   $(document).ready(function(){
       function renderingScreenInfo(){
           var width = $(window).width();
           var height = $(window).height();
           var devicePixelRatio = window.devicePixelRatio;
           if(devicePixelRatio === undefined){
               if(window.screen.deviceXDPI && window.screen.logicalXDPI){
                   devicePixelRatio = window.screen.deviceXDPI / window.screen.logicalXDPI;
               }
           }
           var resultHTML = '<div id="screen-info"> 현재 화면의 해상도는 width:' + width + ', height:' + height +'입니다.<br>';
           if(devicePixelRatio !== undefined){
               resultHTML = resultHTML + '기기픽셀 배율은 ' + devicePixelRatio + '입니다.<br>';
           }else{
               resultHTML = resultHTML + '기기픽셀 배율값을 얻어올 수 없습니다.<br>';
           }

           resultHTML = resultHTML + '스크린의 해상도는 width:' + window.screen.width + ', height:' + window.screen.height + '입니다.<br>';
           resultHTML = resultHTML + 'User Agent: ' + window.navigator.userAgent;

           if($('#screen-info').size() > 0){
               $('#screen-info').remove();
           }
           $('body').append(resultHTML);
       }

       renderingScreenInfo();

       $(window).on('resize', function(){
           renderingScreenInfo();
       });
   });
})(jQuery);
