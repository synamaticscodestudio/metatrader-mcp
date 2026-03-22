# Custom Commands (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ PHP Implementation of Protocol ](php.md "Protocol Implementation in PHP") / [ MTWebAPI Class ](mtwebapi.md "MTWebAPI Class")/ Custom Commands | [](php_tickstat.md "TickStat") [](php_customsend.md "CustomSend") |
| --- | --- | --- |
| --- | --- |

Custom Commands
The Web API protocol is [extensible](webapi_protocol_extension.md "Protocol Extension"). The implementation of the protocol in PHP includes a method for sending custom commands to the server.
Custom Web API commands can be handled using a server plugin created with the MetaTrader 5 Server API. For this purpose, the Server API provides a special hook [IMTCustomSink::HookWebAPICommand](imtcustomsink_hookwebapicommand.md "HookWebAPICommand"). A detailed description of how custom commands are handled is provided in the MetaTrader 5 Server API documentation.  
---  
The [MTWebAPI::CustomSend](php_customsend.md "CustomSend") method is used for sending custom commands.