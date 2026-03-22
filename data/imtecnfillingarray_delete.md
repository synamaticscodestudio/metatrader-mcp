# Delete (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNFillingArray ](imtecnfillingarray.md "IMTECNFillingArray")/ Delete | [](imtecnfillingarray_addcopy.md "AddCopy") [](imtecnfillingarray_detach.md "Detach") |
| --- | --- | --- |
| --- | --- |

IMTECNFillingArray::Delete
Delete a filling order object by its position.
C++
MTAPIRES IMTECNFillingArray::Delete( const UINT pos // order position )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNFillingArray.Delete( uint pos // order position )  
---  
Parameters
pos
[in] Order position in the array, starting with 0.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
The deleted object will be automatically released by the [IMTECNFilling::Release](imtecnfilling_release.md "Release") method call.