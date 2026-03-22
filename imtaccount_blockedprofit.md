# BlockedProfit (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Accounts ](user_account.md "Accounts") / [ IMTAccount ](imtaccount.md "IMTAccount")/ BlockedProfit | [](imtaccount_blockedcommission.md "BlockedCommission") [](imtaccount_assets.md "Assets") |
| --- | --- | --- |
| --- | --- |

IMTAccount::BlockedProfit
Get the amount of intraday profit locked on the account.
C++
double IMTAccount::BlockedProfit() const  
---  
.NET (Gateway/Manager API)
double CIMTAccount.BlockedProfit()  
---  
Return Value
The amount of intraday profit locked on the account.
Note
For each group of clients, you can choose one of two modes of calculation of the intraday returns in the free margin. In the [IMTConGroup::FREE_MARGIN_PROFIT_LOSS](imtcongroup_enum.htm#enmarginfreeprofitflags) mode, when only the recorded loss is taken into account in the calculation of free margin, all the profits of the client during a trading day are accumulated in the BlockedProfit field and are not included in the free margin. At the end of the trading day, the accumulated profits are credited to the balance and the value of BlockedProfit is reset.
IMTAccount::BlockedProfit
Set the margin amount on an account at the time of reaching the Stop Out level.
C++
MTAPIRES IMTAccount::BlockedProfit( const double profit // The amount of locked profit )  
---  
.NET (Gateway/Manager API)
MTAPIRES CIMTAccount.BlockedProfit( double profit // The amount of locked profit )  
---  
Parameters
profit
[in] The amount of intraday profit locked on the account.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
For each group of clients, you can choose one of two modes of calculation of the intraday returns in the free margin. In the [IMTConGroup::FREE_MARGIN_PROFIT_LOSS](imtcongroup_enum.htm#enmarginfreeprofitflags) mode, when only the recorded loss is taken into account in the calculation of free margin, all the profits of the client during a trading day are accumulated in the BlockedProfit field and are not included in the free margin. At the end of the trading day, the accumulated profits are credited to the balance and the value of BlockedProfit is reset.