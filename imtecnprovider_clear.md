# Clear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNProvider ](imtecnprovider.md "IMTECNProvider")/ Clear | [](imtecnprovider_assign.md "Assign") [](imtecnprovider_id.md "ID") |
| --- | --- | --- |
| --- | --- |

IMTECNProvider::Clear
Clear an object.
C++
MTAPIRES IMTECNProvider::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNProvider.Clear()  
---  
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
This method deletes data from all fields ​​and removes embedded objects.