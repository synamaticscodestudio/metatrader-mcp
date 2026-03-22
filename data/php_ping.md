# Ping (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ PHP Implementation of Protocol ](php.md "Protocol Implementation in PHP") / [ MTWebAPI Class ](mtwebapi.md "MTWebAPI Class") / [ Connect/Disconnect ](php_connect_disconnect.md "Connect/Disconnect")/ Ping | [](php_isconnected.md "IsConnected") [](php_logging.md "Manage Logging") |
| --- | --- | --- |
| --- | --- |

MTWebAPI::Ping
If no packets were received from a client for 120 seconds, the server breaks connection. Thus, the further execution of commands will be impossible until you complete the [authentication](webapi_rest_authentication.md "Authentication") procedure.
This feature allows you to send empty packets to the server (called "pings").
MTAPIRES MTWebAPI::Ping()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The optimal time between sending pings is 20 seconds. You should not send pings too often.