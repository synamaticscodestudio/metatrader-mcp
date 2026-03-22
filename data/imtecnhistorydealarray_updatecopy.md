# UpdateCopy (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryDealArray ](imtecnhistorydealarray.md "IMTECNMatchingArray")/ UpdateCopy | [](imtecnhistorydealarray_update.md "Update") [](imtecnhistorydealarray_shift.md "Shift") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryDealArray::UpdateCopy
Change a deal at the specified position of an array by copying the parameters of a passed deal object.
C++
MTAPIRES IMTECNHistoryDealArray::UpdateCopy( const UINT  pos, // position const IMTECNHistoryDeal* deal // deal object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryDealArray.UpdateCopy( uint  pos, // position CIMTECNHistoryDeal deal // deal object )  
---  
Parameters
pos
[in] Position of a deal in an array, starting with 0.
deal
[in] [Deal object](imtecnhistorydeal.md "IMTECNFilling").
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
This method copies the parameters of the 'deal' object into a deal object at the specified position of an array.
Unlike the [IMTECNHistoryDealArray::Update](imtecnhistorydealarray_update.md "Update") method, calling this method sets no additional conditions for the 'order' object control but it is more resource-intensive since an additional object is created.