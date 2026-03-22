# APIDataUpdate (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTOrder ](imtorder.md "IMTOrder")/ APIDataUpdate | [](imtorder_apidataclearall.md "ApiDataClearAll") [](imtorder_apidatanext.md "APIDataNext") |
| --- | --- | --- |
| --- | --- |

IMTOrder::APIDataUpdate
Gets the INT64 type value of a custom parameter of a trade order.
C++
MTAPIRES IMTOrder::APIDataUpdate( const UINT pos, // Parameter position const USHORT app_id, // Application ID const UCHAR id, // Parameter ID const INT64 value // Parameter value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOrder.APIDataUpdate( uint pos, // Parameter position ushort app_id, // Application ID byte id, // Parameter ID long value // A reference to the value )  
---  
Parameters
pos
[in] Position of the parameter, starting with 0.
app_id
[in] The ID of the application that sets the custom parameter.
id
[in] Parameter ID.
value
[in] Parameter value.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
A trade order can contain up to 8 custom parameters.
The parameter is defined as a binding of the application ID (app_id) and the parameter identifier (id). This definition allows to avoid conflicts when running several plugins on one server, as well as to use these parameters together.
The field value is copied (the existing value is replaced) to the appropriate [API field of the deal](imtdeal_apidataupdate.md "APIDataUpdate"), which is executed as the result of this order execution. For balance deals, which have no preceding orders, the API data is copied from requests ([IMTRequest::ApiData*](imtrequest_apidataset.md "ApiDataSet")).
IMTOrder::APIDataUpdate
Get the UINT64 type value of a custom parameter of a trade order.
C++
MTAPIRES IMTOrder::APIDataUpdate( const UINT pos, // Parameter position const USHORT app_id, // Application ID const UCHAR id, // Parameter ID const UINT64 value // Parameter value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOrder.APIDataUpdate( uint pos, // Parameter position ushort app_id, // Application ID byte id, // Parameter ID ulong value // A reference to the value )  
---  
Parameters
pos
[in] Position of the parameter, starting with 0.
app_id
[in] The ID of the application that sets the custom parameter.
id
[in] Parameter ID.
value
[in] Parameter value.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
A trade order can contain up to 8 custom parameters.
The parameter is defined as a binding of the application ID (app_id) and the parameter identifier (id). This definition allows to avoid conflicts when running several plugins on one server, as well as to use these parameters together.
The field value is copied (the existing value is replaced) to the appropriate [API field of the deal](imtdeal_apidataupdate.md "APIDataUpdate"), which is executed as the result of this order execution. For balance deals, which have no preceding orders, the API data is copied from requests ([IMTRequest::ApiData*](imtrequest_apidataset.md "ApiDataSet")).
IMTOrder::APIDataUpdate
Get the double type value of a custom parameter of a trade order.
C++
MTAPIRES IMTOrder::APIDataUpdate( const UINT pos, // Parameter position const USHORT app_id, // Application ID const UCHAR id, // Parameter ID const double value // Parameter value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOrder.APIDataUpdate( uint pos, // Parameter position ushort app_id, // Application ID byte  id, // Parameter ID double value // A reference to the value )  
---  
Parameters
pos
[in] Position of the parameter, starting with 0.
app_id
[in] The ID of the application that sets the custom parameter.
id
[in] Parameter ID.
value
[in] Parameter value.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
A trade order can contain up to 8 custom parameters.
The parameter is defined as a binding of the application ID (app_id) and the parameter identifier (id). This definition allows to avoid conflicts when running several plugins on one server, as well as to use these parameters together.
The field value is copied (the existing value is replaced) to the appropriate [API field of the deal](imtdeal_apidataupdate.md "APIDataUpdate"), which is executed as the result of this order execution. For balance deals, which have no preceding orders, the API data is copied from requests ([IMTRequest::ApiData*](imtrequest_apidataset.md "ApiDataSet")).