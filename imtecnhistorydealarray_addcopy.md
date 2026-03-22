# AddCopy (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryDealArray ](imtecnhistorydealarray.md "IMTECNMatchingArray")/ AddCopy | [](imtecnhistorydealarray_add.md "Add") [](imtecnhistorydealarray_delete.md "Delete") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryDealArray::AddCopy
Add a copy of a deal object to the end of an array.
C++
MTAPIRES IMTECNHistoryDealArray::AddCopy( const IMTECNHistoryDeal* deal // deal to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryMatchingArray.AddCopy( CIMTECNHistoryDeal deal // deal to be added )  
---  
Parameters
deal
[in] [Deal object](imtecnhistorydeal.md "IMTECNFilling").
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
This method creates a copy of the deal object and places it at the end of the array.
Unlike [IMTECNHistoryMatchingArray::Add(IMTECNHistoryDeal* deal)](imtecnhistorydealarray_add.md "Add"), calling this method does not set any additional conditions for the control of the 'deal' object, but it is more resource-intensive since it creates an additional object.
IMTECNHistoryDealArray::AddCopy
Add copies of deal objects into an array.
C++
MTAPIRES IMTECNHistoryDealArray::AddCopy( const IMTECNHistoryDealArray* array // array of deals to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryDealArray.AddCopy( CIMTECNHistoryDealArray  array // array of deals to be added )  
---  
Parameters
array
[in] An object of the array of deals.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
This method creates a copy of the objects of deals belonging to the array object, and inserts them at the end of the current array.
Unlike [IMTECNHistoryDealArray::Add(IMTECNHistoryDealArray* array)](imtecnhistorydealarray_add.md "Add"), this method call does not change the source 'array' object, but it is more resource-intensive since additional objects are created.