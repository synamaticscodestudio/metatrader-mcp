# GroupAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ KYC ](config_kyc.md "KYC") / [ IMTConKYC ](imtconkyc.md "IMTConKYC")/ GroupAdd | [](imtconkyc_countrynext.md "CountryNext") [](imtconkyc_groupupdate.md "GroupUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConKYC::GroupAdd
Add a group of accounts for which the KYC provider will be used.
C++
MTAPIRES IMTConKYC::GroupAdd( IMTConKYCGroup* group // Group object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConKYC.GroupAdd( CIMTConKYCGroup group // Group object )  
---  
Parameters
group
[in] The [IMTConKYCGroup](imtconkycgroup.md "IMTConKYCGroup") group object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code has occurred.