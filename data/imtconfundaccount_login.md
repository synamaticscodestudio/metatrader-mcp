# Login (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF") / [ IMTConFundAccount ](imtconfundaccount.md "IMTConFundAccount")/ Login | [](imtconfundaccount_clear.md "Clear") [](imtconfundaccount_name.md "Name") |
| --- | --- | --- |
| --- | --- |

IMTConFundAccount::Login
Get the login of the account used by the manager for fund management operations.
C++
UINT64 IMTConFundAccount::Login() const  
---  
.NET (Gateway/Manager API)
uint CIMTConFundAccount.Login()  
---  
Return Value
Fund manager's account login ([IMTUser::Login](imtuser_login.md "Login")).
IMTConFundAccount::Login
Set the login of the account used by the manager for fund management operations.
C++
MTAPIRES IMTConFundAccount::Login( const UINT64 login // Login )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFundAccount.Login( uint login // Login )  
---  
Parameters
login
[in] Fund manager's account login ([IMTUser::Login](imtuser_login.md "Login")).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.