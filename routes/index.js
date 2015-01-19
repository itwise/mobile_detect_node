var viewRenderer = require('../utils/viewRenderer');

module.exports = function(app){
    app.get('/', function(req, res){
        viewRenderer.render(req, res, {
            viewName: 'main'
        });
    });

    app.get('/products', function(req, res){
       // 실제 데이터 구성 시 모바일이냐 디바이스냐에 따라 불러오는 이미지 url이 달라져야 함.
       var dummyProducts = [
           {
               imageUrl: 'http://image.gsshop.com/mi09/deal/dealno/cadb862f-c15d-4998-9ac9-f98fadd18189.jpg',
               name: '[아이라스]충전식 블루투스 키보드',
               price: 39900
           },
           {
               imageUrl: 'http://image.gsshop.com/image/13/06/13068092_L1.jpg',
               name: 'i-rocks 무선 키보드 + 무선 마우스 SET IRK15R (멤브레인 / 1000DPI / 기능키 / DPI 변환 / 아이락스)',
               price: 234000
           },
           {
               imageUrl: 'http://image.gsshop.com/image/15/02/15022671_L1.jpg',
               name: 'i-rocks 스마트폰 블루투스 게임패드 G01 IRG01B (안드로이드 & iOS & PC 지원 / 블루투스3.0 / 조이스틱 / 길이조절)',
               price: 37500
           },
           {
               imageUrl: 'http://image.gsshop.com/image/12/61/12613777_L1.jpg',
               name: 'i-rocks 게이밍 마우스 M09 벌크 (USB / 500&1000&1750DPI 변경 / 앞,뒤이동버튼 / 폴링레이트 변환 / 무게추장착)',
               price: 18700
           }
       ];

        viewRenderer.render(req, res, {
            viewName: 'products',
            products: dummyProducts
        });
    });
};