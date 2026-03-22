# InterestRate (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUser ](imtuser.md "IMTUser")/ InterestRate | [](imtuser_leadcampaign.md "LeadCampaign") [](imtuser_commissiondaily.md "CommissionDaily") |
| --- | --- | --- |
| --- | --- |

IMTUser::InterestRate
Get the amount accrued for the current month calculated based on the annual interest rate.
C++
double IMTUser::InterestRate() const  
---  
.NET (Gateway/Manager API)
double CIMTUser.InterestRate()  
---  
Return Value
The amount accrued for the current month calculated based on the annual interest rate.
Note
The interest is calculated every day, but the amount is accrued once at the end of the month.