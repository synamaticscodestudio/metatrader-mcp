# AccountWithdrawalURL (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConCommon ](imtconcommon.md "IMTConCommon")/ AccountWithdrawalURL | [](imtconcommon_accountdepositurl.md "AccountDepositURL") [](imtconcommon_accountallocationadd.md "AccountAllocationAdd") |
| --- | --- | --- |
| --- | --- |

IMTConCommon::AccountWithdrawalURL
Get the URL of the withdrawal page available for all accounts in the platform.
C++
LPCWSTR IMTConCommon::AccountWithdrawalURL() const  
---  
.NET (Gateway/Manager API)
string CIMTConCommon.AccountWithdrawalURL()  
---  
Python (Manager API)
MTConCommon.AccountWithdrawalURL  
---  
Return Value
If successful, the method returns a pointer to a string with the URL address. Otherwise, NULL is returned.
Note
A pointer to the resulting string is valid for the lifetime of the [IMTConCommon](imtconcommon.md "IMTConCommon") object.
To use the string after the object removal (call of the [IMTConCommon::Release](imtconcommon_release.md "Release") method of this object), a copy of it should be created.
To get the withdrawal page URL set for the accounts from a specific group (if it was overridden), use [IMTConGroup::CompanyWithdrawalPage](imtcongroup_companywithdrawalpage.md "CompanyWithdrawalPage").
For the function details, please see the [MetaTrader 5 Administrator documentation](https://support.metaquotes.net/en/docs/mt5/platform/administration/admin_accounts/deposit_withdrawal).
IMTConCommon::AccountWithdrawalURL
Set the URL of the withdrawal page for all accounts in the platform.
C++
MTAPIRES IMTConCommon::AccountWithdrawalURL( LPCWSTR url // Withdrawal page URL )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConCommon.AccountWithdrawalURL( string  url // Withdrawal page URL )  
---  
Python (Manager API)
MTConCommon.AccountWithdrawalURL  
---  
Parameters
url
[in] Withdrawal page URL.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
To override the withdrawal page URL for accounts from a specific group, use [IMTConGroup::CompanyWithdrawalPage](imtcongroup_companywithdrawalpage.md "CompanyWithdrawalPage").
For the function details, please see the [MetaTrader 5 Administrator documentation](https://support.metaquotes.net/en/docs/mt5/platform/administration/admin_accounts/deposit_withdrawal).