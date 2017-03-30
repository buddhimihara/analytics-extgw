/*
 * Copyright (c) 2016, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// var getProviderData, conf, schema;
// //
$(function () {
    var gadgetLocation;
    var pref = new gadgets.Prefs();

    var refreshInterval;
    var providerData;

    var CHART_CONF = 'chart-conf';
    var PROVIDER_CONF = 'provider-conf';
    var REFRESH_INTERVAL = 'refreshInterval';
    var operatorId = 0, serviceProviderId = 0, applicationId = 0;

    var init = function () {
        $.ajax({
            url: gadgetLocation + '/conf.json',
            method: "GET",
            contentType: "application/json",
            async: false,
            success: function (data) {
                conf = JSON.parse(data);
                conf.operator =  operatorId;
                conf.serviceProvider = serviceProviderId;
                conf.applicationName = applicationId;

                $.ajax({
                    url: gadgetLocation + '/gadget-controller.jag?action=getSchema',
                    method: "POST",
                    data: JSON.stringify(conf),
                    contentType: "application/json",
                    async: false,
                    success: function (data) {
                        schema = data;
                    }
                });
            }
        });
    };


//
//     var drawGadget = function (){
//
//         draw('#canvas', conf[CHART_CONF], schema, providerData);
//         setInterval(function() {
//             draw('#canvas', conf[CHART_CONF], schema, getProviderData());
//         },pref.getInt(REFRESH_INTERVAL));
//
//     };

    var keywords = [];
    $("#searchbtn").click(function() {
        $("#canvas").html("");
        getGadgetLocation(function (gadget_Location) {
            gadgetLocation = gadget_Location;
            init();
            // getProviderData(0, 0, 0, false);
            alert("count : "+count);
            for(var i=0;i<count;i++) {
                var key_i = $("#keyval"+i).val();
                keywords.push(key_i);
            }
            loadOperators();
            // drawGadget();
        });
    });


    var operators = [];
    var sps = [];
    var applications = [];

    function loadOperators() {
        conf["provider-conf"]["tableName"] = "ORG_WSO2TELCO_ANALYTICS_HUB_STREAM_OPERATOR_SUMMARY";
        conf["provider-conf"]["provider-name"] = "operator";
        conf.operator = 0;
        operatorId = 0;
        var operatorIds = [];
        var loadedOperator = [];
        $.ajax({
            url: gadgetLocation + '/gadget-controller.jag?action=getData',
            method: "POST",
            data: JSON.stringify(conf),
            contentType: "application/json",
            async: false,
            success: function (data) {
                for (var i = 0; i < data.length; i++) {
                    var operator = data[i];
                    if(operator.operatorId) {
                        operatorIds.push(" "+operator.operatorId);
                    }
                }
                }
            });
            loadResults(operatorIds);
    }


     function loadResults (clickedOperator){
         alert(JSON.stringify(clickedOperator[0]));
         var query = "";
         query = "jsonBody:"+keywords[0];

         for(var i = 1;i<keywords.length;i++) {
             query += " AND jsonBody:"+keywords[i];
         }
         alert(query);
         conf["provider-conf"]["tableName"] = "ORG_WSO2TELCO_ANALYTICS_HUB_STREAM_PROCESSEDSTATISTICS";
         conf["provider-conf"]["query"] = "jsonBody:outboundSMSMessageRequest AND jsonBody:123456";
         alert(JSON.stringify(conf));

         $.ajax({
             url: gadgetLocation + '/gadget-controller.jag?action=getData',
             method: "POST",
             data: JSON.stringify(conf),
             contentType: "application/json",
             async: false,
             success: function (data) {
                 providerData = data;
                 alert(JSON.stringify(data));
             }
         });
         return providerData;
     }





    // getGadgetLocation(function (gadget_Location) {
    //     alert(2);
    //     gadgetLocation = gadget_Location;
    //     init();
    //     loadOperator();


    // function loadOperator (){
    //             conf["provider-conf"]["tableName"] = "ORG_WSO2TELCO_ANALYTICS_HUB_STREAM_OPERATOR_SUMMARY";
    //             conf["provider-conf"]["provider-name"] = "operator";
    //             conf.operator = 0;
    //             operatorId = 0;
    //             $.ajax({
    //                 url: gadgetLocation + '/gadget-controller.jag?action=getData',
    //                 method: "POST",
    //                 data: JSON.stringify(conf),
    //                 contentType: "application/json",
    //                 async: false,
    //                 success: function (data) {
    //                     for (var i =0 ; i < data.length; i++) {
    //                         operators.push(data[i]);
    //                       }
    //                     }
    //                     $("#dropdown-operator").html( $("#dropdown-operator").html() + operatorsItems);
    //                     $("#button-operator").val('<li><a data-val="0" href="#">All</a></li>');
    //                     loadSP(operatorIds);
    //
    //                     $("#dropdown-operator li a").click(function(){
    //                         $("#button-operator").text($(this).text());
    //                         $("#button-operator").append('<span class="caret"></span>');
    //                         $("#button-operator").val($(this).text());
    //                         operatorIds = $(this).data('val');
    //                         loadSP(operatorIds);
    //                     });
    //                 }
    //             }
            //   }
//
//
//     function loadApp (sps){
//     // alert(sps);
//     // if(sps)
//     conf["provider-conf"]["tableName"] = "ORG_WSO2TELCO_ANALYTICS_HUB_STREAM_API_SUMMARY";
//     conf["provider-conf"]["provider-name"] = "sp";
//     applicationId = 0;
//     conf.serviceProvider = "("+sps+")";
//     $.ajax({
//         url: gadgetLocation + '/gadget-controller.jag?action=getData',
//         method: "POST",
//         data: JSON.stringify(conf),
//         contentType: "application/json",
//         async: false,
//         success: function (data) {
//
//             $("#dropdown-app").empty();
//             var apps = [];
//             var loadedApps = [];
//             var appItems = '<li><a data-val="0" href="#">All</a></li>';
//             for ( var i =0 ; i < data.length; i++) {
//                 var app = data[i];
//                 if($.inArray(app.applicationId, loadedApps)<0){
//                 appItems += '<li><a data-val='+ app.applicationId +' href="#">' + app.applicationName +'</a></li>'
//                 apps.push(" "+app.applicationId);
//                 loadedApps.push(app.applicationId);
//               }
//             }
//             $("#dropdown-app").html( $("#dropdown-app").html() + appItems);
//             $("#button-app").val('<li><a data-val="0" href="#">All</a></li>');
//             $("#button-app").text('All');
//             // loadApp(sps[i]);
//
//             $("#dropdown-app li a").click(function(){
//
//                 $("#button-app").text($(this).text());
//                 $("#button-app").append('<span class="caret"></span>');
//                 $("#button-app").val($(this).text());
//                 // var clickedSP = [];
//                 // clickedSP.push($(this).data('val'));
//                 apps = $(this).data('val');
//                 applicationId = apps;
//             });
//
//         }
//     });
//   }
//
//
//         $("#button-app").val("All");
//         $("#button-type").val("Customer Care");
//
//         $('input[name="daterange"]').daterangepicker({
//             timePicker: true,
//             timePickerIncrement: 30,
//             locale: {
//                 format: 'MM/DD/YYYY h:mm A'
//             }
//         });
//     });
//




});
