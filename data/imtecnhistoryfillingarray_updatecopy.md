# UpdateCopy (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryFillingArray ](imtecnhistoryfillingarray.md "IMTECNFillingArray")/ UpdateCopy | [](imtecnhistoryfillingarray_update.md "Update") [](imtecnhistoryfillingarray_shift.md "Shift") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryFillingArray::UpdateCopy
Change a filling order at the specified position of an array by copying the parameters of a passed object of an order.
C++
MTAPIRES IMTECNHistoryFillingArray::UpdateCopy( const UINT  pos, // position const IMTECNHistoryFilling* order // order object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryFillingArray.UpdateCopy( uint  pos, // position CIMTECNHistoryFilling order // order object )  
---  
Parameters
pos
[in] Order position in the array, starting with 0.
order
[in] [Filling order object](imtecnhistoryfilling.md "IMTECNFilling").
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
This method copies the parameters of the order object into an object of an order at the specified position of an array.
Unlike the [IMTECNHistoryFillingArray::Update](imtecnhistoryfillingarray_update.md "Update") method, calling this method sets no additional conditions for the 'deal' object control, but it is more resource-intensive since an additional object is created.