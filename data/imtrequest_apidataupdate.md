# APIDataUpdate (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ APIDataUpdate | [](imtrequest_apidataget.md "ApiDataGet") [](imtrequest_apidatanext.md "APIDataNext") |
| --- | --- | --- |
| --- | --- |

IMTRequest::APIDataUpdate
Change the custom parameter of type INT64 for a trade request.
C++
MTAPIRES IMTRequest::APIDataUpdate( const UINT pos, // Parameter position const USHORT app_id, // Application ID const UCHAR id, // Parameter identifier const INT64 value // Parameter value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTRequest.APIDataUpdate( uint pos, // Parameter position ushort app_id, // Application ID byte id, // Parameter ID long value // Parameter value )  
---  
Parameters
pos
[in] Position of the parameter, starting with 0.
app_id
[in] The ID of the application which sets the custom parameter.
id
[in] Parameter ID.
value
[in] Parameter value.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
A trade request can contain up to 8 custom parameters.
The parameter is defined as a binding of the application ID (app_id) and the parameter ID (id). This definition eliminates conflicts when running several plugins on one server, as well as enables to use simultaneous use of these parameters.
The field value is copied (it replaces the existing value) to the corresponding [API field of the order](imtorder_apidataset.md "ApiDataSet"), which is created as a result of the request execution. Copying is performed when creating market, pending and Close By orders via the Server API and the Manager API. So, copying occurs for the following request types:
  * TA_REQUEST
  * TA_INSTANT
  * TA_MARKET
  * TA_EXCHANGE
  * TA_PENDING
  * TA_CLOSE_BY
  * TA_DEALER_POS_EXECUTE
  * TA_DEALER_ORD_PENDING
  * TA_DEALER_CLOSE_BY

The field values is also copied to the relevant [API field of the balance deal](imtdeal_apidataset.md "ApiDataSet") which was performed as a result of the execution of this request. For all other deal types, the data is copied according to the request->order->deal sequence.
IMTRequest::APIDataUpdate
Change the custom parameter of type UINT64 for a trade request.
C++
MTAPIRES IMTRequest::APIDataUpdate( const UINT pos, // Parameter position const USHORT app_id, // Application ID const UCHAR id, // Parameter identifier const UINT64 value // Parameter value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTRequest.APIDataUpdate( uint pos, // Parameter position ushort app_id, // Application ID byte id, // Parameter ID ulong value // Parameter value )  
---  
Parameters
pos
[in] Position of the parameter, starting with 0.
app_id
[in] The ID of the application which sets the custom parameter.
id
[in] Parameter ID.
value
[in] Parameter value.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
A trade request can contain up to 8 custom parameters.
The parameter is defined as a binding of the application ID (app_id) and the parameter ID (id). This definition eliminates conflicts when running several plugins on one server, as well as enables to use simultaneous use of these parameters.
The field value is copied (it replaces the existing value) to the corresponding [API field of the order](imtorder_apidataset.md "ApiDataSet"), which is created as a result of the request execution. Copying is performed when creating market, pending and Close By orders via the Server API and the Manager API. So, copying occurs for the following request types:
  * TA_REQUEST
  * TA_INSTANT
  * TA_MARKET
  * TA_EXCHANGE
  * TA_PENDING
  * TA_CLOSE_BY
  * TA_DEALER_POS_EXECUTE
  * TA_DEALER_ORD_PENDING
  * TA_DEALER_CLOSE_BY

The field values is also copied to the relevant [API field of the balance deal](imtdeal_apidataset.md "ApiDataSet") which was performed as a result of the execution of this request. For all other deal types, the data is copied according to the request->order->deal sequence.
IMTRequest::APIDataUpdate
Change the custom parameter of type UINT64 for a trade request.
C++
MTAPIRES IMTRequest::APIDataUpdate( const UINT pos, // Parameter position const USHORT app_id, // Application ID const UCHAR id, // Parameter identifier const double value // Parameter value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTRequest.APIDataUpdate( uint pos, // Parameter position ushort app_id, // Application ID byte  id, // Parameter ID double value // Parameter value )  
---  
Parameters
pos
[in] Position of the parameter, starting with 0.
app_id
[in] The ID of the application which sets the custom parameter.
id
[in] Parameter ID.
value
[in] Parameter value.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
A trade request can contain up to 8 custom parameters.
The parameter is defined as a binding of the application ID (app_id) and the parameter ID (id). This definition eliminates conflicts when running several plugins on one server, as well as enables to use simultaneous use of these parameters.
The field value is copied (it replaces the existing value) to the corresponding [API field of the order](imtorder_apidataset.md "ApiDataSet"), which is created as a result of the request execution. Copying is performed when creating market, pending and Close By orders via the Server API and the Manager API. So, copying occurs for the following request types:
  * TA_REQUEST
  * TA_INSTANT
  * TA_MARKET
  * TA_EXCHANGE
  * TA_PENDING
  * TA_CLOSE_BY
  * TA_DEALER_POS_EXECUTE
  * TA_DEALER_ORD_PENDING
  * TA_DEALER_CLOSE_BY

The field values is also copied to the relevant [API field of the balance deal](imtdeal_apidataset.md "ApiDataSet") which was performed as a result of the execution of this request. For all other deal types, the data is copied according to the request->order->deal sequence.