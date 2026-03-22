# AccountDepositURL (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConCommon ](imtconcommon.md "IMTConCommon")/ AccountDepositURL | [](imtconcommon_accounturl.md "AccountURL") [](imtconcommon_accountwithdrawalurl.md "AccountWithdrawalURL") |
| --- | --- | --- |
| --- | --- |

IMTConCommon::AccountDepositURL
Get the URL of the deposit page available for all accounts in the platform.
C++
LPCWSTR IMTConCommon::AccountDepositURL() const  
---  
.NET (Gateway/Manager API)
string CIMTConCommon.AccountDepositURL()  
---  
Python (Manager API)
MTConCommon.AccountDepositURL  
---  
Return Value
If successful, the method returns a pointer to a string with the URL address. Otherwise, NULL is returned.
Note
A pointer to the resulting string is valid for the lifetime of the [IMTConCommon](imtconcommon.md "IMTConCommon") object.
To use the string after the object removal (call of the [IMTConCommon::Release](imtconcommon_release.md "Release") method of this object), a copy of it should be created.
To get the deposit page URL set for the accounts from a specific group (if it was overridden), use [IMTConGroup::CompanyDepositPage](imtcongroup_companydepositpage.md "CompanyDepositPage").
For the function details, please see the [MetaTrader 5 Administrator documentation](https://support.metaquotes.net/en/docs/mt5/platform/administration/admin_accounts/deposit_withdrawal).
IMTConCommon::AccountDepositURL
Set the URL of the deposit page available for all accounts in the platform.
C++
MTAPIRES IMTConCommon::AccountDepositURL( LPCWSTR url // Deposit page URL )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConCommon.AccountDepositURL( string  url // Deposit page URL )  
---  
Python (Manager API)
MTConCommon.AccountDepositURL  
---  
Parameters
url
[in] Deposit page URL.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
To override the deposit page address for accounts from a specific group, use [IMTConGroup::CompanyDepositPage](imtcongroup_companydepositpage.md "CompanyDepositPage").
For the function details, please see the [MetaTrader 5 Administrator documentation](https://support.metaquotes.net/en/docs/mt5/platform/administration/admin_accounts/deposit_withdrawal).