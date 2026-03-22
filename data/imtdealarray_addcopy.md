# AddCopy (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDealArray ](imtdealarray.md "IMTDealArray")/ AddCopy | [](imtdealarray_add.md "Add") [](imtdealarray_delete.md "Delete") |
| --- | --- | --- |
| --- | --- |

IMTDealArray::AddCopy
Add a copy of an object of a deal at the end of an array.
C++
MTAPIRES IMTDealArray::AddCopy( const IMTDeal* deal // A deal to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDealArray.AddCopy( CIMTDeal deal // A deal to be added )  
---  
Parameters
deal
[in] An object of a deal.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method creates a copy of the deal object and places it at the end of the array.
Unlike [IMTDealArray::Add(IMTDeal* deal)](imtdealarray_add.md "Add"), calling this method does not set any additional conditions for the control of the deal object, but is more resource-intensive, since an additional object is created.
IMTDealArray::AddCopy
Add copies of deal objects into an array.
C++
MTAPIRES IMTDealArray::AddCopy( const IMTDealArray* array // An array of deals that is being added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDealArray.AddCopy( CIMTDealArray array // An array of deals that is being added )  
---  
Parameters
array
[in] An object of the array of deals.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method creates a copy of the objects of deals belonging to the array object, and inserts them at the end of the current array.
Unlike [IMTDealArray::Add(IMTDealArray* array)](imtdealarray_add.md "Add"), calling this method does not change the source array object, but is more resource-intensive, since additional objects are created.