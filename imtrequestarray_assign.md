# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequestArray ](imtrequestarray.md "IMTRequestArray")/ Assign | [](imtrequestarray_release.md "Release") [](imtrequestarray_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTRequestArray::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTRequestArray::Assign( const IMTRequestArray* array // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTRequestArray.Assign( CIMTRequestArray array // Source object )  
---  
Parameters
array
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.