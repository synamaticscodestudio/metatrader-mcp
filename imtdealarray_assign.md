# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDealArray ](imtdealarray.md "IMTDealArray")/ Assign | [](imtdealarray_release.md "Release") [](imtdealarray_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTDealArray::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTDealArray::Assign( const IMTDealArray* array // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDealArray.Assign( CIMTDealArray array // Source object )  
---  
Parameters
array
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.