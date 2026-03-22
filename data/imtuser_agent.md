# Agent (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUser ](imtuser.md "IMTUser")/ Agent | [](imtuser_commissionagentmonthly.md "CommissionAgentMonthly") [](imtuser_balance.md "Balance") |
| --- | --- | --- |
| --- | --- |

IMTUser::Agent
Get the number of a client's agent account.
C++
UINT64 IMTUser::Agent() const  
---  
.NET (Gateway/Manager API)
ulong CIMTUser.Agent()  
---  
Return Value
Agent account number.
IMTUser::Agent
Set the number of a client's agent account.
C++
MTAPIRES IMTUser::Agent( const UINT64 agent // Agent account )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTUser.Agent( ulong agent // Agent account )  
---  
Parameters
agent
[in] The number of an agent account.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.