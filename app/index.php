<?php include 'header.php'; ?>
<script type="text/javascript">  
  var userid = "<?php echo $_SESSION['userid']; ?>";
</script>

<!DOCTYPE html>
<!--[if lt IE 7]>      <html lang="en" ng-app="myApp" class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html lang="en" ng-app="myApp" class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html lang="en" ng-app="myApp" class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html lang="en" ng-app="myApp" class="no-js"> <!--<![endif]-->
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Save Crop Dashboard</title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- BEGIN PLUGIN CSS -->
  <link rel="stylesheet" href="bower_components/html5-boilerplate/css/normalize.css">
  <link rel="stylesheet" href="bower_components/html5-boilerplate/css/main.css">
  <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="bower_components/jquery-ui/themes/smoothness/jquery-ui.css"/>
  <!-- END PLUGIN CSS -->

  <!-- BEGIN CORE CSS FRAMEWsORK -->
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <link rel="stylesheet" href="css/bootstrap-theme.min.css">
  <link rel="stylesheet" href="css/font-awesome.min.css">
  <!-- END CORE CSS FRAMEWORK -->

  <!-- BEGIN CSS TEMPLATE -->
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/app.css">
  <link rel="stylesheet" href="css/custom-icons.css">
  <link rel="stylesheet" href="css/responsive.css">
  <link rel="stylesheet" href="bower_components/angular-chart.js/dist/angular-chart.css">
  <link rel="stylesheet" type="text/css" href="bower_components/angular-bootstrap-colorpicker/css/colorpicker.min.css">
  <!-- END CSS TEMPLATE -->
</head>
<body>

  <!--[if lt IE 7]>
      <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
      <![endif]-->

      <!-- BEGIN HEADER -->
      <div class="header navbar navbar-inverse ">
        <!-- BEGIN TOP NAVIGATION BAR -->
        <div class="navbar-inner">
          <div class="header-seperation">
            <ul class="nav pull-left notifcation-center" id="main-menu-toggle-wrapper" style="display:none">
              <li class="dropdown"> <a id="main-menu-toggle" href="#main-menu"  class="" > <div class="iconset top-menu-toggle-white"></div> </a> </li>
            </ul>
            <!-- BEGIN LOGO -->
            <a href="index.php" class="logo">SaveCrop</a>
            <!-- END LOGO -->
          </div>
          <!-- END RESPONSIVE MENU TOGGLER -->
          <div class="header-quick-nav" >
            <!-- BEGIN TOP NAVIGATION MENU -->
            <div class="pull-left">
              <ul class="nav quick-section">
                <li class="quicklinks"> <a href="#" class="" id="layout-condensed-toggle" >
                  <div class="iconset top-menu-toggle-dark"></div>
                </a> </li>
              </ul>
              <ul class="nav quick-section">
                <li class="quicklinks"> 
                  <a href="#" class="" >
                    <div class="iconset top-reload"></div>
                  </a> 
                </li>
               
                
                <li class="quicklinks"> <span class="h-seperate"></span></li>
                <li class="m-r-10 input-prepend inside search-form no-boarder">
                  <span class="add-on"> <span class="iconset top-search"></span></span>
                  <input name="" type="text"  class="no-boarder " placeholder="Search Dashboard" style="width:250px;">
                </li>
                 <li class="quicklinks pull-right"> 
                  <a href="logout.php" class="" >
                   <i class="fa fa-sign-out"></i>
                  </a> 
                </li>
              </ul>
            </div>
            <!-- END TOP NAVIGATION MENU -->

          </div>
          <!-- END TOP NAVIGATION MENU -->

        </div>
        <!-- END TOP NAVIGATION BAR -->
      </div>

      <!-- END HEADER -->
      <!-- BEGIN CONTAINER -->
      <div class="page-container row">
        <!-- BEGIN SIDEBAR -->
        <div class="page-sidebar" id="main-menu">
          <!-- BEGIN MINI-PROFILE -->
          <div class="user-info-wrapper">

              <div class="profile-wrapper">
                <a ui-sref="profile">
                  <img src="img/profiles/avatar.jpg"  alt="" data-src="assets/img/profiles/avatar.jpg" data-src-retina="assets/img/profiles/avatar2x.jpg" width="69" height="69" />
                </a>
              </div>
              <div class="user-info">
                  <div class="greeting">Welcome</div>
                  <div class="username"><?php echo $_SESSION['username']; ?> <span class="semi-bold"><?php echo $_SESSION['userid']; ?></span></div>
                  <div class="status">Role<a href="#"><div class="status-icon green"></div>Admin</a></div>
              </div>

          </div>
          <!-- END MINI-PROFILE -->

          <!-- BEGIN SIDEBAR MENU -->
          <ul ng-controller="menuActive">
            <li class="start"  ng-class="{active:isActive('/posts')}"> <a href="javascript:;" ui-sref="allPosts"> <i class="fa fa-dashcube"></i> <span class="title">Dashboard</span></a></li>
            <li ng-class="{active:isActive('/maps')}"> <a href="javascript:;"  ui-sref="maps"> <i class="fa fa-globe"></i> <span class="title">Maps</span></a>
            </li>
            <li  ng-class="{active:isActive('/statistics')}"> <a href="javascript:;" ui-sref="statistics"> <i class="fa fa-area-chart"></i> <span class="title">Charts</span> </a> </li>
          </ul>
          <div class="clearfix"></div>
          <!-- END SIDEBAR MENU -->
        </div>
        <!-- END SIDEBAR -->
        <!-- BEGIN PAGE CONTAINER-->
        <div class="page-content">

          <div ui-view></div>

        </div>
        <!-- END CONTAINER -->
      </div>

  <!-- In production use:
  <script src="//ajax.googleapis.com/ajax/libs/angularjs/x.x.x/angular.min.js"></script>
  -->
  <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB_Dj4oGEGycTPQ0RhgSXmqqF_BNss75Vc&libraries=places"></script>
  <script type="text/javascript" src="bower_components/jquery/dist/jquery.js"></script>
  <script type="text/javascript" src="bower_components/jquery-ui/jquery-ui.js"></script>
  <script src="bower_components/angular/angular.min.js"></script>
  <script src="bower_components/angular-ui-router/release/angular-ui-router.min.js"></script>
  <script src="bower_components/lodash/dist/lodash.min.js"></script>
  <script src="bower_components/angular-google-maps/dist/angular-google-maps.min.js"></script>
  <script type="text/javascript" src="//google-maps-utility-library-v3.googlecode.com/svn/trunk/maplabel/src/maplabel-compiled.js"></script>
  <script type="text/javascript" src="bower_components/angular-ui-date/src/date.js"></script>
  <script src="bower_components/Chart.js/Chart.min.js"></script>
  <script src="bower_components/angular-chart.js/dist/angular-chart.min.js"></script>
  <script src="bower_components/angular-ui-bootstrap/src/datepicker/datepicker.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/0.12.1/ui-bootstrap-tpls.min.js"></script>
  <script src="bower_components/flow.js/dist/flow.min.js"></script>
  <script src="bower_components/angular-wysiwyg/dist/angular-wysiwyg.min.js"></script>
  <script src="bower_components/angular-bootstrap-colorpicker/js/bootstrap-colorpicker-module.min.js"></script>
  <script src="js/app.js"></script>
  <script src="js/core.js"></script>

  <!-- Modules -->
  <script src="modules/posts/postmodule.js"></script>
  <script src="modules/posts/js/controllers.js"></script>
  <script src="modules/statistics/statisticModule.js"></script>
  <script src="modules/statistics/js/controllers.js"></script>
  <script src="modules/maps/mapsModule.js"></script>
  <script src="modules/maps/js/controllers.js"></script>
  <script src="modules/profile/profileModule.js"></script>
  <script src="modules/profile/js/controllers.js"></script>

  <script src="components/version/version.js"></script>
  <script src="components/version/version-directive.js"></script>
  <script src="components/version/interpolate-filter.js"></script>
</body>
</html>
