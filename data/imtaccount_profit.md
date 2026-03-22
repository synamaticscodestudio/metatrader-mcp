# Profit (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Accounts ](user_account.md "Accounts") / [ IMTAccount ](imtaccount.md "IMTAccount")/ Profit | [](imtaccount_marginmaintenance.md "MarginMaintenance") [](imtaccount_storage.md "Storage") |
| --- | --- | --- |
| --- | --- |

IMTAccount::Profit
Get the size of the current profit for all open positions.
C++
double IMTAccount::Profit() const  
---  
.NET (Gateway/Manager API)
double CIMTAccount.Profit()  
---  
Return Value
The size of the current profit for all open positions.
IMTAccount::Profit
Set the size of the current profit for all open positions.
C++
MTAPIRES IMTAccount::Profit( const double profit // Profit )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAccount.Profit( double profit // Profit )  
---  
Parameters
profit
[in] The size of the current profit for all open positions.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.