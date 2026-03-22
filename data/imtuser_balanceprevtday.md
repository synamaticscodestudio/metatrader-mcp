# BalancePrevDay (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUser ](imtuser.md "IMTUser")/ BalancePrevDay | [](imtuser_balance.md "Balance") [](imtuser_balanceprevmonth.md "BalancePrevMonth") |
| --- | --- | --- |
| --- | --- |

IMTUser::BalancePrevDay
Get the value of a client's balance as of the end of the previous day.
C++
double IMTUser::BalancePrevDay()  
---  
.NET (Gateway/Manager API)
double CIMTUser.BalancePrevDay()  
---  
Return Value
A client's balance as of the end of the previous day.
Note
The trade server updates the field value when switching to the next trading day ([IMTConServerTrade::OvernightTime](imtconservertrade_overnighttime.md "OvernightTime")). No update is performed for demo accounts from groups for which the generation of daily reports is disabled ([IMTConGroup::REPORTS_DISABLED](imtcongroup_enum.htm#enreportsmode)).