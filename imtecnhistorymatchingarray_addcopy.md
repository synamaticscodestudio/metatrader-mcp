# AddCopy (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryMatchingArray ](imtecnhistorymatchingarray.md "IMTECNMatchingArray")/ AddCopy | [](imtecnhistorymatchingarray_add.md "Add") [](imtecnhistorymatchingarray_delete.md "Delete") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryMatchingArray::AddCopy
Add a copy of a matching order object to the end of an array.
C++
MTAPIRES IMTECNHistoryMatchingArray::AddCopy( const IMTECNHistoryMatching* order // order to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryMatchingArray.AddCopy( CIMTECNHistoryMatching order // order to be added )  
---  
Parameters
order
[in] [Matching order object](imtecnhistorymatching.md "IMTECNMatching").
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
This method creates a copy of the 'order' object and places it at the end of the array.
Unlike [IMTECNHistoryMatchingArray::Add(IMTECNHistoryMatching* order)](imtecnhistorymatchingarray_add.md "Add"), calling this method does not impose any additional conditions for the control of the 'order' object, but it is more resource-intensive since an additional object is created.
IMTECNHistoryMatchingArray::AddCopy
Add copies of the objects of matching orders to the array.
C++
MTAPIRES IMTECNHistoryMatchingArray::AddCopy( const IMTECNHistoryMatchingArray* array // array of orders to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryMatchingArray.AddCopy( CIMTECNHistoryMatchingArray  array // array of orders to be added )  
---  
Parameters
array
[in] An object of the order array.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
This method creates a copy of order objects belonging to the 'array' object, and inserts them at the end of the current array.
Unlike [IMTECNHistoryMatchingArray::Add(IMTECNHistoryMatchingArray* array)](imtecnhistorymatchingarray_add.md "Add"), this method call does not change the source 'array' object, but it is more resource-intensive since additional objects are created.