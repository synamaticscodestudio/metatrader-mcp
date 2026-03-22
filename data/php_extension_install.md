# Setup (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ PHP Implementation of Protocol ](php.md "Protocol Implementation in PHP") / [ Examples ](php_examples.md "Examples") / [ Protocol Extension ](php_extension.md "Protocol Extension")/ Setup | [](php_extension_structure.md "Structure of Files") [](php_extension_working.md "Working with Example") |
| --- | --- | --- |
| --- | --- |

Setup
Several actions must be performed to launch this example.
System Requirements
The following conditions must be matched to launch the example:
  * MySQL server;
  * PHP version 5 or higher;
  * php_mbstring.dll, php_sockets.dll modules must be included into PHP project.

Copying/Inclusion into the Project
The first step is copying the whole Examples/PHP directory from the one where Web API is [installed](installation.md "Setup") to your project working directory. Further on, the main /Examples/api_extension/index.php file must be included in your PHP project.
Note that the data from [authorization and commands execution forms](php_extension_working.md "Working with Example") must be sent in UTF-8 format in this example. Therefore, UTF-8 encoding must be specified for the web page, in which they are integrated.  
---  
Enabling the Plugin on the Server
APIExtension plugin must be enabled to allow the example operation on a trading server. That plugin is included into MetaTrader 5 Server API package as an example of handling custom commands sent from MetaTrader 5 Web API and MetaTrader 5 Manager API.
Add the plugin configuration via MetaTrader 5 Administrator: