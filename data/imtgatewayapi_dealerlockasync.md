# DealerLockAsync (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Processing Trade Requests ](imtgatewayapi_dealing.md "Processing Trade Requests")/ DealerLockAsync | [](imtgatewayapi_dealergetasync.md "DealerGetAsync") [](imtgatewayapi_dealeranswerasync.md "DealerAnswerAsync") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::DealerLockAsync
Capture a request from the requests queue by ID.
C++
MTAPIRES IMTGatewayAPI::DealerLockAsync( const UINT id // Request ID )  
---  
.NET
MTRetCode CIMTGatewayAPI.DealerLockAsync( uint id // Request ID )  
---  
Parameters
id
[in] ID of the request that is to be captured. The [IMTRequest::ID](imtrequest_id.md "ID") value is used as the identifier..
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code. Code MT_RET_OK_NONE means that the request is no longer available on the trade server. For example, it could have been captured by another dealer or application.
Note
Request object captured as a result of this method calling is returned in the [IMTGatewaySink::OnDealerLock](imtgatewaysink_ondealerlock.md "OnDealerLock") method.