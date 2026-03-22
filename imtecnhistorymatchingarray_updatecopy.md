# UpdateCopy (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryMatchingArray ](imtecnhistorymatchingarray.md "IMTECNMatchingArray")/ UpdateCopy | [](imtecnhistorymatchingarray_update.md "Update") [](imtecnhistorymatchingarray_shift.md "Shift") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryMatchingArray::UpdateCopy
Update a matching order at the specified array position by copying the parameters of a passed order object.
C++
MTAPIRES IMTECNHistoryMatchingArray::UpdateCopy( const UINT  pos, // position const IMTECNHistoryMatching* order // order object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryMatchingArray.UpdateCopy( uint  pos, // position CIMTECNHistoryMatching order // order object )  
---  
Parameters
pos
[in] Order position in the array, starting with 0.
order
[in] [Matching order object](imtecnhistorymatching.md "IMTECNMatching").
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
This method copies the parameters of the order object into an object of an order at the specified position of an array.
Unlike the [IMTECNHistoryMatchingArray::Update](imtecnhistorymatchingarray_update.md "Update") method, calling this method sets no additional conditions for the 'order' object control but it is more resource-intensive since an additional object is created.