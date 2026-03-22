# \IMTDaily (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Daily Reports ](trading_daily.md "Daily Reports")/ IMTDaily | [](trading_daily.md "Daily Reports") [](imtdaily_release.md "Release") |
| --- | --- | --- |
| --- | --- |

IMTDaily
The IMTDaily class contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtdaily_release.md "Release") | Delete the current object. |
| [Assign](imtdaily_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtdaily_clear.md "Clear") | Clear an object. |
| [Datetime](imtdaily_datetime.md "Datetime") | Get and set the date and time of the daily report generation. |
| [DatetimePrev](imtdaily_datetimeprev.md "DatetimePrev") | Get and set the date and time of the previous daily report generation. |
| [Login](imtdaily_login.md "Login") | Get the login of the client for whom the daily report is generated. |
| [Name](imtdaily_name.md "Name") | Get and set the name of a client in the daily report |
| [Group](imtdaily_group.md "Group") | Get and set the group of a client in a daily report. |
| [Currency](imtdaily_currency.md "Currency") | Get and set the client's deposit currency in a daily report. |
| [CurrencyDigits](imtdaily_currencydigits.md "CurrencyDigits") | Get the number of digits after the decimal point in the client's deposit currency in a daily report. |
| [Company](imtdaily_company.md "Company") | Get and set the company serving the client in a daily report. |
| [EMail](imtdaily_email.md "EMail") | Get and set an email of a client in a daily report. |
| [Balance](imtdaily_balance.md "Balance") | Get and set the size of a client's balance in a daily report. |
| [Credit](imtdaily_credit.md "Credit") | Get and set the amount of a client's credit funds in a daily report. |
| [InterestRate](imtdaily_interestrate.md "InterestRate") | Get and set the size of the annual interest rate of a client in a daily report. |
| [CommissionDaily](imtdaily_commissiondaily.md "CommissionDaily") | Get and set the amount of a client's commissions for a day in a report. |
| [CommissionMonthly](imtdaily_commissionmonthly.md "CommissionMonthly") | Get and set the total amount of a client's commissions for the current month in a report. |
| [AgentDaily](imtdaily_agentdaily.md "AgentDaily") | Get and set the amount of agent commission charged for a client's trade operations for a reported day. |
| [AgentMonthly](imtdaily_agentmonthly.md "AgentMonthly") | Get and set the amount of agent commission charged for a client's trade operations for the current month. |
| [BalancePrevDay](imtdaily_balanceprevday.md "BalancePrevDay") | Get and set the value of a client's balance as of the end of the previous day. |
| [BalancePrevMonth](imtdaily_balanceprevmonth.md "BalancePrevMonth") | Get and set the value of a client's balance as of the end of the current month. |
| [EquityPrevDay](imtdaily_equityprevday.md "EquityPrevDay") | Get and set the value of a client's equity as of the end of the previous day. |
| [EquityPrevMonth](imtdaily_equityprevmonth.md "EquityPrevMonth") | Get and set the value of a client's equity as of the end of the previous trading month. |
| [Margin](imtdaily_margin.md "Margin") | Get and set the size of a client's margin in a daily report. |
| [MarginFree](imtdaily_marginfree.md "MarginFree") | Get and set a client's free margin in a daily report. |
| [MarginLevel](imtdaily_marginlevel.md "MarginLevel") | Get and set the margin level of a client in a daily report. |
| [MarginLeverage](imtdaily_marginleverage.md "MarginLeverage") | Get and set the margin leverage of a client in a daily report. |
| [Profit](imtdaily_profit.md "Profit") | Get and set the size of the current profit for all open positions of a client in a daily report. |
| [ProfitStorage](imtdaily_profitstorage.md "ProfitStorage") | Get and set the current size of swaps charged for a client's open positions for a day, but not yet reflected in the balance. |
| [ProfitCommission](imtdaily_profitcommission.md "ProfitCommission") | Get and set the current unfixed commission of a client in a daily report. The field is deprecated and is no longer used. |
| [ProfitEquity](imtdaily_profitequity.md "ProfitEquity") | Get and set the amount of the current floating equity of a client in a daily report. |
| [ProfitAssets](imtdaily_profitassets.md "ProfitAssets") | Get and set the current amount of client assets in a daily report. |
| [ProfitLiabilities](imtdaily_profitliabilities.md "ProfitLiabilities") | Get and set the current amount of client liabilities in a daily report. |
| [DailyProfit](imtdaily_dailyprofit.md "DailyProfit") | Get and set the amount of a client's daily profit. |
| [DailyBalance](imtdaily_dailybalance.md "DailyBalance") | Get and set the amount accrued to a client's balance during the reported day. |
| [DailyCredit](imtdaily_dailycredit.md "DailyCredit") | Get and set the amount of credit given to a client during the reported day. |
| [DailyCharge](imtdaily_dailycharge.md "DailyCharge") | Get and set the amount of other charges from the client's balance during the reported day. |
| [DailyCorrection](imtdaily_dailycorrection.md "DailyCorrection") | Get and set the amount of corrective balance operations for a reported day. |
| [DailyBonus](imtdaily_dailybonus.md "DailyBonus") | Gets and sets the amount of bonuses added to the client's balance for the reported day. |
| [DailyStorage](imtdaily_dailystorage.md "DailyStorage") | Get and set the amount of swaps calculated for the client for a reported day. |
| [DailyCommInstant](imtdaily_dailycomminstant.md "DailyCommInstant") | Get and set the amount of instant commissions charged from the client for a reported day. |
| [DailyCommRound](imtdaily_dailycommround.md "DailyCommRound") | Get and set the amount of turnover commissions charged from the client for a reported day. |
| [DailyCommFee](imtdaily_dailycommfee.md "DailyCommFee") | Get and set the fee amount charged for the client's deals for the reported day. |
| [DailyDividend](imtdaily_dailydividend.md "DailyDividend") | Get and set the amount of dividends accrued to the client for a reported day. |
| [DailyTaxes](imtdaily_dailytaxes.md "DailyTaxes") | Get and set the amount of taxes withheld from the client's funds for the reported day. |
| [DailySOCompensation](imtdaily_dailysocompensation.md "DailySOCompensation") | Get and set the amount of negative balance compensation accrued to the client for a reported day. |
| [DailySOCompensationCredit](imtdaily_dailysocompensationcredit.md "DailySOCompensationCredit") | Get and set the amount of credit funds withdrawn from the account during the reported day as a result of a negative balance compensation operation. |
| [DailyAgent](imtdaily_dailyagent.md "DailyAgent") | Get and set the amount of agent commission charged for a client's trade operations for a reported day. |
| [DailyInterest](imtdaily_dailyinterest.md "DailyInterest") | Get and set the amount accrued to a client as part of the annual interest rate for the reported day. |
| [PositionAdd](imtdaily_positionadd.md "PositionAdd") | Add a trade position to the daily report. |
| [PositionUpdate](imtdaily_positionupdate.md "PositionUpdate") | Modify a trade position in a daily report by its index. |
| [PositionDelete](imtdaily_positiondelete.md "PositionDelete") | Delete a trade position from a daily report by its index. |
| [PositionClear](imtdaily_positionclear.md "PositionClear") | Clear the list of positions in a daily report. |
| [PositionShift](imtdaily_positionshift.md "PositionShift") | Move a trade position in the list. |
| [PositionTotal](imtdaily_positiontotal.md "PositionTotal") | Get the umber of trade position in the daily report. |
| [PositionNext](imtdaily_positionnext.md "PositionNext") | Get a trade position by the index. |
| [PositionGet](imtdaily_positionget.md "PositionGet") | Get a trade position by the symbol name. |
| [OrderAdd](imtdaily_orderadd.md "OrderAdd") | Add a trade order to the daily report. |
| [OrderUpdate](imtdaily_orderupdate.md "OrderUpdate") | Modify a trade order in a daily report by its index. |
| [OrderDelete](imtdaily_orderdelete.md "OrderDelete") | Delete a trade order from a daily report by its index. |
| [OrderClear](imtdaily_orderclear.md "OrderClear") | Clear the list of orders in a daily report. |
| [OrderShift](imtdaily_ordershift.md "OrderShift") | Move a trade order in the list. |
| [OrderTotal](imtdaily_ordertotal.md "OrderTotal") | Get the umber of trade orders in the daily report. |
| [OrderNext](imtdaily_ordernext.md "OrderNext") | Get a trade order by the index. |
| [OrderGet](imtdaily_orderget.md "OrderGet") | Get a trade order by a ticket. |