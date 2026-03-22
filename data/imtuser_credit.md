# Credit (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUser ](imtuser.md "IMTUser")/ Credit | [](imtuser_equityprevmonth.md "EquityPrevMonth") [](imtuser_limitorders.md "LimitOrders") |
| --- | --- | --- |
| --- | --- |

IMTUser::Credit
Get the current amount of funds credited to a client.
C++
double IMTUser::Credit() const  
---  
.NET (Gateway/Manager API)
double CIMTUser.Credit()  
---  
Return Value
The current amount of funds credited to the client.
Note
Client's credit funds are the total sum of all operations of the "Credit" ([EnDealAction::DEAL_CREDIT](imtdeal_enum.htm#endealaction)) and "Bonus" ([EnDealAction::DEAL_BONUS](imtdeal_enum.htm#endealaction)).