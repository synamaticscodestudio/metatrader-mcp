# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ KYC ](config_kyc.md "KYC") / [ IMTConKYCGroup ](imtconkycgroup.md "IMTConKYCGroup")/ Assign | [](imtconkycgroup_release.md "Release") [](imtconkycgroup_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConMessengerGroup::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConKYCGroup::Assign( const IMTConKYCGroup* group // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConKYCGroup.Assign( CIMTConKYCGroup group // Source object )  
---  
Parameters
group
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code has occurred.