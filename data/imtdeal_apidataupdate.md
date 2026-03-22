# APIDataUpdate (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ APIDataUpdate | [](imtdeal_apidatanext.md "APIDataNext") [](imtdeal_apidataget.md "ApiDataGet") |
| --- | --- | --- |
| --- | --- |

IMTDeal::APIDataUpdate
Changes the custom parameter of type INT64 for a deal.
C++
MTAPIRES IMTDeal::APIDataUpdate( const UINT pos, // Parameter position const USHORT app_id, // Application ID const UCHAR id, // Parameter ID const INT64 value // Parameter value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDeal.APIDataUpdate( uint pos, // Parameter position ushort app_id, // Application ID byte id, // Parameter ID long value // A reference to the value )  
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
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
A deal can contain up to 8 custom parameters.
The parameter is defined as a binding of the application ID (app_id) and the parameter identifier (id). This definition allows to avoid conflicts when running several plugins on one server, as well as to use these parameters together.
During execution of an order with filled [custom parameters](imtorder_apidataupdate.md "APIDataUpdate"), these parameters are copied in the appropriate API field of a deal, which is executed as a result of order execution.
IMTDeal::APIDataUpdate
Changes the custom parameter of type UINT64 for a deal.
C++
MTAPIRES IMTDeal::APIDataUpdate( const UINT pos, // Parameter position const USHORT app_id, // Application ID const UCHAR id, // Parameter ID const UINT64 value // Parameter value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDeal.APIDataUpdate( uint pos, // Parameter position ushort app_id, // Application ID byte id, // Parameter ID ulong value // A reference to the value )  
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
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
A deal can contain up to 8 custom parameters.
The parameter is defined as a binding of the application ID (app_id) and the parameter identifier (id). This definition allows to avoid conflicts when running several plugins on one server, as well as to use these parameters together.
During execution of an order with filled [custom parameters](imtorder_apidataupdate.md "APIDataUpdate"), these parameters are copied in the appropriate API field of a deal, which is executed as a result of order execution.
IMTDeal::APIDataUpdate
Changes the custom parameter of type double for a deal.
C++
MTAPIRES IMTDeal::APIDataUpdate( const UINT pos, // Parameter position const USHORT app_id, // Application ID const UCHAR id, // Parameter ID const double value // Parameter value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDeal.APIDataUpdate( uint pos, // Parameter position ushort app_id, // Application ID byte id, // Parameter ID double value // A reference to the value )  
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
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
A deal can contain up to 8 custom parameters.
The parameter is defined as a binding of the application ID (app_id) and the parameter identifier (id). This definition allows to avoid conflicts when running several plugins on one server, as well as to use these parameters together.
During execution of an order with filled [custom parameters](imtorder_apidataupdate.md "APIDataUpdate"), these parameters are copied in the appropriate API field of a deal, which is executed as a result of order execution.