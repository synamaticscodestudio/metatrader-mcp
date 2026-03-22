# Assets (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Accounts ](user_account.md "Accounts") / [ IMTAccount ](imtaccount.md "IMTAccount")/ Assets | [](imtaccount_blockedprofit.md "BlockedProfit") [](imtaccount_liabilities.md "Liabilities") |
| --- | --- | --- |
| --- | --- |

IMTAccount::Assets
Get the current total amount of assets on a trading account.
C++
double IMTAccount::Assets() const  
---  
.NET (Gateway/Manager API)
double CIMTAccount.Assets()  
---  
Return Value
The current total amount of assets on a trading account.
Note
Used in the exchange risk management model ([IMTConGroup::MARGIN_MODE_EXCHANGE_DISCOUNT](imtcongroup_enum.htm#enmarginmode)).
IMTAccount::Assets
Set the current total amount of assets on a trading account.
C++
MTAPIRES IMTAccount::Assets( const double assets // Total assets )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTAccount.Assets( double assets // Total assets )  
---  
Parameters
assets
[in] The current total amount of assets on a trading account.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Used in the exchange risk management model ([IMTConGroup::MARGIN_MODE_EXCHANGE_DISCOUNT](imtcongroup_enum.htm#enmarginmode)).