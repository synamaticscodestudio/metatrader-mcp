# DealerGetAsync (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Processing Trade Requests ](imtgatewayapi_dealing.md "Processing Trade Requests")/ DealerGetAsync | [](imtgatewayapi_dealerstop.md "DealerStop") [](imtgatewayapi_dealerlockasync.md "DealerLockAsync") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::DealerGetAsync
Capture the most early (old) request from the requests queue.
C++
MTAPIRES IMTGatewayAPI::DealerGetAsync()  
---  
.NET
MTRetCode CIMTGatewayAPI.DealerGetAsync()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Request object captured as a result of this method calling is returned in the [IMTGatewaySink::OnDealerLock](imtgatewaysink_ondealerlock.md "OnDealerLock") method.
A captured request cannot be returned to the queue.