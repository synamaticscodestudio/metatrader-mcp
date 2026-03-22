# FeeAccount (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF") / [ IMTConFund ](imtconfund.md "IMTConFund")/ FeeAccount | [](imtconfund_feeperiod.md "FeePeriod") [](imtconfund_feemanagementtype.md "FeeManagementType") |
| --- | --- | --- |
| --- | --- |

IMTConFund::FeeAccount
Get the account to which the fund management and success fees are charged.
C++
UINT IMTConFund::FeeAccount() const  
---  
.NET (Gateway/Manager API)
uint CIMTConFund.FeeAccount()  
---  
Return Value
The account ([IMTUser::Login](imtuser_login.md "Login")), to which the fund management and success fees are charged.
IMTConFund::FeeAccount
Set the account to which the fund management and success fees are charged.
C++
MTAPIRES IMTConFund::FeeAccount( const UINT fee_account // Account )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFund.FeeAccount( uint fee_account // Account )  
---  
Parameters
fee_account
[in] The account ([IMTUser::Login](imtuser_login.md "Login")), to which the fund management and success fees are charged.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.