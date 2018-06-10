(function (ns) {

    var cards = {
        sample: {
            title: 'Sample Card',
            content: {"type":"vertical","elements":[{"type":"image","url":"https://cdn.bgr.com/2016/08/iphone-8-concept.jpg","tooltip":"image tooltip","click":{"actions":[{"type":"navigate","name":"Navigate to store via image","lo":23423423,"la":2423423423}]}},{"type":"text","text":"IPhone 8","tooltip":"brand new iphone 8","style":{"bold":true,"size":"large"}},{"type":"text","text":"Now on sale!"},{"type":"text","text":"$155.99","tooltip":"155.99"},{"type":"button","title":"Add to cart","click":{"actions":[{"type":"link","name":"add to cart","uri":"http://www.google.com"}]}},{"type":"horizontal","elements":[{"type":"button","title":"Buy","tooltip":"store is the thing","click":{"actions":[{"type":"navigate","name":"Navigate to store","lo":23423423,"la":2423423423}]}},{"type":"button","title":"Find","tooltip":"store is the thing","click":{"actions":[{"type":"navigate","name":"Navigate to store","lo":23423423,"la":2423423423}]}}]},{"type":"button","title":"Navigate to store","tooltip":"store is the thing","click":{"actions":[{"type":"navigate","name":"Navigate to store","lo":23423423,"la":2423423423}]}},{"type":"button","title":"More details","click":{"actions":[{"type":"link","uri":"http://www.google.com","name":"open browser"}]}}]}
        },
        carousel: {
            title: "Carousel",
            content: {"type":"carousel","padding":10,"elements":[{"type":"vertical","elements":[{"type":"text","text":"SIM only plan","tooltip":"SIM only plan","rtl":false,"style":{"bold":false,"italic":false,"color":"#000000","size":"large"}},{"type":"text","text":"Twelve month plan BYO mobile","tooltip":"Twelve month plan BYO mobile","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"button","tooltip":"Choose a plan","title":"Choose a plan","click":{"metadata":[{"type":"ExternalId","id":"ANOTHER_ONE_1"}],"actions":[{"type":"publishText","text":"SIM only plan"}]}}]},{"type":"vertical","elements":[{"type":"text","text":"Swap plan","tooltip":"Swap plan","rtl":false,"style":{"bold":false,"italic":false,"color":"#000000","size":"large"}},{"type":"text","text":"Two year plan leasing a mobile","tooltip":"Two year plan leasing a mobile","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"button","tooltip":"Choose a plan","title":"Choose a plan","click":{"metadata":[{"type":"ExternalId","id":"ANOTHER_ONE_2"}],"actions":[{"type":"publishText","text":"Two year plan leasing a mobile"}]}}]},{"type":"vertical","elements":[{"type":"text","text":"Mobiles on a plan","tooltip":"Mobiles on a plan","rtl":false,"style":{"bold":false,"italic":false,"color":"#000000","size":"large"}},{"type":"text","text":"Two year plan with a mobile","tooltip":"Two year plan with a mobile","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"button","tooltip":"Choose a plan","title":"Choose a plan","click":{"metadata":[{"type":"ExternalId","id":"ANOTHER_ONE_3"}],"actions":[{"type":"publishText","text":"Mobiles on a plan"}]}}]}]}              
        },
        carousel_2_items: {
            title: "Carousel 2 items",
            content: {"type":"carousel","padding":10,"elements":[{"type":"vertical","elements":[{"type":"button","tooltip":"Choose a plan","title":"Button 1","click":{"metadata":[{"type":"ExternalId","id":"ANOTHER_ONE_1"}],"actions":[{"type":"publishText","text":"Button 1 was clicked"}]}},{"type":"button","tooltip":"Choose a plan","title":"Button 2423423","click":{"metadata":[{"type":"ExternalId","id":"ANOTHER_ONE_1"}],"actions":[{"type":"publishText","text":"Button 2 was clicked"}]}}]},{"type":"vertical","elements":[{"type":"button","tooltip":"Choose a plan","title":"Button 3235235235235","click":{"metadata":[{"type":"ExternalId","id":"ANOTHER_ONE_1"}],"actions":[{"type":"publishText","text":"Button 3 was clicked"}]}},{"type":"button","tooltip":"Choose a plan","title":"Button 4","click":{"metadata":[{"type":"ExternalId","id":"ANOTHER_ONE_1"}],"actions":[{"type":"publishText","text":"Button 4 was clicked"}]}}]}]}
        },
        carousel_4_items: {
            title: "Carousel 4 items",
            content: {"type":"carousel","padding":10,"elements":[{"type":"vertical","elements":[{"type":"map","lo":-118.243685,"la":34.052234,"click":{"metadata":[{"type":"ExternalId","id":"12345678"}],"actions":[{"type":"navigate","lo":-118.243685,"la":34.052234}]}},{"type":"button","tooltip":"Choose a plan","title":"LA, California, USA","click":{"metadata":[{"type":"ExternalId","id":"ANOTHER_ONE_1"}],"actions":[{"type":"navigate","lo":-118.243685,"la":34.052234}]}}]},{"type":"vertical","elements":[{"type":"map","lo":13.404953999999975,"la":52.52000659999999,"click":{"metadata":[{"type":"ExternalId","id":"12345678"}],"actions":[{"type":"navigate","lo":13.404953999999975,"la":52.52000659999999}]}},{"type":"button","tooltip":"Choose a plan","title":"Berlin, Germany","click":{"metadata":[{"type":"ExternalId","id":"ANOTHER_ONE_1"}],"actions":[{"type":"navigate","lo":13.404954,"la":52.520007}]}}]},{"type":"vertical","elements":[{"type":"map","lo":34.84764575958252,"la":32.0852999,"click":{"metadata":[{"type":"ExternalId","id":"12345678"}],"actions":[{"type":"navigate","lo":34.84764575958252,"la":32.0852999}]}},{"type":"button","tooltip":"Choose a plan","title":"Tel Aviv-Yafo, Israel","click":{"metadata":[{"type":"ExternalId","id":"ANOTHER_ONE_1"}],"actions":[{"type":"navigate","lo":34.84764575958252,"la":32.0852999}]}}]},{"type":"vertical","elements":[{"type":"map","lo":34.98957100000007,"la":32.7940463,"click":{"metadata":[{"type":"ExternalId","id":"12345678"}],"actions":[{"type":"navigate","lo":34.98957100000007,"la":32.7940463}]}},{"type":"button","tooltip":"Choose a plan","title":"Haifa, Israel","click":{"metadata":[{"type":"ExternalId","id":"ANOTHER_ONE_1"}],"actions":[{"type":"navigate","lo":34.98957100000007,"la":32.7940463}]}}]}]}
        },
        carousel_6_items: {
            title: "Carousel 6 items",
            content: {"type":"carousel","padding":10,"elements":[{"type":"vertical","elements":[{"type":"image","url":"https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/7289E842-10A3-40C3-B4A7-F1856B574CD0.png","tooltip":"SIM only plan","click":{"metadata":[{"type":"ExternalId","id":"11114444"}]}},{"type":"text","text":"Small plan 2 GB data ","tooltip":"Small plan","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"text","text":"500$ national talk","tooltip":"500$","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"text","text":"49$ per month","tooltip":"49$","rtl":false,"style":{"bold":true,"italic":true,"color":"#000000"}},{"type":"button","tooltip":"nav","title":"Navigate to oren","click":{"metadata":[{"type":"ExternalId","id":"12345678"}],"actions":[{"type":"publishText","text":"my text"},{"type":"navigate","name":"Navigate to store via image","lo":34.88248,"la":32.19777}]}}]},{"type":"vertical","elements":[{"type":"image","url":"https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/CF63C36C-CF8E-4AA5-9376-BC89EDAE43B7.png","tooltip":"Swap plan","click":{"metadata":[{"type":"ExternalId","id":"11114444"}]}},{"type":"text","text":"Medium plan 15GB data","tooltip":"Medium plan","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"text","text":"Unlimited national talk","tooltip":"Unlimited","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"text","text":"69$ per month","tooltip":"Unlimited","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"button","tooltip":"Buy now","title":"Buy now","click":{"actions":[{"type":"link","name":"Add to cart","uri":"https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/45246060-E3A7-4477-A26B-F6D74A28D49E.png"}]}}]},{"type":"vertical","elements":[{"type":"image","url":"https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/D767223B-CC51-431A-A26E-B54C39EA7846.png","tooltip":"Large plan","click":{"metadata":[{"type":"ExternalId","id":"11114444"}]}},{"type":"text","text":"Large plan 20GB data","tooltip":"Large plan","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"text","text":"unlimited international talk","tooltip":"unlimited international","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"button","tooltip":"Choose a plan","title":"Choose a plan","click":{"actions":[{"type":"link","name":"Add to cart","uri":"https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/45246060-E3A7-4477-A26B-F6D74A28D49E.png"}]}}]},{"type":"vertical","elements":[{"type":"image","url":"https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/D767223B-CC51-431A-A26E-B54C39EA7846.png","tooltip":"Large plan","click":{"metadata":[{"type":"ExternalId","id":"11114444"}]}},{"type":"text","text":"Large plan 20GB data","tooltip":"Large plan","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"text","text":"unlimited international talk","tooltip":"unlimited international","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"button","tooltip":"Choose a plan","title":"Choose a plan","click":{"actions":[{"type":"link","name":"Add to cart","uri":"https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/45246060-E3A7-4477-A26B-F6D74A28D49E.png"}]}}]},{"type":"vertical","elements":[{"type":"image","url":"https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/D767223B-CC51-431A-A26E-B54C39EA7846.png","tooltip":"Large plan","click":{"metadata":[{"type":"ExternalId","id":"11114444"}]}},{"type":"text","text":"Large plan 20GB data","tooltip":"Large plan","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"text","text":"unlimited international talk","tooltip":"unlimited international","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"button","tooltip":"Choose a plan","title":"Choose a plan","click":{"actions":[{"type":"link","name":"Add to cart","uri":"https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/45246060-E3A7-4477-A26B-F6D74A28D49E.png"}]}}]},{"type":"vertical","elements":[{"type":"image","url":"https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/D767223B-CC51-431A-A26E-B54C39EA7846.png","tooltip":"Large plan","click":{"metadata":[{"type":"ExternalId","id":"11114444"}]}},{"type":"text","text":"Large plan 20GB data","tooltip":"Large plan","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"text","text":"unlimited international talk","tooltip":"unlimited international","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"button","tooltip":"Choose a plan","title":"Choose a plan","click":{"actions":[{"type":"link","name":"Add to cart","uri":"https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/45246060-E3A7-4477-A26B-F6D74A28D49E.png"}]}}]}]}
        },
        carousel_10_items: {
            title: "Carousel 10 items",
            content: {"type":"carousel","padding":10,"elements":[{"type":"vertical","elements":[{"type":"text","text":"Card #1","tooltip":"SIM only plan","rtl":false,"style":{"bold":false,"italic":false,"color":"#000000","size":"large"}},{"type":"text","text":"Twelve month plan BYO mobile","tooltip":"Twelve month plan BYO mobile","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"button","tooltip":"Choose a plan","title":"Choose a plan","click":{"metadata":[{"type":"ExternalId","id":"ANOTHER_ONE_1"}],"actions":[{"type":"publishText","text":"SIM only plan"}]}}]},{"type":"vertical","elements":[{"type":"text","text":"Card #2","tooltip":"Swap plan","rtl":false,"style":{"bold":false,"italic":false,"color":"#000000","size":"large"}},{"type":"text","text":"Two year plan leasing a mobile","tooltip":"Two year plan leasing a mobile","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"button","tooltip":"Choose a plan","title":"Choose a plan","click":{"metadata":[{"type":"ExternalId","id":"ANOTHER_ONE_2"}],"actions":[{"type":"publishText","text":"Two year plan leasing a mobile"}]}}]},{"type":"vertical","elements":[{"type":"text","text":"Card #3","tooltip":"Mobiles on a plan","rtl":false,"style":{"bold":false,"italic":false,"color":"#000000","size":"large"}},{"type":"text","text":"Two year plan with a mobile","tooltip":"Two year plan with a mobile","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"button","tooltip":"Choose a plan","title":"Choose a plan","click":{"metadata":[{"type":"ExternalId","id":"ANOTHER_ONE_3"}],"actions":[{"type":"publishText","text":"Mobiles on a plan"}]}}]},{"type":"vertical","elements":[{"type":"text","text":"Card #4","tooltip":"SIM only plan","rtl":false,"style":{"bold":false,"italic":false,"color":"#000000","size":"large"}},{"type":"text","text":"Twelve month plan BYO mobile","tooltip":"Twelve month plan BYO mobile","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"button","tooltip":"Choose a plan","title":"Choose a plan","click":{"metadata":[{"type":"ExternalId","id":"ANOTHER_ONE_1"}],"actions":[{"type":"publishText","text":"SIM only plan"}]}}]},{"type":"vertical","elements":[{"type":"text","text":"Card #5","tooltip":"Swap plan","rtl":false,"style":{"bold":false,"italic":false,"color":"#000000","size":"large"}},{"type":"text","text":"Two year plan leasing a mobile","tooltip":"Two year plan leasing a mobile","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"button","tooltip":"Choose a plan","title":"Choose a plan","click":{"metadata":[{"type":"ExternalId","id":"ANOTHER_ONE_2"}],"actions":[{"type":"publishText","text":"Two year plan leasing a mobile"}]}}]},{"type":"vertical","elements":[{"type":"text","text":"Card #6","tooltip":"Mobiles on a plan","rtl":false,"style":{"bold":false,"italic":false,"color":"#000000","size":"large"}},{"type":"text","text":"Two year plan with a mobile","tooltip":"Two year plan with a mobile","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"button","tooltip":"Choose a plan","title":"Choose a plan","click":{"metadata":[{"type":"ExternalId","id":"ANOTHER_ONE_3"}],"actions":[{"type":"publishText","text":"Mobiles on a plan"}]}}]},{"type":"vertical","elements":[{"type":"text","text":"Card #7","tooltip":"SIM only plan","rtl":false,"style":{"bold":false,"italic":false,"color":"#000000","size":"large"}},{"type":"text","text":"Twelve month plan BYO mobile","tooltip":"Twelve month plan BYO mobile","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"button","tooltip":"Choose a plan","title":"Choose a plan","click":{"metadata":[{"type":"ExternalId","id":"ANOTHER_ONE_1"}],"actions":[{"type":"publishText","text":"SIM only plan"}]}}]},{"type":"vertical","elements":[{"type":"text","text":"Card #8","tooltip":"Swap plan","rtl":false,"style":{"bold":false,"italic":false,"color":"#000000","size":"large"}},{"type":"text","text":"Two year plan leasing a mobile","tooltip":"Two year plan leasing a mobile","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"button","tooltip":"Choose a plan","title":"Choose a plan","click":{"metadata":[{"type":"ExternalId","id":"ANOTHER_ONE_2"}],"actions":[{"type":"publishText","text":"Two year plan leasing a mobile"}]}}]},{"type":"vertical","elements":[{"type":"text","text":"Card #9","tooltip":"Mobiles on a plan","rtl":false,"style":{"bold":false,"italic":false,"color":"#000000","size":"large"}},{"type":"text","text":"Two year plan with a mobile","tooltip":"Two year plan with a mobile","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"button","tooltip":"Choose a plan","title":"Choose a plan","click":{"metadata":[{"type":"ExternalId","id":"ANOTHER_ONE_3"}],"actions":[{"type":"publishText","text":"Mobiles on a plan"}]}}]},{"type":"vertical","elements":[{"type":"text","text":"Card #10","tooltip":"SIM only plan","rtl":false,"style":{"bold":false,"italic":false,"color":"#000000","size":"large"}},{"type":"text","text":"Twelve month plan BYO mobile","tooltip":"Twelve month plan BYO mobile","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"button","tooltip":"Choose a plan","title":"Choose a plan","click":{"metadata":[{"type":"ExternalId","id":"ANOTHER_ONE_1"}],"actions":[{"type":"publishText","text":"SIM only plan"}]}}]}]}
        },
        carousel_12_items: {
            title: "Carousel 12 items",
            content: {"type":"carousel","padding":10,"elements":[{"type":"vertical","elements":[{"type":"image","url":"https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/7289E842-10A3-40C3-B4A7-F1856B574CD0.png","tooltip":"SIM only plan"},{"type":"text","text":"Small plan 2 GB data ","tooltip":"Small plan","rtl":false},{"type":"button","tooltip":"button 1","title":"button 1"},{"type":"button","tooltip":"button 2","title":"Navigate"}]},{"type":"vertical","elements":[{"type":"image","url":"https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/7289E842-10A3-40C3-B4A7-F1856B574CD0.png","tooltip":"SIM only plan"},{"type":"text","text":"Small plan 2 GB data ","tooltip":"Small plan"},{"type":"button","tooltip":"button 1","title":"button 1"},{"type":"button","tooltip":"button 2","title":"Navigate"}]},{"type":"vertical","elements":[{"type":"image","url":"https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/7289E842-10A3-40C3-B4A7-F1856B574CD0.png","tooltip":"SIM only plan"},{"type":"text","text":"Small plan 2 GB data ","tooltip":"Small plan"},{"type":"button","tooltip":"button 1","title":"button 1"},{"type":"button","tooltip":"button 2","title":"Navigate"}]},{"type":"vertical","elements":[{"type":"image","url":"https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/7289E842-10A3-40C3-B4A7-F1856B574CD0.png","tooltip":"SIM only plan"},{"type":"text","text":"Small plan 2 GB data ","tooltip":"Small plan"},{"type":"button","tooltip":"button 1","title":"button 1"},{"type":"button","tooltip":"button 2","title":"Navigate"}]},{"type":"vertical","elements":[{"type":"image","url":"https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/7289E842-10A3-40C3-B4A7-F1856B574CD0.png","tooltip":"SIM only plan"},{"type":"text","text":"Small plan 2 GB data ","tooltip":"Small plan","rtl":false},{"type":"button","tooltip":"button 1","title":"button 1"},{"type":"button","tooltip":"button 2","title":"Navigate"}]},{"type":"vertical","elements":[{"type":"image","url":"https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/7289E842-10A3-40C3-B4A7-F1856B574CD0.png","tooltip":"SIM only plan"},{"type":"text","text":"Small plan 2 GB data ","tooltip":"Small plan"},{"type":"button","tooltip":"button 1","title":"button 1"},{"type":"button","tooltip":"button 2","title":"Navigate"}]},{"type":"vertical","elements":[{"type":"image","url":"https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/7289E842-10A3-40C3-B4A7-F1856B574CD0.png","tooltip":"SIM only plan"},{"type":"text","text":"Small plan 2 GB data ","tooltip":"Small plan"},{"type":"button","tooltip":"button 1","title":"button 1"},{"type":"button","tooltip":"button 2","title":"Navigate"}]},{"type":"vertical","elements":[{"type":"image","url":"https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/7289E842-10A3-40C3-B4A7-F1856B574CD0.png","tooltip":"SIM only plan"},{"type":"text","text":"Small plan 2 GB data ","tooltip":"Small plan"},{"type":"button","tooltip":"button 1","title":"button 1"},{"type":"button","tooltip":"button 2","title":"Navigate"}]},{"type":"vertical","elements":[{"type":"image","url":"https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/7289E842-10A3-40C3-B4A7-F1856B574CD0.png","tooltip":"SIM only plan"},{"type":"text","text":"Small plan 2 GB data ","tooltip":"Small plan","rtl":false},{"type":"button","tooltip":"button 1","title":"button 1"},{"type":"button","tooltip":"button 2","title":"Navigate"}]},{"type":"vertical","elements":[{"type":"image","url":"https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/7289E842-10A3-40C3-B4A7-F1856B574CD0.png","tooltip":"SIM only plan"},{"type":"text","text":"Small plan 2 GB data ","tooltip":"Small plan"},{"type":"button","tooltip":"button 1","title":"button 1"},{"type":"button","tooltip":"button 2","title":"Navigate"}]},{"type":"vertical","elements":[{"type":"image","url":"https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/7289E842-10A3-40C3-B4A7-F1856B574CD0.png","tooltip":"SIM only plan"},{"type":"text","text":"Small plan 2 GB data ","tooltip":"Small plan"},{"type":"button","tooltip":"button 1","title":"button 1"},{"type":"button","tooltip":"button 2","title":"Navigate"}]},{"type":"vertical","elements":[{"type":"image","url":"https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/7289E842-10A3-40C3-B4A7-F1856B574CD0.png","tooltip":"SIM only plan"},{"type":"text","text":"Small plan 2 GB data ","tooltip":"Small plan"},{"type":"button","tooltip":"button 1","title":"button 1"},{"type":"button","tooltip":"button 2","title":"Navigate"}]}]}
        },
        carousel_vh: {
            title: "Carousel mixed layouts",
            content: {"type":"carousel","padding":10,"elements":[{"type":"vertical","elements":[{"type":"image","url":"https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/7289E842-10A3-40C3-B4A7-F1856B574CD0.png","tooltip":"SIM only plan","click":{"metadata":[{"type":"ExternalId","id":"11114444"}]}},{"type":"text","text":"Small plan 2 GB data ","tooltip":"Small plan","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"text","text":"500$ national talk","tooltip":"500$","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"text","text":"49$ per month","tooltip":"49$","rtl":false,"style":{"bold":true,"italic":true,"color":"#000000"}},{"type":"button","tooltip":"Choose a plan","title":"Choose a plan","click":{"actions":[{"type":"link","name":"Add to cart","uri":"http://www.google.com"}]}}]},{"type":"horizontal","elements":[{"type":"image","url":"https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/CF63C36C-CF8E-4AA5-9376-BC89EDAE43B7.png","tooltip":"Swap plan","click":{"metadata":[{"type":"ExternalId","id":"11114444"}]}},{"type":"text","text":"Medium plan 15GB data","tooltip":"Medium plan","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"text","text":"Unlimited national talk","tooltip":"Unlimited","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"text","text":"69$ per month","tooltip":"Unlimited","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"button","tooltip":"Buy now","title":"Buy now","click":{"actions":[{"type":"link","name":"Add to cart","uri":"http://www.google.com"}]}}]},{"type":"vertical","elements":[{"type":"image","url":"https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/D767223B-CC51-431A-A26E-B54C39EA7846.png","tooltip":"Large plan","click":{"metadata":[{"type":"ExternalId","id":"11114444"}]}},{"type":"text","text":"Large plan 20GB data","tooltip":"Large plan","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"text","text":"unlimited international talk","tooltip":"unlimited international","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"button","tooltip":"Choose a plan","title":"Choose a plan","click":{"actions":[{"type":"link","name":"Add to cart","uri":"http://www.google.com"}]}}]}]}        
        },
        carousel_btns: {
            title: "Carousel with buttons",
            content: {"type":"carousel","padding":10,"elements":[{"type":"vertical","elements":[{"type":"button","tooltip":"Choose a plan","title":"Button 1","click":{"metadata":[{"type":"ExternalId","id":"ANOTHER_ONE_1"}],"actions":[{"type":"publishText","text":"Button 1 was clicked"}]}},{"type":"button","tooltip":"Choose a plan","title":"Button 2423423","click":{"metadata":[{"type":"ExternalId","id":"ANOTHER_ONE_1"}],"actions":[{"type":"publishText","text":"Button 2 was clicked"}]}}]},{"type":"vertical","elements":[{"type":"button","tooltip":"Choose a plan","title":"Button 3235235235235","click":{"metadata":[{"type":"ExternalId","id":"ANOTHER_ONE_1"}],"actions":[{"type":"publishText","text":"Button 3 was clicked"}]}},{"type":"button","tooltip":"Choose a plan","title":"Button 4","click":{"metadata":[{"type":"ExternalId","id":"ANOTHER_ONE_1"}],"actions":[{"type":"publishText","text":"Button 4 was clicked"}]}}]},{"type":"vertical","elements":[{"type":"button","tooltip":"Choose a plan","title":"Button 5","click":{"metadata":[{"type":"ExternalId","id":"ANOTHER_ONE_1"}],"actions":[{"type":"publishText","text":"Button 5 was clicked"}]}},{"type":"button","tooltip":"Choose a plan","title":"Button 6ttttt","click":{"metadata":[{"type":"ExternalId","id":"ANOTHER_ONE_1"}],"actions":[{"type":"publishText","text":"Button 6 was clicked"}]}}]}]}
        },
        carousel_deeplinks_btns: {
            title: "Carousel with deeplinks",
            content: {"type":"carousel","padding":10,"elements":[{"type":"vertical","elements":[{"type":"button","tooltip":"Choose a plan","title":"Deep link 1","click":{"metadata":[{"type":"ExternalId","id":"ANOTHER_ONE_1"}],"actions":[{"type":"link","uri":"http://www.ynet.co.il"}]}},{"type":"button","tooltip":"Choose a plan","title":"Deep link 2","click":{"metadata":[{"type":"ExternalId","id":"ANOTHER_ONE_1"}],"actions":[{"type":"link","uri":"http://liveperson.com/deeplink"}]}}]},{"type":"vertical","elements":[{"type":"button","tooltip":"Choose a plan","title":"Deep link 3","click":{"metadata":[{"type":"ExternalId","id":"ANOTHER_ONE_1"}],"actions":[{"type":"link","uri":"http://liveperson.com/deeplink"}]}},{"type":"button","tooltip":"Choose a plan","title":"Button 4","click":{"metadata":[{"type":"ExternalId","id":"ANOTHER_ONE_1"}],"actions":[{"type":"publishText","text":"Button 4 was clicked"}]}}]},{"type":"vertical","elements":[{"type":"button","tooltip":"Choose a plan","title":"Deep link 5","click":{"metadata":[{"type":"ExternalId","id":"ANOTHER_ONE_1"}],"actions":[{"type":"link","uri":"http://liveperson.com/deeplink"}]}},{"type":"button","tooltip":"Choose a plan","title":"Button 6","click":{"metadata":[{"type":"ExternalId","id":"ANOTHER_ONE_1"}],"actions":[{"type":"publishText","text":"Button 6 was clicked"}]}}]}]}
        },
        carousel_1_el: {
            title: "Carousel with single element",
            content: {"type":"carousel","padding":10,"elements":[{"type":"vertical","elements":[{"type":"image","url":"http://cdn.mos.cms.futurecdn.net/vkrEdZXgwP2vFa6AEQLF7f-480-80.jpg?quality=98&strip=all","tooltip":"image tooltip","click":{"metadata":[{"type":"ExternalId","id":"11114444"}],"actions":[{"type":"publishText","text":"YADA YADA"}]}},{"type":"text","text":"product name","tooltip":"text tooltip","style":{"bold":true,"size":"large"}},{"type":"text","text":"product name","tooltip":"text tooltip"},{"type":"button","tooltip":"button tooltip","title":"Add to cart","click":{"actions":[{"type":"link","name":"Add to cart","uri":"http://www.google.com"}]}},{"type":"horizontal","elements":[{"type":"button","title":"Buy","tooltip":"Buy this product","click":{"actions":[{"type":"link","name":"Buy","uri":"http://www.google.com"},{"type":"publishText","text":"YADA YADA"}]}},{"type":"button","title":"Find similar","tooltip":"store is the thing","click":{"metadata":[{"type":"ExternalId","id":"11112222"}],"actions":[{"type":"link","name":"Buy","uri":"http://www.google.com"}]}}]},{"type":"button","tooltip":"button tooltip","title":"Publish text","click":{"metadata":[{"type":"ExternalId","id":"22223333"}],"actions":[{"type":"publishText","text":"my text"}]}},{"type":"button","tooltip":"button tooltip","title":"Navigate","click":{"metadata":[{"type":"ExternalId","id":"12345678"}],"actions":[{"type":"publishText","text":"my text"},{"type":"navigate","name":"Navigate to store via image","lo":34.88248,"la":32.19777}]}}]}]}
        },
        carousel_images: {
            title: "Carousel with images",
            content: {"type":"carousel","padding":10,"elements":[{"type":"vertical","elements":[{"type":"image","url":"https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/7289E842-10A3-40C3-B4A7-F1856B574CD0.png","tooltip":"SIM only plan","click":{"metadata":[{"type":"ExternalId","id":"11114444"}]}},{"type":"text","text":"Small plan 2 GB data ","tooltip":"Small plan","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"text","text":"500$ national talk","tooltip":"500$","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"text","text":"49$ per month","tooltip":"49$","rtl":false,"style":{"bold":true,"italic":true,"color":"#000000"}},{"type":"button","tooltip":"Choose a plan","title":"Choose a plan","click":{"actions":[{"type":"link","name":"Add to cart","uri":"http://www.google.com"}]}}]},{"type":"vertical","elements":[{"type":"image","url":"https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/CF63C36C-CF8E-4AA5-9376-BC89EDAE43B7.png","tooltip":"Swap plan","click":{"metadata":[{"type":"ExternalId","id":"11114444"}]}},{"type":"text","text":"Medium plan 15GB data","tooltip":"Medium plan","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"text","text":"Unlimited national talk","tooltip":"Unlimited","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"text","text":"69$ per month","tooltip":"Unlimited","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"button","tooltip":"Buy now","title":"Buy now","click":{"actions":[{"type":"link","name":"Add to cart","uri":"http://www.google.com"}]}}]},{"type":"vertical","elements":[{"type":"image","url":"https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/D767223B-CC51-431A-A26E-B54C39EA7846.png","tooltip":"Large plan","click":{"metadata":[{"type":"ExternalId","id":"11114444"}]}},{"type":"text","text":"Large plan 20GB data","tooltip":"Large plan","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"text","text":"unlimited international talk","tooltip":"unlimited international","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"button","tooltip":"Choose a plan","title":"Choose a plan","click":{"actions":[{"type":"link","name":"Add to cart","uri":"http://www.google.com"}]}}]}]}
        },
        carousel_images_only: {
            title: "Carousel images only",
            content: {"type":"carousel","padding":10,"elements":[{"type":"vertical","elements":[{"type":"image","url":"https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/7289E842-10A3-40C3-B4A7-F1856B574CD0.png","tooltip":"SIM only plan","click":{"metadata":[{"type":"ExternalId","id":"11114444"}]}}]},{"type":"vertical","elements":[{"type":"image","url":"https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/CF63C36C-CF8E-4AA5-9376-BC89EDAE43B7.png","tooltip":"SIM only plan","click":{"metadata":[{"type":"ExternalId","id":"11114444"}]}}]},{"type":"vertical","elements":[{"type":"image","url":"https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/7289E842-10A3-40C3-B4A7-F1856B574CD0.png","tooltip":"SIM only plan","click":{"metadata":[{"type":"ExternalId","id":"11114444"}]}}]}]}
        },
        carousel_actions: {
            title: "Carousel with actions",
            content: {"type":"carousel","padding":10,"elements":[{"type":"vertical","elements":[{"type":"text","text":"SIM only plan","tooltip":"SIM only plan","rtl":false,"style":{"bold":false,"italic":false,"color":"#000000","size":"large"}},{"type":"text","text":"Twelve month plan BYO mobile","tooltip":"Twelve month plan BYO mobile","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"button","tooltip":"Choose a plan","title":"Choose a plan","click":{"metadata":[{"type":"ExternalId","id":"ANOTHER_ONE_1"}],"actions":[{"type":"publishText","text":"SIM only plan"},{"type":"link","name":"Add to cart","uri":"https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/45246060-E3A7-4477-A26B-F6D74A28D49E.png"}]}}]},{"type":"vertical","elements":[{"type":"text","text":"Swap plan","tooltip":"Swap plan","rtl":false,"style":{"bold":false,"italic":false,"color":"#000000","size":"large"}},{"type":"text","text":"Two year plan leasing a mobile","tooltip":"Two year plan leasing a mobile","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"button","tooltip":"Choose a plan","title":"Choose a plan","click":{"metadata":[{"type":"ExternalId","id":"ANOTHER_ONE_2"}],"actions":[{"type":"publishText","text":"Two year plan leasing a mobile"},{"type":"link","name":"Add to cart","uri":"https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/45246060-E3A7-4477-A26B-F6D74A28D49E.png"},{"type":"navigate","name":"Navigate to store via image","lo":34.88248,"la":32.19777}]}}]},{"type":"vertical","elements":[{"type":"text","text":"Mobiles on a plan","tooltip":"Mobiles on a plan","rtl":false,"style":{"bold":false,"italic":false,"color":"#000000","size":"large"}},{"type":"text","text":"Two year plan with a mobile","tooltip":"Two year plan with a mobile","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"button","tooltip":"Choose a plan","title":"Choose a plan","click":{"metadata":[{"type":"ExternalId","id":"ANOTHER_ONE_3"}],"actions":[{"type":"publishText","text":"Mobiles on a plan"}]}}]}]}
        },
        carousel_element_order: {
            title: "Carousel elements order",
            content: {"type":"carousel","padding":10,"elements":[{"type":"vertical","elements":[{"type":"text","text":"Small plan 2 GB data ","tooltip":"Small plan","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"text","text":"500$ national talk","tooltip":"500$","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"text","text":"49$ per month","tooltip":"49$","rtl":false,"style":{"bold":true,"italic":true,"color":"#000000"}},{"type":"button","tooltip":"Choose a plan","title":"Choose a plan","click":{"actions":[{"type":"link","name":"Add to cart","uri":"http://www.google.com"}]}},{"type":"image","url":"https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/7289E842-10A3-40C3-B4A7-F1856B574CD0.png","tooltip":"SIM only plan","click":{"metadata":[{"type":"ExternalId","id":"11114444"}]}}]},{"type":"vertical","elements":[{"type":"image","url":"https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/CF63C36C-CF8E-4AA5-9376-BC89EDAE43B7.png","tooltip":"Swap plan","click":{"metadata":[{"type":"ExternalId","id":"11114444"}]}},{"type":"text","text":"Medium plan 15GB data","tooltip":"Medium plan","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"text","text":"Unlimited national talk","tooltip":"Unlimited","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"text","text":"69$ per month","tooltip":"Unlimited","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"button","tooltip":"Buy now","title":"Buy now","click":{"actions":[{"type":"link","name":"Add to cart","uri":"http://www.google.com"}]}}]},{"type":"vertical","elements":[{"type":"image","url":"https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/D767223B-CC51-431A-A26E-B54C39EA7846.png","tooltip":"Large plan","click":{"metadata":[{"type":"ExternalId","id":"11114444"}]}},{"type":"text","text":"Large plan 20GB data","tooltip":"Large plan","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"text","text":"unlimited international talk","tooltip":"unlimited international","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"button","tooltip":"Choose a plan","title":"Choose a plan","click":{"actions":[{"type":"link","name":"Add to cart","uri":"http://www.google.com"}]}}]}]}
        }
    };

    var metadata = [
        {
            "type": "ExternalId",
            "id": "123456789"
        }
    ];


    ns.data = {
        cards: cards,
        metadata: metadata
    };

})(window.structuredContentWidget = window.structuredContentWidget || {});
