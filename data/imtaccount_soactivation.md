# SOActivation (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Accounts ](user_account.md "Accounts") / [ IMTAccount ](imtaccount.md "IMTAccount")/ SOActivation | [](imtaccount_equity.md "Equity") [](imtaccount_sotime.md "SOTime") |
| --- | --- | --- |
| --- | --- |

IMTAccount::SOActivation
Get the account status as per the minimum amount of funds on the account required to maintain trading positions.
C++
UINT IMTAccount::SOActivation() const  
---  
.NET (Gateway/Manager API)
uint CIMTAccount.SOActivation()  
---  
Return Value
A value of the [IMTAccount::EnSoActivation](imtaccount_enum.htm#ensoactivation) enumeration.
IMTAccount::SOActivation
Set the account status as per the minimum amount of funds on the account required to maintain trading positions.
C++
MTAPIRES IMTAccount::SOActivation( const UINT activation // Account status )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAccount.SOActivation( uint activation // Account status )  
---  
Parameters
activation
[in] A value of the [IMTAccount::EnSoActivation](imtaccount_enum.htm#ensoactivation) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.