# OnUserSync (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUserSink ](imtusersink.md "IMTUserSink")/ OnUserSync | [](imtusersink_onuserchangepassword.md "OnUserChangePassword") [](imtusersink_onuserarchive.md "OnUserArchive") |
| --- | --- | --- |
| --- | --- |

IMTUserSink::OnUserSync
A handler of the event of the account base synchronization.
C++
virtual void IMTUserSink::OnUserSync()  
---  
.NET (Gateway/Manager API)
virtual void CIMTUserSink.OnUserSync()  
---  
Note
The handler is used only in [Gateway API](imtgatewayapi_usersubscribe.md "UserSubscribe") and [Manager API](imtmanagerapi_usersubscribe.md "UserSubscribe"). It is called after the synchronization of the user databases between API and the trade server. If multiple trade servers are used in the platform, the handler is called several times — after synchronizing with each of them.