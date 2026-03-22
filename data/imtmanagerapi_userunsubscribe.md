# UserUnsubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Users ](imtmanagerapi_user.md "User Functions")/ UserUnsubscribe | [](imtmanagerapi_usersubscribe.md "UserSubscribe") [](imtmanagerapi_useradd.md "UserAdd") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::UserUnsubscribe
Unsubscribe from events associated with changes in the client base.
C++
MTAPIRES IMTManagerAPI::UserUnsubscribe( IMTUserSink* sink // A pointer to the IMTUserSink object )  
---  
.NET
MTRetCode CIMTManagerAPI.UserUnsubscribe( CIMTUserSink obj // CIMTUserSink object )  
---  
Python
ManagerAPI.UserUnsubscribe( sink # IMTUserSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTUserSink](imtusersink.md "IMTUserSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTManagerAPI::UserSubscribe](imtmanagerapi_usersubscribe.md "UserSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.