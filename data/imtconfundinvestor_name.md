# Name (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF") / [ IMTConFundInvestor ](imtconfundinvestor.md "IMTConFundInvestor")/ Name | [](imtconfundinvestor_login.md "Login") [](imtconfundinvestor_sharesvolume.md "SharesVolume") |
| --- | --- | --- |
| --- | --- |

IMTConFundInvestor::Name
Get the name of the fund investor.
C++
LPCWSTR IMTConFundInvestor::Name() const  
---  
.NET (Gateway/Manager API)
string CIMTConFundInvestor.Name()  
---  
Return Value
If successful, a pointer to a string with the name is returned. Otherwise, NULL is returned.
Note
The name is taken from the fields [IMTUser::FirstName](imtuser_firstname.md "FirstName") and [IMTUser::LastName](imtuser_firstname.md "FirstName") of the investor's account.
The pointer to the resulting string is valid for the lifetime of the [IMTConFundInvestor](imtconfundinvestor.md "IMTConFundInvestor") object.
To use the string after the object removal (call of the [IMTConFundInvestor::Release](imtconfundinvestor_release.md "Release") method of this object), a copy of it should be created.