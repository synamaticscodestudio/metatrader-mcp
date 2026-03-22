# VisitorID (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUser ](imtuser.md "IMTUser")/ VisitorID | [](imtuser_clientid.md "ClientID") [](imtuser_status.md "Status") |
| --- | --- | --- |
| --- | --- |

IMTUser::VisitorID
Get a unique identifier assigned to a user when he/she installs your terminal or visits your site, if a [Finteza](https://support.metaquotes.net/en/docs/mt5/platform/administration/integration/integration_finteza) tracker is installed in it.
C++
UINT64 IMTUser::VisitorID() const  
---  
.NET (Manager API)
ulong CIMTUser.VisitorID()  
---  
Return Value
Unique identifier of a visitor.
Note
With VisitorID, you can trace trader behavior from the first website visit to a real account deposit.
The method is supported in Server API, Report API and Manager API.