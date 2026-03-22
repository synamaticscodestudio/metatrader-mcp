# ServerRestart (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ PHP Implementation of Protocol ](php.md "Protocol Implementation in PHP") / [ MTWebAPI Class ](mtwebapi.md "MTWebAPI Class") / [ Service Commands ](php_service.md "Service Commands")/ ServerRestart | [](php_service.md "Service Commands") [](php_common.md "Common Configuration") |
| --- | --- | --- |
| --- | --- |

MTWebAPI::ServerRestart
This method restarts the server to which the Web client is connected. If a Web client is connected to the main trade server, this command will restart all the trading platform.
MTAPIRES MTWebAPI::ServerRestart()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Restart servers only on weekends and holidays or at night when the trading activity is minimal. Restarting the server may take several seconds (up to a minute), during this time connection to the server is impossible.