# Clear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNProviderArray ](imtecnproviderarray.md "IMTECNProviderArray")/ Clear | [](imtecnproviderarray_assign.md "Assign") [](imtecnproviderarray_add.md "Add") |
| --- | --- | --- |
| --- | --- |

IMTECNProviderArray::Clear
Clear an object.
C++
MTAPIRES IMTECNProviderArray::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIIMTECNProviderArray.Clear()  
---  
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
This method deletes data from all fields ​​and removes embedded objects.