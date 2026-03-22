# TypeFill (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ TypeFill | [](imtrequest_type.md "Type") [](imtrequest_typetime.md "TypeTime") |
| --- | --- | --- |
| --- | --- |

IMTRequest::TypeFill
Get the type of order filling specified in a request.
C++
UINT IMTRequest::TypeFill() const  
---  
.NET (Gateway/Manager API)
EnOrderFilling CIMTRequest.TypeFill()  
---  
Return Value
A value of the [IMTOrder::EnOrderFilling](imtorder_enum.htm#enorderfilling) enumeration.
IMTRequest::TypeFill
Sets the order filling type in a request.
C++
MTAPIRES IMTRequest::TypeFill( const UINT type // Filling type )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTRequest.TypeFill( EnOrderFilling type // Filling type )  
---  
Parameters
type
[in] Type of filling. To pass the type, the [IMTOrder::EnOrderFilling](imtorder_enum.htm#enorderfilling) enumeration is used..
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.