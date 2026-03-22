# Structure of Files (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ PHP Implementation of Protocol ](php.md "Protocol Implementation in PHP") / [ Examples ](php_examples.md "Examples") / [ Protocol Extension ](php_extension.md "Protocol Extension")/ Structure of Files | [](php_extension.md "Protocol Extension") [](php_extension_install.md "Setup") |
| --- | --- | --- |
| --- | --- |

Structure of Files
Example of the protocol extension is located in /Examples/PHP/api_extension/ subdirectory of the directory where [Web API is installed](installation.md "Setup"). Example consists of the following files:
  * authorization.phtml — the page specifying authorization data for connecting to a server;
  * command.phtml — the page for sending commands and getting the results of their execution;
  * index.php — main project file;
  * web_pageform.php — implementation of custom commands.
