# UpdateCopy (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDealArray ](imtdealarray.md "IMTDealArray")/ UpdateCopy | [](imtdealarray_update.md "Update") [](imtdealarray_shift.md "Shift") |
| --- | --- | --- |
| --- | --- |

IMTDealArray::UpdateCopy
Change a deal at the specified position of an array by copying the parameters of a passed object of a deal.
C++
MTAPIRES IMTDealArray::UpdateCopy( const UINT  pos, // Position const IMTDeal* deal // An object of a deal )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDealArray.UpdateCopy( uint  pos, // Position CIMTDeal deal // An object of a deal )  
---  
Parameters
pos
[in] Position of a deal in an array, starting with 0.
order
[in] An object of a deal.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method copies the parameters of the deal object into an object of a deal at the specified position of an array.
Unlike the [IMTDealArray::Update](imtdealarray_update.md "Update") method, calling this method does not set any additional conditions for the control of the deal object, but is more resource-intensive, since an additional object is created.