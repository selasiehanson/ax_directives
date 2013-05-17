<!DOCTYPE html>
<html lang="en" ng-app="qfinance">
  <head>
    <meta charset="utf-8">
    <title>OC Dental</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <?php 

        //Le styles
        echo HTML::style("css/bootstrap.css");
        echo HTML::style("css/bootstrap-responsive.css");
        echo HTML::style("css/layout.css");
        echo HTML::style("css/app.css");
        echo HTML::style("css/ax_filter.css");
        echo HTML::style("css/jquery.pnotify.default.css");
        echo HTML::style("css/chosen/chosen.css");
        echo HTML::style("css/datepicker.css");
        //echo HTML::style("css/select2/select2.css");
     ?>

     <?php 
        //ajax uploader
        echo HTML::style("js/libs/ajaxuploader/fineuploader.css");
        
        echo HTML::script("js/libs/ajaxuploader/js/header.js");
        echo HTML::script("js/libs/ajaxuploader/js/util.js");
        echo HTML::script("js/libs/ajaxuploader/js/button.js");
        echo HTML::script("js/libs/ajaxuploader/js/handler.base.js");
        echo HTML::script("js/libs/ajaxuploader/js/handler.form.js");
        echo HTML::script("js/libs/ajaxuploader/js/handler.xhr.js");
        echo HTML::script("js/libs/ajaxuploader/js/uploader.basic.js");
        echo HTML::script("js/libs/ajaxuploader/js/dnd.js");
        echo HTML::script("js/libs/ajaxuploader/js/uploader.js");
     ?>


    <style type="text/css">
        /*This is need to hide {{}} when the app loads*/
        [ng-cloak] {
            display: none;
        }
    </style>
    <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"");
    <![endif]-->

<?php 



    //Libraries
    echo HTML::script("js/libs/angular.min.js");
    echo HTML::script("js/libs/angular-resource.min.js");
    //end of libraries

    //Compnents && Widget Services 
    echo HTML::script("js/app/components/services/paging_service.js");
    echo HTML::script("js/app/components/services/filtering_service.js");
    
    //Compnents && Widgets
    echo HTML::script("js/app/components/date_picker_component.js"); 
    echo HTML::script("js/app/components/widget_container_component.js"); 
    echo HTML::script("js/app/components/pager_component.js");
    echo HTML::script("js/app/components/chosen_component.js"); 
    echo HTML::script("js/app/components/print_component.js"); 
    echo HTML::script("js/app/components/filter_component.js");
    echo HTML::script("js/app/components/time_component.js");
    //echo HTML::script("js/app/components/select_component.js");
    echo HTML::script("js/app/components/tab_component.js");
        
    //App Scripts
    echo HTML::script("js/app/app.js");
    echo HTML::script("js/app/helpers.js");
    echo HTML::script("js/app/model_resources.js");
    echo HTML::script("js/app/security_model_resources.js");
    echo HTML::script("js/app/profilecontroller.js");
    //end of app scripts
  ?>

  </head>

  <body ng-cloak>