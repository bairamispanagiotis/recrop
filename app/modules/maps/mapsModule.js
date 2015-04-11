angular.module('saveCrop.maps', ['uiGmapgoogle-maps']).config(
    ['uiGmapGoogleMapApiProvider', '$stateProvider', '$locationProvider', function(GoogleMapApiProviders, $stateProvider, $locationProvider) {
        GoogleMapApiProvider.configure({
            china: true
        });

        $stateProvider.state('admin',{
            url:'/maps',
            abstract:true,
            controller:'',
            templateUrl:''
        })
    }]
);