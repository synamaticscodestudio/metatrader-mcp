# GroupUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ KYC ](config_kyc.md "KYC") / [ IMTConKYC ](imtconkyc.md "IMTConKYC")/ GroupUpdate | [](imtconkyc_groupadd.md "GroupAdd") [](imtconkyc_groupdelete.md "GroupDelete") |
| --- | --- | --- |
| --- | --- |

IMTConKYC::GroupUpdate
Change the group of accounts for which the KYC provider is used.
C++
MTAPIRES IMTConKYC::GroupUpdate( const UINT pos, // Group position const IMTConKYCGroup* group // Group position )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConKYC.GroupUpdate( uint pos, // Group position CIMTConKYCGroup group // Group position )  
---  
Parameters
pos
[in] Group position in the list, starting from 0.
group
[in] Account group object [IMTConKYCGroup](imtconkycgroup.md "IMTConKYCGroup").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code has occurred.