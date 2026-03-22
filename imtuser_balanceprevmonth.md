# BalancePrevMonth (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUser ](imtuser.md "IMTUser")/ BalancePrevMonth | [](imtuser_balanceprevtday.md "BalancePrevDay") [](imtuser_equityprevday.md "EquityPrevDay") |
| --- | --- | --- |
| --- | --- |

IMTUser::BalancePrevMonth
Get the value of a client's balance as of the end of the previous trading month.
C++
double IMTUser::BalancePrevMonth()  
---  
.NET (Gateway/Manager API)
double CIMTUser.BalancePrevMonth()  
---  
Return Value
A client's balance as of the end of the previous trading month.
Note
The trade server updates the field value when switching to the next trading month ([IMTConServerTrade::OvermonthMode](imtconservertrade_overnighttime.md "OvernightTime")). No update is performed for demo accounts from groups for which the generation of daily reports is disabled ([IMTConGroup::REPORTS_DISABLED](imtcongroup_enum.htm#enreportsmode)).