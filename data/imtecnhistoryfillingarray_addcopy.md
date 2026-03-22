# AddCopy (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryFillingArray ](imtecnhistoryfillingarray.md "IMTECNFillingArray")/ AddCopy | [](imtecnhistoryfillingarray_add.md "Add") [](imtecnhistoryfillingarray_delete.md "Delete") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryFillingArray::AddCopy
Add a copy of a filling order object to the end of an array.
C++
MTAPIRES IMTECNHistoryFillingArray::AddCopy( const IMTECNHistoryFilling* order // order to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNFillingArray.AddCopy( CIMTECNHistoryFilling order // order to be added )  
---  
Parameters
order
[in] [Filling order object](imtecnhistoryfilling.md "IMTECNFilling").
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
This method creates a copy of the 'order' object and places it at the end of the array.
Unlike [IMTECNHistoryFillingArray::Add(IMTECNHistoryFilling* order)](imtecnhistoryfillingarray_add.md "Add"), calling this method does not impose any additional conditions for the control of the 'order' object, but it is more resource-intensive, since an additional object is created.
IMTECNHistoryFillingArray::AddCopy
Add copies of filling order objects to the end of an array.
C++
MTAPIRES IMTECNHistoryFillingArray::AddCopy( const IMTECNHistoryFillingArray* array // array of orders to be added )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryFillingArray.AddCopy( CIMTECNHistoryFillingArray  array // array of orders to be added )  
---  
Parameters
array
[in] An object of the order array.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
This method creates a copy of order objects belonging to the 'array' object, and inserts them at the end of the current array.
Unlike [IMTECNHistoryFillingArray::Add(IMTECNHistoryFillingArray* array)](imtecnhistoryfillingarray_add.md "Add"), this method call does not change the source 'array' object, but it is more resource-intensive since additional objects are created.