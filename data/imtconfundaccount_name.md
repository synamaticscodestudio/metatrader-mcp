# Name (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF") / [ IMTConFundAccount ](imtconfundaccount.md "IMTConFundAccount")/ Name | [](imtconfundaccount_login.md "Login") [](imtconfundaccount_balance.md "Balance") |
| --- | --- | --- |
| --- | --- |

IMTConFundAccount::Name
Get the name of the fund manager.
C++
LPCWSTR IMTConFundAccount::Name() const  
---  
.NET (Gateway/Manager API)
string CIMTConFundAccount.Name()  
---  
Return Value
If successful, a pointer to a string with the name is returned. Otherwise, NULL is returned.
Note
The name is taken from the fields [IMTUser::FirstName](imtuser_firstname.md "FirstName") and [IMTUser::LastName](imtuser_firstname.md "FirstName") of the manager's account.
The pointer to the resulting string is valid for the lifetime of the [IMTConFundAccount](imtconfundaccount.md "IMTConFundAccount") object.
To use the string after the object removal (call of the [IMTConFund::Release](imtconfundaccount_release.md "Release") method of this object), a copy of it should be created.