# EquityPrevDay (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUser ](imtuser.md "IMTUser")/ EquityPrevDay | [](imtuser_balanceprevmonth.md "BalancePrevMonth") [](imtuser_equityprevmonth.md "EquityPrevMonth") |
| --- | --- | --- |
| --- | --- |

IMTUser::EquityPrevDay
Get the value of a client's equity as of the end of the previous day.
C++
double IMTUser::EquityPrevDay()  
---  
.NET (Gateway/Manager API)
double CIMTUser.EquityPrevDay()  
---  
Return Value
A client's equity as of the end of the previous day.
Note
The trade server updates the field value when switching to the next trading day ([IMTConServerTrade::OvernightTime](imtconservertrade_overnighttime.md "OvernightTime")). No update is performed for demo accounts from groups for which the generation of daily reports is disabled ([IMTConGroup::REPORTS_DISABLED](imtcongroup_enum.htm#enreportsmode)).