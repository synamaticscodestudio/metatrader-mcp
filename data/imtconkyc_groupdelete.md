# GroupDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ KYC ](config_kyc.md "KYC") / [ IMTConKYC ](imtconkyc.md "IMTConKYC")/ GroupDelete | [](imtconkyc_groupupdate.md "GroupUpdate") [](imtconkyc_groupclear.md "GroupClear") |
| --- | --- | --- |
| --- | --- |

IMTConKYC::GroupDelete
Delete the group of accounts for which the KYC provider is used.
C++
MTAPIRES IMTConKYC::GroupDelete( const UINT pos // Group position )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConKYC.GroupDelete( uint pos // Group position )  
---  
Parameters
pos
[in] Group position in the list, starting from 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code has occurred.