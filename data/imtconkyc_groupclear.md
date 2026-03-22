# GroupClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ KYC ](config_kyc.md "KYC") / [ IMTConKYC ](imtconkyc.md "IMTConKYC")/ GroupClear | [](imtconkyc_groupdelete.md "GroupDelete") [](imtconkyc_groupshift.md "GroupShift") |
| --- | --- | --- |
| --- | --- |

IMTConKYC::GroupClear
Clear the list of groups for which the KYC provider is used.
C++
MTAPIRES IMTConKYC::GroupClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConKYC.GroupClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code has occurred.
Note
This method removes from the list all groups for which the KYC provider is used.