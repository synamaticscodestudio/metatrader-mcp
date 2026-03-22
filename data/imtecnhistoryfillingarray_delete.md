# Delete (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryFillingArray ](imtecnhistoryfillingarray.md "IMTECNFillingArray")/ Delete | [](imtecnhistoryfillingarray_addcopy.md "AddCopy") [](imtecnhistoryfillingarray_detach.md "Detach") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryFillingArray::Delete
Delete a filling order object by its position.
C++
MTAPIRES IMTECNHistoryFillingArray::Delete( const UINT pos // order position )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryFillingArray.Delete( uint pos // order position )  
---  
Parameters
pos
[in] Order position in the array, starting with 0.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
The deleted object will be automatically released by the [IMTECNHistoryFilling::Release](imtecnhistoryfilling.md "IMTECNFilling") method call.