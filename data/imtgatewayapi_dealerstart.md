# DealerStart (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Processing Trade Requests ](imtgatewayapi_dealing.md "Processing Trade Requests")/ DealerStart | [](imtgatewayapi_dealerexecutioncreate.md "DealerExecutionCreate") [](imtgatewayapi_dealerstop.md "DealerStop") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::DealerStart
Gateway connection to the trading platform as a dealer.
C++
MTAPIRES IMTGatewayAPI::DealerStart( const UINT flags // Connection flags )  
---  
.NET
MTRetCode CIMTGatewayAPI.DealerStart( uint flags // Connection flags )  
---  
Parameters
flags
[in] The flags describing additional options for connection as a dealer. To pass the flags, the [IMTGatewayAPI::EnDealerRequestFlags](imtgatewayapi_enum.md "Enumerations") enumeration is used.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
After this method execution the trade requests queue will be downloaded to the application and [trading requests events](imtrequestsink.md "IMTRequestSink") will start coming (IMTRequestSink::OnRequestAdd, IMTRequestSink::OnRequestUpdate and IMTRequestSink::OnRequestDelete).
All trading servers of one platform are connected to one gateway and their trading requests queues are included into the common one.
When calling a method, enable only those flags that are actually needed. Passing additional information in each query increases the load on the trading server. With a large number of queries, this may affect the performance of the platform.