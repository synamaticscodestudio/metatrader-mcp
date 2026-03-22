# ApiDataSet (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTOrder ](imtorder.md "IMTOrder")/ ApiDataSet | [](imtorder_activationflags.md "ActivationFlags") [](imtorder_apidataget.md "ApiDataGet") |
| --- | --- | --- |
| --- | --- |

IMTOrder::ApiDataSet
Set the custom parameter of type INT64 for a trade order.
C++
MTAPIRES IMTOrder::ApiDataSet( const USHORT app_id, // Application ID const UCHAR id, // Parameter ID const INT64 value // Parameter value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOrder.ApiDataSet( ushort  app_id, // Application ID byte id, // Parameter ID long value // A reference to the value )  
---  
Parameters
app_id
[in] The ID of the application that sets the custom parameter. Values ​​from 1 to 4095 inclusive are allowed.
id
[in] Parameter ID. Values ​​from 1 to 15 inclusive are allowed.
value
[in] Parameter value.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
A trade order can contain up to 8 custom parameters.
The parameter is defined as a binding of the application ID (app_id) and the parameter identifier (id). This definition allows to avoid conflicts when running several plugins on one server, as well as to use these parameters together.
The field value is copied (the existing value is replaced) to the appropriate [API field of the deal](imtdeal_apidataset.md "ApiDataSet"), which is executed as the result of this order execution. For balance deals, which have no preceding orders, the API data is copied from requests ([IMTRequest::ApiData*](imtrequest_apidataset.md "ApiDataSet")).
IMTOrder::ApiDataSet
Set the custom parameter of type UINT64 for a trade order.
C++
MTAPIRES IMTOrder::ApiDataSet( const USHORT app_id, // Application ID const UCHAR id, // Parameter ID const UINT64 value // Parameter value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOrder.ApiDataSet( ushort  app_id, // Application ID byte id, // Parameter ID ulong value // A reference to the value )  
---  
Parameters
app_id
[in] The ID of the application that sets the custom parameter. Values ​​from 1 to 4095 inclusive are allowed.
id
[in] Parameter ID. Values ​​from 1 to 15 inclusive are allowed.
value
[in] Parameter value.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
A trade order can contain up to 8 custom parameters.
The parameter is defined as a binding of the application ID (app_id) and the parameter identifier (id). This definition allows to avoid conflicts when running several plugins on one server, as well as to use these parameters together.
The field value is copied (the existing value is replaced) to the appropriate [API field of the deal](imtdeal_apidataset.md "ApiDataSet"), which is executed as the result of this order execution. For balance deals, which have no preceding orders, the API data is copied from requests ([IMTRequest::ApiData*](imtrequest_apidataset.md "ApiDataSet")).
IMTOrder::ApiDataSet
Set the custom parameter of the double type for a trade order.
C++
MTAPIRES IMTOrder::ApiDataSet( const USHORT app_id, // Application ID const UCHAR id, // Parameter ID const double value // Parameter value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOrder.ApiDataSet( ushort app_id, // Application ID byte id, // Parameter ID double  value // Parameter value )  
---  
Parameters
app_id
[in] The ID of the application that sets the custom parameter. Values ​​from 1 to 4095 inclusive are allowed.
id
[in] Parameter ID. Values ​​from 1 to 15 inclusive are allowed.
value
[in] Parameter value.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
A trade order can contain up to 8 custom parameters.
The parameter is defined as a binding of the application ID (app_id) and the parameter identifier (id). This definition allows to avoid conflicts when running several plugins on one server, as well as to use these parameters together.
The field value is copied (the existing value is replaced) to the appropriate [API field of the deal](imtdeal_apidataset.md "ApiDataSet"), which is executed as the result of this order execution. For balance deals, which have no preceding orders, the API data is copied from requests ([IMTRequest::ApiData*](imtrequest_apidataset.md "ApiDataSet")).