# UpdateCopy (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNFillingArray ](imtecnfillingarray.md "IMTECNFillingArray")/ UpdateCopy | [](imtecnfillingarray_update.md "Update") [](imtecnfillingarray_shift.md "Shift") |
| --- | --- | --- |
| --- | --- |

IMTECNFillingArray::UpdateCopy
Change the filling order at the specified position of the array by copying the parameters of the passed order object.
C++
MTAPIRES IMTECNFillingArray::UpdateCopy( const UINT  pos, // position const IMTECNFilling* order // order object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNFillingArray.UpdateCopy( uint  pos, // position CIMTECNFilling order // order object )  
---  
Parameters
pos
[in] Order position in the array, starting with 0.
order
[in] [Filling order object](imtecnfilling.md "IMTECNFilling").
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
This method copies the parameters of the order object into an object of an order at the specified position of an array.
Unlike the [IMTECNFillingArray::Update](imtecnfillingarray_update.md "Update") method, calling this method sets no additional conditions for the order object control, but it is more resource-intensive since an additional object is created.