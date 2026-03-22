# DealerStop (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Processing Trade Requests ](imtgatewayapi_dealing.md "Processing Trade Requests")/ DealerStop | [](imtgatewayapi_dealerstart.md "DealerStart") [](imtgatewayapi_dealergetasync.md "DealerGetAsync") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::DealerStop
[DealerStart](imtgatewayapi_dealerstart.md "DealerStart") inverse method. After its successful execution the gateway will stop fulfilling the dealer functions.
C++
MTAPIRES IMTGatewayAPI::DealerStop()  
---  
.NET
MTRetCode CIMTGatewayAPI.DealerStop()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.