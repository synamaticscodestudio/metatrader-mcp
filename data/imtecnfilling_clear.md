# Clear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNFilling ](imtecnfilling.md "IMTECNFilling")/ Clear | [](imtecnfilling_assign.md "Assign") [](imtecnfilling_login.md "Login") |
| --- | --- | --- |
| --- | --- |

IMTECNFilling::Clear
Clear an object.
C++
MTAPIRES IMTECNFilling::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNFilling.Clear()  
---  
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
This method deletes data from all fields ​​and removes embedded objects.