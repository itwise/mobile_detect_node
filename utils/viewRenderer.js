var fs = require('fs');
var MobileDetect = require('mobile-detect');

exports.render = function(req, res, params){
    var device = new MobileDetect(req.headers['user-agent']);

    var resolvingView = 'default';

    if(device.mobile() || device.tablet()){
        console.log('./views/mobile/' + params.viewName + '.ejs');
        if(fs.existsSync('./views/mobile/' + params.viewName + '.ejs')){
            resolvingView = 'mobile';
        }
    }

    // mobile view가 없는경우 default로 한다.
    res.render(resolvingView + '/' + params.viewName, params);
};