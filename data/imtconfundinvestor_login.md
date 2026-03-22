# Login (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF") / [ IMTConFundInvestor ](imtconfundinvestor.md "IMTConFundInvestor")/ Login | [](imtconfundinvestor_clear.md "Clear") [](imtconfundinvestor_name.md "Name") |
| --- | --- | --- |
| --- | --- |

IMTConFundInvestor::Login
Get the login of the account used by the fund investor.
C++
UINT64 IMTConFundInvestor::Login() const  
---  
.NET (Gateway/Manager API)
uint CIMTConFundInvestor.Login()  
---  
Return Value
Fund investor's account login ([IMTUser::Login](imtuser_login.md "Login")).
IMTConFundInvestor::Login
Set the login of the account used by the fund investor.
C++
MTAPIRES IMTConFundInvestor::Login( const UINT64 login // Login )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFundInvestor.Login( uint login // Login )  
---  
Parameters
login
[in] Fund investor's account login ([IMTUser::Login](imtuser_login.md "Login")).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.