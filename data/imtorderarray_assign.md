# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTOrderArray ](imtorderarray.md "IMTOrderArray")/ Assign | [](imtorderarray_release.md "Release") [](imtorderarray_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTOrderArray::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTOrderArray::Assign( const IMTOrderArray* array // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOrderArray.Assign( CIMTOrderArray array // Source object )  
---  
Parameters
array
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.