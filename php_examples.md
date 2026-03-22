# Examples (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ PHP Implementation of Protocol ](php.md "Protocol Implementation in PHP")/ Examples | [](php_customsend.md "CustomSend") [](php_web_registration.md "Web Registration") |
| --- | --- | --- |
| --- | --- |

Examples
To show how to use the Web API protocol implementation in PHP, the package includes two examples:
  * [Web Registration](php_web_registration.md "Web Registration") — a ready project of registration of accounts in the trading platform through a web page.
  * [Protocol Extension](php_extension.md "Protocol Extension") — an example of implementation of custom commands.

These examples are located in the /Examples/PHP/ subdirectory of the [Web API installation](installation.md "Setup") directory.
Allow sockets in PHP to ensure correct operation of the examples. Open the [php.ini](https://php.net/manual/ru/configuration.file.php) file and uncomment the following line: ;extension=php_sockets.dll If you have not installed the php_sockets.dll extension, please [download it here](https://www.php.net/downloads.php).  
---