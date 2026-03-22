# Delete (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDealArray ](imtdealarray.md "IMTDealArray")/ Delete | [](imtdealarray_addcopy.md "AddCopy") [](imtdealarray_detach.md "Detach") |
| --- | --- | --- |
| --- | --- |

IMTDealArray::Delete
Delete an object of a deal by its position.
C++
MTAPIRES IMTDealArray::Delete( const UINT pos // Position of a deal )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDealArray.Delete( uint pos // Position of a deal )  
---  
Parameters
pos
[in] Position of a deal in an array, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The deleted object will be automatically released by calling the [IMTDeal::Release](imtdeal_release.md "Release") method.