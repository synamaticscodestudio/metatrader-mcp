# CompanyDepositPage (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ CompanyDepositPage | [](imtcongroup_companycatalog.md "CompanyCatalog") [](imtcongroup_companywithdrawalpage.md "CompanyWithdrawalPage") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::CompanyDepositPage
Get the deposit page URL set for a group of accounts.
C++
LPCWSTR IMTConGroup::CompanyDepositPage() const  
---  
.NET (Gateway/Manager API)
string CIMTConGroup.CompanyDepositPage()  
---  
Python (Manager API)
MTConGroup.CompanyDepositPage  
---  
Return Value
If successful, the method returns a pointer to a string with the URL address. Otherwise, NULL is returned.
Note
A pointer to the resulting string is valid for the lifetime of the [IMTConCommon](imtconcommon.md "IMTConCommon") object.
To use the string after the object removal (call of the [IMTConCommon::Release](imtconcommon_release.md "Release") method of this object), a copy of it should be created.
To get the deposit page URL set for all accounts in the platform, use [IMTConCommon::AccountDepositURL](imtconcommon_accountdepositurl.md "AccountDepositURL"). The priority of group settings is higher and they override global setting.
For the function details, please see the [MetaTrader 5 Administrator documentation](https://support.metaquotes.net/en/docs/mt5/platform/administration/admin_accounts/deposit_withdrawal).
IMTConGroup::CompanyDepositPage
Set the URL of the deposit page available for accounts from the specific group.
C++
MTAPIRES IMTConGroup::CompanyDepositPage( LPCWSTR url // Deposit page URL )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.CompanyDepositPage( string  url // Deposit page URL )  
---  
Python (Manager API)
MTConGroup.CompanyDepositPage  
---  
Parameters
url
[in] Deposit page URL.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
To set the deposit page URL for all accounts in the platform, use [IMTConCommon::AccountDepositURL](imtconcommon_accountdepositurl.md "AccountDepositURL"). The priority of group settings is higher and they override global setting.
For the function details, please see the [MetaTrader 5 Administrator documentation](https://support.metaquotes.net/en/docs/mt5/platform/administration/admin_accounts/deposit_withdrawal).