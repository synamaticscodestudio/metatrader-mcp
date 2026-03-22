# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ KYC ](config_kyc.md "KYC") / [ IMTConKYC ](imtconkyc.md "IMTConKYC")/ Clear | [](imtconkyc_assign.md "Assign") [](imtconkyc_name.md "Name") |
| --- | --- | --- |
| --- | --- |

IMTConKYC::Clear
Clear an object.
C++
MTAPIRES IMTConKYC::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConKYC.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code has occurred.
Note
This method cleans all fields ​​and removes embedded objects.