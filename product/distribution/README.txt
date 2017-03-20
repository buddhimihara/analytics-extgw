================================================================================
                          WSO2Telco DEP Gateway Analytics
================================================================================

WSO2Telco DEP(Digital Enablement Platform) is an API management and monetization 
platform which supports all aspects of an API business, including creating, publishing, 
consuming, discovery and monetization of APIs.

Gateway Analytics for DEP(Digital Enablement Platform), is a Data Analytics extension for DEP. 
This extension will introduce data analytical capabilities to DEP.

Key Features
=============

This will bring in the fundamental set of reports needed by an gateway.

* Traffic Report -
    Includes the details of Traffic distribution for each API

* Transaction Report -
    Downloadable report with transaction details

* Customer Care Report -
    Includes the Responses sent by the system.

* Response Time -
    Provides API wise response time

System Requirements
==================================

1. Minimum memory - 2GB
2. Processor      - Pentium 800MHz or equivalent at minimum
3. Java 1.8
4. The Management Console requires you to enable Javascript of the Web browser,
   with MS IE 7. In addition to JavaScript, ActiveX should also be enabled
   with IE. This can be achieved by setting your security level to
   medium or lower.
5. To build WSO2Telco DEP Gateway from the Source distribution, it is necessary that you have
   JDK 1.8 version and Maven 3.3.9

Installation & Running
==================================

1. Download the analytics distribution ZIP file and extract the .ZIP file.
2. The path to this folder will be referred to as <ANALYTICS_HOME> throughout the documentation.
3. To start the server, go to <ANALYTICS_HOME>/bin folder and run the script as ./wso2server.sh -DportOffset=1 to start with port offset 1.
4. Wait until you see "Mgt Console URL  : https://<ANALYTICS-HOST>:<PORT>/carbon/".

For more details, see the Installation Guide:
       http://docs.wso2telco.com/display/HG/Installing+and+Running+the+Product

Documentation
==============

On-line product documentation is available at:
       http://docs.wso2telco.com/display/HG/Analytics+-+External+Gateway

Support
==================================

We are committed to ensuring that your enterprise middleware deployment is completely
supported from evaluation to production. Our unique approach ensures that all support
leverages our open development methodology and is provided by the very same engineers
who build the technology.

For additional support information please refer to https://wso2telco.com/services

Issue Tracker
==================================

Help us make our software better. Please submit any bug reports or feature
requests through the WSO2Telco JIRA system:

    https://jira.wso2telco.com/jira/secure/Dashboard.jspa?selectPageId=10500

--------------------------------------------------------------------------------
(c) Copyright 2017 WSO2Telco.