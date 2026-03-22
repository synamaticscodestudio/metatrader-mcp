# Equity (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Accounts ](user_account.md "Accounts") / [ IMTAccount ](imtaccount.md "IMTAccount")/ Equity | [](imtaccount_floating.md "Floating") [](imtaccount_soactivation.md "SOActivation") |
| --- | --- | --- |
| --- | --- |

IMTAccount::Equity
Get the account equity.
C++
double IMTAccount::Equity() const  
---  
.NET (Gateway/Manager API)
double CIMTAccount.Equity()  
---  
Return Value
The account equity calculated as a sum of [IMTAccount::Balance](imtaccount_balance.md "Balance"), [IMTAccount::Credit](imtaccount_credit.md "Credit") and [IMTAccount::Floating](imtaccount_floating.md "Floating").
IMTAccount::Equity
Set the account equity.
C++
MTAPIRES IMTAccount::Equity( const double equity // Equity )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAccount.Equity( double equity // Equity )  
---  
Parameters
equity
[in] The account equity.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.