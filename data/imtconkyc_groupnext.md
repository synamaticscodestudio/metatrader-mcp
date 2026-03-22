# GroupNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ KYC ](config_kyc.md "KYC") / [ IMTConKYC ](imtconkyc.md "IMTConKYC")/ GroupNext | [](imtconkyc_grouptotal.md "GroupTotal") [](imtconkyccountry.md "IMTConKYCCountry") |
| --- | --- | --- |
| --- | --- |

IMTConKYC::GroupNext
Get the group for which the KYC provider is used by its index in the list.
C++
MTAPIRES IMTConKYC::GroupNext( const UINT pos, // Group position IMTConKYCGroup* group  // Group object ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConKYC.GroupNext( uint pos, // Group position CIMTConKYCGroup group // Group object )  
---  
Parameters
pos
[in] Group position in the list, starting from 0.
group
[out] Group object. The 'group' object must be created in advance using the [IMTServerAPI::KYCGroupCreate](imtserverapi_kycgroupcreate.md "KYCGroupCreate") or [IMTAdminAPI::KYCGroupCreate](imtadminapi_kycgroupcreate.md "KYCGroupCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code has occurred.