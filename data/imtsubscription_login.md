# Login (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Subscriptions ](reference_subscription.md "Subscriptions") / [ IMTSubscription ](imtsubscription.md "IMTSubscription")/ Login | [](imtsubscription_id.md "ID") [](imtsubscription_subscription.md "Subscription") |
| --- | --- | --- |
| --- | --- |

IMTSubscription::Login
Get the login of the client to whom the subscription belongs.
C++
UINT64 IMTSubscription::Login() const  
---  
.NET (Gateway/Manager API)
ulong CIMTSubscription.Login()  
---  
Return Value
The login of the client ([IMTUser::Login](imtuser_login.md "Login")) to whom the subscription belongs.
IMTSubscription::Login
Set the login of the client to whom the subscription belongs.
C++
MTAPIRES IMTSubscription::Login( const UINT64 login // Login )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTSubscription.Login( ulong login // Login )  
---  
Parameters
login
[in] The login of the client ([IMTUser::Login](imtuser.md "IMTUser")) to whom the subscription belongs.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.