# Interface of End-of-Day Events (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API")/ Interface of End-of-Day Events | [](imttradesink_hooktradesplit.md "HookTradeSplit") [](imtendofdaysink_oneodstart.md "OnEODStart") |
| --- | --- | --- |
| --- | --- |

Interface of End-of-Day Events IMTEndOfDaySink
This interface allows to monitor events associated with operations performed on a trade server at the end of the trading day/month. The interface includes the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [OnEODStart](imtendofdaysink_oneodstart.md "OnEODStart") | A handler of the event of start of operations associated with the end of the trading day. |
| [OnEODGroupStart](imtendofdaysink_oneodgroupstart.md "OnEODGroupStart") | A handler of the event of start of operations associated with the end of the trading day for the specified group. |
| [OnEODGroupCommission](imtendofdaysink_oneodgroupcommissions.md "OnEODGroupCommissions") | A handler of the event of start of commission charging for the specified group at the end of the trading day. |
| [OnEODGroupInterest](imtendofdaysink_oneodgroupinterest.md "OnEODGroupInterest") | A handler of the event of start of annual interest charging for the specified group at the end of the trading day. |
| [OnEODGroupStatements](imtendofdaysink_oneodgroupstatements.md "OnEODGroupStatements") | A handler of the event of start of daily report generation for the specified group at the end of the trading day. |
| [OnEODGroupRollovers](imtendofdaysink_oneodgrouprollovers.md "OnEODGroupRollovers") | A handler of the event of start of rollover charging for the specified group at the end of the trading day. |
| [OnEODGroupFinish](imtendofdaysink_oneodgroupfinish.md "OnEODGroupFinish") | A handler of the event of completion of operations associated with the end of the trading day for the specified group. |
| [OnEODFinish](imtendofdaysink_oneodfinish.md "OnEODFinish") | A handler of the event of completion of operations associated with the end of the trading day. |
| [OnEOMStart](imtendofdaysink_oneomstart.md "OnEOMStart") | A handler of the event of start of operations associated with the end of the trading month. |
| [OnEOMGroupStart](imtendofdaysink_oneomgroupstart.md "OnEOMGroupStart") | A handler of the event of start of operations associated with the end of the trading month for the specified group. |
| [OnEOMGroupCommission](imtendofdaysink_oneomgroupcommissions.md "OnEOMGroupCommissions") | A handler of the event of start of commission charging for the specified group at the end of the trading month. |
| [OnEOMGroupInterest](imtendofdaysink_oneomgroupinterest.md "OnEOMGroupInterest") | A handler of the event of start of annual interest charging for the specified group at the end of the trading month. |
| [OnEOMGroupStatements](imtendofdaysink_oneomgroupstatements.md "OnEOMGroupStatements") | A handler of the event of start of daily report generation for the specified group at the end of the trading month. |
| [OnEOMGroupFinish](imtendofdaysink_oneomgroupfinish.md "OnEOMGroupFinish") | A handler of the event of completion of operations associated with the end of the trading month for the specified group. |
| [OnEOMFinish](imtendofdaysink_oneomfinish.md "OnEOMFinish") | A handler of the event of completion of operations associated with the end of the trading month. |

  * It is not guaranteed, that the end-of-day/month events occur in the order shown here.
  * At the time of operations associated with the end of a trading day/month, the trading state of the group (accounts in it) is blocked.

  
---  
The order of end-of-day/month service operations
The order of operations depends on the report generation mode: at the end or at the beginning of the day ([IMTConServerTrade::EnOvernightMode](imtconservertrade_enum.htm#enovernightmode)). The performed actions also depend on whether the end of the trading day (as determined by the schedule [IMTConServerTrade::OvernightDays](imtconservertrade_overnightdays.md "OvernightDays")) and end of month (as determined by the actual end of month) fall on this day.
When generating reports at the end of the day:
| Condition | Operation |
| --- | --- |
| --- | --- |
| If there is end of the trading day | 1\. Beginning of the 'end of day' at the time of [IMTConServerTrade::OvernightTime](imtconservertrade_overnighttime.md "OvernightTime"), the [IMTEndOfDaySink::OnEODStart](imtendofdaysink_oneodstart.md "OnEODStart") event call |
| If there is end of the month | 2\. Beginning of the 'end of month' at the time of [IMTConServerTrade::OvernightTime](imtconservertrade_overnighttime.md "OvernightTime"), the [IMTEndOfDaySink::OnEOMStart](imtendofdaysink_oneomstart.md "OnEOMStart") event call |
| 3\. Beginning of operations for each group: |
| If there is end of the trading day | 4\. [IMTEndOfDaySink::OnEODGroupStart](imtendofdaysink_oneodgroupstart.md "OnEODGroupStart") event call |
| If there is end of the trading day | 5\. Calculation and settlement of commissions (including agent commission) with the [IMTConCommission::COMM_CHARGE_DAILY](imtconcommission_enum.htm#encommchargemode) calculation mode |
| If there is end of the trading day | 6\. [IMTEndOfDaySink::OnEODGroupCommissions](imtendofdaysink_oneodgroupcommissions.md "OnEODGroupCommissions") event call |
| If there is end of the month | 7\. [IMTEndOfDaySink::OnEOMGroupStart](imtendofdaysink_oneomgroupstart.md "OnEOMGroupStart") event call |
| If there is end of the month | 8\. Calculation and settlement of commissions (including agent commission) with the [IMTConCommission::COMM_CHARGE_MONTHLY](imtconcommission_enum.htm#encommchargemode) calculation mode |
| If there is end of the month | 9\. [IMTEndOfDaySink::OnEOMGroupCommissions](imtendofdaysink_oneomgroupcommissions.md "OnEOMGroupCommissions") event call |
| If there is end of the trading day | 10\. Calculation of interest on available funds and saving them in the client record |
| If there is end of the trading day | 11\. [IMTEndOfDaySink::OnEODGroupInterest](imtendofdaysink_oneodgroupinterest.md "OnEODGroupInterest") event call |
| If there is end of the month | 12\. Calculation and of the accumulated interest on available funds and depositing it to the balance |
| If there is end of the month | 13\. [IMTEndOfDaySink::OnEOMGroupInterest](imtendofdaysink_oneomgroupinterest.md "OnEOMGroupInterest") event call |
| If there is end of the trading day | 14\. Daily report generation, [IMTDailySink::OnDailyAdd](imtdailysink_ondailyadd.md "OnDailyAdd") event call, if record generation was performed |
| If there is end of the trading day | 15\. [IMTEndOfDaySink::OnEODGroupStatements](imtendofdaysink_oneodgroupstatements.md "OnEODGroupStatements") event call |
| If there is end of the trading day | 16\. Updating of the previous day balances (used in daily/monthly reports) |
| If there is end of the trading day | 17\. [IMTEndOfDaySink::OnEODGroupFinish](imtendofdaysink_oneodgroupfinish.md "OnEODGroupFinish") event call |
| If there is end of the month | 18\. Generation of monthly reports |
| If there is end of the month | 19\. [IMTEndOfDaySink::OnEOMGroupStatements](imtendofdaysink_oneomgroupstatements.md "OnEOMGroupStatements") event call |
| If there is end of the month | 20\. Update of previous month balances (used in daily/monthly reports) |
| If there is end of the month | 21\. [IMTEndOfDaySink::OnEOMGroupFinish](imtendofdaysink_oneomgroupfinish.md "OnEOMGroupFinish") event calls |
| If there is end of the trading day | 22\. Calculation of swaps |
| If there is end of the trading day | 23\. [IMTEndOfDaySink::OnEODGroupRollovers](imtendofdaysink_oneodgrouprollovers.md "OnEODGroupRollovers") event call |
| 24\. End of operations for each group |
| If there is end of the trading day | 25\. [IMTEndOfDaySink::OnEODFinish](imtendofdaysink_oneodfinish.md "OnEODFinish") event call |
| If there is end of the month | 26\. [IMTEndOfDaySink::OnEOMFinish](imtendofdaysink_oneomfinish.md "OnEOMFinish") event call |

When generating reports at the beginning of the day:
| Condition | Operation |
| --- | --- |
| --- | --- |
| If there is end of the trading day | 1\. Beginning of the 'end of day' at the time of [IMTConServerTrade::OvernightTime](imtconservertrade_overnighttime.md "OvernightTime"), the [IMTEndOfDaySink::OnEODStart](imtendofdaysink_oneodstart.md "OnEODStart") event call |
| If there is end of the month | 2\. Beginning of the 'end of month' at the time of [IMTConServerTrade::OvernightTime](imtconservertrade_overnighttime.md "OvernightTime"), the [IMTEndOfDaySink::OnEOMStart](imtendofdaysink_oneomstart.md "OnEOMStart") event call |
| 3\. Beginning of operations for each group: |
| If there is end of the trading day | 4\. [IMTEndOfDaySink::OnEODGroupStart](imtendofdaysink_oneodgroupstart.md "OnEODGroupStart") event call |
| If there is end of the trading day | 5\. Calculation and settlement of commissions (including agent commission) with the [IMTConCommission::COMM_CHARGE_DAILY](imtconcommission_enum.htm#encommchargemode) calculation mode |
| If there is end of the trading day | 6\. [IMTEndOfDaySink::OnEODGroupCommissions](imtendofdaysink_oneodgroupcommissions.md "OnEODGroupCommissions") event call |
| If there is end of the month | 7\. [IMTEndOfDaySink::OnEOMGroupStart](imtendofdaysink_oneomgroupstart.md "OnEOMGroupStart") event call |
| If there is end of the month | 8\. Calculation and settlement of commissions (including agent commission) with the [IMTConCommission::COMM_CHARGE_MONTHLY](imtconcommission_enum.htm#encommchargemode) calculation mode |
| If there is end of the month | 9\. [IMTEndOfDaySink::OnEOMGroupCommissions](imtendofdaysink_oneomgroupcommissions.md "OnEOMGroupCommissions") event call |
| If there is end of the trading day | 10\. Calculation of interest on available funds and saving them in the client record |
| If there is end of the trading day | 11\. [IMTEndOfDaySink::OnEODGroupInterest](imtendofdaysink_oneodgroupinterest.md "OnEODGroupInterest") event call |
| If there is end of the month | 12\. Calculation and of the accumulated interest on available funds and depositing it to the balance |
| If there is end of the month | 13\. [IMTEndOfDaySink::OnEOMGroupInterest](imtendofdaysink_oneomgroupinterest.md "OnEOMGroupInterest") event call |
| If there is end of the trading day | 14\. Calculation of swaps |
| If there is end of the trading day | 15\. [IMTEndOfDaySink::OnEODGroupRollovers](imtendofdaysink_oneodgrouprollovers.md "OnEODGroupRollovers") event call |
| If there is end of the trading day | 16\. Daily report generation, [IMTDailySink::OnDailyAdd](imtdailysink_ondailyadd.md "OnDailyAdd") event call, if record generation was performed |
| If there is end of the trading day | 17\. [IMTEndOfDaySink::OnEODGroupStatements](imtendofdaysink_oneodgroupstatements.md "OnEODGroupStatements") event call |
| If there is end of the trading day | 18\. Updating of the previous day balances (used in daily/monthly reports) |
| If there is end of the trading day | 19\. [IMTEndOfDaySink::OnEODGroupFinish](imtendofdaysink_oneodgroupfinish.md "OnEODGroupFinish") event call |
| If there is end of the month | 20\. Generation of monthly reports |
| If there is end of the month | 21\. [IMTEndOfDaySink::OnEOMGroupStatements](imtendofdaysink_oneomgroupstatements.md "OnEOMGroupStatements") event call |
| If there is end of the month | 22\. Update of previous month balances (used in daily/monthly reports) |
| If there is end of the month | 23\. [IMTEndOfDaySink::OnEOMGroupFinish](imtendofdaysink_oneomgroupfinish.md "OnEOMGroupFinish") event calls |
| 24\. End of operations for each group |
| If there is end of the trading day | 25\. [IMTEndOfDaySink::OnEODFinish](imtendofdaysink_oneodfinish.md "OnEODFinish") event call |
| If there is end of the month | 26\. [IMTEndOfDaySink::OnEOMFinish](imtendofdaysink_oneomfinish.md "OnEOMFinish") event call |