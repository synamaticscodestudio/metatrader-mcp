# CompanyWithdrawalPage (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ CompanyWithdrawalPage | [](imtcongroup_companydepositpage.md "CompanyDepositPage") [](imtcongroup_currency.md "Currency") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::CompanyWithdrawalPage
Get the withdrawal page URL set for a group of accounts.
C++
LPCWSTR IMTConGroup::CompanyWithdrawalPage() const  
---  
.NET (Gateway/Manager API)
string CIMTConGroup.CompanyWithdrawalPage()  
---  
Python (Manager API)
MTConGroup.CompanyWithdrawalPage  
---  
Return Value
If successful, the method returns a pointer to a string with the URL address. Otherwise, NULL is returned.
Note
A pointer to the resulting string is valid for the lifetime of the [IMTConCommon](imtconcommon.md "IMTConCommon") object.
To use the string after the object removal (call of the [IMTConCommon::Release](imtconcommon_release.md "Release") method of this object), a copy of it should be created.
To get the withdrawal page URL set for all accounts in the platform, use [IMTConCommon::AccountWithdrawalURL](imtconcommon_accountwithdrawalurl.md "AccountWithdrawalURL"). The priority of group settings is higher and they override global setting.
For the function details, please see the [MetaTrader 5 Administrator documentation](https://support.metaquotes.net/en/docs/mt5/platform/administration/admin_accounts/deposit_withdrawal).
IMTConGroup::CompanyWithdrawalPage
Set the URL of the withdrawal page for accounts from the specific group.
C++
MTAPIRES IMTConGroup::CompanyWithdrawalPage( LPCWSTR url // Withdrawal page URL )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.CompanyWithdrawalPage( string  url // Withdrawal page URL )  
---  
Python (Manager API)
MTConGroup.CompanyWithdrawalPage  
---  
Parameters
url
[in] Withdrawal page URL.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
To set the withdrawal page URL for all accounts in the platform, use [IMTConCommon::AccountWithdrawalURL](imtconcommon_accountwithdrawalurl.md "AccountWithdrawalURL"). The priority of group settings is higher and they override global setting.
For the function details, please see the [MetaTrader 5 Administrator documentation](https://support.metaquotes.net/en/docs/mt5/platform/administration/admin_accounts/deposit_withdrawal).