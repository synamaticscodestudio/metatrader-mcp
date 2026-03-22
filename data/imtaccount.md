# IMTAccount (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Accounts ](user_account.md "Accounts")/ IMTAccount | [](user_account.md "Accounts") [](imtaccount_enum.md "Enumerations") |
| --- | --- | --- |
| --- | --- |

IMTAccount
The IMTAccount class contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtaccount_release.md "Release") | Delete the current object. |
| [Assign](imtaccount_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtaccount_clear.md "Clear") | Clear an object. |
| [Login](imtaccount_login.md "Login") | Get and set the login of the client, to whom the trading account belongs. |
| [CurrencyDigits](imtaccount_currencydigits.md "CurrencyDigits") | Get and set the number of decimal places in the account deposit currency. |
| [Balance](imtaccount_balance.md "Balance") | Get and set the balance of a trading account. |
| [Credit](imtaccount_credit.md "Credit") | Get and set the current amount of credit given to an account. |
| [Margin](imtaccount_margin.md "Margin") | Get and set the current value of the account margin. |
| [MarginFree](imtaccount_marginfree.md "MarginFree") | Get and set the free margin of an account. |
| [MarginLevel](imtaccount_marginlevel.md "MarginLevel") | Get and set the margin level as a percentage. |
| [MarginLeverage](imtaccount_marginleverage.md "MarginLeverage") | Get and set the margin leverage. |
| [MarginInitial](imtaccount_margininitial.md "MarginInitial") | Get and set the current size of the initial margin of positions on a trading account. |
| [MarginMaintenance](imtaccount_marginmaintenance.md "MarginMaintenance") | Get and set the current size of the maintenance margin of positions on a trading account. |
| [Profit](imtaccount_profit.md "Profit") | Get and set the size of the current profit for all open positions. |
| [Storage](imtaccount_storage.md "Storage") | Get and set the current size of swaps charged for open positions on the account. |
| [Commission](imtaccount_commission.md "Commission") | Get and set the size of commissions charged for all transactions on the account. The field is deprecated and is no longer used. |
| [Floating](imtaccount_floating.md "Floating") | Get and set the size of floating profit/loss of open positions on the account. |
| [Equity](imtaccount_equity.md "Equity") | Get and set account equity. |
| [SOActivation](imtaccount_soactivation.md "SOActivation") | Get and set the account status as per the minimum amount of funds on the account required to maintain trading positions. |
| [SOTime](imtaccount_sotime.md "SOTime") | Get and set the time when the Margin Call or Stop Out level was reached. |
| [SOLevel](imtaccount_solevel.md "SOLevel") | Get and set the margin level of an account at the time of reaching the Stop Out level. |
| [SOEquity](imtaccount_soequity.md "SOEquity") | Get and set the account equity at the time of reaching the Stop Out level. |
| [SOMargin](imtaccount_somargin.md "SOMargin") | Get and set the margin amount on an account at the time of reaching the Stop Out level. |
| [BlockedCommission](imtaccount_blockedcommission.md "BlockedCommission") | Get and set the amount of the standard commission locked on the account, which has been accumulated during the day/month. |
| [BlockedProfit](imtaccount_blockedprofit.md "BlockedProfit") | Get and set the amount of intraday profit locked on the account. |
| [Assets](imtaccount_assets.md "Assets") | Get and set the current total amount of assets on a trading account. |
| [Liabilities](imtaccount_liabilities.md "Liabilities") | Get and set the current total amount of liabilities on a trading account. |

The IMTAccount lass contains one enumeration:
| Enumeration | Purpose |
| --- | --- |
| --- | --- |
| [EnSoActivation](imtaccount_enum.md "Enumerations") | Activation mode. |